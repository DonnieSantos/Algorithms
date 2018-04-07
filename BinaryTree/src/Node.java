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
            case 0:
                return;
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
                this.leftChild = new Node(Arrays.copyOfRange(values, 0, median));
                this.value = values[median];
                this.rightChild = new Node(Arrays.copyOfRange(values, median + 1, values.length));
        }
    }
}