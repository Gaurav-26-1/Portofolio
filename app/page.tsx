// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./_components/about";
import Profile from "./_components/profile";
import Work from "./_components/work";
import Skill from"./_components/skill/";
import Strengths from"./_components/strengths/";
export default function HomePage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>Hello</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#main">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#profile">Profile</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#skill">Skill</Link>
            </li>
            <li>
              <Link href="#strengths">Strengths</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.container}>
        {/* メインビジュアル */}
        <section className={styles.hero}>
          <Image
            src="/images/sky2.jpg"
            alt="Main Visual"
            width={1200}
            height={600}
            className={styles.heroImage}
          />
          <h1 className={styles.title}>My Portfolio</h1>
          <h3 className={styles.subtitle}>
            このサイトについて
            <br />
            専門学校でWebプログラミングを学んでいる○○です。
            <br />
            教科書で学んだ Next.js を活用し、
            <br />
            ポートフォリオサイトを制作しました。
          </h3>
        </section>
        <About />

        <Profile />

        <Work />

        <Skill />

        <Strengths />
        <footer className={styles.footer}>
        <nav>
          <ul className={styles.footerNav}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#strengths">Strengths</a></li>
          </ul>
        </nav>
        <p className={styles.cr}>© SIMPLE. All Rights Reserved 2025</p>
        </footer>
      </main>
    </>
  );
}
