import Link from 'next/link'
import styles from '../page.module.css'
export default function EditSU() {
    return (
        <main className={styles.main}>
            <h1>Edit Service User</h1>
            
            <Link href="/">
                <button>Sign Out Button</button>
            </Link>
        </main>
    )
}
