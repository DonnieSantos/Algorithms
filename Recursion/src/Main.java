public class Main {

    public static void main(String[] args) {
        PrintThisMultipleTImes("Hello World", 5);
    }

    public static void PrintThisMultipleTImes(String text, int i) {

        // Base Case
        if (i==0) {
            return;
        }

        // Implementation
        System.out.println(text);

        // Recursion
        PrintThisMultipleTImes(text, i-1);
    }
}