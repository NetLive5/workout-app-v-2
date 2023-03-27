import Alert from '../../ui/alert/Alert'

const ExerciseError = ({ errors }) => {
	return (
		<div style={{ with: '90%', margin: '0 auto' }}>
			{errors.map((error, index) =>
				error ? <Alert key={error + index} type='error' text={error} /> : null
			)}
			{errorChange && <Alert type='error' text={errorChange} />}
			{errorCompleted && <Alert type='error' text={errorCompleted} />}
		</div>
	)
}

export default ExerciseError
