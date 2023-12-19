import Image from "next/image";
import Link from "next/link";
import babyCompStyles from "./logoforlogin.css"

export default function LogoForLogin() {
    return (
        <>

        <Link href="/dashboard">
            <div className="flexbox-container-logoforlogin">
                <Image src="/logowhite.png" alt="back button" width="400" height="400" className="logoforlogin"/>
            </div>
        </Link>
        </>
        )
}