//  문제
// 문자열로 구성된 리스트 strings, 정수 n이 주어졌을 때
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려고 한다.

// strings는 길이 1 이상, 50이하인 배열이다.
// strings의 원소는 소문자 알파벳으로 이루어져 있다.
// strings의 원소는 길이 1이상, 100이하인 문자열이다.
// 모든 strings의 원소의 길이는 n보다 크다.
// 인덱스의 문자가 같은 문자열이 여럿 일경우 사전순으로 앞선 문자열이 앞쪽에 위치한다.

// ['sun', 'bed', 'car'], n: 1  >>>>>   ['car','bed',''sun']
// ['abce','abcd','cdx'], n: 2  >>>>>   ['abcd','abce','cdx]

function solution(strings, n) {
    let answer = [];
    
    answer = strings.sort((a,b) => {
        if (a[n] < b[n]) { return -1}
        if (a[n] > b[n]) { return 1}
        if (a[n] === b[n]) {
            if (a < b) { return -1};
            if (a > b) { return 1};
        }
    })
    return answer;
}