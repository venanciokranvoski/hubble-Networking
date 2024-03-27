import { z } from "zod";

export const forgotShemaValidation = z.object({
  recover_email: z.string().email("email inválido"),
});

export type ForgotShemaValidation = z.infer<typeof forgotShemaValidation>;
