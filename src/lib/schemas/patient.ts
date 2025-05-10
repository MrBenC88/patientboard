import { z } from "zod";

export const patientSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  status: z.enum(["Inquiry", "Onboarding", "Active", "Churned"]),
  address: z.string().min(5),
});

export type Patient = z.infer<typeof patientSchema>;
