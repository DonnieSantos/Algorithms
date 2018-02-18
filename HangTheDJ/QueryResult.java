public class QueryResult {

    private Account account;
    private int numberOfRebellions;

    public QueryResult(Account account, int numberOfRebellions) {
        this.account = account;
        this.numberOfRebellions = numberOfRebellions;
    }

    public void printResults() {
        System.out.println("Match Found Account # : " + account.getId());
        System.out.println("Account User Data     : " + account.getLuck() + " / " + account.getQuality());
        System.out.println("Number of Simulations : " + AccountDatabase.numberOfSimulations);
        System.out.println("Number of Rebellions  : " + numberOfRebellions);
        System.out.println("Compatibility         : " + ((double) numberOfRebellions / AccountDatabase.numberOfSimulations) * 100);
    }
}