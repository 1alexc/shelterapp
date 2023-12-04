import Link from 'next/link'
import styles from './dashboard.css'

export default function Dashboard() {
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="linksbox">
            <Link href="/viewallsus" >
                <button className="linkitem">View Service User Button</button>
            </Link>
            <Link href="/addsu">
                <button className="linkitem">Add Service User Button</button>
            </Link>
            <Link href="/referrallinks">
                <button className="linkitem">Referral Link Button</button>
            </Link>
            <Link href="/">
                <button className="linkitem">Sign Out Button</button>
            </Link>
            </div>
        </main>
    )
}
