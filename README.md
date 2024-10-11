# Todo App ✨

Welcome to **Todo App**, where managing your tasks is made simple, elegant, and responsive. Built with the latest web technologies, this app combines clean UI with powerful features, ensuring your productivity is just a few clicks away.

## 🚀 Features

- **Effortless Task Management**: Add, edit, and delete your todos with ease.
- **GitHub Authentication**: Secure sign-in via GitHub OAuth.
- **Dark Mode/Light Mode**: Switch between themes that suit your mood.
- **Responsive Design**: Looks perfect on any device thanks to Tailwind CSS.
- **Powerful Backend**: Prisma ORM and Vercel Postgres provide seamless data management.

## 💻 Tech Stack

- **Next.js**: The core framework powering the app.
- **Prisma**: Database ORM for easy querying and migrations.
- **Vercel Postgres**: Reliable database on the Vercel platform.
- **Tailwind CSS**: For fast and responsive design.
- **Radix UI**: Modern components for dropdowns, avatars, and more.
- **NextAuth.js**: GitHub OAuth integration for user authentication.
- **Lucide Icons**: Beautiful and customizable icons.

## 🚧 Installation Guide

Getting the app up and running is a breeze!

1. **Clone the repository**:

   ```bash
   git clone https://github.com/username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies** with pnpm:

   ```bash
   pnpm install
   ```

3. **Set up your environment variables** in a `.env` file:

   ```env
   POSTGRES_DATABASE=""
   POSTGRES_HOST=""
   POSTGRES_PASSWORD=""
   POSTGRES_PRISMA_URL=""
   POSTGRES_URL=""
   POSTGRES_URL_NON_POOLING=""
   POSTGRES_URL_NO_SSL=""
   POSTGRES_USER=""

   NEXTAUTH_SECRET=""
   NEXTAUTH_URL=""

   AUTH_GITHUB_ID=""
   AUTH_GITHUB_SECRET=""
   ```

4. **Set up the database schema**:

```bash
pnpm exec prisma db push
```

5. **Run the app** in development mode:

   ```bash
   pnpm dev
   ```

## 🌍 Deployment

Deployed effortlessly on [Vercel](https://vercel.com/), with Vercel Postgres handling your data needs.

## 📜 License

This project is open-sourced under the MIT License. Feel free to use, modify, and share!

---

**Enjoy organizing your tasks with ease!** ☑️
