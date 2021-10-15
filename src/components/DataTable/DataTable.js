import {isEven} from '../../utils/utils'
import {DataTableContainer} from './DataTableContainer' 
import {DataTableHeader} from './DataTableHeader' 
import {DataTableContent} from './DataTableContent'
import {DataTableFooter} from './DataTableFooter' 
import {DataTableContentHeader} from './DataTableContentHeader' 
import {DataTableContentFooter} from './DataTableContentFooter' 
import {DataTableContentBody} from './DataTableContentBody.js' 
import {DataTableColumn} from './DataTableColumn' 
import {DataTableRow} from './DataTableRow' 
import {DataTableCell} from './DataTableCell' 
import { defaultStyles, defaultColors } from './defaultStyles';
import {useSortData} from '../../hooks/useSortData'
// import PropTypes from 'prop-types';

export default function DataTable({ 
    data, 
    columns, 
    striped = false,
    stripedColor = defaultColors.stripedColor,
    colors = defaultColors,
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
        dataTableContainer: {...defaultStyles.dataTableContainer, ...styleDataTableContainer},
        dataTableHeader: {...defaultStyles.dataTableHeader, ...styleDataTableHeader},
        dataTableContent: {...defaultStyles.dataTableContent, ...styleDataTableContent},
        dataTableContentHeader: {...defaultStyles.dataTableContentHeader, ...styleDataTableContentHeader},
        dataTableContentBody: {...defaultStyles.dataTableContentBody, ...styleDataTableContentBody},
        dataTableContentFooter: {...defaultStyles.dataTableContentFooter, ...styleDataTableContentFooter},
        dataTableColumn: {...defaultStyles.dataTableColumn, ...styleDataTableColumn},
        dataTableFooter: {...defaultStyles.dataTableFooter, ...styleDataTableFooter},
        dataTableRow: {...defaultStyles.dataTableRow, ...styleDataTableRow},
        dataTableCell: {...defaultStyles.dataTableCell, ...styleDataTableCell},
    }

    const { sortedData, sortData } = useSortData(data);

  return (
    <DataTableContainer className='dataTableContainer'  style={styles.dataTableContainer}>
        <DataTableHeader className='dataTableHeader' role="heading" style={styles.dataTableHeader}>
        {"Add Header"}
        </DataTableHeader>
        <DataTableContent style={styles.dataTableContent}>
            <DataTableContentHeader className='dataTableContentHeader' role="rowgroup" style={styles.dataTableContentHeader}>
                {columns.map((column) => (
                    <DataTableColumn className='dataTableColumn'
                        role="columnheader" 
                        style={styles.dataTableColumn} 
                        key={column.key}
                        column={column}
                        onClick={() => sortData(column.key, column.format)}
                    >
                        {column.title}
                    </DataTableColumn>  
                ))}
            </DataTableContentHeader>  
            <DataTableContentBody 
                className='dataTableContentBody' 
                role="rowgroup"
                style={styles.dataTableContentBody}
            >
                {sortedData.map((dataRow, index) => (
                    <DataTableRow 
                        className='dataTableRow'
                        role="row"
                        style={styles.dataTableRow}
                        key={index}
                        rowIndex={index}
                        striped={striped && isEven(index)}
                        stripedColor={stripedColor}
                    >
                    {columns.map((column, index) => (
                        <DataTableCell className='dataTableCell' 
                            style={styles.dataTableCell} 
                            role="gridcell"
                            key={index}
                            column={column}
                        >
                            <div className='dataTableCellValue' >
                                {!dataRow[column.key] ? "" : dataRow[column.key]}
                            </div>
                        </DataTableCell>  
                    ))}
                    </DataTableRow>
                ))}
            </DataTableContentBody>  
            <DataTableContentFooter 
                className='dataTableContentFooter' 
                style={styles.dataTableContentFooter}>
            </DataTableContentFooter>  
        </DataTableContent>  
        <DataTableFooter className='dataTableFooter' style={styles.dataTableFooter}>
            {"Add Footer"}
        </DataTableFooter>       
    </DataTableContainer>
  );
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