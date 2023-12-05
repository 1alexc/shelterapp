import Link from "next/link"

export default function DashboardComp() {
    return (<><div className="linksbox">
    <Link href="/viewallsus" >
        <button className="linkitem">View Service User Button</button>
    </Link>
    <Link href="/addsu">
        <button className="linkitem">Add Service User Button</button>
    </Link>
    <Link href="/referrallinks">
        <button className="linkitem">Referral Link Button</button>
    </Link>
    <Link href="./">
        <button className="linkitem">Sign Out Button</button>
    </Link>
    </div></>)}
