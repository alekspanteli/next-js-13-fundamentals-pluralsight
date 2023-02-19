import Link from 'next/link';

export default function Home() {
    return (
      <main>
        <h1>Welcome to conference</h1>
        <h2><Link href="/conference/speakers">speakers</Link></h2>
        <h2><Link href="/conference/sessions">sessions</Link></h2>
      </main>
    )
  }
  