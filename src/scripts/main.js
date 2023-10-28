document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('alterarTema').addEventListener("submit", function (e) {
        e.preventDefault();
        document.querySelector('.tema').style.display = "block"
        document.querySelector('body').style.backgroundColor = "black"
        document.querySelector('button').style.backgroundColor = "#fff"
        document.querySelector('button').style.color = "black"
        document.querySelector('h1').style.color = "#fff"
        document.querySelector('h2').style.color = "#fff"
    })
})