export const defaultColors = {
    primaryColor: '#37474F',
    primaryColorBackground: 'white',
    secondaryColor: '#ECEFF1',
    secondaryColorBackground: '#455A64',
    stripedColor: '#37474F',
    stripedColorBackground: '#ECEFF1',
}

export const defaultStyles = (colors) => {
    return {
        dataTableContainer: {
            fontSize: '1.2em',
            color: colors.primaryColor,
            fontFamily: 'Roboto, RobotoDraft, Helvetica, Arial, sans-serif',
        },
        dataTableHeader: {
            fontSize: '1em',
        },
        dataTableContent: {},
        dataTableContentHeader: {
            fontWeight: 'bold',
            color: colors.secondaryColor,
            background: colors.secondaryColorBackground,
            fontSize: '1.1em',
        },
        dataTableContentBody: {
            color: colors.primaryColor,
        },
        dataTableContentFooter: {},
        dataTableColumn: {},
        dataTableFooter: {
            fontSize: '1.1em',
        },
        dataTableRow: {},
        dataTableCell: {},
        stylePagination: {},
    }
}
