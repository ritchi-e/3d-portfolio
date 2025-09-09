import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy-key-for-build");

const Email = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(5, "Message must be at least 5 characters"),
});
export async function POST(req: Request) {
  try {
    // Check if Resend API key is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "dummy-key-for-build") {
      console.log("Resend API key not configured");
      return Response.json({ error: "Email service not configured" }, { status: 503 });
    }

    const body = await req.json();
    console.log("Received body:", body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess) {
      console.log("Validation failed:", zodError?.errors);
      return Response.json({ error: zodError?.errors?.[0]?.message || "Validation failed" }, { status: 400 });
    }

    console.log("Validation passed, sending email...");
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.log("Resend error:", resendError);
      return Response.json({ error: resendError }, { status: 500 });
    }

    console.log("Email sent successfully:", resendData);
    return Response.json(resendData);
  } catch (error) {
    console.log("Catch error:", error);
    return Response.json({ error }, { status: 500 });
  }
}
