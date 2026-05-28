/**
 * Esta función me permite tomar una carta 
 * @param {string[]} deck es un array de string
 * @returns {string} retorna una carta deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
};