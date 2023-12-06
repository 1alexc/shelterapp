import Link from 'next/link'
import AuthRouter from '../AuthRouter.jsx'

export default function ViewAllSUs() {
    return (
        <>
            <AuthRouter pageName={"displayallsu"}/>            
            <h1>View SU</h1>
            <Link href="/displayonesu">
                <button>View Specific Service User Button</button>
            </Link>
        </>
    )
}
