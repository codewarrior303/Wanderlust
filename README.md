# Wanderlust - Modern Travel & Destination Web Application

A pixel-perfect, modern, and fully responsive travel web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, crafted to faithfully replicate the design specifications from the Penpot design file (`Wanderlust .penpot`).

---

## 🌟 Key Features & Replicated Screens

### 1. `01_Home` (`/`)
- **Immersive Hero Section**: High-resolution travel background (`hero-travel.webp`), bold display typography, "Discover Your Next Adventure" headline, "EXPLORE NOW" and "VIEW DESTINATION" primary actions.
- **Interactive Search Bar**: Floating search card featuring **Location** (*Address, City or Zip*), **People** (*5-10*), **Date/Duration** (*Anytime/3 Days*), and **Budget** (*$0-$3000*).
- **Featured Destinations**: Live carousel and card collection with dynamic counter (*"1/5"*), previous/next slider arrows, and quick booking triggers.
- **Why Choose Wanderlust**: 3 value proposition cards highlighting *Expert Guides*, *Safe & Secure*, and *24/7 Support*.
- **What Travelers Say**: Authentic traveler testimonials with avatars, star ratings, quotes, and destinations.
- **Call-to-Action (CTA) Banner**: *"Ready to Start Your Journey?"* banner with instant booking access.
- **Comprehensive Footer**: Brand overview, Quick Links, Support links, direct contact info, newsletter subscription, copyright, and social icons (Twitter/X, LinkedIn, Instagram).

### 2. `02_Destinations` (`/destinations`)
- *"Explore All Destinations"* catalog.
- Category filters: **All**, **Beach**, **Cultural**, **Adventure**, **Luxury**, and **Mountain**.
- Real-time search query and sorting by *Featured*, *Price (Low to High)*, *Price (High to Low)*, or *Rating*.
- Responsive grid of destination cards with ratings, location, duration, and prices.
- Pagination controls.

### 3. `03_My Bookings` (`/my-bookings`)
- Real-time travel schedule dashboard.
- Filter tabs: **All**, **Confirmed**, **Pending**, and **Cancelled**.
- Booking cards displaying destination image, booking reference ID, status badge, departure date, price, and actions (*View* and *Cancel*).
- Client-side route protection ensuring only signed-in users can view their bookings.

### 4. `04_Admin` (`/admin`)
- Administrative package publishing dashboard.
- Complete **Add Travel Package** form validated with **React Hook Form + Zod** (*Title, Country, Category, Price in USD, Duration, Departure Date, Image URL, Description*).
- **Current Travel Packages Table**: View all active packages with quick **Edit** and **Delete** actions.
- Role-gated protection (*Admin privileges required*).

### 5. `05_Destination Details` (`/destinations/[id]`)
- Multi-photo interactive gallery with thumbnail switching.
- Detailed destination overview and highlights checklist with custom icons.
- Day-by-day curated travel itinerary.
- Sticky Booking Widget displaying starting price per person, departure date, duration, included perks (*Free cancellation up to 7 days, Travel insurance included, 24/7 support*), and **Book Now** trigger.
- Admin quick edit and delete shortcuts for privileged users.

### 6. `06_Edit` & `07_Delete` Modals
- **Update Travel Package Modal**: Edit any package's title, price, duration, category, and overview.
- **Delete Travel Package Modal**: Confirmation dialog with package preview and destructive deletion.

### 7. `08_Profile` (`/profile`)
- User identity card featuring avatar, name (*Sarah Mitchell*), location (*San Francisco, CA*), member date (*Mar 2024*), and nationality (*United States*).
- **Travel Statistics** 4-card grid:
  - **12** Total Bookings
  - **18** Countries Visited
  - **$15,750** Total Spent
  - **2** Upcoming Trips
- Profile editing modal to update personal details.

### 8. `09_Sign Up`, `10_Sign In`, and `Forgot Password`
- Dedicated auth pages (`/sign-in`, `/sign-up`, `/forgot-password`) as well as global auth modal dialogs accessible from anywhere in the app.
- Google OAuth simulation button.
- Better Auth client integration (`/lib/auth-client.ts`).

### 9. Dark / Light Mode Toggle
- Integrated theme switcher using `next-themes` and Tailwind CSS.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS
- **UI & Primitives**: shadcn/ui (Radix UI primitives + Lucide React icons)
- **Authentication**: Better Auth client (`/lib/auth-client.ts` & `src/lib/auth-client.ts`) + client-side session context & route guards
- **Form Handling & Validation**: React Hook Form + Zod
- **Database Placeholder**: MongoDB client (`src/lib/mongodb.ts`) with reactive in-memory state persistence
- **Notifications**: Sonner

---

## 🚀 Getting Started

### 1. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm start
```
