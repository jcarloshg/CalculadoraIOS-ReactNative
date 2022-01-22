import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeno: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  //============================================================
  // row
  //============================================================
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  //============================================================
  // styles buttton - esto podria ponerse en el archivo del BotonCalc.tsx
  //============================================================
  boton: {
    height: 80,
    width: 80,
    marginHorizontal: 5,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
});
