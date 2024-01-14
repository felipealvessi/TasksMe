import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import heroImg from '../../public/assets/hero.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TasksMe: Transformando Tarefas em Conquistas!</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt='Logo TasksMe'
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar<br />
          seus <span>estudos</span> e <span>tarefas</span>
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+1 mil comentários</span>
          </section>
        </div>

      </main>
    </div>
  )
}
