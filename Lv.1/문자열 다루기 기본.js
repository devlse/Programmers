// 문제
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.

// s는 길이 1 이상, 길이 8 이하인 문자열이다.

// "a234"   >>>>>   false
// "1234"   >>>>>   true

function solution(s) {
    return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s) ? true : false
}