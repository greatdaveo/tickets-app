import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";

const Tickets = async () => {
  const ticketsData = await prisma.tickets.findMany();

  console.log("Tickets Data:", ticketsData);

  return (
    <div>
      <h1>
        <DataTable tickets={ticketsData} />
      </h1>
    </div>
  );
};

export default Tickets;
