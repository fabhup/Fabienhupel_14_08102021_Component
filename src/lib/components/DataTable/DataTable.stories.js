import React from 'react'
import DataTable from './DataTable'
import MDXDataTable from './DataTable.mdx'
import { dataForStories } from './dataForStories'

export default {
    title: 'Example of Components/DataTable',
    component: DataTable,
    argTypes: {
        data: {
            table: {
                category: 'Data',
            },
        },
        columns: {
            table: {
                category: 'Data',
            },
        },
        rowsPerPagePosition: {
            options: ['bottom', 'top'],
            control: { type: 'radio' },
        },
        dataTableBorderPosition: {
            options: ['content', 'container', 'no border'],
            control: { type: 'radio' },
        },
        primaryColor: { control: 'color' },
        primaryColorBackground: { control: 'color' },
        secondaryColor: { control: 'color' },
        secondaryColorBackground: { control: 'color' },
        stripedColor: { control: 'color' },
        stripedColorBackground: { control: 'color' },
        styleDataTableContainer: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableHeader: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableContent: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableContentHeader: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableContentBody: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableContentFooter: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableColumn: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableFooter: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableRow: {
            table: {
                category: 'Style',
            },
        },
        styleDataTableCell: {
            table: {
                category: 'Style',
            },
        },
    },
    parameters: {
        docs: {
            page: MDXDataTable,
        },
    },
}

const Template = (args) => <DataTable {...args} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {
    data: dataForStories,
    columns: [
        {
            title: 'First Name',
            key: 'firstName',
            format: 'string',
            splitContent: true,
            splitContentRows: 2,
        },
        {
            title: 'Last Name',
            key: 'lastName',
            format: 'string',
            splitContent: true,
            splitContentRows: 2,
        },
        { title: 'Start Date', key: 'startDate', format: 'date' },
        {
            title: 'Department',
            key: 'department',
            format: 'string',
            splitContent: true,
            splitContentRows: 2,
        },
        {
            title: 'Date of Birth',
            key: 'dateOfBirth',
            format: 'date',
            widthRatio: 1,
        },
        {
            title: 'Street',
            key: 'street',
            format: 'string',
            widthRatio: 2,
            splitContent: true,
            splitContentRows: 2,
        },
        {
            title: 'City',
            key: 'city',
            format: 'string',
            widthRatio: 1,
            splitContent: true,
            splitContentRows: 2,
        },
        {
            title: 'State',
            key: 'state',
            format: 'string',
            widthRatio: 1,
            splitContent: true,
            splitContentRows: 2,
        },
        { title: 'Zip Code', key: 'zipCode', format: 'string', widthRatio: 1 },
    ],
    dataTableBorderPosition: 'content',
    rowsPerPagePosition: 'top',
    rowsPerPageLabel: 'Show ',
    rowsPerPageTextAfter: 'entries per page',
    styleDataTableContainer: {},
    styleDataTableContentHeader: {},
    styleDataTableHeader: {},
    styleDataTableContent: {},
    styleDataTableContentBody: {},
    styleDataTableContentFooter: {},
    styleDataTableColumn: {},
    styleDataTableRow: {},
    styleDataTableCell: {},
    styleDataTableFooter: {},
    striped: true,
    showDataTableHeader: true,
    showPagination: true,
}

export const NoHeaderAndSimpleRows = Template.bind({})
const colorsNoHeaderAndSimpleRows = {
    primaryColor: '#004D40',
    primaryColorBackground: '#ECEFF1',
    secondaryColor: 'white',
    secondaryColorBackground: '#004D40',
}
NoHeaderAndSimpleRows.args = {
    data: dataForStories,
    columns: [
        {
            title: 'First Name',
            key: 'firstName',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Last Name',
            key: 'lastName',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Department',
            key: 'department',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Date of Birth',
            key: 'dateOfBirth',
            format: 'date',
            widthRatio: 1,
        },
    ],
    fontFamily: 'Verdana, Arial, sans-serif',
    dataTableBorderPosition: 'container',
    rowsPerPagePosition: 'top',
    rowsPerPageLabel: 'Rows per page',
    rowsPerPageTextAfter: '',
    styleDataTableContainer: {
        padding: '20px',
        maxWidth: '800px',
        fontSize: '1rem',
    },
    styleDataTableContentHeader: {
        fontSize: '0.8rem',
    },
    styleDataTableHeader: {
        fontSize: '1rem',
        marginBottom: '1rem',
    },
    styleDataTableContent: {},
    styleDataTableContentBody: {
        fontSize: '0.8rem',
    },
    styleDataTableContentFooter: {},
    customColors: colorsNoHeaderAndSimpleRows,
    styleDataTableColumn: {},
    styleDataTableRow: {},
    styleDataTableCell: {},
    styleDataTableFooter: {
        fontSize: '0.8rem',
    },
    showPagination: false,
    striped: false,
    showDataTableHeader: false,
    dataTableRowsBorder: true,
    showDataTableRowCard: true,
    dataTableCellMinWidth: '8em',
    dataTableRowsHeight: '2rem',
}

export const DarkStyle = Template.bind({})
const colorsDarkStyle = {
    primaryColor: '#ffffff',
    primaryColorBackground: '#2f2f2f',
    secondaryColor: '#e8e8e8',
    secondaryColorBackground: '#1e1e1e',
    stripedColor: '#c7c7c7',
    stripedColorBackground: '#6d6d6d',
}
DarkStyle.args = {
    data: dataForStories,
    columns: [
        {
            title: 'First Name',
            key: 'firstName',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Last Name',
            key: 'lastName',
            format: 'string',
            splitContent: false,
        },
        { title: 'Start Date', key: 'startDate', format: 'date' },
        {
            title: 'Department',
            key: 'department',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Date of Birth',
            key: 'dateOfBirth',
            format: 'date',
            widthRatio: 1,
        },
        {
            title: 'Street',
            key: 'street',
            format: 'string',
            widthRatio: 2,
            splitContent: false,
        },
        {
            title: 'City',
            key: 'city',
            format: 'string',
            widthRatio: 1,
            splitContent: false,
        },
        {
            title: 'State',
            key: 'state',
            format: 'string',
            widthRatio: 1,
            splitContent: false,
        },
        { title: 'Zip Code', key: 'zipCode', format: 'string', widthRatio: 1 },
    ],
    dataTableBorderPosition: 'content',
    rowsPerPagePosition: 'top',
    rowsPerPageLabel: 'Rows per page',
    rowsPerPageTextAfter: '',
    styleDataTableContainer: {},
    styleDataTableContentHeader: {},
    styleDataTableHeader: {},
    styleDataTableContent: {},
    styleDataTableContentBody: {},
    styleDataTableContentFooter: {},
    customColors: colorsDarkStyle,
    styleDataTableColumn: {},
    styleDataTableRow: {},
    styleDataTableCell: {},
    styleDataTableFooter: {},
    striped: true,
    showDataTableHeader: true,
    showPagination: true,
    dataTableRowsBorder: false,
    dataTableRowsHeight: '3rem',
}

export const LightStyle = Template.bind({})
const colorsLightStyle = {
    primaryColor: '#545454',
    primaryColorBackground: '#ffffff',
    secondaryColor: '#73797e',
    secondaryColorBackground: '#ffffff',
    stripedColor: '#5a5a5a',
    stripedColorBackground: '#f2f4f6',
}
LightStyle.args = {
    data: dataForStories,
    columns: [
        {
            title: 'First Name',
            key: 'firstName',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Last Name',
            key: 'lastName',
            format: 'string',
            splitContent: false,
        },
        { title: 'Start Date', key: 'startDate', format: 'date' },
        {
            title: 'Department',
            key: 'department',
            format: 'string',
            splitContent: false,
        },
        {
            title: 'Date of Birth',
            key: 'dateOfBirth',
            format: 'date',
            widthRatio: 1,
        },
        {
            title: 'Street',
            key: 'street',
            format: 'string',
            widthRatio: 2,
            splitContent: false,
        },
        {
            title: 'City',
            key: 'city',
            format: 'string',
            widthRatio: 1,
            splitContent: false,
        },
        {
            title: 'State',
            key: 'state',
            format: 'string',
            widthRatio: 1,
            splitContent: false,
        },
        { title: 'Zip Code', key: 'zipCode', format: 'string', widthRatio: 1 },
    ],
    dataTableBorderPosition: 'container',
    rowsPerPagePosition: 'top',
    rowsPerPageLabel: 'Rows per page',
    rowsPerPageTextAfter: '',
    styleDataTableContainer: {},
    styleDataTableContentHeader: {},
    styleDataTableHeader: {},
    styleDataTableContent: {},
    styleDataTableContentBody: {},
    styleDataTableContentFooter: {},
    customColors: colorsLightStyle,
    styleDataTableColumn: {},
    styleDataTableRow: {},
    styleDataTableCell: {},
    styleDataTableFooter: {},
    striped: true,
    showDataTableHeader: true,
    dataTableRowsBorder: false,
    dataTableRowsHeight: '3rem',
    showPagination: true,
}
