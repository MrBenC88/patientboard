import { Patient } from "@/lib/schemas/patient";

export interface PatientRepository {
  getPatients(): Promise<Patient[]>;
  createPatient(data: Patient): Promise<void>;
}
