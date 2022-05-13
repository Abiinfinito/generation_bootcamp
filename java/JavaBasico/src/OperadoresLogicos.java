import java.util.Objects;

public class OperadoresLogicos {

	public static void main(String[] args) {
		//una sola linea 
		/*
		 * un comentario
		 * multilinea
		 * */
		
		// Operadores de asignación 
		
		int num = 12;
		num = 45;
		num = Integer.parseInt("4");
		//System.out.println(num);
		
		
		// Operadores de comparación 
		
		int num1, num2; 
		num1 = 10;
		num2 = 20;
		
		//System.out.println("num1:" + num1);
		//System.out.println("num2:" + num2);
		
		// == operador de comparación
		//System.out.println(num1 == num2);
		
		//.equals() metodo y operador
		//System.out.println(Objects.equals(num1, num2));
		
		//operadores lógicos
		
		// <, >, <=, >= 
		int num3, num4;
		num3 = 25;
		num4 = 10;
		
		//System.out.println(num3 < num4);
		//System.out.println(num3 > num4);
		//System.out.println(num3 <= num4);
		//System.out.println(num3 >= num4);
		
		if (num3 < num4) {
			//codigo a ejcutar
			//System.out.println("Numero 3 es menor");
		} else {
			//System.out.println("Numero 3 es mayor");
		}
		
		// !=
		//System.out.println(num3 != num4);
		boolean comparacion = num3 != num4;
		//System.out.println(comparacion);
		
		//Operadores lógicos
		// AND = && =======> ambos valores deben ser true 
		//OR = || ======> solo uno verdadero :)
		//NOT = ! ======> invierte valores
		
		System.out.println(true && true);
		
		System.out.println(true || false);
		
		System.out.println(!true && true);
		
		System.out.println(!(false && true));
		
		
		
	}
}
		
		
		

	
