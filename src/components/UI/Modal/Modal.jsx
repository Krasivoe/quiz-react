import styles from './Modal.module.scss';

const Modal = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? [styles.modal, styles.open].join(' ') : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
