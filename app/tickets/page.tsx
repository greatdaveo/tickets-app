import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Tickets = async () => {
  const ticketsData = await prisma.tickets.findMany();

  // console.log("Tickets Data:", ticketsData);

  return (
    <div>
      <Link
        href="/tickets/new"
        className={buttonVariants({ variant: "default" })}
      >
        New Ticket
      </Link>
      <h1>
        <DataTable tickets={ticketsData} />
      </h1>
    </div>
  );
};

export default Tickets;
