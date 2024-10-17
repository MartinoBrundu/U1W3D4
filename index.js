

const h1 = document.querySelector('h1')

const numberBingo = []


const celleNumber = function (){
    const tav1  = document.getElementById ('tabella')
    for (let i = 0 ; i < 77 ; i++) {
const numberCell = document.createElement('div')
const cellValue = document.createElement ('h3')
cellValue.innerText = i + 1
numberCell.appendChild(cellValue)
tabella.appendChild(numberCell)
    }
}

celleNumber()