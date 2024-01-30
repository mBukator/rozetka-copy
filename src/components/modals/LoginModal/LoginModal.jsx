import React, { useState } from 'react'
import { Alert, Button, Col, Divider, Form, Input, Modal, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import { useAuth } from '../../../context/AuthContext'

function LoginModal({ click, open, onClose }) {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const { login, currentUser } = useAuth()

	const onSubmit = async (values) => {
		try {
			setError('')
			setLoading(true)
			await login(values.email, values.password)
			onClose()
		} catch (error) {
			console.error('Error during login: ', error)

			if (error.code === 'auth/invalid-credential') {
				setError('Неправильна ел.пошта або пароль.')
			} else {
				setError('Помилка входу. Будь ласка, спробуйте ще раз.')
			}
		}
		setLoading(false)
	}

	return (
		<>
			<Modal
				title={<Title level={3}>Вхід</Title>}
				centered
				open={open}
				onCancel={onClose}
				footer={null}
				width={640}>
				<Divider style={{ width: '100%' }} />
				<Row>
					<Col span={14}>
						<Form layout='vertical' onFinish={onSubmit}>
							<Form.Item label='Ел. пошта або телефон' name='email'>
								<Input required size='large' />
							</Form.Item>
							<Form.Item label='Пароль' name='password'>
								<Input.Password size='large' required />
							</Form.Item>
							{error && <Alert message={error} type='error' style={{ marginBottom: 20 }} />}
							<Form.Item>
								<Button
									size='large'
									style={{ backgroundColor: '#00A046' }}
									type='primary'
									block
									loading={loading}
									htmlType='submit'>
									Увійти
								</Button>
							</Form.Item>
						</Form>
						<div
							style={{
								width: '100%',
								textAlign: 'center',
							}}
							onClick={click}>
							<span
								style={{
									fontSize: '16px',
									color: '#3E77AA',
									cursor: 'pointer',
								}}>
								Зареєструватись
							</span>
						</div>
					</Col>
					<Col>
						<Divider type='vertical' style={{ height: '100%' }} />
					</Col>
					<Col span={9}>
						{currentUser ? <div>{currentUser.email}</div> : <div>Not logged in</div>}
					</Col>
				</Row>
			</Modal>
		</>
	)
}

export default LoginModal
