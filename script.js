//** HOME SCORE **/
const onePoint = document.getElementById('scorebtn');
const twoPoint = document.getElementById('scorebtn2');
const threePoint = document.getElementById('scorebtn3');
// ** AWAY SCORE ** //
const fourPoint = document.getElementById('scorebtn4');
const fivePoint = document.getElementById('scorebtn5');
const sixPoint = document.getElementById('scorebtn6');

const scoreCard = document.getElementById('homeScore');
const scoreCardAway = document.getElementById('awayScore');

let counter = 0
let counterAway = 0

//** HOME  **/
onePoint.addEventListener('click',(e) => {
    e.preventDefault();
    counter++
    scoreCard.textContent = counter
})
twoPoint.addEventListener('click', (e) => {
    e.preventDefault();
    counter+=2
    scoreCard.textContent = counter
})
threePoint.addEventListener('click', (e) => {
    e.preventDefault();
    counter+=3
    scoreCard.textContent = counter
})

//** AWAY **/
fourPoint.addEventListener('click', (e) => {
    e.preventDefault();
    counterAway++
    scoreCardAway.textContent = counterAway
})
fivePoint.addEventListener('click', (e) => {
    e.preventDefault();
    counterAway+=2
    scoreCardAway.textContent = counterAway
})
sixPoint.addEventListener('click', (e) => {
    e.preventDefault();
    counterAway+=3
    scoreCardAway.textContent = counterAway
})
