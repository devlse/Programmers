// 문제
// 두 수를 입력받아 최대공약수와 최소공배수를 반환하는 함수 solution을 완성해보세요.

// n = 3 / m = 12   >>>>>   [3,12]
// n = 2 / m = 5    >>>>>   [1,10]

function solution(n, m) {
    // 최대공약수
    let GCD = 0;
    let length = n > m ? n : m;
    
    for (let i = 1; i <= length; i++) {
      if (n % i == 0 && m % i == 0) {
        GCD = i;
      }
    }
    // 최소공배수: 두 수를 곱한 다음 최대공약수로 나누어 준다. A * B / GCD = LCM
    let LCM = 0;
    LCM = n * m / GCD;
    
    return [GCD, LCM];
}