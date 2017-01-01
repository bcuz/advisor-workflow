const colors = {
  red: '#E26563',
  pink: '#EC9898',
  gray: 'gray',
  darkGray: '#D9D9D9',
  lightGray: '#EFEFEF',
  midGray: '#CCCCCC'
}

const styles = {
  table: 'text-align: left; font-size: 7px; font-family: Arial, sans-serif; border-collapse: collapse;',
  topHeader: `background-color: ${colors.red};`,
  subHeaders: {
    top: `background-color: ${colors.pink};`,
    bottom: `border-bottom: 10px solid ${colors.gray}; background-color: ${colors.pink};`
  },
  invoiceDetails: `background-color: ${colors.darkGray};`,
  faded: `color: ${colors.gray};`,
  amountRequested: `background-color: ${colors.lightGray};`,
  alignFix: 'text-align: left;',
  rightAlign: `text-align: right;`,
  shiftInfo: `background-color: ${colors.midGray}; text-align: left;`,
  breakRow: {
    row: `background-color: ${colors.midGray};`,
    col: `height:5px;`
  },
  heightFix: `vertical-align: middle;`,
  brFix: `mso-data-placement:same-cell;`
}

export default styles
