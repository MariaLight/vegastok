
var exampleOdometerValue = 20234;
let vw = window.innerWidth;
let odometerElement;
if (document.getElementById('odometer')) {
if (vw >= 960) {
    odometerElement = document.getElementById('odometer');
} else {
    odometerElement = document.getElementById('odometer-2');

}
var exampleOdometer = new Odometer({ 
    el: odometerElement,
    value: exampleOdometerValue,
    format: '( ddd).dd', // Изменить формат представления дробных чисел. Так же можно задать большее кол-во знаков после запятой
    animation: 'up' // Вид анимации


});
exampleOdometer.render()


setInterval(function () {
    exampleOdometer.update(exampleOdometerValue++);
}, 5000);
}