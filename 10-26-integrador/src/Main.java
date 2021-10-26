import flyweight.RoupaFactory;

public class Main {
    public static void main(String[] args) {

        RoupaFactory roupaFactory = new RoupaFactory();

        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");

        roupaFactory.getRoupa("Camisa");
        roupaFactory.getRoupa("Camisa");

        roupaFactory.sizeMap();

    }
}
