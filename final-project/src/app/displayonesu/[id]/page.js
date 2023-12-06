import Link from 'next/link'
import AuthRouter from '../../AuthRouter.jsx'
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
