package com.perritos;

public class Perro {
	
	//atributos o propiedades
	String nombre = "An�nimo";
	int edad;
	String raza; 
	String tamanio;
	
	//constructor
	public Perro (String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	
	//M�todos
	public void ladrar () {
		System.out.println("El perro " + nombre + " hace guauf");
	}
	
	public int edadPerruna() {
		return edad * 7;
	}
	
	
	// M�todos Est�ticos
	public static void mensaje() {
		System.out.println("Esta es una clase Perro");
		
	}

	
	
}
