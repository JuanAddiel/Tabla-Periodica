const H = function (value) {
    if (value === "H") {
        return value;
    }
};
const Be = function (value) {
    if (value === "Be" || value === "Mg") {
        return value;
    }
};

const gris = function (value) {
    // Recorrer los elementos de la tabla periódica
    for (let i = 0; i <= 18; i++) {
        const grupoActual = value.grupo[i];

        // Recorrer los elementos del grupo actual
        for (let j = 0; j < value.length; j++) {
            const elementoActual = grupoActual[j];
            if(elementoActual === 1){
                return value.push({ simbolo: 'He', tipo: 'Gas noble', color:"background-color:#0184DE;"});
            }
        }
    }
};


    exports.H = H;
    exports.gris = gris;
    exports.Be = Be;