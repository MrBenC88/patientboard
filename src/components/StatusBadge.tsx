import { Badge } from "@/components/ui/badge";

const StatusBadge = ({ status }: { status: string }) => {
  let variant: "default" | "secondary" | "destructive" | "outline" =
    "destructive";

  if (status === "Active") {
    variant = "default";
  } else if (status === "Onboarding") {
    variant = "secondary";
  } else if (status === "Inquiry") {
    variant = "outline";
  }

  return <Badge variant={variant}>{status}</Badge>;
};

export default StatusBadge;
