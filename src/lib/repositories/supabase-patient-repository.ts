import { PatientRepository } from "./patient-repository";
import { supabase } from "@/lib/supabase";

export const supabasePatientRepository: PatientRepository = {
  async createPatient(patient) {
    const { error } = await supabase.from("patients").insert({
      firstname: patient.firstName,
      middlename: patient.middleName ?? null,
      lastname: patient.lastName,
      dob: patient.dob,
      status: patient.status,
      address: patient.address,
    });
    if (error) throw error;
  },

  async getPatients() {
    const { data, error } = await supabase.from("patients").select("*");
    if (error) throw error;

    return data.map((p) => ({
      firstName: p.firstname,
      middleName: p.middlename,
      lastName: p.lastname,
      dob: p.dob,
      status: p.status,
      address: p.address,
    }));
  },
};
