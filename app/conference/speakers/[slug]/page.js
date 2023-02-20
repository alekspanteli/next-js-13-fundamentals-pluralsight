import { speakerJson } from "@/app/conference/speakers/page";

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.reduce(
    (speaker) => speaker.name == params.slug
  );

  return speakerInfo;
}

export default function Page({ params }) {
  

  const speakerInfo = fetchSpeakerInfo(params);

  const { name, username } = speakerInfo;

  return (
    <div>
    <h3>{name}</h3>
    <h5>About: {username}</h5>

  </div>
  );
}

