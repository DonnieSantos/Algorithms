import java.util.LinkedList;

public class AccountDatabase {

    public static int numberOfAccounts = 100000;
    public static int numberOfSimulations = 1000;

    private LinkedList<Account> accounts;

    public AccountDatabase() {

        this.accounts = new LinkedList<>();

        for (int i=0; i<numberOfAccounts; i++) {
            this.accounts.add(new Account());
        }
    }

    public QueryResult findBestMatch(Account subject) {

        int mostRebellions = 0;
        Account bestMatch = null;

        for (int i=0; i<this.accounts.size(); i++) {

            Account account = this.accounts.get(i);
            int successfulRebellions = 0;

            for (int j=0; j<numberOfSimulations; j++) {
                if (subject.attemptSimulation(account)) {
                    successfulRebellions++;
                }
            }

            if (successfulRebellions >= mostRebellions) {
                mostRebellions = successfulRebellions;
                bestMatch = account;
            }
        }

        return new QueryResult(bestMatch, mostRebellions);
    }
}