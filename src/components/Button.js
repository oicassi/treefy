import styles from '@/styles/components/Button.module.scss';
import Link from 'next/link';

const Button = ({
  variant = 'primary',
  fluid = false,
  float = true,
  position = '',
  tag = 'button',
  className = '',
  children,
  ...props
}) => {
  const Tag = tag === 'Link' ? Link : tag;
  return (
    <Tag
      className={`${styles.button} ${styles[`button--${variant}`]} ${fluid ? styles['button--fluid'] : ''} ${
        float ? styles['button--float'] : ''
      } ${styles[`button--${position}`] ?? ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
