import { LucideIcon } from "lucide-react";

const SortIcon = ({
  icon: Icon,
  clickHandler,
}: {
  icon: LucideIcon;
  clickHandler: () => void;
}) => {
  return (
    <button
      className="p-2 border rounded-full bg-white hover:bg-gray-100 transition"
      onClick={clickHandler}
    >
      <Icon className="w-5 h-5 text-gray-600" />
    </button>
  );
};
export default SortIcon;
