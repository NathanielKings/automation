import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({
  to,
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

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}

export default Button
