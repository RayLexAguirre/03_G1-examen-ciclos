import App from '../src/main';

test('obtenerSiguientes()', () => {
  let myApp = new App();
  let numero = [95, 90, 93];
  let resultado = [
    '9596979899100',
    '90919293949596979899100',
    '93949596979899100',
  ];

  for (let i = 0; i < numero.length; i++) {
    expect(myApp.obtenerSiguientes(numero[i])).toBe(resultado[i]);
  }
});
