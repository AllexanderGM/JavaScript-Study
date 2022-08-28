let nota= 15;
let notaLetra = '';

if (nota >= 90 && nota <= 100)
    {notaLetra="A";}

else if (nota >= 80 && nota <= 89)
    {notaLetra="B";}

else if (nota >= 70 && nota <= 79)
    {notaLetra="C";}

else if (nota >= 60 && nota <= 69)
    {notaLetra="D";}

else if (nota >= 0 && nota <= 59)
    {notaLetra="F";}

    else
    {notaLetra="No valido";}

    console.log(nota+" Es igual a "+notaLetra);