// Shared types/constants for the contact form. Kept out of the "use server"
// action file, which may only export async functions.

/** Shared state shape for the contact and careers forms. */
export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level validation errors, keyed by input name. */
  errors?: Record<string, string>;
};

export const initialContactState: ContactState = { status: "idle", message: "" };
