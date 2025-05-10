"use client";

import { useState, useEffect } from "react";
import { supabasePatientRepository } from "@/lib/repositories/supabase-patient-repository";
import { Patient } from "@/lib/schemas/patient";

export function usePatientController() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPatients = async () => {
    setLoading(true);
    const data = await supabasePatientRepository.getPatients();
    setPatients(data);
    setLoading(false);
  };

  const createPatient = async (data: Patient) => {
    await supabasePatientRepository.createPatient(data);
    fetchPatients();
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return { patients, loading, createPatient };
}
