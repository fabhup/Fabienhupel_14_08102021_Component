import React from 'react'
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
import { NoData } from './NoData'
import { defaultStyles, defaultColors } from './defaultStyles'
import { defaultProps } from './defaultProps'
import { useSortData } from '../../hooks/useSortData'
import { useFilterData } from '../../hooks/useFilterData'
import { useState, useMemo } from 'react'
import { isEven } from '../../utils/utils'
import PropTypes from 'prop-types'

const DataTable = ({
    data,
    columns,
    striped,
    customColors,
    dataTableBorderPosition,
    dataTableCellMinWidth,
    dataTableRowsHeight,
    rowsPerPageDefault,
    rowsPerPageOptions,
    rowsPerPagePosition,
    rowsPerPageLabel,
    rowsPerPageTextAfter,
    dataTableRowsBorder,
    showPagination,
    searchBar,
    searchBarPlaceholder,
    showdataTableHeader,
    showDataTableRowCard,
    fontFamily,
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
    stylePagination,
    primaryColor = customColors.primaryColor || defaultColors.primaryColor,
    primaryColorBackground = customColors.primaryColorBackground ||
        defaultColors.primaryColorBackground,
    secondaryColor = customColors.secondaryColor ||
        defaultColors.secondaryColor,
    secondaryColorBackground = customColors.secondaryColorBackground ||
        defaultColors.secondaryColorBackground,
    stripedColor = customColors.stripedColor || defaultColors.stripedColor,
    stripedColorBackground = customColors.stripedColorBackground ||
        defaultColors.stripedColorBackground,
}) => {
    //State used for filter data with searchBar
    const { filteredData, activeFilter, filterData } = useFilterData(data)

    //State used for filter data with searchBar
    const { sortedData, activeSort, sortData } = useSortData(filteredData)
    const [rowsPerPage, setRowsPerPage] = useState(
        rowsPerPageDefault || rowsPerPageOptions[0]
    )
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(
        Math.ceil(data.length / rowsPerPage)
    )
    const visibleRows = useMemo(() => {
        if (showPagination) {
            const lastRowIndex = currentPage * rowsPerPage
            const firstRowIndex = lastRowIndex - rowsPerPage
            return sortedData.slice(firstRowIndex, lastRowIndex)
        }
        return sortedData
    }, [currentPage, showPagination, rowsPerPage, sortedData])

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

    const handleResetSearch = () => {
        filterData('')
        setCurrentPage(1)
    }

    // if a style parameter for a component is define it will replace the same parameter from defaultStyles but keep all other defaultStyles parameters
    const colors = {
        ...customColors,
        primaryColor: primaryColor,
        primaryColorBackGround: primaryColorBackground,
        secondaryColor: secondaryColor,
        primaryColorBackground: primaryColorBackground,
        secondaryColorBackground: secondaryColorBackground,
        stripedColor: stripedColor,
        stripedColorBackground: stripedColorBackground,
    }
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
        stylePagination: {
            ...defaultStyles(colors).stylePagination,
            ...stylePagination,
        },
    }

    return (
        <DataTableContainer
            className="dataTableContainer"
            style={styles.dataTableContainer}
            dataTableBorderPosition={dataTableBorderPosition}
            colors={colors}
            fontFamily={fontFamily}
        >
            {showdataTableHeader && (
                <DataTableHeader
                    className="dataTableHeader"
                    role="heading"
                    style={styles.dataTableHeader}
                >
                    {showPagination && rowsPerPagePosition === 'top' && (
                        <SelectRowsPerPage
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={rowsPerPageOptions}
                            label={rowsPerPageLabel}
                            textAfterLabel={rowsPerPageTextAfter}
                            style={null}
                            onChange={handleChangeRowsPerPage}
                            colors={colors}
                        />
                    )}
                    {searchBar && (
                        <SearchBar
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder={searchBarPlaceholder}
                            colors={colors}
                            onReset={(e) => handleResetSearch()}
                            value={activeFilter}
                        ></SearchBar>
                    )}
                </DataTableHeader>
            )}
            <DataTableContent
                style={styles.dataTableContent}
                dataTableBorderPosition={dataTableBorderPosition}
                colors={colors}
            >
                <DataTableContentHeader
                    className="dataTableContentHeader"
                    role="rowgroup"
                    style={styles.dataTableContentHeader}
                    colors={colors}
                    noResults={sortedData.length === 0}
                >
                    {columns.map((column) => (
                        <DataTableColumn
                            key={column.key}
                            column={column}
                            minWidth={dataTableCellMinWidth}
                            style={styles.dataTableColumn}
                            activeSort={
                                activeSort && activeSort.key === column.key
                                    ? activeSort
                                    : null
                            }
                            onClick={() => sortData(column.key, column.format)}
                            onKeyPress={(e) =>
                                (e.key === 'Enter' || e.key === ' ') &&
                                sortData(column.key, column.format)
                            }
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
                    rowsHeight={dataTableRowsHeight}
                    tabIndex={1}
                >
                    {sortedData.length > 0 ? (
                        visibleRows.map((dataRow, index) => (
                            <DataTableRow
                                className="dataTableRow"
                                role="row"
                                style={styles.dataTableRow}
                                key={index}
                                rowIndex={index}
                                striped={striped && isEven(index)}
                                colors={colors}
                                rowsBorder={dataTableRowsBorder}
                                rowsHeight={dataTableRowsHeight}
                                columns={columns}
                                dataRow={dataRow}
                                showDataTableRowCard={showDataTableRowCard}
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
                                        minWidth={dataTableCellMinWidth}
                                        activeSort={
                                            activeSort &&
                                            activeSort.key === column.key
                                                ? activeSort
                                                : null
                                        }
                                    />
                                ))}
                            </DataTableRow>
                        ))
                    ) : (
                        <NoData
                            colors={colors}
                            rowsHeight={dataTableRowsHeight}
                            rowsPerPage={
                                rowsPerPage > data.length
                                    ? data.length
                                    : rowsPerPage
                            }
                        ></NoData>
                    )}
                    {visibleRows.length < rowsPerPage &&
                        visibleRows.length > 0 &&
                        data.length > rowsPerPage && (
                            <DataTableEmptyRows
                                className="dataTableEmptyRows"
                                emptyRows={rowsPerPage - visibleRows.length}
                                colors={colors}
                                rowsHeight={dataTableRowsHeight}
                                rowsBorder={dataTableRowsBorder}
                            ></DataTableEmptyRows>
                        )}
                </DataTableContentBody>
                <DataTableContentFooter
                    className="dataTableContentFooter"
                    style={styles.dataTableContentFooter}
                ></DataTableContentFooter>
            </DataTableContent>
            {(showPagination || rowsPerPagePosition === 'bottom') && (
                <DataTableFooter
                    className="dataTableFooter"
                    style={styles.dataTableFooter}
                >
                    {rowsPerPagePosition === 'bottom' && (
                        <SelectRowsPerPage
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={rowsPerPageOptions}
                            label={rowsPerPageLabel}
                            textAfterLabel={rowsPerPageTextAfter}
                            style={null}
                            onChange={handleChangeRowsPerPage}
                            colors={colors}
                        />
                    )}
                    {showPagination && sortedData.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            rowsPerPage={rowsPerPage}
                            totalPages={totalPages}
                            totalRows={sortedData.length}
                            style={stylePagination}
                            onChangePage={handleChangePage}
                            colors={colors}
                        />
                    )}
                </DataTableFooter>
            )}
        </DataTableContainer>
    )
}
export default DataTable

DataTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            format: PropTypes.string.isRequired,
        })
    ).isRequired,
    striped: PropTypes.bool,
    customColors: PropTypes.shape({
        primaryColor: PropTypes.string,
        primaryColorBackground: PropTypes.string,
        secondaryColor: PropTypes.string,
        secondaryColorBackground: PropTypes.string,
        stripedColor: PropTypes.string,
        stripedColorBackground: PropTypes.string,
    }),
    dataTableBorderPosition: PropTypes.string,
    dataTableCellMinWidth: PropTypes.string,
    dataTableRowsHeight: PropTypes.string,
    rowsPerPageDefault: PropTypes.number,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    rowsPerPagePosition: PropTypes.string,
    rowsPerPageLabel: PropTypes.string,
    rowsPerPageTextAfter: PropTypes.string,
    dataTableRowsBorder: PropTypes.bool,
    showPagination: PropTypes.bool,
    searchBar: PropTypes.bool,
    searchBarPlaceholder: PropTypes.string,
    showdataTableHeader: PropTypes.bool,
    showDataTableRowCard: PropTypes.bool,
    fontFamily: PropTypes.string,
    styleDataTableContainer: PropTypes.shape(),
    styleDataTableHeader: PropTypes.shape(),
    styleDataTableContent: PropTypes.shape(),
    styleDataTableContentHeader: PropTypes.shape(),
    styleDataTableContentBody: PropTypes.shape(),
    styleDataTableContentFooter: PropTypes.shape(),
    styleDataTableColumn: PropTypes.shape(),
    styleDataTableFooter: PropTypes.shape(),
    styleDataTableRow: PropTypes.shape(),
    styleDataTableCell: PropTypes.shape(),
    stylePagination: PropTypes.shape(),
    primaryColor: PropTypes.string,
    primaryColorBackground: PropTypes.string,
    secondaryColor: PropTypes.string,
    secondaryColorBackground: PropTypes.string,
    stripedColor: PropTypes.string,
    stripedColorBackground: PropTypes.string,
}

DataTable.defaultProps = {
    striped: false,
    customColors: defaultColors,
    dataTableBorderPosition: defaultProps.dataTableBorderPosition,
    dataTableCellMinWidth: defaultProps.dataTableCellMinWidth,
    dataTableRowsHeight: defaultProps.dataTableRowsHeight,
    rowsPerPageDefault: defaultProps.rowsPerPageDefault,
    rowsPerPageOptions: defaultProps.rowsPerPageOptions,
    rowsPerPagePosition: defaultProps.rowsPerPagePosition,
    rowsPerPageLabel: defaultProps.rowsPerPageLabel,
    rowsPerPageTextAfter: defaultProps.rowsPerPageTextAfter,
    dataTableRowsBorder: defaultProps.dataTableRowsBorder,
    showPagination: defaultProps.showPagination,
    searchBar: defaultProps.searchBar,
    searchBarPlaceholder: defaultProps.searchBarPlaceholder,
    showdataTableHeader: defaultProps.showdataTableHeader,
    showDataTableRowCard: defaultProps.showDataTableRowCard,
    fontFamily: defaultProps.fontFamily,
    styleDataTableContainer: null,
    styleDataTableHeader: null,
    styleDataTableContent: null,
    styleDataTableContentHeader: null,
    styleDataTableContentBody: null,
    styleDataTableContentFooter: null,
    styleDataTableColumn: null,
    styleDataTableFooter: null,
    styleDataTableRow: null,
    styleDataTableCell: null,
    stylePagination: null,
}
