<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a0a2e,100:16213e&height=180&section=header&text=LuminaTiles&fontSize=46&fontColor=ffffff&fontAlignY=38&desc=Responsive%20Tiles%20Gallery%20%26%20Authentication%20App&descAlignY=58&descSize=16&descColor=c084fc&animation=fadeIn" width="100%" alt="LuminaTiles banner" />

  [![Live App](https://img.shields.io/badge/🌐%20Live%20App-luminatiles.vercel.app-a855f7?style=for-the-badge&logo=vercel&logoColor=white)](https://luminatiles.vercel.app)
  [![GitHub](https://img.shields.io/badge/GitHub-iMoloy%2Ftiles--gallery-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iMoloy/tiles-gallery)

</div>

---

## 📖 Overview

**LuminaTiles** is a responsive Next.js App Router website for showcasing a curated tiles gallery. Visitors can browse all tiles and search by title. Authenticated users can access private tile details, manage their profile, and upload a profile picture via ImgBB — secured with **Better Auth** (email/password + Google OAuth).

> **Live at** → [https://luminatiles.vercel.app](https://luminatiles.vercel.app)

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | `16.2.4` | React framework (App Router) |
| [React](https://react.dev/) | `19.2.4` | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | `^4` | Utility-first styling |
| [DaisyUI](https://daisyui.com/) | `^5.5.19` | Component library |
| [Better Auth](https://www.better-auth.com/) | `^1.6.9` | Auth (email/password + Google OAuth) |
| [MongoDB](https://www.mongodb.com/) | `^7.2.0` | Database (via `@better-auth/mongo-adapter`) |
| [React Fast Marquee](https://www.react-fast-marquee.com/) | `^1.6.5` | Scrolling new-arrivals banner |
| [React Icons](https://react-icons.github.io/) | `^5.6.0` | Icon library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | `^11.1.0` | Toast notifications |
| [animate.css](https://animate.style/) | `^4.1.1` | CSS animations |
| [ImgBB API](https://api.imgbb.com/) | — | Profile picture upload (no DB bloat) |

---

## ✨ Core Features

- **Responsive Navbar** — Home, All Tiles, My Profile, Login/Logout states with avatar
- **Home Page** — Hero banner, scrolling new-arrival marquee, 4 featured tile cards
- **All Tiles + Search** — Full gallery with live search by title
- **Private Tile Details** — High-res preview, creator, style, tags, dimensions, material, and price (auth required)
- **Better Auth** — Email/password registration + Google social login
- **My Profile** — Private page with editable name and profile picture upload via ImgBB
- **Toast Notifications** — Success/error feedback across all interactions
- **Custom Footer** — Social links and contact section

### Route Permissions

| Route | Access |
|---|---|
| `/`, `/all-tiles`, `/login`, `/register` | Public |
| `/tile/[id]`, `/my-profile`, `/my-profile/update` | Private (auth required) |

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `next` | `16.2.4` | Framework |
| `react` / `react-dom` | `19.2.4` | UI |
| `better-auth` | `^1.6.9` | Authentication |
| `@better-auth/mongo-adapter` | `^1.6.9` | MongoDB session adapter |
| `mongodb` | `^7.2.0` | Database driver |
| `daisyui` | `^5.5.19` | Components |
| `react-fast-marquee` | `^1.6.5` | Marquee scroll |
| `react-icons` | `^5.6.0` | Icons |
| `react-toastify` | `^11.1.0` | Toasts |
| `animate.css` | `^4.1.1` | Animations |

### Development

| Package | Purpose |
|---|---|
| `tailwindcss` `^4` | CSS framework |
| `eslint`, `eslint-config-next` | Linting |

---

## 🚀 Run Locally

### Prerequisites
- **Node.js** v18 or higher
- **MongoDB Atlas** URI
- **ImgBB API key** → [api.imgbb.com](https://api.imgbb.com/)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/iMoloy/tiles-gallery.git
   cd tiles-gallery
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment**

   Create `.env.local`:

   ```env
   BETTER_AUTH_SECRET=replace-with-a-32-character-secret
   BETTER_AUTH_URL=http://localhost:3000
   MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net
   MONGODB_DB=tiles_gallery
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEXT_PUBLIC_IMGBB_API_KEY=your-imgbb-api-key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## 🔗 Resources

- 🌐 **Live App** → [https://luminatiles.vercel.app](https://luminatiles.vercel.app)
- 🐙 **GitHub** → [github.com/iMoloy/tiles-gallery](https://github.com/iMoloy/tiles-gallery)
- 💼 **Author** → [linkedin.com/in/iMoloy](https://linkedin.com/in/iMoloy)

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:16213e,50:1a0a2e,100:0d1117&height=100&section=footer&animation=fadeIn" width="100%" alt="Footer" />
  <sub>Made with ❤️ by <strong>Moloy Krishna Paul</strong></sub>
</div>
