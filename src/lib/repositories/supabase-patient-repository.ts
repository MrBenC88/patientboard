import { PatientRepository } from "./patient-repository";
import { supabase } from "@/lib/supabase";
import { Patient } from "@/lib/schemas/patient";

export const supabasePatientRepository: PatientRepository = {
  async getPatients() {
    const { data, error } = await supabase.from("patients").select("*");
    if (error) throw error;
    return data as Patient[];
  },
  async createPatient(data) {
    const { error } = await supabase.from("patients").insert(data);
    if (error) throw error;
  },
};
