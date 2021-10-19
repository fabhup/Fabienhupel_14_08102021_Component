import { useState, useMemo } from 'react'
import { filterDatatableOnGlobalSearch } from '../utils/utils'

export const useFilterData = (data, defaultFilter = null) => {
    const [activeFilter, setActiveFilter] = useState(defaultFilter)

    const filteredData = useMemo(() => {
        let newData = [...data]
        if (activeFilter !== null) {
            newData = filterDatatableOnGlobalSearch(newData, activeFilter)
        }
        return newData
    }, [activeFilter, data])

    const filterData = (string) => {
        setActiveFilter(string)
    }
    return { filteredData: filteredData, filterData, activeFilter }
}
