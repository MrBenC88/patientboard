import { Patient } from "@/lib/schemas/patient";
import StatusBadge from "./StatusBadge";

const PatientTableRow = ({
  patient,
  onClick,
  key,
}: {
  patient: Patient;
  onClick: () => void;
  key: string;
}) => (
  <tr
    key={key}
    onClick={onClick}
    className="border-b cursor-pointer hover:bg-gray-100"
  >
    <td className="p-2">{patient.firstName}</td>
    <td className="p-2">{patient.middleName ?? ""}</td>
    <td className="p-2">{patient.lastName}</td>
    <td className="p-2">
      <StatusBadge status={patient.status} />
    </td>
  </tr>
);

export default PatientTableRow;
