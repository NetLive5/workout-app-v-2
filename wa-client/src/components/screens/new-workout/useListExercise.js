import { useQuery } from '@tanstack/react-query'

import ExercisesService from '../../../services/exercise/exercises.service'

const useListExercise = () => {
	return useQuery(['list exercises'], () => ExercisesService.getAll(), {
		select: ({ data }) => data
	})
}

export default useListExercise
