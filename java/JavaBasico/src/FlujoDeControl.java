import java.util.Scanner;

public class FlujoDeControl {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.print("�Cu�l es tu edad? : ");
		int edad = sc.nextInt();
		
		if (edad >= 18) {
			if(edad > 50) {
			System.out.println("Eres un adulto mayot");
			}
			else {
				System.out.println("Eres mayor de edad");
			}
		}
		else {
			System.out.println("Eres menor de edad");
		}
		
		
		String mensaje = (edad >= 18) ? ("Eres mayor de edad x2") : ("Eres menor de edad");
		System.out.println(mensaje);
		
		
		System.out.print("�Qu� d�a es? :");
		sc.nextLine();
		String dia = sc.nextLine();
		sc.close();
		
		switch(dia.toLowerCase()) {
		case "lunes":
			System.out.println("5 minutos m�s :c");
			break;
		case "martes":
			System.out.println("No te canses ni te embarques");
			break;
		case "miercoles":
			System.out.println("Trabajando duro o durando en el trabajo");
			break;
		case "jueves":
			System.out.println("2x1 en helados, amos :p");
			break;
		case "viernes":
			System.out.println("Feli :) D�a de kwas");
			break;
		default: 
			System.out.println("Hoy no existimos... Descansa");
		}
		
	
		
		
	}
}
