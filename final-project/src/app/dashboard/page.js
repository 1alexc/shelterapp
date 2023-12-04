import Link from 'next/link'
import styles from '../page.module.css'
export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Dashboard</h1>
            <Link href="">
                <button>View Service User Button</button>
            </Link>
        </main>
    )
}
