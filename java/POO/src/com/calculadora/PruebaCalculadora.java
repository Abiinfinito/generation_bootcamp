package com.calculadora;
//import java.util.Scanner;

public class PruebaCalculadora {

	public static void main(String[] args) {
		System.out.println("Vamos a calcular");
		
		//Instanciar - crear un objeto a partir de una clase
		Calculadora cal = new Calculadora();
		
		//Método que no retorna nada
		cal.sumarMensaje();
		
		//Método que regresa un valor
		String mensaje = cal.mensaje ();
		System.out.println(mensaje);
		
		double prueba = cal.prueba();
		System.out.println(prueba);
		
		//Métodos con argumentos 
		int suma = cal.sumar(10,20);
		System.out.println(suma);
		
		cal.sumarM(8,5);
		
		int resta = cal.restar(8,1);
		System.out.println(resta);
		
		
		//Instanciar Areas 
		Areas calAreas = new Areas();
		
		calAreas.mensaje();
		
		int areaCuadrado = calAreas.areaCuadrado(5);
		System.out.println(areaCuadrado);
		
		double areaTriangulo = calAreas.areaTriangulo(5,10);
		System.out.println(areaTriangulo);
		
		
	
	}
}
