public class Node {

	private String Value;
	private Node NextNode;

	public Node(String val)
	{
		Value = val;
	}
	public String getValue()
	{
		return Value; 
	}
	public Node getNextNode()
	{
      return NextNode; 
	}
	public void setNextNode(Node node)
	{
		NextNode = node;  
	}
}