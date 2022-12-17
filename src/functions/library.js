


export const diccionario = {
    
    'nullish' : (arreglo) => { //nullish retorna V o F
        const nuloVacio = arreglo.some(item=>
            item === null || 
            item === "" || 
            item === 0 || 
            item.length === 0
            ) 
        if(nuloVacio)console.info('si nuloVacio es V entonces el array tiene elementos nulos o vacios', nuloVacio)
        return nuloVacio
    },
    'menorA100': (numero) => { //retorna V o F de acuerdo al numero
        /* if(numero < 100){
            return true
        }else{
            return false
        } */
        return numero < 100 ? true : false
    },

    'getUser' : async (user_id) => {

        try {

            // console.log("Esto es antes del fetch");

            const response = await fetch(`http://127.0.0.1:4000/user/${user_id}`);

            if (response.status === 200) {
                const responseData = await response.json();
                console.log(responseData);
                return responseData
            } else {
                return console.error(502)
            }
            // return response

        } catch (error) {
            console.log(error.message);
        }
    },

}


/*
Forma de usar el diccionario
import { diccionario } from "./auxs/library";
const esNulo = () => {
    const resultado = diccionario["nullish"]([1, 100, 0]);
    console.log(resultado);
  };

*/