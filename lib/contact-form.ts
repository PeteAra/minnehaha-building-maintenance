/**
 * Contact form submission handler.
 *
 * Wire up when ready to go live. Example providers:
 * - Web3Forms: POST to https://api.web3forms.com/submit with access_key
 * - Formspree: POST to https://formspree.io/f/{form_id}
 * - Resend: use a Next.js API route
 */

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function submitContactForm(
  data: ContactFormPayload
): Promise<{ success: boolean }> {
  // Deferred: replace with real provider integration
  console.info("[ContactForm] Submission deferred:", data);
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { success: true };
}
