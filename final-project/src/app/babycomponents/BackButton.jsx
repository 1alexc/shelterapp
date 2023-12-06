import Image from "next/image";
import Link from "next/link";
import babyCompStyles from "./backbutton.css"
export default function BackButton() {
    return (
        <>
        <Link href="/dashboard">
            <Image src="/backarrow.png" alt="back button" width="64" height="64" className="arrow"/>
        </Link>
        </>
        )
}