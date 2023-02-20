import Link from "next/link";

async function fetchSpeakers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  { next: { revalidate: 20 } }
  );
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
  const data = await fetchSpeakers();
  return (
    <main>
      <h1>Welcome to speakers</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {data.map(({ id, name, username }) => (
          <div key={id}>
            <h5>{name}</h5>
            <h6>{username}</h6>
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
