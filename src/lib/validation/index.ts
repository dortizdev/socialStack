import * as z from "zod"

export const SignupValidator = z.object({
    name: z.string().min(2,{ message: 'Name too short'}).max(50),
    username: z.string().min(2,{ message: 'Username too short'}).max(50),
    email: z.string().email(),
    password: z.string().min(10,{ message: 'Password must be at least 10 characters'}).max(50),
  })