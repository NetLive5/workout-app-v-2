import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExercisesLogService from '../../../../services/exercise/exercises-log.service'

export const useUpdateTime = () => {
	const { mutate, error: errorChange } = useParams()
	const queryClient = useQueryClient()
	const {} = useMutation(['update log time'], (timeId, body) => {
		ExercisesLogService.updateTime(timeId, body),
			{
				onSuccess: () => {
					queryClient.invalidateQueries(['get exercise log ', id])
				}
			}
	})
	return { updateTime: mutate, errorChange }
}
