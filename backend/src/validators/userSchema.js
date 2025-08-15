import { z } from 'zod';

export const userSignUpSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
});
