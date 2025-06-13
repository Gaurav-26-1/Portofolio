import Image from "next/image";
import styles from "./page.module.css";


export default function SkillPage() {
  return (
    <section id="skill" className={styles.container}>
    {/* <main className={styles.container}> */}
      <h2 className={styles.heading}>Skill</h2>
      <hr></hr>
      <p className={styles.text}>
        これまで勉強した言語や現在学習中の技術を載せましょう。
        「半分ぐらいしか理解していないけど…」というものでも積極的に書き、学習のモチベーションに変えましょう。
      </p>

      <ul className={styles.skillList}>
        <li>
          <Image src="/html5.svg" alt="HTML" width={24} height={24} /> HTML / CSS
        </li>
        <li>
          <Image src="/javascript.svg" alt="JavaScript" width={24} height={24} /> JavaScript (ES6+)
        </li>
        <li>
          <Image src="/typescript.svg" alt="TypeScript" width={24} height={24} /> TypeScript
        </li>
        <li>
          <Image src="/react.svg" alt="React" width={24} height={24} /> React / Next.js
        </li>
        <li>
          <Image src="/nodedotjs.svg" alt="Node.js" width={24} height={24} /> Node.js / Express（現在学習中）
        </li>
      </ul>
    {/* </main> */}
    </section>
  );
}
