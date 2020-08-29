import {StyleSheet} from 'react-native';

const smallSize = 12;
const largeSize = 20;
const regularSize = 14;
const mediumSize = 16;
const extraLargeSize = 24;

export const textStyle = StyleSheet.create({
     whiteTextSmall: {
          fontSize: smallSize,
          color: '#fff',
          marginTop: 5,
          marginBottom: 5,
     },
     whiteTextMedium: {
          fontSize: mediumSize,
          color: '#fff',
          marginTop: 1,
          marginBottom: 1,
     },
     whiteTextLarge: {
          fontSize: largeSize,
          color: '#fff',
          marginTop: 1,
          marginBottom: 1,
     },
     whiteTextExtraLarge: {
          fontSize: extraLargeSize,
          color: '#fff',
          marginTop: 1,
          marginBottom: 1,
     },
     whiteTextRegular: {
          fontSize: regularSize,
          color: '#fff',
          marginTop: 1,
          marginBottom: 1,
     },
});

export const displayStyle = StyleSheet.create({
     displayFlexRowAllCenter: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
     },
     displayFlexRowStart: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
     },
     displayFlexColAllCenter: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
     },
     displayFlexColStart: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
     },
});

export const color = StyleSheet.create({
     white: {
          color: '#fff',
     },
     primaryGrey: {
          color: '#777',
     },
     black: {
          color: '#111',
     },
     primaryOrange: {
          color: '#006aff',
     },
     primaryBlue: {
          color: '#f0b400',
     },
     primaryBackground: {
          color: 'rgba(255,200,200,0.15)',
     },
});
