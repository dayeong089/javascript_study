function outer(){ //외부 함수
    function inner(){ //내부 함수
        var title = "coding everybody";
        console.log(title);
    }
    inner();
}
outer();


//내부 함수는 외부 함수의 지역변수에 접근할 수 있음
function outer2(){ //외부 함수
    var title2 = "coding everybody2";
    function inner2(){ //내부 함수
        console.log(title2);
    }
    inner2();
}
outer2();


// 이미 종료된 외부함수의 변수를 내부함수가 접근할 수 있음
function outter(){
    var title = "coding everybody3";
    return function(){
        console.log(title);
    }
}
var inner = outter();
inner();
