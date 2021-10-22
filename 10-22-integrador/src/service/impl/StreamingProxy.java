package service.impl;

import model.Filme;
import model.Serie;
import service.IStreaming;
import service.excep.StreamingNaoHabilitadoException;

public class StreamingProxy implements IStreaming {

    private final StreamingService streamingService;
    private final Integer ip;
    private Integer seriesView;

    public StreamingProxy(Integer ip, StreamingService streamingService) {
        this.ip = ip;
        this.streamingService = streamingService;
    }

    @Override
    public Filme getFilme(String nome) throws StreamingNaoHabilitadoException {

        Filme filme = streamingService.getFilme(nome);

        if (ip <= 49 && filme.getPais().equals("Argentina")){
            System.out.println("IP Argentina " + filme.getNome() + " link " + filme.getLinkDeReproducao());
        }
        else if (ip >= 50 && ip <= 99 && filme.getPais().equals("Brasil") ){
            System.out.println("IP Brasil " + filme.getNome() + " link " + filme.getLinkDeReproducao());
        }
        else if (ip >= 100 && ip <= 149 && filme.getPais().equals("Colombia") ){
            System.out.println("IP Colombia " + filme.getNome() + " link " + filme.getLinkDeReproducao());
        }else {
            throw  new StreamingNaoHabilitadoException(" 💔 Não disponível no seu pais");
        }
        return null;
    }

    @Override
    public Serie getSerie(String nome) throws StreamingNaoHabilitadoException {

        Serie serie = streamingService.getSerie(nome);

        if(seriesView == null){
            seriesView = 1;
            System.out.println("Assista a série 💛" + serie.getNome() + " link " + serie.getLinkDeReproducao());
        }
        else if (seriesView < 5){
            System.out.println("Assista a série 🤍" + serie.getNome() + " link " + serie.getLinkDeReproducao());
            seriesView ++;
        }
        else {
            throw  new StreamingNaoHabilitadoException(" 💔 Exibição de series excete o máximo permitido por semana");
        }
        return null;
    }
}