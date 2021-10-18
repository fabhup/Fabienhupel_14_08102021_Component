import { isEven } from '../../utils/utils'
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
import { SelectRowsPerPage } from './SelectRowsPerPage'
import { defaultStyles, defaultColors } from './defaultStyles'
import { defaultProps } from './defaultProps'
import { useSortData } from '../../hooks/useSortData'
import { useState, useMemo } from 'react'

// import PropTypes from 'prop-types';

export default function DataTable({
    data,
    columns,
    striped = false,
    stripedColor = defaultColors.stripedColor,
    colors = defaultColors,
    rowsPerPageDefault = defaultProps.rowsPerPageDefault,
    rowsPerPageOptions = defaultProps.rowsPerPageOptions,
    rowsPerPagePosition = defaultProps.rowsPerPagePosition,
    pagination = true,
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

    const { sortedData, activeSort, sortData } = useSortData(data)
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

    return (
        <DataTableContainer
            className="dataTableContainer"
            style={styles.dataTableContainer}
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
                        rowsPerPageLabel={'Rows per page'}
                        style={null}
                        onChange={handleChangeRowsPerPage}
                    />
                )}
            </DataTableHeader>
            <DataTableContent style={styles.dataTableContent}>
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
                {`Page ${currentPage} / ${totalPages}`}
                {pagination && rowsPerPagePosition === 'bottom' && (
                    <SelectRowsPerPage
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        rowsPerPageLabel={'Rows per page'}
                        style={null}
                        onChange={handleChangeRowsPerPage}
                    />
                )}
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
