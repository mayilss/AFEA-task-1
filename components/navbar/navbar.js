import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar({ orderBy }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">AFEAProducts</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <button onClick={() => orderBy("title")}>Order By Title</button>
          </li>
          <li>
            <button onClick={() => orderBy("price")}>Order By Price</button>
          </li>
          <li>
            <button onClick={() => orderBy("rating")}>Order By Rating</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
