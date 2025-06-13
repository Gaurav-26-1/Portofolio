'use client';
import styles from "./strengths.module.css";
import Image from "next/image";

export default function StrengthsPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}>
      </p>
      <div className={styles.cardGrid}>
        {/* 聞く力 */}
        <div className={styles.card}>
          <h3 className={styles.subHeading}>聞く力</h3>
          <p className={styles.strengthText}>
            相手の話を最後までよく聞き、相手が本当に伝えたいポイントを引き出すことが得意です。
            よく「聞き上手だね」と言われます。
          </p>
        </div>

        {/* 論理的思考 */}
        <div className={styles.card}>
          <h3 className={styles.subHeading}>論理的思考</h3>
          <p className={styles.strengthText}>
            パズルが得意で、ボードゲームで勝つための戦略を立てるのが好きです。
            推理小説も好んで読み、犯人を先に見抜くことが多いです。
          </p>
        </div>

        {/* 探究心 */}
        <div className={styles.card}>
          <h3 className={styles.subHeading}>探究心</h3>
          <p className={styles.strengthText}>
            興味を持ったことや疑問に思ったことは徹底的に調べずにはいられません。
            「蝶番の歴史を調べたら江戸時代まで遡ってしまった」など、好奇心旺盛です。
          </p>
        </div>

        {/* 言語 */}
        <div className={styles.card}>
          <h3 className={styles.subHeading}>言語</h3>
          <p className={styles.strengthText}>
            英語を日常会話レベルで話せます。さらに、○○方言の知識もあり、
            旅行先でコミュニケーションをとるのが得意です。
          </p>
        </div>
      </div>
    </main>
  );
}
