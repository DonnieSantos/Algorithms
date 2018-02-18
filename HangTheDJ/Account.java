public class Account {

    private static int AccountNumber = 0;
    private static int TARGET = 100;

    private int id;
    private int luck;
    private int quality;

    public int getId() { return this.id; }
    public int getLuck() { return this.luck; }
    public int getQuality() { return this.quality; }

    public Account() {

        this.id = ++AccountNumber;
        this.luck = RandomInteger.between(0, 100);

        if (this.luck < TARGET / 2) {
            this.quality = RandomInteger.between(0, TARGET / 3);
        } else if (this.luck < TARGET) {
            this.quality = RandomInteger.between(0, TARGET / 2);
        } else {
            this.quality = RandomInteger.between(0, TARGET);
        }
    }

    public boolean attemptSimulation(Account otherAccount) {
        return RandomInteger.between(0, 100) < otherAccount.getQuality();
    }
}