import Link from 'next/link'
import styles from '../page.module.css'
import Image from 'next/image'
export default function ViewSUProfile() {
    return (
        
        <main className={styles.main}>
            {/* //back button ----- */}
            <Link href="/dashboard">
            <Image src="/arrow_back.png" alt="me" width="64" height="64" />
            </Link>
            <h1>View SU Profile</h1>
            <Link href="/editsu">
                <button>Edit Service User Button</button>
            </Link>
            <Link href="/">
                <button>Sign Out Button</button>
            </Link>
        </main>
    )
}
