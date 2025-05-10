import { ReactNode, useEffect, useState } from "react";
import GreetingBlock from "./GreetingBlock";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [greeting, setGreeting] = useState("Welcome");
  const username = "Ben";

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-3 ">
      <GreetingBlock greeting={greeting + ", " + username} />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
