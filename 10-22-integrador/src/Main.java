import model.Filme;
import model.Serie;
import service.excep.StreamingNaoHabilitadoException;
import service.impl.StreamingProxy;
import service.impl.StreamingService;

public class Main {
    public static void main(String[] args) {

        // Criar Filmes
        Filme matrix = new Filme("Matrix", "Brasil","www.matrix.com");
        Filme johnwick = new Filme("John Wick", "Argentina","www.johnwick.com");
        Filme alice = new Filme("Alice", "Colombia","www.alice.com");

        // Criar Series
        Serie mrrobot = new Serie("Mr Robot","www.mrrobot.com");
        Serie thewitcher = new Serie("The Witcher","www.thewitcher.com");
        Serie lovedeathrobots = new Serie("Love Death + Robots", "www.lovedeathandrobots");

        // Adicionar Filmes e Series
        StreamingService streamingService = new StreamingService();
        streamingService.addFilme(matrix);
        streamingService.addFilme(johnwick);
        streamingService.addFilme(alice);
        streamingService.addSerie(mrrobot);
        streamingService.addSerie(thewitcher);
        streamingService.addSerie(lovedeathrobots);

        // Instanciar proxys
        StreamingProxy streamingProxyArgentina = new StreamingProxy(40, streamingService);
        StreamingProxy streamingProxyBrasil = new StreamingProxy(60, streamingService);
        StreamingProxy streamingProxyColombia = new StreamingProxy(110, streamingService);
        // proxy Serie
        StreamingProxy streamingProxySerie = new StreamingProxy(110, streamingService);

        // Lançar filmes
        try {
            streamingProxyArgentina.getFilme("John Wick");
            //streamingProxyArgentina.getFilme("Matrix");
        } catch (StreamingNaoHabilitadoException e) {
            e.printStackTrace();
        }

        try {
            streamingProxyBrasil.getFilme("Matrix");
            //streamingProxyBrasil.getFilme("Alice");
        } catch (StreamingNaoHabilitadoException e) {
            e.printStackTrace();
        }

        try {
            streamingProxyColombia.getFilme("Alice");
            //streamingProxyColombia.getFilme("John Wick");
        } catch (StreamingNaoHabilitadoException e) {
            e.printStackTrace();
        }
        // Lançar séries
        try {
            streamingProxySerie.getSerie("Mr Robot");
            streamingProxySerie.getSerie("The Witcher");
            streamingProxySerie.getSerie("Mr Robot");
            streamingProxySerie.getSerie("Love Death + Robots");
            streamingProxySerie.getSerie("The Witcher");
            //streamingProxySerie.getSerie("Mr Robot");
        } catch (StreamingNaoHabilitadoException e) {
            e.printStackTrace();
        }
    }
}
