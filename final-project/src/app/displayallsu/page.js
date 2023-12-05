import Link from 'next/link'
import Image from 'next/image'
import BackButton from "../components/BackButton.jsx"
import AuthRouter from '../AuthRouter.jsx'

export default function ViewAllSUs() {
    return (
        <>
            <AuthRouter pageName={"viewallsus"}/>            
            <h1>View SU</h1>
            <Link href="/displayonesu">
                <button>View Specific Service User Button</button>
            </Link>
        </>
    )
}
