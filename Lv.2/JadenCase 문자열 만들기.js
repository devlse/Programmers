// 문제
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열 입니다.
// 문자열 s 가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// s는 길이 1 이상 200 이하인 문자열
// s는 알파벳과 숫자, 공백문자('')로 이루어져 있다.
// 숫자는 단어의 첫 문자로만 나온다.
// 숫자로만 이루어진 단어는 없다.
// 공백문자가 연속해서 나올 수 있다.
// 첫문자가 영문이 아닐 때는 이어지는 영문은 소문자로 쓴다.

// 예
// s = "3people unFollowed me"  >>>>>   "3people Unfollowed Me"
// s = "for the last week"  >>>>>   "For The Last Week"

function solution(s) {
    let arr = []
    s = s.split(' ');
    s.forEach(n => {
      if (n.length !== 0) {
        n = n.toLowerCase()
        arr.push(n.replace(n[0], n[0].toUpperCase()))
      }
      else {
        arr.push(n)
      }
    })
    return arr.join(' ')
}