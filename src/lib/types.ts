export type UserRole = "user" | "admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  location?: string;
  nationality?: string;
  memberSince?: string;
  twoFactorEnabled?: boolean;
  passwordLastChanged?: string;
  stats?: {
    totalBookings: number;
    countriesVisited: number;
    totalSpent: number;
    upcomingTrips: number;
  };
}

export interface TravelPackage {
  id: string;
  title: string;
  country: string;
  location: string;
  category: "Beach" | "Adventure" | "Cultural" | "Luxury" | "Mountain";
  duration: string;
  price: number;
  rating: number;
  reviewsCount: number;
  departureDate: string;
  imageUrl: string;
  gallery?: string[];
  overview: string;
  highlights: string[];
  itinerary?: { day: number; title: string; desc: string }[];
  isFeatured?: boolean;
}

export type BookingStatus = "Confirmed" | "Pending" | "Completed" | "Cancelled";

export interface Booking {
  id: string;
  bookingCode: string;
  userId: string;
  packageId: string;
  packageName: string;
  packageImage: string;
  country: string;
  location: string;
  departureDate: string;
  duration: string;
  price: number;
  guests: number;
  status: BookingStatus;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  destination: string;
}
