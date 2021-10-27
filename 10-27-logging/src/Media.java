import java.util.ArrayList;
import java.util.List;

public class Media {
    private List<Integer> numerosList = new ArrayList<>();
    private Double media;

    public Media(List<Integer> numerosList) {
        this.numerosList = numerosList;
    }

    public Double calcularMedia(){

        Double soma = 0.0;

        for (Integer number: this.numerosList){
            soma += number;

        }
        this.media = soma / this.numerosList.size();;
        return soma / this.numerosList.size();
    }

    public List<Integer> getNumerosList() {
        return numerosList;
    }

    public Double getMedia() {
        return media;
    }
}
