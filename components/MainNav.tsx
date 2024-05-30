import Link from "next/link";
import React from "react";

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
        <Link href="/login">Dark</Link>
      </div>
    </div>
  );
};

export default MainNav;
