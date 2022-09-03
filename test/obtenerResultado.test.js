import App from '../src/main';

test('obtenerResultado()', () => {
  let myApp = new App();
  let inicio = [1, 10, 14];
  let fin = [4, 15, 20];
  let resultado = [4, 75, 119];

  for (let i = 0; i < inicio.length; i++) {
    expect(myApp.obtenerResultado(inicio[i], fin[i])).toBe(resultado[i]);
  }
});
