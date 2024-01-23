import stylesAdd from "./buttonAdd.module.css";
import styles from "./button.module.css";

type ButtonAddProps = {
  onClick: () => void;
};

function ButtonAdd({ onClick }: ButtonAddProps) {
  return (
    <button className={`${styles.button} ${stylesAdd.buttonAdd}`} onClick={onClick}>
      Adicionar
    </button>
  );
}

export default ButtonAdd;
