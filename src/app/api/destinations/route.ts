import { NextRequest, NextResponse } from "next/server";
import { DataService } from "@/lib/data-service";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const featured = searchParams.get("featured");

  let packages = DataService.getPackages();

  if (category && category !== "All") {
    packages = packages.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured === "true") {
    packages = packages.filter((p) => p.isFeatured);
  }

  if (search) {
    const q = search.toLowerCase();
    packages = packages.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ packages });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.title || !body.country || !body.price) {
      return NextResponse.json(
        { error: "Title, country, and price are required." },
        { status: 400 }
      );
    }
    const created = DataService.addPackage({
      title: body.title,
      country: body.country,
      location: body.location || body.country,
      category: body.category || "Beach",
      duration: body.duration || "7 Days / 6 Nights",
      price: Number(body.price),
      rating: body.rating || 4.9,
      reviewsCount: body.reviewsCount || 1,
      departureDate: body.departureDate || "05/15/2026",
      imageUrl: body.imageUrl || "/images/bali.webp",
      gallery: body.gallery || ["/images/bali.webp"],
      overview: body.overview || body.description || "",
      highlights: body.highlights || [
        "Curated daily local excursions",
        "Luxury boutique accommodations",
        "24/7 dedicated local concierge",
      ],
      isFeatured: body.isFeatured ?? true,
    });
    return NextResponse.json({ success: true, package: created }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create package" }, { status: 500 });
  }
}
