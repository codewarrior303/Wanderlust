import { NextRequest, NextResponse } from "next/server";
import { initialUserProfile } from "@/lib/store";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const path = url.pathname;

  if (path.includes("get-session") || path.includes("session")) {
    return NextResponse.json({
      session: {
        id: "sess_sarah_1",
        userId: initialUserProfile.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      },
      user: {
        id: initialUserProfile.id,
        name: initialUserProfile.name,
        email: initialUserProfile.email,
        image: initialUserProfile.avatar,
        role: initialUserProfile.role,
      },
    });
  }

  return NextResponse.json({ status: "ok" });
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const path = url.pathname;
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  if (path.includes("sign-in")) {
    return NextResponse.json({
      success: true,
      user: {
        id: initialUserProfile.id,
        name: (body.email as string)?.split("@")[0] || initialUserProfile.name,
        email: (body.email as string) || initialUserProfile.email,
        image: initialUserProfile.avatar,
        role: initialUserProfile.role,
      },
      token: "better-auth-jwt-token-sample",
    });
  }

  if (path.includes("sign-up")) {
    return NextResponse.json({
      success: true,
      user: {
        id: "user_" + Date.now(),
        name: (body.name as string) || "Traveler",
        email: (body.email as string) || "traveler@example.com",
        image: "/images/avatar-sarah.webp",
        role: "user",
      },
      token: "better-auth-jwt-token-sample",
    });
  }

  if (path.includes("sign-out")) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ status: "ok" });
}
