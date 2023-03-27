import { useCompleteLog } from './hooks/useCompleteLog'
import { useExerciseLog } from './hooks/useExerciseLog'
import { useUpdateTime } from './hooks/useUpdateTime'

import Loader from '../../ui/Loader'
import Alert from '../../ui/alert/Alert'

import ExerciseError from './ExerciseError'
import styles from './ExerciseLog.module.scss'
import HeaderExerciseLog from './HeaderExercisesLog'
import TableHeader from './table/TableHeader'
import TableRow from './table/TableRow'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()

	const { updateTime, errorChange } = useUpdateTime()
	const { completeLog, errorCompleted } = useCompleteLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[errorChange, errorCompleted]} />
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow item={item} key={item.id} />
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
