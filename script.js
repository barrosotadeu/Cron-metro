let contando = false;
let segundos = 0;

$('.start-btn').click(() => {
    contando = true;
    

});

$('.pause-btn').click(() => {
    contando = false;

})

$('.stop-btn').click(() => {
    contando = false;
    segundos = 0;
    $('#hora').html('00:00:00');
})

setInterval(() => {
    if(contando){
        let campoSegundos = segundos % 60;
        let campoMinutos = Math.floor(segundos / 60) % 60;
        let campoHoras = Math.floor(segundos / 3600);
        if(campoSegundos < 10) campoSegundos = '0' + campoSegundos;
        if(campoMinutos < 10) campoMinutos = '0' + campoMinutos;
        if(campoHoras < 10) campoHoras = '0' + campoHoras;
        $('#hora').html(`${campoHoras}:${campoMinutos}:${campoSegundos}`);
        segundos++;
    }
}, 1);


