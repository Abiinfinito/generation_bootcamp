package ciclos;

import javax.swing.JOptionPane;

public class CicloWhile {

	public static void main(String[] args) {
		String clave = "Pedro";
		String comparacion = "";
		
		while (clave.equals(comparacion)== false) {
			comparacion = JOptionPane.showInputDialog("Introduce la contraseņa, por favor");
			
			if(clave.equals(comparacion)== false) {
				System.out.println("La contraseņa es incorrecta");
			}
		}
		System.out.println("La contraseņa es correcta");

		
		
		
	}

}
