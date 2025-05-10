"use client";

import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import ActionGrid from "@/components/ActionGrid";
import { basicActions, adminActions } from "@/shared/constants";

export default function Home() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto p-6 space-y-6"
      >
        <ActionGrid actions={basicActions} />
        <ActionGrid actions={adminActions} disabled />
      </motion.div>
    </DashboardLayout>
  );
}
