import Link from 'next/link'
import styles from './dashboard.css'
import Login from '../components/Login'

export default function Dashboard() {
    return (
        <main>
            <h1>Dashboard</h1>
            <Login pageName={"Dashboard"}/>
        </main>
    )
}
