import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"

export default function ViewAllSUs() {
    return (
        <main>
        <BackButton/>
            <h1>View SU</h1>
            <Link href="/viewsuprofile">
                <button>View Specific Service User Button</button>
            </Link>
        </main>
    )
}
