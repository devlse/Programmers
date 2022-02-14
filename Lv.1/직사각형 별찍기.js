// 문제
// 표준 입력으로 두개의 정수 n 과 m이 주어진다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력하세요.

// n과 m은 각각 1000이하인 자연수이다.

// 5 3
// *****
// *****
// *****

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { // 입력받은 숫자를 data에 받는다.
    const n = data.split(" "); // data를 공백으로 구분하여 n 에 할당 (5 3) => [5,3]
    const a = Number(n[0]), b = Number(n[1]); // a는 가로길이, b는 세로길이
    
    for (let i = 0; i < b; i++) {
        let printer = "";
        for (let i = 0; i < a; i++) {
            printer += '*'
        };
        console.log(printer);
    }
});