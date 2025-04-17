import { useQuery } from "@tanstack/react-query"
import { ApiKeys, fetchApi } from "../../../utils"

export const useCategories = (name:string) => {
    const result =  useQuery({
        queryKey: [ApiKeys.categories,name],
        queryFn:  fetchApi.Categories(name)})

    return result
}