package com.ejercicio;

public class Perimetro {
	public void mensaje() {
		System.out.println("Voy a calcular un per�metro");
	}
	 public void perCuadrado(int l) {
	        System.out.println("El perimetro del cuadrado es "+ l*4);
	        
	    }
	    public void perTrian(int l1, int l2, int l3) {
	        int per=l1+l2+l3;
	        System.out.println("El perimetro del tri�ngulo es "+ per);

	    }
	    public void perCirculo(int d) {
	        double per= Math.PI * d;
	        System.out.println("El perimetro del c�rculo es "+ String.format("%.2f",per) );
	    }

}
