"use client";

import DashboardLayout from "@/components/DashboardLayout";
import PatientTable from "@/components/PatientTable";

const PatientPage = () => {
  return (
    <DashboardLayout>
      <main className="p-6 space-y-6">
        <h1 className="text-lg font-bold">Patients List</h1>
        <PatientTable />
      </main>
    </DashboardLayout>
  );
};

export default PatientPage;
