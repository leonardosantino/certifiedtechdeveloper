package flyweight;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RoupaFactoryTest {

    private static RoupaFactory roupaFactory;

    @BeforeEach
    void beforeAll() {
        roupaFactory = new RoupaFactory();
    }
    @Test
    void getRoupa() {
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");
        roupaFactory.getRoupa("Calça");

        roupaFactory.getRoupa("Camisa");
        roupaFactory.getRoupa("Camisa");

        assertEquals(2, roupaFactory.sizeMap());
    }
}