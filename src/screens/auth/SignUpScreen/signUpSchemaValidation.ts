import { stringsUtils } from '@utils';
import { z } from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchemaValidation = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  firstName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(stringsUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(5, 'nome muito curto')
    .max(50, 'nome muito longo')
    .transform(stringsUtils.capitalizeFirstLetter),
  email: z.string().email('email inválido'),
  password: z
    .string()
    .min(8, 'senha deve ter pelo menos no minimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchemaValidation>;
