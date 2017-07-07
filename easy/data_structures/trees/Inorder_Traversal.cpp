/**
 * 07/07/2017
 * https://www.hackerrank.com/challenges/tree-inorder-traversal
 */

void inOrder(node *root) {
	if (root != NULL)
	{
		inOrder(root -> left);
		std::cout << root -> data << ' ';
		inOrder(root -> right);
	}
}
