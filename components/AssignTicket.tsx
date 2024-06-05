"use client";

import { Tickets, User } from "@prisma/client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const AssignTicket = ({
  ticket,
  users,
}: {
  ticket: Tickets;
  users: User[];
}) => {
  const [isAssigning, setIsAssigning] = useState(false);
  const [error, setError] = useState("");

  const assignTicket = async (userId: string) => {
    setError("");
    setIsAssigning(true);

    await axios
      .patch(`/api/tickets/${ticket.id}`, {
        assignedToUserId: userId === "0" ? null : userId,
      })
      .catch(() => {
        setError("Unable to Assign Ticket.");
      });

    setIsAssigning(false);
  };

  return (
    <>
      <Select
        defaultValue={ticket.assignedToUserId?.toString() || "0"}
        onValueChange={assignTicket}
        disabled={isAssigning}
      >
        <SelectTrigger>
          <SelectValue
            placeholder="Select User..."
            defaultValue={ticket.assignedToUserId?.toString() || "0"}
          ></SelectValue>

          <SelectContent>
            <SelectItem value="0">Select User...</SelectItem>
            {users?.map((user) => (
              <SelectItem value={user.id.toString()} key={user.id}>
                {user.name}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>

      <p className="text-destructive">{error}</p>
    </>
  );
};

export default AssignTicket;
