const inp = document.querySelector('#carta-texto')
const btnCreate = document.querySelector('#criar-carta')
const gpStyle = ['newspaper', 'magazine1', 'magazine2']
const gpSize = ['medium', 'big', 'reallybig']
const gpRotation = ['rotateleft', 'rotateright']
const gpIncline = ['skewleft', 'skewright']
let p = document.querySelector('#carta-gerada')
let cardCount = document.querySelector('#carta-contador')

const allFunc = {
    createCard: function (e) {
        while(p.firstChild) {
            p.removeChild(p.firstChild)
        }
        spaceOff = inp.value
        if (!spaceOff || spaceOff.trim().length === 0) {
            p.innerHTML = "Por favor, digite o conteúdo da carta."
        } else {
            arrayOfString = spaceOff.split(' ')
            for (i = 0; i < arrayOfString.length; i++) {
                allFunc.createSpanCard(arrayOfString[i])
            }
            cardCount.innerHTML = arrayOfString.length
        }
    },
    createSpanCard: function (letter) {
        threeNumbers = Math.floor(Math.random() * 3)
        twoNumbers = Math.floor(Math.random() * 2)
        spanCard = document.createElement('span')
        spanCard.innerHTML = letter
        spanCard.classList.add(gpStyle[threeNumbers], gpSize[twoNumbers], gpRotation[twoNumbers], gpIncline[twoNumbers])
        p.appendChild(spanCard).addEventListener('click', this.newClasses)
    },
    newClasses: function (e) { 
        threeNumbers = Math.floor(Math.random() * 3)
        twoNumbers = Math.floor(Math.random() * 2)
        e.target.className = ''
        e.target.classList.add(gpStyle[threeNumbers], gpSize[twoNumbers], gpRotation[twoNumbers], gpIncline[twoNumbers])
    }
}

btnCreate.addEventListener('click', allFunc.createCard)