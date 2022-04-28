// EJEMPLO
//escribe un ciclo anidado que imprima el siguiente patrón.
/* 
*  
 * *  
 * * *  
 * * * *  
 * * * * * 
 */

/* for(let i=1; i<=5; i++){    //1
    for(let j=1; j<=i; j++){   //5
        document.write('*')
        //console.log('ciclo hijo\n');
    }
    document.write('<br>'); //salto de línea
} */


//Ejercicio 1
//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.

//poner un onchange en el input

calcula.addEventListener("click", function(){
    let input1= document.getElementById("input1").value;
    while(input1>0){       
        document.getElementById("res1").innerHTML += input1 + " ";    
        input1 -= .5;
    }
});
reset1.addEventListener("click", function(){
    document.getElementById("res1").innerHTML = "";
});



//Ejercicio 2
//Imprime todos los números impares entre 1 y 100

for (var i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    document.getElementById("res2").innerHTML +=  i+" ";    
  }
}




//Ejercicio 3
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]

calcular3.addEventListener("click", function(){
    let input3= document.getElementById("input3").value;
    for (let i=1;i<=input3;i++) {        
          document.getElementById("res3").innerHTML +=  "["+i+"] ";    
    }   
});


reset3.addEventListener("click", function(){
    document.getElementById("res3").innerHTML = "";
});



//Ejercicio 4
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )

calcular4.addEventListener("click", function(){
    let input4= document.getElementById("input4").value;
    let sum = 0;
    for (var i = 1; i <= input4; i++) {
        sum += i;
    }    
    document.getElementById("res4").innerHTML += sum;
});
reset4.addEventListener("click", function(){
    document.getElementById("res4").innerHTML = "";
});