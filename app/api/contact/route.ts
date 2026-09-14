import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { NextResponse } from "next/server";

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isValidPayload(body: unknown): body is ContactFormPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.subject === "string" &&
    typeof data.message === "string" &&
    data.name.trim().length > 0 &&
    data.message.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  );
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error(
      "[ContactForm] Missing WEB3FORMS_ACCESS_KEY. Create a key at https://web3forms.com for",
      CONTACT_EMAIL
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "The contact form is not configured yet. Please call us or email info@minnehahainc.com.",
      },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: body.name.trim(),
      email: body.email.trim(),
      subject:
        body.subject.trim() ||
        `New commercial quote request from ${body.name.trim()}`,
      message: body.message.trim(),
      from_name: SITE_NAME,
      replyto: body.email.trim(),
    }),
  });

  const result = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

  if (!response.ok || !result.success) {
    return NextResponse.json(
      {
        success: false,
        message:
          result.message ||
          "Something went wrong sending your message. Please try again or call us.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
