import { BrevoClient } from "@getbrevo/brevo";

console.log("BREVO KEY EXISTS:", !!process.env.BREVO_API_KEY);
console.log("BREVO KEY PREFIX:", process.env.BREVO_API_KEY?.substring(0, 10));

const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  throw new Error("BREVO_API_KEY is not configured");
}

const brevo = new BrevoClient({
  apiKey,
});

export default brevo;
