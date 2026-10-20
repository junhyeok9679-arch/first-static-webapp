let count = 0;
document.querySelector('#counter').addEventListener('click', (event) => {
  count += 1;
  event.currentTarget.textContent = `클릭 횟수: ${count}`;
  document.querySelector('#status').textContent = 'JavaScript가 정상 작동합니다.';
});
