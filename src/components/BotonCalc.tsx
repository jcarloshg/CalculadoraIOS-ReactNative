import React from 'react';
import {Text, View} from 'react-native';
import {COLORS} from '../helpers/Colors';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
}

export const BotonCalc = ({texto, color = COLORS.GRAY}: Props) => {
  return (
    // <View style={[styles.boton, {backgroundColor: color}]}>
    <View style={{...styles.boton, backgroundColor: color}}>
      <Text style={styles.botonText}>{texto}</Text>
    </View>
  );
};
