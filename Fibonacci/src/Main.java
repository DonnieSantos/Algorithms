public class Main {

    public static void main(String[] args) {
        System.out.println(Fib(5));
    }

    public static int Fib(int i) {

        // Base Cases
        if (i <= 1) return 1;
        if (i == 2) return 2;

        // Recursion
        return Fib(i - 1) + Fib(i - 2);
    }
}