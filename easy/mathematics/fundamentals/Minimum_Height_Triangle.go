/*
 * 01/07/2017
 * https://www.hackerrank.com/challenges/lowest-triangle
 */

package main

import "fmt"

func main() {
	var a, b, h int

	fmt.Scan( &b, &a )

	h = 2 * a / b;

	if ( h * b / 2 ) != a {
		h = h + 1
	}

	fmt.Println( h )
}
