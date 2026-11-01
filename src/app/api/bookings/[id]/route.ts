import { NextRequest, NextResponse } from "next/server";
import { DataService } from "@/lib/data-service";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const success = DataService.cancelBooking(id);
  if (!success) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, message: "Booking cancelled" });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const success = DataService.deleteBooking(id);
  if (!success) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, message: "Booking deleted" });
}
