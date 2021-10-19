import { DataTableContainer } from './DataTableContainer'
import { DataTableHeader } from './DataTableHeader'
import { DataTableContent } from './DataTableContent'
import { DataTableFooter } from './DataTableFooter'
import { DataTableContentHeader } from './DataTableContentHeader'
import { DataTableContentFooter } from './DataTableContentFooter'
import { DataTableContentBody } from './DataTableContentBody.js'
import { DataTableColumn } from './DataTableColumn'
import { DataTableRow } from './DataTableRow'
import { DataTableCell } from './DataTableCell'
import { DataTableEmptyRows } from './DataTableEmptyRows'
import { SelectRowsPerPage } from './SelectRowsPerPage'
import { SearchBar } from './SearchBar'
import { Pagination } from './Pagination'
import { defaultStyles, defaultColors } from './defaultStyles'
import { defaultProps } from './defaultProps'
import { useSortData } from '../../hooks/useSortData'
import { useFilterData } from '../../hooks/useFilterData'
import { useState, useMemo } from 'react'
import { isEven } from '../../utils/utils'

// import PropTypes from 'prop-types';

export default function DataTable({
    data,
    columns,
    striped = false,
    stripedColor = defaultColors.stripedColor,
    colors = defaultColors,
    dataTableBorderPosition = defaultProps.dataTableBorderPosition,
    rowsPerPageDefault = defaultProps.rowsPerPageDefault,
    rowsPerPageOptions = defaultProps.rowsPerPageOptions,
    rowsPerPagePosition = defaultProps.rowsPerPagePosition,
    rowsPerPageLabel = defaultProps.rowsPerPageLabel,
    rowsPerPageTextAfter = defaultProps.rowsPerPageTextAfter,
    pagination = true,
    searchBar = defaultProps.searchBar,
    searchBarPlaceholder = defaultProps.searchBarPlaceholder,
    styleDataTableContainer,
    styleDataTableHeader,
    styleDataTableContent,
    styleDataTableContentHeader,
    styleDataTableContentBody,
    styleDataTableContentFooter,
    styleDataTableColumn,
    styleDataTableFooter,
    styleDataTableRow,
    styleDataTableCell,
}) {
    // if a style parameter for a component is define it will replace the same parameter from defaultStyles but keep all other defaultStyles parameters
    const styles = {
        dataTableContainer: {
            ...defaultStyles(colors).dataTableContainer,
            ...styleDataTableContainer,
        },
        dataTableHeader: {
            ...defaultStyles(colors).dataTableHeader,
            ...styleDataTableHeader,
        },
        dataTableContent: {
            ...defaultStyles(colors).dataTableContent,
            ...styleDataTableContent,
        },
        dataTableContentHeader: {
            ...defaultStyles(colors).dataTableContentHeader,
            ...styleDataTableContentHeader,
        },
        dataTableContentBody: {
            ...defaultStyles(colors).dataTableContentBody,
            ...styleDataTableContentBody,
        },
        dataTableContentFooter: {
            ...defaultStyles(colors).dataTableContentFooter,
            ...styleDataTableContentFooter,
        },
        dataTableColumn: {
            ...defaultStyles(colors).dataTableColumn,
            ...styleDataTableColumn,
        },
        dataTableFooter: {
            ...defaultStyles(colors).dataTableFooter,
            ...styleDataTableFooter,
        },
        dataTableRow: {
            ...defaultStyles(colors).dataTableRow,
            ...styleDataTableRow,
        },
        dataTableCell: {
            ...defaultStyles(colors).dataTableCell,
            ...styleDataTableCell,
        },
    }
    const { filteredData, activeFilter, filterData } = useFilterData(data)
    const { sortedData, activeSort, sortData } = useSortData(filteredData)
    const [rowsPerPage, setRowsPerPage] = useState(
        rowsPerPageDefault || rowsPerPageOptions[0]
    )
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(
        Math.ceil(data.length / rowsPerPage)
    )
    const visibleRows = useMemo(() => {
        if (pagination) {
            const lastRowIndex = currentPage * rowsPerPage
            const firstRowIndex = lastRowIndex - rowsPerPage
            return sortedData.slice(firstRowIndex, lastRowIndex)
        }
        return sortedData
    }, [currentPage, pagination, rowsPerPage, sortedData])

    const handleChangeRowsPerPage = (newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage)
        setCurrentPage(1)
        setTotalPages(Math.ceil(sortedData.length / newRowsPerPage))
    }

    const handleChangePage = (newPageIndex) => {
        const newTotalPages = Math.ceil(sortedData.length / rowsPerPage)
        const newCurrentPage =
            newPageIndex < 1
                ? 1
                : newPageIndex >= newTotalPages
                ? newTotalPages
                : newPageIndex
        setCurrentPage(newCurrentPage)
        setTotalPages(newTotalPages)
    }

    const handleSearch = (searchedString) => {
        filterData(searchedString)
        setCurrentPage(1)
    }

    return (
        <DataTableContainer
            className="dataTableContainer"
            style={styles.dataTableContainer}
            dataTableBorderPosition={dataTableBorderPosition}
        >
            <DataTableHeader
                className="dataTableHeader"
                role="heading"
                style={styles.dataTableHeader}
            >
                {pagination && rowsPerPagePosition === 'top' && (
                    <SelectRowsPerPage
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        label={rowsPerPageLabel}
                        textAfterLabel={rowsPerPageTextAfter}
                        style={null}
                        onChange={handleChangeRowsPerPage}
                    />
                )}
                {searchBar && (
                    <SearchBar
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder={searchBarPlaceholder}
                    ></SearchBar>
                )}
            </DataTableHeader>
            <DataTableContent
                style={styles.dataTableContent}
                dataTableBorderPosition={dataTableBorderPosition}
            >
                <DataTableContentHeader
                    className="dataTableContentHeader"
                    role="rowgroup"
                    style={styles.dataTableContentHeader}
                >
                    {columns.map((column) => (
                        <DataTableColumn
                            key={column.key}
                            column={column}
                            style={styles.dataTableColumn}
                            activeSort={
                                activeSort && activeSort.key === column.key
                                    ? activeSort
                                    : null
                            }
                            onClick={() => sortData(column.key, column.format)}
                            colors={colors}
                        />
                    ))}
                </DataTableContentHeader>
                <DataTableContentBody
                    className="dataTableContentBody"
                    role="rowgroup"
                    style={styles.dataTableContentBody}
                    minRows={
                        sortedData.length < rowsPerPage && currentPage === 1
                            ? sortedData.length
                            : rowsPerPage
                    }
                >
                    {visibleRows.map((dataRow, index) => (
                        <DataTableRow
                            className="dataTableRow"
                            role="row"
                            style={styles.dataTableRow}
                            key={index}
                            rowIndex={index}
                            striped={striped && isEven(index)}
                            stripedColor={stripedColor}
                        >
                            {columns.map((column, index) => (
                                <DataTableCell
                                    style={styles.dataTableCell}
                                    value={
                                        !dataRow[column.key]
                                            ? ''
                                            : dataRow[column.key]
                                    }
                                    key={index}
                                    column={column}
                                    activeSort={
                                        activeSort &&
                                        activeSort.key === column.key
                                            ? activeSort
                                            : null
                                    }
                                />
                            ))}
                        </DataTableRow>
                    ))}
                    {visibleRows.length < rowsPerPage && currentPage > 1 && (
                        <DataTableEmptyRows
                            className="dataTableEmptyRows"
                            emptyRows={rowsPerPage - visibleRows.length}
                            stripedColor={stripedColor}
                        ></DataTableEmptyRows>
                    )}
                </DataTableContentBody>
                <DataTableContentFooter
                    className="dataTableContentFooter"
                    style={styles.dataTableContentFooter}
                ></DataTableContentFooter>
            </DataTableContent>
            <DataTableFooter
                className="dataTableFooter"
                style={styles.dataTableFooter}
            >
                {pagination && rowsPerPagePosition === 'bottom' && (
                    <SelectRowsPerPage
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        label={rowsPerPageLabel}
                        textAfterLabel={rowsPerPageTextAfter}
                        style={null}
                        onChange={handleChangeRowsPerPage}
                    />
                )}
                {
                    <Pagination
                        currentPage={currentPage}
                        rowsPerPage={rowsPerPage}
                        totalPages={totalPages}
                        totalRows={sortedData.length}
                        style={null}
                        onChangePage={handleChangePage}
                    />
                }
            </DataTableFooter>
        </DataTableContainer>
    )
}

// DataTable.propTypes = {
//     data: PropTypes.shape({
//         data: PropTypes.shape(),
//         columns: PropTypes.arrayOf(
//             PropTypes.shape({
//                 title: PropTypes.string.isRequired,
//                 data: PropTypes.string.isRequired,
//             })
//         )
//     }
//     ),
// };

// DataTable.defaultProps = {
//   backgroundColor: null,
// };
