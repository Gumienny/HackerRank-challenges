/**
 * 11/09/2017
 * https://www.hackerrank.com/challenges/merge-list/
 */

import java.io.*
import java.util.*
import java.math.BigInteger

fun main( args: Array<String> ) {
	val t = readLine()!!.toInt()

	for ( i in 1 .. t ) {
		var ( m, n ) = readLine()!!.split( ' ' ).map { it.toInt() }
		n = n + m

		var x = BigInteger.ONE
		var y = BigInteger.ONE

		for ( a in ( n - m + 1 ) .. n ) {
			x *= BigInteger( "$a" )
		}

		for ( a in 1 .. m ) {
			y *= BigInteger( "$a" )
		}

		println( ( x / y ) % BigInteger( "1000000007" ) )
	}
}
