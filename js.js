function hora() {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    var ano = data.getFullYear();
    var mes = data.getMonth();
    var week = data.getDate();
    var dia = data.getDay();
    document.getElementById('second').innerHTML = "Horas- "+ hora+ ": "+ minuto+ ": "+ segundo;
    document.getElementById('first').innerHTML = 'Hoje- '+ano+' / '+mes+' '+ '/ '+dia;
}
setInterval(hora, 1000);
