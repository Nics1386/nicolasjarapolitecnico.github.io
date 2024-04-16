function convertcurrency() {
   var cantidad = parseFloat(document.getElementById('cantidad').value);
   var plata = document.getElementById('plata').value;
   let resultado;

if(plata === "euros") {
    resultado = cantidad * 3800;
} else if (plata === "dolares") {
   resultado = cantidad * 4000;
} else if (plata === "reales") {
    resultado = cantidad * 750;
}
document.getElementById('resultado').innerHTML = cantidad + ' ' + plata + '=' + resultado + 'COP';
}



   
