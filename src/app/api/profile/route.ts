import { NextRequest, NextResponse } from "next/server";
import { DataService } from "@/lib/data-service";

export async function GET() {
  const user = DataService.getUser();
  return NextResponse.json({ user });
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const updated = DataService.updateUser(body);
    return NextResponse.json({ success: true, user: updated });
  } catch {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
