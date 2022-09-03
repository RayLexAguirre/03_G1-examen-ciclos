export default class App {

    obtenerSiguientes(numero) {
        let aux = "";

        if(numero >= 100){
            aux = 100
        } else {
                for(let i = numero; i <= 100; i++) {
                    aux = aux + i
                }
        }
        return aux;
    }

    obtenerSuma(inicio, fin){
        let i = inicio, aux = 0;
        while (i <= fin) {
            if (i % 3 != 0) {
                aux = aux + i
            }
            i++;
        }
        return aux;
    }

    obtenerResultado(inicio, fin){
        let i = inicio, aux = 0;
        if(i % 2 == 0) {
            do {
                aux = aux + i;
                i++;
            } while (i <= fin);
        } else {
            do{
                aux++;
                i++;
            } while (i <= fin);
        }
        return aux;
    }

    /*
    obtenerSiguientes(numero) {
        
        let resultado = toString();

        for(let i = numero; i >= 100; i++){

            resultado = resultado + i;
            resultado = resultado.toString();
           
        }

        return resultado
    }

    obtenerSuma(inicio, fin){
        let i = inicio;
        let suma = 0;

        while(i <= fin) {


            i++
        }

        return suma;
    }

    obtenerResultado(inicio, fin){

        let i = inicio;
        let suma = 0;

        while(i <= fin) {

            if((inicio % 2 == 0)||(i == 1)){
                suma = suma + i;
            } else {
                string[i]
                string.length
            }  

            i++
        }

        return suma;
    }
    */
}

let app = new App();

console.log('Implementacion de obtenerSiguiente');
console.log(app.obtenerSiguientes(78));

console.log('Implementacion de obtenerSuma');
console.log(app.obtenerSuma(3, 8));

console.log('Implementacion de obtenerResultado');
console.log(app.obtenerResultado(6, 12));
console.log(app.obtenerResultado(7, 12));