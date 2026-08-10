import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import routes from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(helmet());
app.use(compression());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://saha-associates.onrender.com",
      "https://sahaassociates.co",
      "https://www.sahaassociates.co",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

app.use("/api", apiLimiter);

app.get("/health", (_req, res) => res.json({ status: "ok" }));

// ✅ Register routes BEFORE error handlers

app.use("/api", routes);

// ✅ Error handlers LAST
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
