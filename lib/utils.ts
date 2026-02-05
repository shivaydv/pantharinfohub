import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const carrerFormValidation = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters"),
  user_phone: z.string().min(10, "Phone number must be at least 10 digits"),
  user_mail: z.string().email("Invalid email address"),
  user_linkedin: z.string().url("Invalid LinkedIn URL"),
  user_github: z.string().url("Invalid GitHub URL"),
  user_resume: z.string().url("Invalid Drive link URL"),
})

export const parseServerResponse = (response: any) => {
  return JSON.parse(JSON.stringify(response))
}
