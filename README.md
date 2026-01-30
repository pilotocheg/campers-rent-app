# TravelTrucks 🚐

A modern camper rental application built with Next.js. Browse, filter, and book your perfect campervan for your next adventure.

## Features

- **Camper Catalog** — Browse available campervans with detailed specifications
- **Advanced Filtering** — Filter by location, vehicle type (Alcove, Fully Integrated, Van), and equipment (AC, Kitchen, Bathroom, TV, etc.)
- **Detailed Camper Pages** — View image galleries, features, specifications, and customer reviews
- **Booking System** — Request bookings directly from camper detail pages
- **Favorites** — Save campers to favorites (persisted in local storage)
- **User Authentication** — Sign up and sign in with Supabase

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) with [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Authentication**: [Supabase](https://supabase.com/)
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Auth callback route
│   ├── catalog/           # Catalog & camper detail pages
│   ├── login/             # Login page
│   └── register/          # Registration page
├── components/
│   ├── camper/            # Camper-related components
│   ├── common/            # Reusable UI components
│   └── providers/         # Context providers
├── hooks/
│   ├── actions/           # Redux action hooks
│   └── selectors/         # Redux selector hooks
├── lib/
│   ├── api/               # API functions
│   ├── constants/         # App constants
│   ├── supabase/          # Supabase client setup
│   └── utils/             # Utility functions
└── redux/
    ├── campers/           # Campers state slice
    ├── favorites/         # Favorites state slice
    └── filters/           # Filters state slice
```

## License

This project is private and not licensed for public use.
