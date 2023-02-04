import styles from '@/styles/components/Button.module.scss';

const Button = ({ variant = 'primary', fluid = false, float = true, position = '', className, children, ...props }) => {
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${fluid ? styles['button--fluid'] : ''} ${
        float ? styles['button--float'] : ''
      } ${styles[`button--${position}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
