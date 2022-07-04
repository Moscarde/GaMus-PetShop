//config estilo css do nome da div
const styleP = `
position: absolute;
right: 0;
bottom: 0;
font-size: 12px;
font-style: italic;
color: red;
text-shadow: 0 0 6px #000;`

//config estilo css do menu
const styleMenu = `
position: absolute;
top: 30px;
right: 30px;
background: red;
padding: 30px;`


const showInfo = elementList => {
    for (let i = 0; i <= elementList.length; i++) {
        if (elementList[i] == undefined) {
            continue
        }
        elementList[i].innerHTML += `
        <p style="${styleP}" >
        ${elementList[i].className}
        </p>`

        elementList[i].classList.add('display-info')
        elementList[i].style.border = "solid 1px red"
        if (elementList[i].style.position == "") {
            elementList[i].style.position = "relative";
        }
    }
}


const hideInfo = elementList => {
    console.log('entr');
    for (let i = 0; i <= elementList.length; i++) {
        if (elementList[i] == undefined) {
            continue
        }
        elementList[i].classList.remove('display-info')
    }
    let nameInfo = document.querySelectorAll('.info-nome')
    nameInfo.forEach(p => {
        p.style.display = "none"
    })
}

//local onde o menu vai ser inserido
document.querySelector("header").innerHTML += `
<div style="${styleMenu}">
Display Id & Class Name Menu
</br>
<button id="displayOn">Ligar</button>
</div>`

//evento atrelado ao botão no menu
document.getElementById("displayOn").onclick = function () {
    let divList = document.getElementsByTagName("div")
    let sectionList = document.getElementsByTagName("section")
    showInfo(divList)
    showInfo(sectionList)
}
