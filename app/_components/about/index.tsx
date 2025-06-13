import Image from "next/image";
import styles from "./about.module.css";

export default function About(){
    return (
        <section id="about" className={styles.container}>
<main id="About" className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <hr></hr>
            <p>
                このサイトは「教科書を振り返りながら、自分のポートフォリオを作成する」ことを
                目的としたサンプルプロジェクトです。教科書で学んだ Next.js の基本や CSS
                モジュールの使い方を確認しながら、自分だけのオリジナルサイトを作りましょう。
            </p>
            </main>
            <section>
                <Image
                src="/images/about1.jpg"
                alt="About Image"
                width={300}
                height={280}
                  />
            </section>
        </section>
    );
}