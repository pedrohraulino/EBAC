document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('sorteador').addEventListener("submit", function (e) {
        let numeroMaximo = document.getElementById("numeroMaximo").value;
        numeroMaximo = parseInt(numeroMaximo);
        e.preventDefault();
        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.round(numeroAleatorio);

        if (numeroAleatorio == 0) {
            document.getElementById('resultadoSorteio').innerText = numeroAleatorio + 1
        } else {
            document.getElementById('resultadoSorteio').innerText = numeroAleatorio
        }

        document.querySelector('.resultado').style.display = "block"
    })
})