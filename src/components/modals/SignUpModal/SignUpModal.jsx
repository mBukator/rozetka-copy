import { Alert, Button, Col, Divider, Form, Input, Modal, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

function SignUpModal({ open, onClose, click }) {
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const { signup } = useAuth()

	const onSubmit = async (values) => {
		if (values.password !== values.passwordConfirm) {
			return setError('Passwords do not match')
		}

		try {
			setError('')
			setLoading(true)
			await signup(values.email, values.password)
			onClose()
		} catch (error) {
			setError('Failed to create an account ;(')
		}
		setLoading(false)
	}

	return (
		<>
			<Modal
				title={<Title level={3}>Реєстрація</Title>}
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
							<Form.Item label='Підтвердження паролю' name='passwordConfirm'>
								<Input.Password size='large' required />
							</Form.Item>
							{error.length > 0 ? (
								<Alert message={error} type='error' style={{ marginBottom: 20 }} />
							) : null}
							<Form.Item>
								<Button
									size='large'
									style={{ backgroundColor: '#00A046' }}
									type='primary'
									block
									loading={loading}
									htmlType='submit'>
									Зареєструватись
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
								Увійти
							</span>
						</div>
					</Col>
					<Col>
						<Divider type='vertical' style={{ height: '100%' }} />
					</Col>
					<Col span={9}></Col>
				</Row>
			</Modal>
		</>
	)
}

export default SignUpModal
