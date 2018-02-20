public class Main {

    public static void main(String[] args) {

        System.out.println();
        System.out.println("In Order:");
        Bookshelf shelf1 = new Bookshelf(new Book("Book One"));
        shelf1.insert(new Book("Book Two"), 1);
        shelf1.insert(new Book("Book Three"), 2);
        shelf1.insert(new Book("Book Four"), 3);
        shelf1.insert(new Book("Book Five"), 4);
        shelf1.print();

        System.out.println();
        System.out.println("Reverse Order:");
        Bookshelf shelf2 = new Bookshelf(new Book("Book One"));
        shelf2.insert(new Book("Book Two"), 0);
        shelf2.insert(new Book("Book Three"), 0);
        shelf2.insert(new Book("Book Four"), 0);
        shelf2.insert(new Book("Book Five"), 0);
        shelf2.print();

        System.out.println();
        System.out.println("Mixed Order:");
        Bookshelf shelf3 = new Bookshelf(new Book("Book One"));
        shelf3.insert(new Book("Book Two"), 1);
        shelf3.insert(new Book("Book Three"), 2);
        shelf3.insert(new Book("Book Four"), 1);
        shelf3.insert(new Book("Book Five"), 2);
        shelf3.print();
    }
}