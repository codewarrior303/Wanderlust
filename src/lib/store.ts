import { TravelPackage, Booking, UserProfile, Testimonial } from "./types";
import { worldDestinations } from "./world-destinations";

export const initialPackages: TravelPackage[] = worldDestinations;

export const initialBookings: Booking[] = [
  {
    id: "b1",
    bookingCode: "b1",
    userId: "user-sarah",
    packageId: "bali-paradise",
    packageName: "Bali Paradise",
    packageImage: "/images/bali.webp",
    country: "Indonesia",
    location: "Bali, Indonesia",
    departureDate: "May 15, 2026",
    duration: "7 Days / 6 Nights",
    price: 1299,
    guests: 2,
    status: "Confirmed",
    createdAt: "2026-03-10T10:00:00Z",
  },
  {
    id: "b2",
    bookingCode: "b2",
    userId: "user-sarah",
    packageId: "venice-riviera",
    packageName: "Venice & Italian Riviera",
    packageImage: "/images/venice.webp",
    country: "Italy",
    location: "Venice, Italy",
    departureDate: "May 15, 2026",
    duration: "7 Days / 6 Nights",
    price: 1299,
    guests: 1,
    status: "Pending",
    createdAt: "2026-03-22T14:30:00Z",
  },
  {
    id: "b3",
    bookingCode: "b3",
    userId: "user-sarah",
    packageId: "kyoto-blossom",
    packageName: "Kyoto Blossom & Heritage",
    packageImage: "/images/kyoto.webp",
    country: "Japan",
    location: "Kyoto, Japan",
    departureDate: "July 1, 2026",
    duration: "6 Days / 5 Nights",
    price: 1850,
    guests: 2,
    status: "Confirmed",
    createdAt: "2026-04-01T09:15:00Z",
  },
];

export const initialUserProfile: UserProfile = {
  id: "user-sarah",
  name: "Sarah Mitchell",
  email: "sarah.mitchell@example.com",
  avatar: "/images/avatar-sarah.webp",
  role: "user",
  location: "San Francisco, CA",
  nationality: "United States",
  memberSince: "Mar 2024",
  stats: {
    totalBookings: 12,
    countriesVisited: 18,
    totalSpent: 15750,
    upcomingTrips: 2,
  },
};

export const initialTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Alex Johnson",
    role: "Solo Traveler",
    avatar: "/images/avatar-alex.webp",
    rating: 5,
    comment:
      "Wanderlust arranged the most seamless trip to Bali. Every detail, from the private villas to the Mount Batur sunrise hike, exceeded my expectations!",
    destination: "Bali Paradise",
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Cultural Explorer",
    avatar: "/images/avatar-elena.webp",
    rating: 5,
    comment:
      "The Kyoto Blossom tour was pure poetry. The tea ceremony master and our private guide made us feel connected to Japanese history like never before.",
    destination: "Kyoto Blossom Tour",
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "Adventure Enthusiast",
    avatar: "/images/avatar-marcus.webp",
    rating: 5,
    comment:
      "Booking the Swiss Alps trip was effortless. Flawless rail reservations, cozy alpine hotels, and unforgettable hiking trails. 10/10 service!",
    destination: "Swiss Alps Adventure",
  },
];
