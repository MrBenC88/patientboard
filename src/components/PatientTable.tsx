"use client";

import { usePatientController } from "@/app/patients/usePatientController";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

import { Patient } from "@/lib/schemas/patient";
import PatientTableFilter from "./PatientTableFilter";
import PatientTableRow from "./PatientTableRow";
import PatientDetailModal from "./PatientDetailModal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import SortIcon from "./SortIcon";
import { SettingsIcon } from "lucide-react";

// TODO
// - Add search
// - Add filters - more comprehensive
// DOB: 2025-05-28
// Address: Sample Address
// - Add sorting

const PatientTable = () => {
  const { patients, loading } = usePatientController();
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selected, setSelected] = useState<Patient | null>(null);

  const handleSort = ()=> {
    // sort patients by first name alphabetically
    
  }

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleDate = (date: string) => {
    setDateFilter(date);
  };

  const filterByStatus =
    statusFilter === "all"
      ? patients
      : patients.filter((p) => p.status === statusFilter);

  const filterByDate =
    dateFilter !== ""
      ? filterByStatus.filter((p) => p.dob === dateFilter)
      : filterByStatus;

  const filterPatientsWithSearch =
    searchQuery !== ""
      ? filterByDate.filter((p) => {
          const firstName = `${p.firstName}`;
          const lastName = `${p.lastName}`;
          return (
            firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lastName.toLowerCase().includes(searchQuery.toLowerCase())
          );
        })
      : filterByDate;

  const filteredPatients = filterPatientsWithSearch;

  if (loading) return <Skeleton className="h-10 w-full" />;

  return (
    <div className="overflow-x-auto">
      <PatientDetailModal
        patient={selected}
        onClose={() => setSelected(null)}
      />
      <div className="mb-4 max-w-xs">
        <PatientTableFilter value={statusFilter} onChange={setStatusFilter} />

        <div>
          <Input
            type="date"
            onChange={(e) => {
              handleDate(e.target.value);
            }}
          />
        </div>

        <Input
          type="text"
          placeholder="Enter query"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">
              First Name{" "}
              <SortIcon
                icon={SettingsIcon}
                clickHandler={handleSort}
              />
            </th>
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
