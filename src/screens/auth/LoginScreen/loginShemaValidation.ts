import { z } from "zod";

export const loginShemaValidation = z.object({
  email: z.string().email("email inválido"),
  password: z
    .string()
    .min(8, "senha deve ter pelo menos no minimo 8 caracteres"),
});

export type LoginShemaValidation = z.infer<typeof loginShemaValidation>;
