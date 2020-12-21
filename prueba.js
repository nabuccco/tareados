$(function()
{
    var numeros = '1234567890';
    var letras = 'qwertyuiopasdfghjklñzxcvbnm' + 
                'QWERTYUIOPASDFGHJKLÑZXCVBNM';
    $('.txtMarca').keypress(function (e)
    {
        //se obtiene el caracter
        var caracter = String.fromCharCode (e.which);

        //buscar caracter en el patron
        if(letras.indexOf(caracter) < 0)
        return false; // evita quie se escriba el caracter
    });

    $('.txtModelo').keypress(function (e)
        
    {
        //se obtiene el caracter
        var caracter = String.fromCharCode (e.which) ;
        //buscar caracter en el patron
        if(letras.indexOf(caracter) < 0)
        return false; // evita quie se escriba el caracter


      
        
    });

    
   
});