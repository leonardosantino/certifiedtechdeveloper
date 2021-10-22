package service.impl;

import model.Filme;
import model.Serie;
import service.IStreaming;

import java.util.ArrayList;
import java.util.List;

public class StreamingService implements IStreaming {

    List<Filme> filmeList;
    List<Serie> serieList;

    @Override
    public Filme getFilme(String nome) {
        Filme filme = null;
        for (Filme f: filmeList){
            if (f.getNome().equals(nome)){
                filme = f;
            }
        }
        return filme;
    }

    @Override
    public Serie getSerie(String nome) {
        Serie serie = null;
        for (Serie s: serieList){
            if (s.getNome().equals(nome)){
                serie = s;
            }
        }
        return serie;
    }

    public void addFilme(Filme filme){
        if (filmeList == null){
            filmeList = new ArrayList<>();
        }
        filmeList.add(filme);
    }
    public void addSerie(Serie serie){
        if (serieList == null){
            serieList = new ArrayList<>();
        }
        serieList.add(serie);
    }
}
