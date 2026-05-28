/**
 *  Esta funcion agrega una imagen al HTMLImageElement
 * @param {string[]} carta 
 * @returns {HTMLImageElement} retorna una imagen de la carta
 */

export const crearCartaHtml = ( carta ) => {

    if( !carta ) throw new Error('La carta es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}