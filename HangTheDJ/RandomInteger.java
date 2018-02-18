import java.util.Random;

public class RandomInteger {

    private static Random random = new Random();

    public static int between(int minValue, int maxValue) {
        return random.nextInt(maxValue - minValue + 1) + minValue;
    }
}