import { NextRequest, NextResponse } from "next/server";
import { DataService } from "@/lib/data-service";

export async function GET() {
  const bookings = DataService.getBookings();
  return NextResponse.json({ bookings });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.packageId || !body.packageName) {
      return NextResponse.json(
        { error: "Package ID and name are required." },
        { status: 400 }
      );
    }
    const user = DataService.getUser();
    const newBooking = DataService.addBooking({
      userId: user.id,
      packageId: body.packageId,
      packageName: body.packageName,
      packageImage: body.packageImage || "/images/bali.webp",
      country: body.country || "Destination",
      location: body.location || "Scenic Location",
      departureDate: body.departureDate || "May 15, 2026",
      duration: body.duration || "7 Days / 6 Nights",
      price: Number(body.price) || 1299,
      guests: Number(body.guests) || 1,
      status: "Confirmed",
    });

    // Update user stats
    user.stats = {
      ...user.stats!,
      totalBookings: (user.stats?.totalBookings || 0) + 1,
      totalSpent: (user.stats?.totalSpent || 0) + (Number(body.price) || 1299),
      upcomingTrips: (user.stats?.upcomingTrips || 0) + 1,
    };

    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to book trip" }, { status: 500 });
  }
}
