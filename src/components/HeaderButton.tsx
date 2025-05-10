import { LucideIcon } from "lucide-react";
import Link from "next/link";

const HeaderButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) => (
  <Link href={href}>
    <button
      aria-label={label}
      className="p-2 border rounded-full bg-white hover:bg-gray-100 transition"
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  </Link>
);

export default HeaderButton;
