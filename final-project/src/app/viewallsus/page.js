import Link from 'next/link'
import styles from '../page.module.css'
export default function ViewAllSUs() {
    return (
        <main className={styles.main}>
            <h1>View SU</h1>
            <Link href="/viewsuprofile">
                <button>View Specific Service User Button</button>
            </Link>
        </main>
    )
}
