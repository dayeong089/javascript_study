function a(){

} //함수

a = {
    b:function(){

    }
} //객체의 속성값으로 담겨진 함수 : method


//콜백 함수 : 다른 함수에 매개변수로 넘겨준 함수 .. 때가 되면 나중에 callback
//함수가 다른 함수의 인자로 전달될 수 있음
function cal(func, num){
    return func(num)
}
function increase(num){
    return num+1
}
function decrease(num){
    return num-1
}
console.log(cal(increase, 1))
console.log(cal(decrease, 1))


//객체의 속성값으로 저장 가능
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left+right},
        'minus' : function(left, right){return left-right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1)) //3
console.log(cal('minus')(2,1)) //1


//배열에도 저장 가능
var process=[
    function(input){return input+10;},
    function(input){return input*input},
    function(input){return input/2}
]

var input = 1
for(var i=0; i<process.length; i++){
    input = process[i](input);
    console.log(input)
}
