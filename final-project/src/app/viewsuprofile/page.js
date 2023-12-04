import Link from 'next/link'
import styles from '../page.module.css'
export default function ViewSUProfile() {
    return (
        <main className={styles.main}>
            <h1>View SU Profile</h1>
            <Link href="">
                <button>Edit Service User Button</button>
            </Link>
            <Link href="/">
                <button>Sign Out Button</button>
            </Link>
        </main>
    )
}
