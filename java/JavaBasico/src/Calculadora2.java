import java.util.Scanner;

public class Calculadora2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Introduce el numero de la operacion a realizar");
		System.out.println("1) Suma   2) Resta   3) Multiplicacion   4) Division");

		int opcion = sc.nextInt();
		
		
		System.out.println("Introduce el primer numero: ");
		double num1 = sc.nextDouble();
		
		System.out.println("Introduce el segundo numero: ");
		double num2 = sc.nextDouble();
		
		
		
		sc.close();
		
		double resultado = 0;
		
		switch(opcion) {
		case 1:
			System.out.println("Elejiste suma");
			resultado= num1+num2;
			System.out.println("El resultado de la suma es: " + resultado);
			break;
		case 2:
			System.out.println("Elejiste resta");
			resultado= num1-num2;
			System.out.println("El resultado de la resta es: " + resultado);
			break;
		case 3:
			System.out.println("Elejiste multiplicacion");
			resultado= num1*num2;
			System.out.println("El resultado de la multiplicacion es: " + resultado);
		case 4:
			System.out.println("Elejiste división");
			resultado= num1/num2;
			System.out.println("El resultado de la multiplicacion es: " + resultado);
	}
		
}
}
