function reloj() {
    const ahora = new Date();

    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const horaActual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("tiempo").textContent = horaActual;
}

reloj();
setInterval(reloj, 1000);
