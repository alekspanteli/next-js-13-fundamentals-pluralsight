import Link from "next/link";
import Image from "next/image";
import OurStoryPic from "@/images/home-image-1.jpg";

import styles from "./home.module.css"

export default function Home() {
  return (
    <>
      <h1>Welcome to home</h1>
      <Image className={styles.img} src={OurStoryPic} alt="Test" />
    </>
  );
}
