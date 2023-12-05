import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"
import AuthRouter from '../AuthRouter.jsx'
export default function DisplayOneSU() {
    return (
        <>
            <AuthRouter pageName={"displayonesu"}/>
            <h1>View SU Profile</h1>
            <Link href="/editsu">
                <button>Edit Service User Button</button>
            </Link>
        </>
    )
}
