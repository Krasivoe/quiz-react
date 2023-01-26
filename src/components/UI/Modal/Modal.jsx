import styles from './Modal.module.scss';
import React, { useEffect } from 'react';

const Modal = React.memo(
  ({ children, active, setActive }) => {
    useEffect(() => {
      if (active) {
        const close = event => {
          if (event.key === 'Escape') {
            setActive(false);
          }
        };
        document.addEventListener('keydown', close);
        return () => document.removeEventListener('keydown', close);
      }
    }, [active, setActive]);

    return (
      <div
        className={active ? [styles.modal, styles.open].join(' ') : styles.modal}
        onClick={() => setActive(false)}
      >
        {document.documentElement.clientWidth < 768 && (
          <span className={styles.cross} onClick={() => setActive(false)} />
        )}
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (nextProps.active || (prevProps.active && !nextProps.active)) {
      // Если необходимо открыть или закрыть
      return false;
    } else {
      return true;
    }
  }
);

export default Modal;
