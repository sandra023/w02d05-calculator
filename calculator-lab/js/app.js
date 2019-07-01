const clickedNumberArray = []
const numberOperatorArray = []

function allClear (){
$('.clear').click(function(){
    $('#screen').text(0);
    clickedNumberArray.length = 0;
    numberOperatorArray.length = 0;
});
}
allClear();

function printNumbersToScreen () {
$('.numbers').click(function(){
    clickedNumberArray.push($(event.target).text());
    numberOperatorArray.push($(event.target).text());
    $('#screen').text(clickedNumberArray.join(''));
  });
}
printNumbersToScreen();

function evaluate () {
    if (numberOperatorArray.length = 3){
        let totalString = numberOperatorArray.join('')
        numberOperatorArray.length = 0;
        numberOperatorArray.push(eval(totalString).toFixed(2))
    }
}

function printOperatorsToScreen () {
    $('.operators').click(function(){
    evaluate();
    numberOperatorArray.push($(event.target).text());
    $('#screen').text($(event.target).text());
    clickedNumberArray.length = 0;
});
}
printOperatorsToScreen();

function printTotalToScreen (){
    $('.equals').click(function(){
    let totalString = numberOperatorArray.join('')
    $('#screen').text(eval(totalString).toFixed(2));
    numberOperatorArray.length = 0;
    numberOperatorArray.push($('#screen').text())
    });
}
printTotalToScreen();
numberOperatorArray.pop();