export const defaultColors = {
    primaryColor: '#455A64',
    secondaryColor: '#455A64',
    stripedColor: '#ECEFF1',
}
export const defaultStyles = ({ colors = defaultColors }) => {
    return {
        dataTableContainer: {
            fontSize: '1em',
            color: colors.primaryColor,
            backgroundColor: null,
            fontFamily: 'Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
        },
        dataTableHeader: {
            fontSize: '1em',
        },
        dataTableContent: {},
        dataTableContentHeader: {
            fontWeight: 'bold',
            color: colors.primaryColor,
        },
        dataTableContentBody: {},
        dataTableContentFooter: {},
        dataTableColumn: {},
        dataTableFooter: {},
        dataTableRow: {},
        dataTableCell: {},
    }
}
