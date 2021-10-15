import React from 'react';
import DataTable from './DataTable';

const employees = [{
        id: 1,
        firstName: "John",
        lastName: "Parks",
        dateOfBirth: "1980-10-01",
        startDate: "2015-09-01",
        department: "Human Resources",
        street: "10 Downing Street",
        city: "London",
        state: "UK",
        zipCode: "SW1A2AB"
    },
    {   
        id: 2,
        firstName: "Peter",
        lastName: "Edwards",
        dateOfBirth: "1958-03-15",
        startDate: "2007-11-29",
        department: "IT",
        street: "5 Helmet Row",
        city: "London",
        state: "UK",
        zipCode: "EC1V 3QJ"
        },
    {   
        id: 3,
        firstName: "Emily",
        lastName: "Jordan",
        dateOfBirth: "1991-02-15",
        startDate: "2017-12-02",
        department: "Accounting",
        street: "47 Downtown Road",
        city: "London",
        state: "UK",
        zipCode: "EC1V 3QJ"
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
    stripedColor: { control: 'color' },
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
    styleDataTableFooter : {
      table: {
        category: 'Style',
      },
    },
    styleDataTableRow: {
      table: {
        category: 'Style',
      },
    },
    styleDataTableCell : {
      table: {
        category: 'Style',
      },
    },
  },
};

const Template = (args) => <DataTable {...args} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  data: employees,
  columns: [
    {
      title: 'Id',
      key: 'id',
      format: 'number',
      widthRatio: .5, 
    },
    { title: 'First Name', 
      key: 'firstName',
      format: 'string',
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'Last Name', 
      key: 'lastName',
      format: 'string',
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'Start Date', 
      key: 'startDate',
      format: 'date', 
    },
    { title: 'Department', 
      key: 'department',
      format : 'string',
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'Date of Birth', 
      key: 'dateOfBirth',
      format: 'date', 
      widthRatio: 1, 
    },
    { title: 'Street',
      key: 'street',
      format: 'string',
      widthRatio: 2, 
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'City', 
      key: 'city', 
      format: 'string', 
      widthRatio: 1, 
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'State',
      key: 'state',
      format: 'string', 
      widthRatio: 1, 
      splitContent: true,
      splitContentRows: 2,
    },
    { title: 'Zip Code', 
      key: 'zipCode',
      format: 'string',
      widthRatio: 1, 
    },
  ],
  styleDataTableContainer : {},
  styleDataTableContentHeader : {
    fontSize: '16px',
    color: '#455A64',
  },
  styleDataTableHeader : {},
  styleDataTableContent : {},
  styleDataTableContentBody : {},
  styleDataTableContentFooter : {},
  styleDataTableColumn : {},
  styleDataTableRow : {},
  styleDataTableCell : {},
  styleDataTableFooter : {},
  striped: true,
}
