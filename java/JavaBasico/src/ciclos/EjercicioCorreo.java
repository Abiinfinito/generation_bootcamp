
package ciclos;
import java.util.Scanner;


public class EjercicioCorreo {

	public static void main(String[] args) {
        /*
         * Ejercicio

            Validación de correo
            
            Escribe un programa que reciba un correo y  que, usando un ciclo for, evalúe si el correo contiene un caracter de '@'.
            Si lo tiene, el programa debe mostrar en consola:
            "Es un correo válido"
            
            Si no lo tiene, el programa debe mostrar:
            "No es un correo válido"

         * */
        System.out.println("introduce un correo:");
        Scanner scn = new Scanner(System.in);
        String correo = scn.nextLine();
//        
        
        
        //metodo 1
//        boolean valido=false;
//        
//        for(int i=0;i<correo.length()-1;i++) {
//            if(correo.charAt(i)==64) {
//                valido=true;
//            }
//        }
//        if(valido) {
//            System.out.println("Este es un correo valido");
//        }else {
//            System.out.println("Este es NO un correo valido");
//        }
        
        
        
        
//        //metodo 2
//        if(correo.indexOf('@')==-1) {
//            System.out.println("Este es NO un correo valido");
//        }else {
//            System.out.println("Este es un correo valido");
//        }
//        
        
        
        
          //metodo 3
        
          if(correo.contains("@")){
            System.out.println("Este es un correo valido");
            }else {
                System.out.println("Este NO es un correo valido");
        }
        
        
    }

}
