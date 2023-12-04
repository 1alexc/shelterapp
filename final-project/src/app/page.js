import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Login Page</h1>
        <Link href="/dashboard">
          <button>Login Button</button>

        </Link>
    </main>
  )
}
