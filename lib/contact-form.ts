/**
 * Contact form submission via /api/contact (Web3Forms on the server).
 * Set WEB3FORMS_ACCESS_KEY in .env.local and Vercel (secret, not NEXT_PUBLIC_).
 */

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormResult = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  data: ContactFormPayload
): Promise<ContactFormResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as ContactFormResult;

  if (!response.ok || !result.success) {
    return {
      success: false,
      message:
        result.message ||
        "Something went wrong sending your message. Please try again or call us.",
    };
  }

  return { success: true };
}
