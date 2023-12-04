import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <main>
        <h1>Login Page</h1>
        <h2>test branching</h2>
        <h3>Test with 2nt branch!</h3>
        <Link href="/dashboard">
          <button>Login Button</button>

        </Link>
    </main>
  )
}
