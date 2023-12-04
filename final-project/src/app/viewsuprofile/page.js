import Link from 'next/link'
import BackButton from "../components/BackButton.jsx"
export default function ViewSUProfile() {
    return (
        <main>
        <BackButton/>
            <h1>View SU Profile</h1>
            <Link href="/editsu">
                <button>Edit Service User Button</button>
            </Link>
        </main>
    )
}
