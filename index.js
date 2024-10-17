const Number = []




const creoCelle = function () {
    const tabellaSection = document.getElementById('tabella')
    
    for (let i = 0 ; i < 76 ; i++) {
        
        const numeriCelle = document.createElement('div')
        const valoreNumeri = document.createElement('h3')
        valoreNumeri.innerText= i + 1 
        numeriCelle.appendChild(valoreNumeri)
        tabellaSection.appendChild(numeriCelle)
    }
}

creoCelle()