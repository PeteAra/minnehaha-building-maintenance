/**
 * Contact form submission via Web3Forms (browser-side).
 * Access keys are safe to expose client-side per Web3Forms docs.
 * Server-side submits from Vercel get blocked with 403.
 */

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  accessKey: string;
};

export type ContactFormResult = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  data: ContactFormPayload
): Promise<ContactFormResult> {
  if (!data.accessKey) {
    return {
      success: false,
      message:
        "The contact form is not configured yet. Please call us or email info@minnehahainc.com.",
    };
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: data.accessKey,
      name: data.name.trim(),
      email: data.email.trim(),
      subject:
        data.subject.trim() ||
        `New commercial quote request from ${data.name.trim()}`,
      message: data.message.trim(),
      from_name: "Minnehaha Building Maintenance Inc.",
      replyto: data.email.trim(),
      botcheck: false,
    }),
  });

  const result = (await response.json()) as {
    success?: boolean;
    message?: string;
  };

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
