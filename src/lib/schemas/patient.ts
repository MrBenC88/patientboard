import { z } from "zod";

export const patientSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  dob: z.string().min(1),
  status: z.enum(["Inquiry", "Onboarding", "Active", "Churned"]),
  address: z.string().min(1),
});

export type Patient = z.infer<typeof patientSchema>;
