import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import ExercisesLogService from '../../../../services/exercise/exercises-log.service'

export const useCompleteLog = () => {
	const { mutate, error: errorCompleted } = useParams()

	const queryClient = useQueryClient()

	const navigate = useNavigate()

	const {} = useMutation(['complete log'], body => {
		ExercisesLogService.complete(id, body),
			{
				onSuccess: ({ data }) => {
					navigate(`/workout/${data.workoutLogId}`)
				}
			}
	})
	return { completeLog: mutate, errorCompleted }
}
