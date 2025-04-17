import { useQuery } from "@tanstack/react-query"
import { ApiKeys, fetchApi } from "../../../utils"

export const useExplore = () => {
    const result =  useQuery({
        queryKey: [ApiKeys.explore],
        queryFn:  fetchApi.explore})
    return result
}