# Safe Rides

A campus‑focused ride‑booking application engineered for the University of South Florida. Built with **React Native + TypeScript**, the project fuses a slick Tailwind‑styled UI with server‑side horsepower from **Neon PostgreSQL** and friction‑free payments via **Stripe**.

> **Goal**  Deliver a dependable, cash‑free way for students to schedule safe rides—on or off campus—while keeping operational overhead low and code reuse high.

---

## ✨ Key Features

| Capability                    | Details                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Real‑time Ride Booking**    | Students select pickup & drop‑off, get instant fare estimates, and watch drivers approach in‑app |
| **Dynamic Routing**           | Google Maps Directions API optimizes the trip path, reflecting live traffic                      |
| **100 M+ Place Autocomplete** | Google Places API suggests addresses, campus buildings, and POIs as users type                   |
| **Secure Payments**           | Stripe handles cards, Apple Pay & Google Pay; PCI offloaded                                      |
| **Reusable UI**               | Tailwind CSS (via NativeWind) yields a 80 % shared component library across screens              |
| **Serverless DB**             | Neon Postgres branch‑based workflows & instant scaling                                           |

---

## 🛠 Tech Stack

| Layer           | Tech                                                         |
| --------------- | ------------------------------------------------------------ |
| **Mobile**      | React Native (Expo), TypeScript, NativeWind (Tailwind CSS)   |
| **Backend API** | Node.js (Fastify), TypeScript, Prisma ORM                    |
| **Database**    | Neon PostgreSQL (serverless)                                 |
| **Maps & Geo**  | Google Maps Platform — Directions, Geocoding, Places         |
| **Payments**    | Stripe SDK & Webhook relay                                   |
| **CI / CD**     | GitHub Actions → Expo EAS builds → TestFlight / Play Console |

## 🚀 Getting Started

### 1. Prerequisites

- Node ≥ 20 LTS & Yarn (or PNPM)
- Expo CLI `npm i -g expo-cli`
- PostgreSQL URL from **Neon**
- Google Cloud project with Maps & Places APIs enabled
- Stripe account & secret key

### 2. Clone & Install

```bash
git clone https://github.com/<your‑org>/safe‑rides.git
cd safe‑rides
pnpm install            # or yarn / npm
```

### 3. Environment Variables

Duplicate `.env.example` ➜ `.env` and fill in keys:

```env
EXPO_GOOGLE_MAPS_API_KEY=...
GOOGLE_PLACES_API_KEY=...
STRIPE_SECRET_KEY=...
STRIPE_PUBLISHABLE_KEY=...
DATABASE_URL="postgresql://<user>:<pass>@<neon-host>/<db>?sslmode=require"
```

### 4. Database Setup

```bash
pnpm prisma migrate dev --name init
```

### 5. Run Locally

```bash
# Launch API
pnpm --filter server dev

# Launch mobile app (Expo)
expo start
```

Open on iOS/Android with the Expo Go app, or press `i`/`a` in terminal to run emulators.

---

## 🗺 Google Maps & Places

- Autocomplete via `placesAutocomplete()` helper (debounced)
- Directions via `directionsService.route({ origin, destination })`
- Geocoding fallback when coordinates only are available

## 📄 License

Released under the MIT License—see `LICENSE` for details.
