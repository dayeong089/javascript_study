var pattern = /a./; //a+하나의 문자
console.log(pattern.exec("abcde")); //ab

var pattern = /b/;
console.log(pattern.test('abcde')); //true
console.log(pattern.test('aaaaa')); //false

var pattern = /a/;
var str = 'abcdef';
console.log(str.match(pattern)); //a
var str = 'bbbbbb';
console.log(str.match(pattern)); //null
var str = 'abcdef';
console.log(str.replace(pattern, 'A')); //Abcdef


var xi = /a/;
console.log("Abcde".match(xi)); //null
var oi = /a/i; //대소문자 구분x
console.log("Abcde".match(xi)); //A

var xg = /a/;
console.log("abcdea".match(xg)); //a
var og = /a/g; //패턴 모두 반환
console.log("abcdea".match(xg)); //aa
var ig = /a/ig;
console.log("AabcdAa".match(ig)); //AaAa
 
var pattern = /(\w+)\s(\w+)/; //word + whitespace + word ,, \w - a~z, A~Z, 0~9
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1"); //$2:두번째 word, $1:첫번째 word
console.log(result); //everybody, coding

var urlPattern = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
})
console.log(result)
