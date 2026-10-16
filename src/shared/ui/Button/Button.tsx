import type {ButtonHTMLAttributes} from 'react'
import styles from './Button.module.scss'

type ButtonVariant =
	| 'registration'
	| 'primary'
	| 'auth'
	| 'accent'
	| 'secondary'
	| 'point'
	| 'danger'

type ButtonSize = 'xl' | 'large' | 'large-special' | 'medium' | 'small' | 'compact'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
}

export const Button = ({
	variant = 'primary',
	size = 'medium',
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ''}`}
			{...props}>
			{children}
		</button>
	)
}
