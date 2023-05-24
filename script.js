//Primeira Questão : 
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let button5 = document.getElementById("button5")
let button6 = document.getElementById("button6")
function primeiraQuestao(){
    let a = prompt("digite o valor de a: ")
    let b = prompt("digite o valor de b: ")
    let c = prompt("digite o valor de c: ")
    let d = prompt("digite o valor de d: ")
    let e = prompt("digite o valor de e: ")

    function maiorMenor() {
        let maior = Math.max(a,b,c,d,e)
        let menor = Math.min(a,b,c,d,e)

        alert("o maior número é: " + maior)
        alert("e o menor número é: " + menor)
    }
    maiorMenor(a,b,c,d,e)
}

button1.addEventListener("click", function (){
    primeiraQuestao()
})

function segundaQuestao(){
    let caractere = prompt("digite aqui o seu caractere: ")

    function VOGAL(c) {
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        if (vogais.includes(c.toLowerCase())) {
            alert(1);
        } else {
            alert(0);
        }
    }

    VOGAL(caractere)
}

 button2.addEventListener("click", function (){
     segundaQuestao()
 })

function terceiraQuestão(){
    let li = prompt("digite o valor do limite inferior: ")
    let ls = prompt("digite o valor do limite superior: ")

    function LIMITES(li, ls) {
        for (let num = li; num <= ls; num++) {
            if (num % 2 === 0) {
                alert(num)
            }
        }
        alert(num + " ")
    }

    LIMITES(li, ls)
}

    button3.addEventListener("click", function (){
        terceiraQuestão()
    })

function quartaQuestao(){
    let a = prompt("digite o valor 1: ")
    let b = prompt("digite o valor 2: ")
    let c = prompt("digite o valor 3: ")

    function ORDEM(a, b, c) {
        let valores = [a, b, c]
        valores.sort(function (x, y) {
            x - y
        })
        alert(valores)
    }

    ORDEM(a,b,c)

}

    button4.addEventListener("click", function (){
        quartaQuestao()
    })
function quintaQuestao(){
    let x = prompt("digite o valor de x: ")

    function POSITIVO_NEGATIVO(x) {
        if (x >= 0) {
            alert("true")
        } else {
            alert("false")
        }
    }

    POSITIVO_NEGATIVO(x)

}

    button5.addEventListener("click", function (){
        quintaQuestao()
    })

    function sextaQuestao(){
        let x = prompt("digite aqui um valor inteiro: ")

        function PAR_IMPAR(x){
            if(x % 2 === 0){
                alert(x+ " " + "é um número par!!")
            }else{
                alert(x + " " + "é um número ímpar!!")
            }
        }

        PAR_IMPAR(x)
    }

    button6.addEventListener("click", function (){
        sextaQuestao()
    })