import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class);
    public static void main(String[] args) {
        PropertyConfigurator.configure("log4j.properties");

        List<Integer> lista = new ArrayList<>(Arrays.asList(5, 6, 4, 8, 10));

        Media media = new Media(lista);

        media.calcularMedia();

        if (media.getNumerosList().size() > 10){
            logger.info("lista de numeros é maior do que 10");
        } else if (media.getNumerosList().size() >= 5){
            logger.info("Lista de numeros é maior do que 5");
        } else {
            logger.info("menor do que 5");
        }
        logger.info("A media é igual a media " + media.getMedia());

    }
}
