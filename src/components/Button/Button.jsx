import styles from './Button.module.css'

function Button({
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = [styles.button, styles[variant], size === 'sm' && styles.sm, className]
    .filter(Boolean)
    .join(' ')

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}

export default Button
