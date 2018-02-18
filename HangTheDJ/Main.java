public class Main {

    public static void main(String[] args) {

        AccountDatabase theSystem = new AccountDatabase();
        Account frank = new Account();

        QueryResult result = theSystem.findBestMatch(frank);
        result.printResults();
    }
}