import Link from 'next/link';

export default function Home() {
    return (
      <main>
        <h1>Welcome to speakers</h1>
        <h2><Link href="/conference">back</Link></h2>
      </main>
    )
  }
  