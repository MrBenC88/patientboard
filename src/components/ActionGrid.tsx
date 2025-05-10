import { ActionItem } from "@/shared/types";
import HomeActionButton from "./HomeActionButton";

const ActionGrid = ({
  actions,
  disabled = false,
}: {
  actions: ActionItem[];
  disabled?: boolean;
}) => (
  <div
    className={`grid grid-cols-1 lg:grid-cols-3 gap-4 ${
      disabled ? "opacity-50 cursor-not-allowed select-none" : ""
    }`}
  >
    {actions.map((action) => (
      <HomeActionButton key={action.title} {...action} disabled={disabled} />
    ))}
  </div>
);

export default ActionGrid;
