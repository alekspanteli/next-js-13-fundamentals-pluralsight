import styles from "./styles.css"

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>CONFERENCE LAYOUT HEADER GOES HERE!</h1>
      </header>
      <section>{children}</section>
    </>
  );
}
