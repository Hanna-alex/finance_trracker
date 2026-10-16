import type {InputHTMLAttributes} from 'react'
import styles from './Input.module.scss'

type InputSize = 'auth' | 'small'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	size?: InputSize
	error?: string
}

export const Input = ({size = 'small', error, className, ...props}: InputProps) => {
	return (
		<div className={styles.wrapper}>
			<input
				className={`${styles.input} ${styles[size]} ${error ? styles.error : ''} ${className ?? ''}`}
				{...props}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	)
}
