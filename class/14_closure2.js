function factory_movie(title){ // 외부 함수
    return{
        get_title : function(){ //내부 함수
            return title;
        },
        set_title : function(_title){
            if(typeof _title === 'string'){
                title = _title
            }else{
                console.log("제목은 문자열이어야 합니다")
            }
        }
    }
}
// title은 factory_movie의 내부함수(get_title/set_title)을 통해서만 접근할 수 있음 .. private 변수


// 같은 유형의 객체를 담고있지만 객체가 가지는 메서드들이 접근할 수 있는 title 값은 다르다
ghost = factory_movie('ghost in the shell');
matrix = factory_movie('matrix');

console.log(ghost.get_title()); //ghost in the shell
console.log(matrix.get_title()); //matrix

ghost.set_title('공각기동대'); //factory_movie의 title값을 바꾼다
ghost.set_title(1); //error
console.log(ghost.get_title()); //공각기동대 
console.log(matrix.get_title()); //matrix
// 자신들이 실행된 시점에서의 외부함수의 지역변수에 접근, 그 값은 유지, 값을 바꿀 수 있음
