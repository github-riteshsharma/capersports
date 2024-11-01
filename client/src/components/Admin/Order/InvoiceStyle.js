import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Roboto',
  fonts: [{ src: '/fonts/Roboto-Regular.ttf' }, { src: '/fonts/Roboto-Bold.ttf' }],
});

const styles = StyleSheet.create({
  col4: { width: '25%' },
  col8: { width: '75%' },
  col6: { width: '50%' },
  mb8: { marginBottom: 8 },
  mb40: { marginBottom: 40 },
  mbTitle40: { alignItems:'center', flexDirection: 'row', justifyContent: 'center' },
  overline: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  h3: { fontSize: 16, fontWeight: 700 },
  h3Title: { fontSize: 16, fontWeight: 700, paddingTop:2.5, marginLeft:1 },
  h4: { fontSize: 13, fontWeight: 700 },
  body1: { fontSize: 10 },
  body2: { fontSize: 8 },
  subtitle2: { fontSize: 9, fontWeight: 700 },
  alignRight: { textAlign: 'right' },
  page: {
    padding: '40px 24px 0 24px',
    fontSize: 9,
    lineHeight: 1.6,
    fontFamily: 'Roboto',
    backgroundColor: '#fff',
 
  },

  bankDetailBox: {
    paddingTop:10,
    margin: 'auto',
    borderTopWidth: 1,
    borderStyle: 'solid',
    position: 'relative',
    borderColor: '#DFE3E8',
  },


  footer: {
    bottom: 0,
    paddingTop:10,
    margin: 'auto',
    borderTopWidth: 1,
    borderStyle: 'solid',
    position: 'relative',
    borderColor: '#DFE3E8',
  },
  gridContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  table: { display: 'flex', width: 'auto' },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    padding: '8px 0',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#DFE3E8',
  },
  noBorder: { paddingTop: 8, paddingBottom: 0, borderBottomWidth: 0 },
  tableCell_1: { width: '10%', paddingRight:4 },
  tableCell_2: { width: '40%', paddingRight: 16 },
  tableCell_3: { width: '10%' },

});

export default styles;
