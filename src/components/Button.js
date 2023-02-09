import styles from '@/styles/components/Button.module.scss';

const Button = ({
  variant = 'primary',
  fluid = false,
  float = true,
  position = '',
  tag = 'button',
  className,
  children,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      className={`${styles.button} ${styles[`button--${variant}`]} ${fluid ? styles['button--fluid'] : ''} ${
        float ? styles['button--float'] : ''
      } ${styles[`button--${position}`]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
