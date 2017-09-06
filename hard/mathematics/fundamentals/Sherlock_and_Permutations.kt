/**
 * 22/08/2017
 * https://www.hackerrank.com/challenges/sherlock-and-permutations
 */

import java.io.*
import java.util.*
import java.math.BigInteger

fun main(args: Array<String>) {
	val T = readLine()!!.toInt()

	for ( i in 1 .. T ) {
		var ( n, m ) = readLine()!!.split( ' ' ).map( String::toInt )

		var out = BigInteger.ONE
		var k = 1
		var j = n + m - 1

		while ( j >= n + 1 ) {
			out *= BigInteger( "$j" )
			j--
		}

		while ( k <= m - 1 ) {
			out /= BigInteger( "$k" )
			k++
		}

		println( out % BigInteger( "1000000007" ) )
	}
}
