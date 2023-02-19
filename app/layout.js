import "@/app/globals.css";
import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";

// If loading a variable font, you don't need to specify the font weight
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1>
            <Link className={styles.homeLink} href="/home">
              Main conference page
            </Link>
          </h1>
          <h2>
            <Link className={styles.menuBarLink} href="/blog">
              blog
            </Link>
          </h2>
          <h2>
            <Link className={styles.menuBarLink} href="/settings">
              settings
            </Link>
          </h2>
          <h2>
            <Link className={styles.menuBarLink} href="/conference">
              conference
            </Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
