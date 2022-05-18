package com.generation.arreglos;

import java.util.Arrays;

public class Arreglos {

	public static void main(String[] args) {
		
		//Matrices / arreglos / arrays
		// Solo pueden tener un tipo de dato
		// debemos especificar su tamaño
		
		/*
		 * numero - 0
		 * string - null
		 * booleanos -false
		 */
		
		int[] arrNumeros = new int [5];
		
		//nnumeracion basada en  0
		arrNumeros[0] = 1;
		arrNumeros[1] = Integer.parseInt("1");
		arrNumeros[2] = 555;
		arrNumeros[3] = 222;
		arrNumeros[4] = 1111;
		
		
		System.out.println(Arrays.toString(arrNumeros));
		System.out.println(arrNumeros[0]);
		System.out.println(arrNumeros[1]);
		System.out.println(arrNumeros[2]);
		
		for(int i=0; i<arrNumeros.length; i++) {
			System.out.println(arrNumeros[i]);
		}
		
		//forEach 
		int conteo = 0;
		for(int elemento : arrNumeros) {
			conteo++;
			System.out.println("Elemento = " + conteo + "=" + elemento);
		}
		
		
		//Arreglo que guarda objetos
		
		Persona persona1 = new Persona("Abi", 23);
		Persona persona2 = new Persona("Lu", 17);
		
		
		//Object arrPersona[] = new Object [3];
		Persona arrPersonas[] = new Persona[3];
		arrPersonas[0]=persona1;
		arrPersonas[1]=persona2;
		arrPersonas[2]=new Persona("Tam", 30);
		
		System.out.println(Arrays.toString(arrPersonas));
		
		for (Persona elemento : arrPersonas) {
			System.out.println(elemento.nombre + "-" + elemento.edad);
		}
		
		
		//Arreglos literales
		String []arrString = {"Hola", "Mi", "nombre", "es"};
		System.out.println(Arrays.toString(arrString));
		
	}

}
