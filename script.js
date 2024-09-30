function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function sale (){
    let saleDate = new Date(2024, 8, 25)
    let currentDAte= new Date() 
    let date= saleDate - currentDAte
    let day = Math.floor(date / (24 * 60 * 60 * 1000))
    let hours = Math.floor((date % (24 * 60 * 60 * 1000)) / (60 * 1000 * 60))
    let minutes = Math.floor((date % (60 * 60 * 1000)) / (60 * 1000))
    let seconds = Math.floor((date % (60 * 1000)) / 1000)
    let timeValue = document.getElementsByClassName("date");
    timeValue[0].innerHTML = correctDate(day);
    timeValue[1].innerHTML = correctDate(hours);
    timeValue[2].innerHTML = correctDate(minutes);
    timeValue[3].innerHTML = correctDate(seconds);
    if (date <= 0) {
        timeValue[0].innerHTML = "00";
        timeValue[1].innerHTML = "00";
        timeValue[2].innerHTML = "00";
        timeValue[3].innerHTML = "00";
    }
}
sale();
setInterval(() => { 
    sale();
}, 1000); 


let wrapper = document.querySelector(".wrapper")
let popUp = document.querySelector(".wrapper .popUp")
let typ = document.querySelector(".wrapper .thankYouPage")
let btns = document.querySelectorAll("section button")
let formBtn = document.querySelector(".form button")
let username = document.getElementsByName("username")[0]
let userphone = document.getElementsByName("userphone")[0]

btns.forEach( btn => {
    btn.addEventListener('click', showpopUp)
})

wrapper.addEventListener('click', hidepopUp)

function showpopUp() {
    wrapper.style.display = "flex"
    popUp.style.display = "flex"
    typ.style.display = "none"
}

function hidepopUp() {
    let elem = event.target 

    if(elem == wrapper) {
        wrapper.style.display = "none"
    }
}

function showTYP() {
    popUp.style.display = "none"
    top.style.display = "flex"
}

formBtn.addEventListener("click", sendForm)

function sendForm() {
    event.preventDefault()
    if(username.value.length > 1 ) {
        if(userphone.value.length == 13) {
        showTYP()
    } else {
        console.log('Неверный номер')
    }
    } else {
        console.log('Короткое имя')
    }
}

function showTYP() {
    popUp.style.display = "none"
    typ.style.display = "flex"
} 

userphone.addEventListener('input', function(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Удаляем все нецифровые символы

    // Форматируем номер, если он начинается с 998
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '+998'; // Начинаем с кода страны

        if (value.length > 2) {
            formattedValue += '(' + value.substring(2, 4) + ')'; // Код региона
        }

        if (value.length > 4) {
            formattedValue += value.substring(4, 7); // Первая часть номера
        }

        if (value.length > 7) {
            formattedValue += '-' + value.substring(7, 9); // Вторая часть номера
        }

        if (value.length > 9) {
            formattedValue += '-' + value.substring(9, 11); // Третья часть номера
        }
    }

    input.value = formattedValue; // Устанавливаем новое значение в поле ввода

    // Устанавливаем курсор в конец строки
    setTimeout(() => {
        const cursorPosition = formattedValue.length; // Устанавливаем курсор в конец
        input.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
});