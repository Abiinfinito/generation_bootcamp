package com.calculadora;

public class Calculadora {
	
//M�todo que no regresa nada	
//void es una palabra reservada para no regresar nada
	public void sumarMensaje() {
		System.out.println("Voy a sumar dos n�meros");
	}
	
//M�todo que retorna datos
	public String mensaje() {
		String mensaje = "Voy a realizar una operaci�n";
		return mensaje;
	}
	
	public double prueba () {
		return 2.5;
	}
	
	// Operaciones
	//suma
	public int sumar(int a, int b) {
		return a + b;
	}
	public void sumarM (int a, int b) {
		System.out.println("El resultado de la suma es: " + (a+b));
	}
	
	//resta
	public int restar(int a, int b) {
		return a - b;
	}
	
	//multiplicaci�n
	public int multiplicar(int a, int b) {
		return a * b;
	}
	
	//divisi�n
	public double dividir(double a, double b) {
		if (b !=0) {
		return a / b;
	}
		else {
			return -1;
		}
	}
	
	
	
	
}
