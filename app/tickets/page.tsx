import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Pagination from "@/components/Pagination";

interface SearchParams {
  page: string;
}

const Tickets = async ({ searchParams }: { searchParams: SearchParams }) => {
  const pageSize = 10;
  const page = parseInt(searchParams.page) || 1;
  const ticketCount = await prisma.tickets.count();

  const ticketsData = await prisma.tickets.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

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
        <Pagination
          itemCount={ticketCount}
          pageSize={pageSize}
          currentPage={page}
        />
      </h1>
    </div>
  );
};

export default Tickets;
