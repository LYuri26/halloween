// Define a data do evento usando formato ISO 8601
const eventoData = new Date("2024-10-31T13:30:00").getTime(); // Data e hora do evento

// Atualiza a contagem a cada segundo
const x = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = eventoData - agora;

    // Cálculos de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe os resultados ou "0" se o tempo acabar
    document.getElementById("days").innerHTML = dias >= 0 ? dias : 0;
    document.getElementById("hours").innerHTML = horas >= 0 ? horas : 0;
    document.getElementById("minutes").innerHTML = minutos >= 0 ? minutos : 0;
    document.getElementById("seconds").innerHTML = segundos >= 0 ? segundos : 0;

    // Verifica se a contagem terminou
    if (distancia < 0) {
        clearInterval(x);
        
        // A contagem terminou, você pode mostrar uma mensagem ou realizar outra ação
        alert("O evento começou!"); // Exibe um alerta ou qualquer outra ação desejada
        
        // Se necessário, redirecione para a página do evento
        window.location.href = "evento.html"; // Redireciona para a página do evento
    }
}, 1000);

function updateGreeting() {
    const agora = new Date();
    const hora = agora.getHours(); // Obtém a hora atual
    const saudacao = hora < 18 ? "tarde" : "noite"; // Altera a palavra com base na hora
    document.getElementById("greeting").innerHTML = `Prepare-se para uma ${saudacao} cheia de sustos e diversão!`;
}