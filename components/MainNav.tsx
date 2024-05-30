import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const MainNav = () => {
  return (
    <div className="flex justify-between ">
      <div>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/logout">Logout</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
