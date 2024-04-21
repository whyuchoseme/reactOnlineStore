import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { Button } from "../Button/component";
import { useTheme } from "../../contexts/Theme";
import classNames from "classnames/bind";

export const Modal = ({ children, onClose, withOverlay = true }) => {
  const {theme} = useTheme()

  return createPortal(
    <>
      {withOverlay && <div className={classNames(styles.overlay, styles[theme])} onClick={onClose}></div>}
      <div className={styles.modal}>
        <Button onClick={onClose}>X</Button>
        {children}
      </div>
    </>,
    document.getElementById("modal-container")
  );
};
