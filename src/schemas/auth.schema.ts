import { z } from 'zod'

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be more than 8 characters'),
})

const signupSchema = z
  .object({
    fullName: z.string().min(5),
    email: z.email(),
    password: z.string().min(8, ''),
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    error: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export { loginSchema, signupSchema }
