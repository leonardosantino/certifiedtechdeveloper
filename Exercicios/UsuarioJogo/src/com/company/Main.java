package com.company;

import UsuarioJogo.UsuarioJogo;

public class Main {

    public static void main(String[] args) {
	// write your code here
        UsuarioJogo leonardo = new UsuarioJogo("leonardo", "ls");

        leonardo.aumentarPontuacao();
        leonardo.bonus(100);
        leonardo.subirNivel();

        System.out.println("Nome: " + leonardo.getNome());
        System.out.println("Nickname: " + leonardo.getNickname());
        System.out.println("Pontuação: " + leonardo.getPontuacao());
        System.out.println("Nível: " + leonardo.getNivel());
    }
}
