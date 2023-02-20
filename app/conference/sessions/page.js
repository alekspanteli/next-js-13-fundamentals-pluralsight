import Link from "next/link";

async function fetchSessions() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await fetchSessions();
  return (
    <main>
      <h1>Welcome to sessions</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        { data && data.map(({ id, title, body }) => (
          <div key={id}>
            <h5>{title}</h5>
            <h6>{body}</h6>
          </div>
        ))}
      </div>
      <div>Last Rendered: {new Date().toLocaleTimeString()}</div>
      <h2>
        <Link href="/conference">back</Link>
      </h2>
    </main>
  );
}
