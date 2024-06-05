import React from "react";
import prisma from "@/prisma/db";
import TicketDetails from "./TicketDetails";

interface Props {
  params: { id: string };
}

const ViewTicketDetails = async ({ params }: Props) => {
  const ticket = await prisma.tickets.findUnique({
    where: { id: parseInt(params.id) },
  });

  const users = await prisma.user.findMany();

  if (!ticket) {
    return <p className=" text-destructive">Ticket Not Found!</p>;
  }

  return <TicketDetails ticket={ticket} users={users} />;
};

export default ViewTicketDetails;
