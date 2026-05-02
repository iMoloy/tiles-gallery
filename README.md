# LuminaTiles

LuminaTiles is a responsive Next.js App Router website for showcasing a curated tiles gallery. Visitors can browse all tiles, search by title, and authenticated users can open private tile details and manage their profile.

## Live URL

https://luminatiles.vercel.app/

## Repository

https://github.com/iMoloy/tiles-gallery

## Key Features

- Responsive navbar with Home, All Tiles, My Profile, login, and logout states
- Clickable profile avatar in the navbar linking to the My Profile page
- Home page banner, scrolling new-arrival marquee, and 4 featured tile cards
- All Tiles page with a large search input and tile cards
- Private tile details page with high-resolution preview, creator, style description, tags, dimensions, material, and price
- Better Auth email/password registration and login
- Google social login setup
- Private My Profile page and Update Information page for name and profile picture
- Profile picture upload powered by ImgBB (no database storage bloat)
- Toast notifications for success/error feedback across the app
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
- `react-fast-marquee`
- `react-icons`
- `animate.css`
- `react-toastify`

## Environment Variables

Create `.env.local` from `.env.example` and add your real values.

```env
BETTER_AUTH_SECRET=replace-with-a-32-character-secret
BETTER_AUTH_URL=https://luminatiles.vercel.app
MONGODB_URI=your-mongodb-uri
MONGODB_DB=tiles_gallery
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_IMGBB_API_KEY=your-imgbb-api-key
```

> Get a free ImgBB API key from [api.imgbb.com](https://api.imgbb.com/).

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
11. Add profile image upload with ImgBB
12. Add toast notifications

