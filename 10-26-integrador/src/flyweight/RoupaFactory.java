package flyweight;

import java.util.HashMap;
import java.util.Map;

public class RoupaFactory {
    private static Map<String, Roupa> roupaMap;
    private static Integer roupasFabricadas;

    public static Roupa getRoupa(String tipoRoupa){
        if (roupaMap == null){ roupaMap = new HashMap<>();}
        Roupa roupa = roupaMap.get(tipoRoupa);

        if (roupa == null) {
            roupa = new Roupa(tipoRoupa);
            roupaMap.put(tipoRoupa, roupa);
            System.out.println("Criando roupa tipo: " + tipoRoupa);
        }
        return roupa;
    }
    public static Integer sizeMap(){
        System.out.println("Tamanho Fabrica: " + roupaMap.size());
        return roupaMap.size();
    }
}
