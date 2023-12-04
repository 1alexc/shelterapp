import Link from 'next/link'
import styles from '../page.module.css'
export default function Dashboard() {
    return (
        <main className={styles.main}>
            <h1>Dashboard</h1>
            <Link href="/viewallsus">
                <button>View Service User Button</button>
            </Link>
            <Link href="">
                <button>Add Service User Button</button>
            </Link>
            <Link href="">
                <button>Referral Link Button</button>
            </Link>
            <Link href="/">
                <button>Sign Out Button</button>
            </Link>
        </main>
    )
}
