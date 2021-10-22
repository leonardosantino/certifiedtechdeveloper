package service;

import model.Filme;
import model.Serie;
import service.excep.StreamingNaoHabilitadoException;

public interface IStreaming {

    Filme getFilme(String nome) throws StreamingNaoHabilitadoException;
    Serie getSerie(String nome) throws StreamingNaoHabilitadoException;

}
