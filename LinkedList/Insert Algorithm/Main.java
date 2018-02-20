public class Main {

    public static void main(String[] args) {

        Node root = new Node("A");
        root.setNextNode(new Node("B"));
        root.getNextNode().setNextNode(new Node("C"));

        root = root.insertNodeAtPosition(new Node("N"), 2);
        root = root.insertNodeAtPosition(new Node("I"), 0);
        root = root.insertNodeAtPosition(new Node("L"), 5);

        root.print();
    }
}