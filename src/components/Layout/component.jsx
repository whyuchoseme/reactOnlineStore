import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from "./styles.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
