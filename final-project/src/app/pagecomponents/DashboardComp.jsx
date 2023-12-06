import compStyles from "./dashboard.css"

import Link from "next/link"

export default function DashboardComp() {
    return (
    <>
        <h2 className="linksbox">Hi</h2>
        <div>
            <Link href="/displayallsu" >
                <button>View Service User Button</button>
            </Link>
            <Link href="/addsu">
                <button>Add Service User Button</button>
            </Link>
            <Link href="/referrallinks">
                <button>Referral Link Button</button>
            </Link>
            <Link href="./">
                <button>Sign Out Button</button>
            </Link>
        </div>
    </>
)}
