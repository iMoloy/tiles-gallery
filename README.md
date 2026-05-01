# LuminaTiles - Tiles Gallery

LuminaTiles is a responsive Next.js App Router website for showcasing a curated tile gallery. Visitors can browse all tiles, search by title, and authenticated users can open private tile details and manage their profile.

## Live URL

Add your deployed Vercel link here after hosting.

## Key Features

- Responsive navbar with Home, All Tiles, My Profile, login, and logout states
- Home page banner, scrolling new-arrival marquee, and 4 featured tile cards
- All Tiles page with a large search input and tile cards
- Private tile details page with high-resolution preview, creator, style description, tags, dimensions, material, and price
- Better Auth email/password registration and login
- Google social login setup
- Private My Profile page and Update Information page for name and image URL
- Custom footer with social links and Contact Us section
- Loading and not-found UI

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `@better-auth/mongo-adapter`
- `mongodb`
- `daisyui`
- `@heroui/react`
- `react-fast-marquee`
- `react-icons`
- `animate.css`
- `framer-motion`

## Environment Variables

Create `.env.local` from `.env.example` and add your real values.

```env
BETTER_AUTH_SECRET=replace-with-a-32-character-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri
MONGODB_DB=tiles_gallery
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Route Permissions

- Public: `/`, `/all-tiles`, `/login`, `/register`
- Private: `/tile/[id]`, `/my-profile`, `/my-profile/update`

## Suggested Commit Steps

1. Setup project and install packages
2. Add navbar and footer
3. Add home banner
4. Add marquee section
5. Add tile JSON data
6. Add featured tiles section
7. Add all tiles gallery and search
8. Add Better Auth setup
9. Add login and register pages
10. Add private tile details and profile pages
