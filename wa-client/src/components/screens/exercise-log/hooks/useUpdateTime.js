import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import ExerciseLogService from '../../../../services/exercise/exercises-log.service'

export const useUpdateTime = () => {
	const { id } = useParams()

	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation(
		['update log time'],
		({ timeId, body }) => ExerciseLogService.updateTime(timeId, body),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get exercise log', id])
			}
		}
	)

	return { updateTime: mutate, errorChange }
}
