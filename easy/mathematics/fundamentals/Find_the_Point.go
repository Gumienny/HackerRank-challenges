/**
 * 24/08/2017
 * https://www.hackerrank.com/challenges/find-point
 */
 
package main
import "fmt"

func main() {
	var n, px, py, qx, qy int

	fmt.Scan( &n )

	for i := 0; i < n; i++ {
		fmt.Scan( &px, &py, &qx, &qy )
		fmt.Println( 2 * qx - px, 2 * qy - py )
	}
}
