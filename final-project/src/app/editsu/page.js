import Link from 'next/link'
import styles from '../page.module.css'
import Image from 'next/image'
export default function EditSU() {
    return (
        <main className={styles.main}>
             {/* //back button ----- */}
             <Link href="/dashboard">
            <Image src="/arrow_back.png" alt="me" width="64" height="64" />
            </Link>
            <h1>Edit Service User</h1>
            <Link href="/">
                <button>Sign Out Button</button>
            </Link>
        </main>
    )
}
