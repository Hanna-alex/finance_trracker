import type {InputHTMLAttributes} from 'react'
import styles from './Radio.module.scss'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string
}

export const Radio = ({label, ...props}: RadioProps) => {
	return (
		<label className={styles.radio}>
			<input type='radio' className={styles.input} {...props} />

			{label && <span className={styles.label}>{label}</span>}
		</label>
	)
}
