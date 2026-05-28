
/**
 * Esta funcion 
 * @param {string[]} carta 
 * @returns {number} retorna el numero de la carta deck
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
};