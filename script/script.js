$(function() {

/*////////// 전화번호 입력 시작 //////////*/
    $("input").keyup(function(){
        var noChk = $(this).val();   // chk => check

        if (isNaN(noChk)) {
            alert("숫자만 가능합니다.");
            $(this).val("").focus();   // 커서가 해당위치에 표시됨
        }
    });

    /* 입력란 1번에서 2번으로 포커스 자동 변경(=자동 이동)*/
    $("#tel1").keyup(function(){
        var noLen = $(this).val().length;
        if (noLen == 3)   $("#tel2").focus();
    });

    /* 입력란 2번에서 3번으로 포커스 자동 변경*/
    $("#tel2").keyup(function(){
        var noLen = $(this).val().length;
        if (noLen == 4)   $("#tel3").focus();
    });
/*////////// 전화번호 입력 끝 //////////*/


/*////////// 전화번호 재입력 시작 //////////*/
    $("button").click(function(){
        var retVal = confirm("전화번호를 수정하시겠습니까?");
        // return value =>  retVal, 반환 값

        if(retVal) {
            $("input").val("");   // 모든 input요소의 내용을 공백으로 만듬
            $("#tel1").focus();
            // alert("확인을 누르셨어요!");
        } else {
            alert("취소를 누르셨어요!");
        }

    });
/*////////// 전화번호 재입력 끝 //////////*/


});
