import {Button} from '@/shared/ui/Button/Button'
import {Input} from '@/shared/ui/Input/Input'
import {Radio} from '@/shared/ui/Radio/Radio'

function App() {
	return (
		<>
			<h1>Finance Tracker</h1>
			<Button variant='registration' size='xl'>
				Зарегистрироватся
			</Button>
			<Button variant='primary' size='large'>
				Добавитьть
			</Button>
			<Button variant='auth' size='large-special'>
				Войти
			</Button>
			<Button variant='accent' size='medium' type='button'>
				Фильтр
			</Button>
			<Button variant='secondary' size='medium'>
				Отмена
			</Button>
			<Button variant='point' size='small'>
				Применить
			</Button>
			<Button variant='danger' size='compact'>
				Удалить
			</Button>
			<br />
			<div style={{width: '300px', display: 'grid', gap: '16px'}}>
				<Input size='auth' placeholder='введите email' />
				<Input size='small' placeholder='введите сумму' />
				<Input size='auth' placeholder='Disabled' disabled />
				<Input size='auth' placeholder='Ошибка' error='Не коректный email' />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '12px',
				}}>
				<Radio name='transactionType' value='income' label='Доход' />
				<Radio name='transactionType' value='expense' label='Расход' />
				<Radio name='transactionType' value='transfer' label='Перевод' disabled />
			</div>
		</>
	)
}

export default App
