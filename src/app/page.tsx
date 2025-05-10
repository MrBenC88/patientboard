"use client";

import Link from "next/link";
import {
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ArchiveIcon,
  FileTextIcon,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

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

const basicActions: ActionItem[] = [
  {
    title: "Add Patient",
    description: "Create a new patient record",
    url: "/patients/new",
    icon: PlusIcon,
  },
  {
    title: "Browse Patients",
    description: "Browse patient records",
    url: "/patients",
    icon: SearchIcon,
  },
  {
    title: "Manage Patient",
    description: "Manage existing patient records",
    url: "#",
    icon: FileTextIcon,
  },
];

const adminActions: ActionItem[] = [
  {
    title: "Manage Practitioners",
    description: "Coming soon",
    url: "#",
    icon: SettingsIcon,
  },
  {
    title: "Patient Archive",
    description: "Historical records",
    url: "#",
    icon: ArchiveIcon,
  },
  {
    title: "Billing & Forms",
    description: "Insurance & documents",
    url: "#",
    icon: FileTextIcon,
  },
];

type ActionItem = {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
};
