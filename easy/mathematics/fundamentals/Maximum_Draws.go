/*
 * 21/08/2017
 * https://www.hackerrank.com/challenges/maximum-draws
 */
 
package main
import "fmt"

func main() {
	var i, n, t int
    
	fmt.Scan( &t )
    
	for i = 0; i < t; i++ {
		fmt.Scan( &n );
		fmt.Println( n + 1 )
	}
}
