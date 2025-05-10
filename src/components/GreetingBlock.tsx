import Link from "next/link";
import { HomeIcon, SettingsIcon } from "lucide-react";
import { formatDateTime } from "@/shared/utils";
import { motion } from "framer-motion";

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
          <h1 className="text-4xl font-bold text-gray-800">{greeting}👋</h1>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1 text-xs text-gray-600 shadow-inner">
            {formatDateTime()}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/">
            <button
              aria-label="Back to home"
              className="rounded-full border bg-white p-2 hover:bg-gray-100 transition"
            >
              <HomeIcon className="w-5 h-5 text-gray-600" />
            </button>
          </Link>
          <Link href="/">
            <button
              aria-label="Back to home"
              className="rounded-full border bg-white p-2 hover:bg-gray-100 transition"
            >
              <SettingsIcon className="w-5 h-5 text-gray-600" />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GreetingBlock;
