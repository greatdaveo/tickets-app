import React from "react";
import prisma from "@/prisma/db";

const Tickets = async () => {
  const ticketData = await prisma.tickets.findMany();

  console.log("Tickets Data:", ticketData);

  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
};

export default Tickets;
