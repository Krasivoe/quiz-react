import styles from './Button.module.scss';

const Button = ({ children, className, purpose, ...props }) => {
  const classes = ['btn'];

  switch (purpose) {
    case 'main':
      classes.push(styles.btnMain);
      break;
    case 'success':
      classes.push(styles.btnSuccess);
      break;
    case 'info':
      classes.push(styles.btnInfo);
      break;
    default:
      return;
  }
  return (
    <button
      className={className ? [className, ...classes].join(' ') : classes.join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
