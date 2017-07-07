/**
 * 07/07/2017
 * https://www.hackerrank.com/challenges/tree-preorder-traversal/
 */

void preOrder(node *root) {
	if (root != NULL)
	{
		std::cout << root -> data << ' ';
		preOrder(root -> left);
		preOrder(root -> right);    
	}
}
