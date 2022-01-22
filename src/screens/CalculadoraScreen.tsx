import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {COLORS} from '../helpers/Colors';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('100');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // check decimal
    if (numero.includes('.') && numeroTexto === '.') return;
    // check start with 0

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // punto decumal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // evalucar si es otro cero y hay punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        // evaluar es diferente de ecero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // eviat el 0000.000
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numTemp = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numTemp = numero.substring(1);
    }

    if (numTemp.length > 1) {
      setNumero(negativo + numTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumeroAnterior = () => {
    setNumeroAnterior(numero);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior} </Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color={COLORS.GRAY_LIGHT} accion={limpiar} />
        <BotonCalc
          texto="+/-"
          color={COLORS.GRAY_LIGHT}
          accion={positivoNegativo}
        />
        <BotonCalc texto="del" color={COLORS.GRAY_LIGHT} accion={btnDelete} />
        <BotonCalc texto="/" color={COLORS.ORANGE} accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="x" color={COLORS.ORANGE} accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color={COLORS.ORANGE} accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color={COLORS.ORANGE} accion={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" accion={armarNumero} ancho />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color={COLORS.ORANGE} accion={limpiar} />
      </View>
    </View>
  );
};
