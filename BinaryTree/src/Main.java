public class Main {

    public static void main(String[] args) {

        // Assuming Sorted List.
        // java.util.Arrays.sort(int[])

        int[] oddLengthList = new int [] {15, 25, 35, 45, 55, 65, 75};
        int[] evenLengthList = new int [] {15, 25, 35, 45, 55, 65, 75, 85};
        int[] edgeCaseListOne = new int [] {15};
        int[] edgeCaseListTwo = new int [] {15, 25};
        int[] edgeCaseListZero = new int [0];

        Node root = new Node(oddLengthList);
        root = new Node(evenLengthList);
        root = new Node(edgeCaseListOne);
        root = new Node(edgeCaseListTwo);
        root = new Node(edgeCaseListZero);
    }
}