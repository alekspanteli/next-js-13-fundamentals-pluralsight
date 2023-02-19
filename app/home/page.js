
import Image from "next/image";
import OurStoryPic from "@/images/logo-images.png";

import styles from "./home.module.css"

export default function Home() {
  return (
    <>
      <h1>Welcome to home</h1>
      <Image 
        className={styles.img} 
        src={OurStoryPic} 
        alt="Test" 
        quality={100}
        placeholder="blur"
        sizes="50vw"
      />
      {/* <img src="/logo-public.png" alt="test" /> */}
    </>
  );
}
