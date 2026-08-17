// Shared types/constants for the contact form. Kept out of the "use server"
// action file, which may only export async functions.

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field-level validation errors, keyed by input name. */
  errors?: Partial<Record<"name" | "email" | "service" | "message", string>>;
};

export const initialContactState: ContactState = { status: "idle", message: "" };
