import { TravelPackage, Booking, UserProfile } from "./types";
import { initialPackages, initialBookings, initialUserProfile } from "./store";

declare global {
  // eslint-disable-next-line no-var
  var __wanderlust_packages: TravelPackage[] | undefined;
  // eslint-disable-next-line no-var
  var __wanderlust_bookings: Booking[] | undefined;
  // eslint-disable-next-line no-var
  var __wanderlust_user: UserProfile | undefined;
}

if (!globalThis.__wanderlust_packages) {
  globalThis.__wanderlust_packages = [...initialPackages];
}

if (!globalThis.__wanderlust_bookings) {
  globalThis.__wanderlust_bookings = [...initialBookings];
}

if (!globalThis.__wanderlust_user) {
  globalThis.__wanderlust_user = { ...initialUserProfile };
}

export const DataService = {
  getPackages(): TravelPackage[] {
    return globalThis.__wanderlust_packages!;
  },
  getPackageById(id: string): TravelPackage | undefined {
    return globalThis.__wanderlust_packages!.find((p) => p.id === id);
  },
  addPackage(pkg: Omit<TravelPackage, "id">): TravelPackage {
    const newPkg: TravelPackage = {
      ...pkg,
      id: "pkg-" + Date.now().toString(36),
    };
    globalThis.__wanderlust_packages!.unshift(newPkg);
    return newPkg;
  },
  updatePackage(id: string, updates: Partial<TravelPackage>): TravelPackage | null {
    const index = globalThis.__wanderlust_packages!.findIndex((p) => p.id === id);
    if (index === -1) return null;
    const updated = { ...globalThis.__wanderlust_packages![index], ...updates };
    globalThis.__wanderlust_packages![index] = updated;
    return updated;
  },
  deletePackage(id: string): boolean {
    const initialLen = globalThis.__wanderlust_packages!.length;
    globalThis.__wanderlust_packages = globalThis.__wanderlust_packages!.filter(
      (p) => p.id !== id
    );
    return globalThis.__wanderlust_packages.length < initialLen;
  },

  getBookings(): Booking[] {
    return globalThis.__wanderlust_bookings!;
  },
  addBooking(booking: Omit<Booking, "id" | "bookingCode" | "createdAt">): Booking {
    const count = globalThis.__wanderlust_bookings!.length + 1;
    const newBooking: Booking = {
      ...booking,
      id: "b" + count,
      bookingCode: "b" + count,
      createdAt: new Date().toISOString(),
    };
    globalThis.__wanderlust_bookings!.unshift(newBooking);
    return newBooking;
  },
  cancelBooking(id: string): boolean {
    const item = globalThis.__wanderlust_bookings!.find((b) => b.id === id);
    if (!item) return false;
    item.status = "Cancelled";
    return true;
  },
  deleteBooking(id: string): boolean {
    const initialLen = globalThis.__wanderlust_bookings!.length;
    globalThis.__wanderlust_bookings = globalThis.__wanderlust_bookings!.filter(
      (b) => b.id !== id
    );
    return globalThis.__wanderlust_bookings.length < initialLen;
  },

  getUser(): UserProfile {
    return globalThis.__wanderlust_user!;
  },
  updateUser(updates: Partial<UserProfile>): UserProfile {
    globalThis.__wanderlust_user = {
      ...globalThis.__wanderlust_user!,
      ...updates,
      stats: {
        ...globalThis.__wanderlust_user!.stats!,
        ...(updates.stats || {}),
      },
    };
    return globalThis.__wanderlust_user;
  },
};
