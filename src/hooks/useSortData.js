import { useState, useMemo } from 'react'

export const useSortData = (data, defaultSort = null) => {
    const [activeSort, setActiveSort] = useState(defaultSort);
  
    const sortedData = useMemo(() => {
      let newData= [...data];
      if (activeSort !== null) {
        newData.sort((a, b) => {
            if (activeSort.direction==='asc') {
                switch(activeSort.format) {
                    case("date"):
                        return new Date(b[activeSort.key]) - new Date(a[activeSort.key]);
                    case("number"):
                        return b[activeSort.key] - a[activeSort.key];
                    default:
                        return b[activeSort.key] > a[activeSort.key] ? 1 : -1;
                }
            }
            else {
                switch(activeSort.format) {
                    case("date"):
                        return new Date(a[activeSort.key]) - new Date(b[activeSort.key]);
                    case("number"):
                        return a[activeSort.key] - b[activeSort.key];
                    default:
                        return a[activeSort.key] > b[activeSort.key] ? 1 : -1;
                }
            }
        });
      }
      return newData;
    }, [activeSort, data]);
  
    const sortData = (key, format) => {
      let direction = 'asc';
      if (
        activeSort &&
        activeSort.key === key &&
        activeSort.format === format &&
        activeSort.direction === 'asc'
      ) {
        direction = 'desc';
      }
      setActiveSort({ key, format, direction });
    };
    return { sortedData: sortedData, sortData, activeSort };
  };