# /src/index.js

// 브라우저 환경에서 실행될 클라이언트 로직입니다. 
// 콘솔 출력과 DOM 조작을 함께 처리합니다.

const message = "Hello, Nginx Deployment!";

// 콘솔에 메시지 출력
console.log(message);

// DOM 조작으로 화면에 표시
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<h1>${message}</h1>`; 
});
