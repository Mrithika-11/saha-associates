import { BrevoClient } from "@getbrevo/brevo";

console.log("BREVO KEY EXISTS:", !!process.env.BREVO_API_KEY);
console.log("BREVO KEY PREFIX:", process.env.BREVO_API_KEY?.substring(0, 10));

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export default brevo;
