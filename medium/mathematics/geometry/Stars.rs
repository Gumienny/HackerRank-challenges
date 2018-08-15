/**
 * 15/08/2018
 * https://www.hackerrank.com/challenges/stars/problem
 */

use std::str::FromStr;

fn main() {}

fn process(input: &'static str) -> u64 {
    let mut min_delta = std::f64::MAX;
    let mut min_sum = std::f64::MAX;

    let mut lines = input.split_whitespace();

    let n: usize = lines.next().unwrap().parse().ok().unwrap();

    let points: Vec<_> = lines.filter_map(|w| f64::from_str(w).ok()).collect();

    for i in 0..n {
        let (p1x, p1y) = (points[3 * i], points[3 * i + 1]);

        for j in (i + 1)..n {
            let (p2x, p2y) = (points[3 * j], points[3 * j + 1]);

            let mut a = 0.0;
            let mut b = 0.0;
            let mut c = 0.0;
            let mut d = 0.0;

            if p1x != p2x {
                a = -(p1y - p2y) / (p1x - p2x);
                b = 1.0;
                c = -(a * p1x) - (b * p1y);
            } else {
                // vertical line
                a = 1.0;
                d = p1x;
            }

            let mut s1 = 0.0;
            let mut s2 = 0.0;
            let mut s3 = 0.0;
            let mut s4 = 0.0;

            for k in 0..n {
                let (x, y, v) = (points[3 * k], points[3 * k + 1], points[3 * k + 2]);
                let out = a * x + b * y + c;

                if out >= d {
                    s1 += v;
                } else {
                    s2 += v;
                }

                if out > d {
                    s3 += v;
                } else {
                    s4 += v;
                }
            }

            let d1 = f64::abs(s1 - s2);
            let d2 = f64::abs(s3 - s4);

            if d1 < min_delta {
                min_delta = d1;
                min_sum = f64::min(s1, s2);
            }

            if d2 < min_delta {
                min_delta = d2;
                min_sum = f64::min(s3, s4);
            }
        }
    }

    min_sum as u64
}

#[test]
fn samples_from_hackerrank() {
    let input_1 = "\
        4
        1 1 2
        -1 1 2
        -1 -1 4
        1 -1 5";

    let input_2 = "\
        10
        748798831 -200797120 595
        -774675771 179630170 159
        -338760201 945958360 750
        955629379 -312997434 516
        755005057 -672683474 405
        -743176829 190325067 86
        -301478753 -718170081 923
        -795908444 985440803 854
        -102868895 671114060 246
        -698209449 12550066 190";

    assert_eq!(process(input_1), 6);
    assert_eq!(process(input_2), 2358);
}
