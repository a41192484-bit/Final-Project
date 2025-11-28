//로그인 상태에 따라 메뉴가 바뀌는 기능

//임시 유저데이터. 실제로는 서버에서 받아야함.
const user = {
    id: "",
    password:"",
    email: "",
    nickName: "",
    isLogin: false  //true로 바뀌면 로그인 상태
};

document.addEventListener("DOMContentLoaded",() => {
    //초기실행
    updateMenu();
})


function updateMenu() {
    const goLogin = document.getElementById("goLogin");
    const myPage = document.getElementById("myPage");

    if (user.isLogin == true) {
        //로그인 상태면
        goLogin.style.display = "none"; //로그인 숨김
        myPage.style.display = "inline-block"; //마이페이지 보이기
        myPage.href = "./04_myPage.html"; //마이페이지 연결
    } else {
        //로그아웃 상태면
        goLogin.style.display = "inline-block"; //로그인 보이기
        myPage.style.display = "none"; //마이페이지 숨김
        goLogin.href = "./02_login.html"; //로그인페이지 연결
    }
};

