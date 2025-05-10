import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const PatientTableFilter = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <Select value={value} onValueChange={onChange}>
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
);

export default PatientTableFilter;
