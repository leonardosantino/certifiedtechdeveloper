package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	// write your code here
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String nome = scanner.nextLine();
        System.out.println("Digite seu Sobrenome: ");
        String sobrenome = scanner.nextLine();

        System.out.println("Digite seu Dia de Nascimento: ");
        int dia = scanner.nextInt();
        System.out.println("Digite seu Mês de Nascimento: ");
        int mes = scanner.nextInt();
        System.out.println("Digite seu Ano de Nascimento: ");
        int ano = scanner.nextInt();

        String dataNascimento = dataFormatada(dia,mes,ano);

        System.out.println("Nome completo: " + nome + " " + sobrenome);
        System.out.println("Iniciais: " + nome.charAt(0) + sobrenome.charAt(0));
        System.out.println("Data de nascimento: " + dataNascimento);
    }
    static String dataFormatada(int dia, int mes, int ano) {
        return dia + "/" + mes + "/" + ano;
    }
}
