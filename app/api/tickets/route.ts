import { ticketSchema } from "@/ValidationSchemas/tickets";
import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = ticketSchema.safeParse(body)

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 })
    }

    const newTicket = await prisma.tickets.create({
        data: { ...body }
    })

    return NextResponse.json(newTicket, { status: 201 })
}