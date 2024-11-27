import styles from "./button.module.css";

const Button = ({ buttonText, onClick, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
