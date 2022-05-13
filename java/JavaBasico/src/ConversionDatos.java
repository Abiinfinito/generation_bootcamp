
public class ConversionDatos {

	public static void main(String[] args) {
		
		//conversion de datos, como cajitas
		
		byte numeroByte = 127;
		short numeroShort = numeroByte;
		int numeroInt = numeroShort;
		long numeroLong = 5000000;
		
		// casteo o parseo
		int otroInt = (int) numeroLong;
		short otroShort = (short)otroInt;
		byte otroByte = (byte)otroShort;
		
		System.out.println(otroShort);
	}

}
