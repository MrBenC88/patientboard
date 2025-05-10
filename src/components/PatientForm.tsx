"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { patientSchema, Patient } from "@/lib/schemas/patient";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePatientController } from "@/app/patients/usePatientController";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const statusOptions = [
  { value: "Inquiry", label: "Inquiry" },
  { value: "Onboarding", label: "Onboarding" },
  { value: "Active", label: "Active" },
  { value: "Churned", label: "Churned" },
];

const formLabels: { fieldName: keyof Patient; label: string }[] = [
  { fieldName: "firstName", label: "First Name" },
  { fieldName: "middleName", label: "Middle Name" },
  { fieldName: "lastName", label: "Last Name" },
  { fieldName: "address", label: "Address" },
];

const PatientForm = () => {
  const form = useForm<z.infer<typeof patientSchema>>({
    resolver: zodResolver(patientSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      status: undefined,
      address: "",
    },
  });
  const { createPatient } = usePatientController();

  const onSubmit = async (data: Patient) => {
    try {
      await createPatient(data);
      toast.success("Patient created");
      form.reset({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        status: undefined,
        address: "",
      });
    } catch {
      toast.error("Error creating patient");
    }
  };
  return (
    <div className="flex items-center justify-center bg-gray-20">
      <div className="w-full max-w-xl rounded-lg border border-gray-300 bg-white p-6 shadow-md">
        <h2 className="text-lg font-bold mb-2">Add Patient</h2>
        <p className="text-sm text-gray-500 mb-4">
          Fill in the details below to add a new patient.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {formLabels.map(({ fieldName, label }) => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            {/* Date of Birth Field */}
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Status Dropdown */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem value={option.value} key={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Add Patient</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PatientForm;
