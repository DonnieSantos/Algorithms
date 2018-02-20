public class Bookshelf {

    private Book[] shelf;

    public Bookshelf(Book firstBook) {
        this.shelf = new Book[1];
        this.shelf[0] = firstBook;
    }

    public void print() {
        for (Book book: this.shelf) {
            System.out.println(book.getName());
        }
    }

    public void insert(Book book, int position) {

        // Adding a book to an empty Bookshelf.
        if (this.shelf.length == 0 && position == 0) {
            this.shelf = new Book [1];
            this.shelf[0] = book;
            return;
        }

        // Must insert book in a valid array position.
        if (position < 0 || position > this.shelf.length) {
            return;
        }

        Book[] newBookshelf = new Book [this.shelf.length + 1];

        for (int i=0; i<this.shelf.length+1; i++) {
            if (i < position) {
                newBookshelf[i] = this.shelf[i];
            }
            else if (i > position) {
                newBookshelf[i] = this.shelf[i-1];
            }
            else {
                newBookshelf[i] = book;
            }
        }

        this.shelf = newBookshelf;
    }
}