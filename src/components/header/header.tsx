import React from "react";
import todoImg from "./../../assets/images/todo-ico.png";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li className={styles.liTitleImage}>
            <Link to="/">
              <h1 className={styles.title}>
                <img className={styles.image} src={todoImg} alt="Logo todo" />
                TODO LIST
              </h1>
            </Link>
          </li>
          <li>
            <Link to="/task">Tarefas</Link>
          </li>
          <li>
            <Link to="/about">Ajuda</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
