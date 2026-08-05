import AppRoutes from "@/routes/AppRoutes";
import { AuthProvider } from "@/store/authStore";

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
