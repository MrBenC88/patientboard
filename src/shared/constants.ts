import {
  PlusIcon,
  SearchIcon,
  FileTextIcon,
  SettingsIcon,
  ArchiveIcon,
} from "lucide-react";
import { ActionItem } from "./types";

export const basicActions: ActionItem[] = [
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

export const adminActions: ActionItem[] = [
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
