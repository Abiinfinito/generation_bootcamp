import java.util.Scanner;

public class Escaner {
	public static void main(String[] args) {
		
		Scanner escaner = new Scanner(System.in);
		System.out.println("Escribe un número:");
		int numero = escaner.nextInt();
		
		System.out.println("Escribe una palabra:");
		String palabra = escaner.next();
		
		//if (numero < 10) {
			//System.out.println("El numemro es menor a 10");
		//}
		
		System.out.println(palabra);
		
		
		
		
		
		
		escaner.close();
		
	}
}
