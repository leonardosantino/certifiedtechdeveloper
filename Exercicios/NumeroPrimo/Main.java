package com.company;

public class Main {

    public static void main(String[] args) {
        // write your code here

        // Verificar se é primo
        ePrimo(12);
        ePrimo(13);
        // Listar primos
        numPrimos(3);
    }

    static void numPrimos(int num) {

            int c = 0;
            for (int i = 1; c < num; i++) {
                
                boolean primo = true;
                for (int e = 2; e < i; e++) {
                    if (i % e == 0) {
                        primo = false;
                        break;
                    }
                }
                if (primo) {
                    c++;
                    System.out.println(i);
                }
            }
    }

    static void ePrimo(int num) {

        boolean primo = true;
        for (int e = 2; e < num; e++) {
            if (num % e == 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            System.out.println(num + " é primo");
        } else {
            System.out.println(num + " NÃO é primo");
        }
    }

}