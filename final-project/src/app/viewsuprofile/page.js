import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"
export default function ViewSUProfile() {
    return (
        
        <main>

        <BackButton/>
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
