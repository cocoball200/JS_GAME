function handleRemove(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');

}
function handleKey(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!sound) return;

    key.classList.add('active'); // class 츄가
    sound.currentTime = 0; // 0으로 초기화해줌 그래서 플레이할때 처음부터 
    sound.play(); // sound시작
}
const keys = Array.from(document.querySelectorAll('.key')); //유사배열을 배열로 바꿔주기 위해 Array.from을 사용하는 것.  
keys.forEach(key => key.addEventListener('transitionend', handleRemove));//transitionend는 css 전이가 완료될때 
window.addEventListener('keydown', handleKey);
