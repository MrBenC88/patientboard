import { LucideIcon } from "lucide-react";
import Link from "next/link";

const HomeActionButton = ({
  title,
  description,
  url,
  icon: Icon,
  disabled = false,
}: {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  disabled?: boolean;
}) => {
  const content = (
    <div
      className={`rounded-2xl border bg-white p-6 shadow-sm text-center space-y-2 transition-all ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-md hover:border-gray-300 cursor-pointer"
      }`}
    >
      <Icon className="mx-auto h-6 w-6 text-blue-500" />
      <div className="text-lg font-medium">{title}</div>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );

  return disabled ? content : <Link href={url}>{content}</Link>;
};
export default HomeActionButton;
