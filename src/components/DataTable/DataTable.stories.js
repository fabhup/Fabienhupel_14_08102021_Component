import React from 'react'
import DataTable from './DataTable'

const employees = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Parks',
        dateOfBirth: '1980-10-01',
        startDate: '2015-09-01',
        department: 'Human Resources',
        street: '10 Downing Street',
        city: 'London',
        state: 'UK',
        zipCode: 'SW1A2AB',
    },
    {
        id: 2,
        firstName: 'Peter',
        lastName: 'Edwards',
        dateOfBirth: '1958-03-15',
        startDate: '2007-11-29',
        department: 'IT',
        street: '5 Helmet Row',
        city: 'London',
        state: 'UK',
        zipCode: 'EC1V3QJ',
    },
    {
        id: 3,
        firstName: 'Emily',
        lastName: 'Jordan',
        dateOfBirth: '1991-02-15',
        startDate: '2017-12-02',
        department: 'Accounting',
        street: '47 Downtown Road',
        city: 'London',
        state: 'UK',
        zipCode: 'SW1A2AB',
    },
    {
        id: 4,
        firstName: 'Frank',
        lastName: 'Robert',
        dateOfBirth: '1996-02-12',
        startDate: '2015-10-02',
        department: 'IT',
        street: '5, Rue de Courcelles',
        city: 'Paris',
        state: 'France',
        zipCode: '75000',
    },
    {
        id: 5,
        firstName: 'Romain',
        lastName: 'Hervé',
        dateOfBirth: '1992-05-09',
        startDate: '2014-11-15',
        department: 'Marketing',
        street: '5, Allée des mouettes',
        city: 'Rennes',
        state: 'France',
        zipCode: '35000',
    },
    {
        id: 6,
        firstName: 'Fabien',
        lastName: 'Dumont',
        dateOfBirth: '1985-01-09',
        startDate: '2005-12-10',
        department: 'Marketing',
        street: '42, Rue de Rennes',
        city: 'Nantes',
        state: 'France',
        zipCode: '44000',
    },
    {
        id: 7,
        firstName: 'Julia',
        lastName: 'Peters',
        dateOfBirth: '2002-05-11',
        startDate: '2014-11-05',
        department: 'Accounting',
        street: '52 Park Avenue',
        city: 'Liverpool',
        state: 'UK',
        zipCode: 'HDGHSQJ',
    },
    {
        id: 8,
        firstName: 'Samantha',
        lastName: 'Edwards',
        dateOfBirth: '1975-04-15',
        startDate: '2017-10-29',
        department: 'Human Resources',
        street: '132 King Avenue',
        city: 'New York',
        state: 'USA',
        zipCode: 'GDTSVZK',
    },
    {
        id: 9,
        firstName: 'Marie',
        lastName: 'Durand',
        dateOfBirth: '1970-04-11',
        startDate: '2012-02-02',
        department: 'Human Resources',
        street: '47 Rue de Nantes',
        city: 'Rennes',
        state: 'France',
        zipCode: '35000',
    },
    {
        id: 10,
        firstName: 'Francis',
        lastName: 'Henry',
        dateOfBirth: '1961-02-17',
        startDate: '2001-10-01',
        department: 'IT',
        street: "5 Rue de l'Alma",
        city: 'Paris',
        state: 'France',
        zipCode: '75000',
    },
    {
        id: 11,
        firstName: 'Jean-Sébastien',
        lastName: 'De la Riboisière',
        dateOfBirth: '1987-02-15',
        startDate: '2018-01-02',
        department: 'Finance',
        street: '32 Quai des Ormes',
        city: 'Paris',
        state: 'France',
        zipCode: '75000',
    },
    {
        id: 12,
        firstName: 'Edouard',
        lastName: 'Martin',
        dateOfBirth: '1984-11-15',
        startDate: '2019-12-01',
        department: 'Marketing',
        street: '52, Rue du parc',
        city: 'Nantes',
        state: 'France',
        zipCode: '44000',
    },
]

export default {
    title: 'Example/DataTable',
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
}

const Template = (args) => <DataTable {...args} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {
    data: employees,
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
}

export const NoHeaderAndSimpleRows = Template.bind({})
const colorsNoHeaderAndSimpleRows = {
    primaryColor: '#004D40',
    primaryColorBackground: '#ECEFF1',
    secondaryColor: 'white',
    secondaryColorBackground: '#004D40',
}
NoHeaderAndSimpleRows.args = {
    data: employees,
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
    fontFamily: 'Verdana, Arial, sans-serif',
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
    customColors: colorsNoHeaderAndSimpleRows,
    styleDataTableColumn: {},
    styleDataTableRow: {},
    styleDataTableCell: {},
    styleDataTableFooter: {},
    pagination: false,
    striped: false,
    showHeader: false,
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
    data: employees,
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
    showHeader: true,
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
    data: employees,
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
    showHeader: true,
    dataTableRowsBorder: false,
    dataTableRowsHeight: '3rem',
    pagination: true,
}
