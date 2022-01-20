import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {COLORS} from '../helpers/Colors';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1500.00</Text>
      <Text style={styles.resultado}>1500.00</Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color={COLORS.GRAY_LIGHT} />
        <BotonCalc texto="+/-" color={COLORS.GRAY_LIGHT} />
        <BotonCalc texto="del" color={COLORS.GRAY_LIGHT} />
        <BotonCalc texto="/" color={COLORS.ORANGE} />
      </View>
    </View>
  );
};
