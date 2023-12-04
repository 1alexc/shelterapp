import Link from 'next/link'
import styles from '../page.module.css'
import Image from 'next/image'
export default function ViewAllSUs() {
    return (
        <main className={styles.main}>
            {/* //back button ----- */}
            <Link href="/dashboard">
            <Image src="/arrow_back.png" alt="me" width="64" height="64" />
            </Link>
            <h1>View SU</h1>
            <Link href="/viewsuprofile">
                <button>View Specific Service User Button</button>
            </Link>
        </main>
    )
}
