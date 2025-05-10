import { HomeIcon, SettingsIcon } from "lucide-react";
import { formatDateTime } from "@/shared/utils";
import { motion } from "framer-motion";
import HeaderButton from "./HeaderButton";

const GreetingBlock = ({ greeting }: { greeting: string }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between"
      >
        <div className="space-y-2">
          <h1 className="text-4xl">{greeting}👋</h1>
          <div className="inline-flex items-center rounded-full border bg-white px-4 py-1 text-sm text-gray-600 shadow-inner">
            {formatDateTime()}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <HeaderButton href="/" icon={HomeIcon} label="Back to home" />
          <HeaderButton href="/" icon={SettingsIcon} label="Settings" />
        </div>
      </motion.div>
    </div>
  );
};

export default GreetingBlock;
