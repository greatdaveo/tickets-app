import { Tickets } from "@prisma/client";
import React from "react";

interface Props {
  ticket: Tickets;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    <div>
      <p>{ticket.title}</p>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetails;
