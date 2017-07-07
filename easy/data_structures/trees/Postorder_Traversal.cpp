/**
 * 07/07/2017
 * https://www.hackerrank.com/challenges/tree-postorder-traversal/
 */

void postOrder(node *root) {
	if (root != NULL)
	{
		postOrder(root -> left);
		postOrder(root -> right);
		std::cout << root -> data << ' ';
	}
}
