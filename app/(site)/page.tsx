import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Link className={styles.link} href="/1830">1830</Link>
      </div>
    </main>
  )
}
