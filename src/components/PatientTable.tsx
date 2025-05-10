"use client";

import { usePatientController } from "@/app/patients/usePatientController";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

import { Patient } from "@/lib/schemas/patient";
import PatientTableFilter from "./PatientTableFilter";
import PatientTableRow from "./PatientTableRow";
import PatientDetailModal from "./PatientDetailModal";

const PatientTable = () => {
  const { patients, loading } = usePatientController();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Patient | null>(null);

  const filteredPatients =
    statusFilter === "all"
      ? patients
      : patients.filter((p) => p.status === statusFilter);

  if (loading) return <Skeleton className="h-10 w-full" />;

  return (
    <div className="overflow-x-auto">
      <PatientDetailModal
        patient={selected}
        onClose={() => setSelected(null)}
      />
      <div className="mb-4 max-w-xs">
        <PatientTableFilter value={statusFilter} onChange={setStatusFilter} />
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">First Name</th>
            <th className="p-2">Middle Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((p) => (
            <PatientTableRow
              key={`${p.firstName}-${p.middleName ?? "-"}-${p.lastName}-${
                p.dob
              }`}
              patient={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
