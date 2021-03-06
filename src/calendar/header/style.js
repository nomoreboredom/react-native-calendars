import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
    },
    monthText: {
      flex:1,
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      lineHeight: 28,
      color: appStyle.monthTextColor,
      marginTop: 15,
      //marginLeft: 16
    },
    arrow: {
      padding: 10
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor
        },
        android: {
          tintColor: appStyle.arrowColor
        }
      })
    },
    week: {
      marginTop: 18,
      paddingBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderColor: "#e9ecee",
      borderBottomWidth: 1
    },
    dayHeader: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor
    }
  });
}
