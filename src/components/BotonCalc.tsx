import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../helpers/Colors';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  color = COLORS.GRAY,
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      {/* <View style={[styles.boton, {backgroundColor: color}]}> */}
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === COLORS.GRAY_LIGHT ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
