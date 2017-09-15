/**
 * 15/09/2017
 * https://www.hackerrank.com/challenges/a-circle-and-a-square/
 *
 * 20/30 :(
 *
 * input:
 * 50 28
 * 30 15 10
 * 2 6 16 8
 *
 * output:
 * ..........#.......................................
 * .........##.......................................
 * ........####......................................
 * ......#######.....................................
 * .....#########....................................
 * ....##########................#...................
 * ..#############...........#########...............
 * ...#############........#############.............
 * ....#############......###############............
 * .....##########.......#################...........
 * .....#########........#################...........
 * ......#######........###################..........
 * .......####..........###################..........
 * ........##...........###################..........
 * ........#............###################..........
 * ....................#####################.........
 * .....................###################..........
 * .....................###################..........
 * .....................###################..........
 * .....................###################..........
 * ......................#################...........
 * ......................#################...........
 * .......................###############............
 * ........................#############.............
 * ..........................#########...............
 * ..............................#...................
 * ..................................................
 * ..................................................
 */

const dot = ( v1, v2 ) => v1.x * v2.x + v1.y * v2.y;
const get_vector = ( x1, y1, x2, y2 ) => { return { x: x2 - x1, y: y2 - y1 } };

function main()
{
	const [ w, h                  ] = readLine().split( ' ' ).map( Number );
	const [ x_circle, y_circle, r ] = readLine().split( ' ' ).map( Number );
	const [ x1, y1, x3, y3        ] = readLine().split( ' ' ).map( Number );

	const output = new Array( h );

	for ( let row = 0; row < h; row++ )
		output[row] = new Array( w ).fill( '.' );

	// circle
	for ( let x = Math.max( x_circle - r, 0 ); x <= Math.min( x_circle + r, w - 1 ); x++ )
	{
		for ( let y = Math.max( y_circle - r, 0 ); y <= Math.min( y_circle + r, h - 1 ); y++ )
		{
			if ( Math.hypot( x - x_circle, y - y_circle ) <= r )
				output[y][x] = '#';
		}
	}

	/**
	 * http://mathforum.org/library/drmath/view/54386.html
	 * https://math.stackexchange.com/questions/190111/how-to-check-if-a-point-is-inside-a-rectangle
	 */

	const angle = Math.atan2( y3 - y1, x3 - x1 );
	const magnitude = Math.hypot( x3 - x1, y3 - y1 ) / Math.SQRT2;

	const x2 = Math.cos( angle + Math.PI / 4 ) * magnitude + x1;
	const y2 = Math.sin( angle + Math.PI / 4 ) * magnitude + y1;
	const x4 = Math.cos( angle - Math.PI / 4 ) * magnitude + x1;
	const y4 = Math.sin( angle - Math.PI / 4 ) * magnitude + y1;

	const from_left = Math.round( Math.max( 0,     Math.min( x1, x2, x3, x4 ) ) );
	const to_right  = Math.round( Math.min( w - 1, Math.max( x1, x2, x3, x4 ) ) );
	const from_top  = Math.round( Math.max( 0,     Math.min( y1, y2, y3, y4 ) ) );
	const to_bottom = Math.round( Math.min( h - 1, Math.max( y1, y2, y3, y4 ) ) );
  
	
	for ( let x = from_left; x <= to_right; x++ )
	{
		for ( let y = from_top; y <= to_bottom; y++ )
		{
			const AB = get_vector( x2, y2, x1, y1 );
			const AM = get_vector( x2, y2, x, y );
			const BC = get_vector( x1, y1, x4, y4 );
			const BM = get_vector( x1, y1, x, y );

			const dotABAM = dot( AB, AM );
			const dotABAB = dot( AB, AB );
			const dotBCBM = dot( BC, BM );
			const dotBCBC = dot( BC, BC );

			if ( 0 <= dotABAM && dotABAM <= dotABAB && 0 <= dotBCBM && dotBCBM <= dotBCBC )
				output[y][x] = '#';
		}
	}

	console.log( output.map( row => row.join( '' ) ).join( '\n' ) );
}
