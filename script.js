function actualizarHora() {
    var fecha = new Date();
    var segundos = fecha.getSeconds();
    var minutos = fecha.getMinutes();
    var horas = fecha.getHours();

    if(horas>=13){
        horas = horas-12;
    }
    if(minutos<10){
        minutos = `0${minutos}`;
    }

    var elementSegundos = document.getElementById('pSegundos');
    var elementMinutos = document.getElementById('pMinutos');
    var elementHoras = document.getElementById('pHoras');

    elementSegundos.textContent = segundos;
    elementMinutos.textContent = minutos;
    elementHoras.textContent = horas;
}

setInterval(actualizarHora,1000);


