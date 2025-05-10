import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Patient } from "@/lib/schemas/patient";

const PatientDetailModal = ({
  patient,
  onClose,
}: {
  patient: Patient | null;
  onClose: () => void;
}) => (
  <Dialog open={!!patient} onOpenChange={onClose}>
    {patient && (
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Patient Details: {patient.firstName} {patient.lastName}
          </DialogTitle>
          <DialogDescription>
            <p>
              <strong>First Name:</strong> {patient.firstName}
            </p>
            <p>
              <strong>Middle Name:</strong> {patient.middleName ?? "-"}
            </p>
            <p>
              <strong>Last Name:</strong> {patient.lastName}
            </p>
            <p>
              <strong>DOB:</strong> {patient.dob}
            </p>
            <p>
              <strong>Status:</strong> {patient.status}
            </p>
            <p>
              <strong>Address:</strong> {patient.address}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    )}
  </Dialog>
);

export default PatientDetailModal;
