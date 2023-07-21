// Links 객체를 생성함으로써 코드를 간결화
var Links = {
    // link의 색을 지정하는 매서드를 만듦
    setColor:function (color){
        /*
        // 반복문을 사용하여 night mode일 때의 모든 링크색을 color로 함
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = color;
            i = i + 1;
        }
        */
        // 위 코드를 jquery의 함수로 간결화함
        $('a').css('color', color);
        }
    };
  // Body 객체를 생성함으로써 코드를 간결화
var Body = {
    // body의 글자색을 지정하는 매서드를 만듦
    setColor:function (color){
        // document.querySelector('body').style.color = color;
        // 위 코드를 jquery의 함수로 간결화함
        $('body').css('color', color);
        },
    // body의 배경색을 지정하는 매서드를 만듦
    setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        // 위 코드를 jquery의 함수로 간결화함
        $('body').css('backgroundColor', color);
        }
     };
    /* 함수를 호출할 때, 태그 자기자신을 가리키는 this를
        사용하기 위해 매개변수 self를 추가하고 함수 내부의
        this를 self로 바꿈 */
    // 이 함수로 인해 후에 night&day 버튼을 추가하기 편해짐
    function nightDayHandler(self){
        var target = document.querySelector('body');
        if (self.value === 'night'){
            // Body 객체의 매서드를 호출함
            Body.setBackgroundColor('black');
            Body.setColor('white');
            // value를'day'로 바꿈
            self.value = 'day';

            // Links 객체의 매서드를 호출함
            Links.setColor('powderblue');
        } else {
            // Body 객체의 매서드를 호출함
            Body.setBackgroundColor('white');
            Body.setColor('black');
            // value를 'night'로 바꿈
            self.value = 'night';

            // Links 객체의 매서드를 호출함
            Links.setColor('blue');
        }
    }