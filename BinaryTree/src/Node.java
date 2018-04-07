import java.util.Arrays;

public class Node {

    private int value;
    private Node leftChild;
    private Node rightChild;

    public Node(int value) {
        this.value = value;
    }

    public Node(int[] values) {

        int length = values.length;

        switch (length) {
            case 1:
                this.value = values[0];
                return;
            case 2:
                int min = Math.min(values[0], values[1]);
                int max = Math.max(values[0], values[1]);
                this.value = max;
                this.leftChild = new Node(min);
            default:
                int median = length / 2;
                int[] leftArray = Arrays.copyOfRange(values, 0, median);
                int[] rightArray = Arrays.copyOfRange(values, median + 1, values.length);

                if (leftArray.length > 0) {
                    this.leftChild = new Node(leftArray);
                }

                this.value = values[median];

                if (rightArray.length > 0) {
                    this.rightChild = new Node(rightArray);
                }
        }
    }
}