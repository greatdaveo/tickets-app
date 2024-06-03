import React from "react";

interface Props {
  params: { id: string };
}
import dynamic from "next/dynamic";
import prisma from "@/prisma/db";

const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false,
});

const EditTicket = async ({ params }: Props) => {
  const ticket = await prisma.tickets.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!ticket) {
    return <p className="text-destructive">Ticket Not Found!</p>;
  }

  return <TicketForm ticket={ticket}  />;
};

export default EditTicket;
