import todoImg from "./../../assets/images/todo-ico.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <div>
        <h1 className={styles.title}>
          <img className={styles.image} src={todoImg} alt="Logo todo" />TODO LIST
        </h1>
      </div>
    </header>

  );
}

export default Header;
