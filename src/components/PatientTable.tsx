"use client";

import { usePatientController } from "@/app/patients/usePatientController";
import StatusBadge from "./StatusBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Patient } from "@/lib/schemas/patient";

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
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <div className="mb-4 max-w-xs">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Inquiry">Inquiry</SelectItem>
              <SelectItem value="Onboarding">Onboarding</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Churned">Churned</SelectItem>
            </SelectContent>
          </Select>
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
              <tr
                key={`${p.firstName}-${p.middleName ?? "-"}-${p.lastName}-${
                  p.dob
                }`}
                onClick={() => setSelected(p)}
                className="border-b cursor-pointer hover:bg-gray-50"
              >
                <td className="p-2">{p.firstName}</td>
                <td className="p-2">{p.middleName ?? ""}</td>
                <td className="p-2">{p.lastName}</td>
                <td className="p-2">
                  <StatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selected && (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Patient Details: {selected.firstName} {selected.lastName}
              </DialogTitle>
              <DialogDescription>
                <div className="text-sm space-y-2 mt-2 grid grid-cols-1 gap-2">
                  <div>
                    <strong>First Name: </strong>
                    {selected.firstName}
                  </div>
                  <div>
                    <strong>Middle Name: </strong>
                    {selected.middleName ?? "-"}
                  </div>
                  <div>
                    <strong>Last Name: </strong>
                    {selected.lastName}
                  </div>
                  <div>
                    <strong>DOB: </strong>
                    {selected.dob}
                  </div>
                  <div>
                    <strong>Status: </strong>
                    {selected.status}
                  </div>
                  <div>
                    <strong>Address: </strong>
                    {selected.address}
                  </div>
                </div>{" "}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default PatientTable;
