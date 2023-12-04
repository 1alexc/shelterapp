import Image from "next/image";
import Link from "next/link";
import BackButtonStyles from "./BackButton.css"

export default function Backbutton() {
    return (
        <>
        <Link href="/dashboard">
            <Image src="/backarrow.png" alt="back button" width="64" height="64" className="arrow"/>
        </Link>
        </>
        )
}