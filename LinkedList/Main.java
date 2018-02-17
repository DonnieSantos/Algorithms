public class Main {

    public static void main(String[] args) {

        LinkedList list = new LinkedList(new Node("D"));

        list.append((new Node("E")));
        list.append((new Node("F")));

        list.insertNodeAtPosition(new Node("A"), 0);
        list.insertNodeAtPosition(new Node("B"), 1);
        list.insertNodeAtPosition(new Node("C"), 2);
        list.insertNodeAtPosition(new Node("G"), 6);

        list.print();
    }
}
