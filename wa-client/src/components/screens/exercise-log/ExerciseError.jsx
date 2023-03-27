const ExerciseError = ({ errors }) => {
	return (
		<div style={{ with: '90%', margin: '0 auto' }}>
			{errors.map((error, index) => (
				<Alert key={error + index} type='error' text={error} />
			))}
			{errorChange && <Alert type='error' text={errorChange} />}
			{errorCompleted && <Alert type='error' text={errorCompleted} />}
		</div>
	)
}

export default ExerciseError
