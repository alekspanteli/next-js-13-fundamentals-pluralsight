import Link from "next/link";

export let speakerJson = {};

async function fetchSpeakers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
  // { next: { revalidate: 20 } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // return res.json();
  const data = await res.json();
  speakerJson = data;
  return data;
  
}

export default async function Home() {
  const data = await fetchSpeakers();
  return (
    <main>
      <h1>Welcome to speakers</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {data.map(({ id, name, username }) => (
          <div key={id}>
            <Link href={`/conference/speakers/${name}`}><h5>{name}</h5></Link>
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
