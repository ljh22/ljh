window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号码正则表达式
    var regqq = /^[1-9]\d{4,}$/; //10000
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var btn1 = document.querySelector('#btn1');
    regexp(tel, regtel); //手机号码
    regexp(qq, regqq); //qq号码
    regexp(nc, regnc); //昵称
    regexp(msg, regmsg); //短信验证
    regexp(pwd, regpwd); //密码框
    // 表单验证的函数
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<span class="success">恭喜您输入正确</span>';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<span class="error"> 格式不正确，请重新输入</span>';
            }
        };
    }
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<span class="success">恭喜您输入正确</span>';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<span class="error"> 两次密码输入不一致</span>';
        }
    };
    // 短信验证码函数
    btn1.onclick = function () {
        btn1.disabled = true; //当点击后倒计时不能点击此按钮
        var time = 30; //倒计时5秒
        var timer = setInterval(fn, 1000); //设置定时器
        function fn() {
            time--;
            if (time >= 0) {
                btn1.innerHTML = time + 's后重新发送';
            } else {
                btn1.innerHTML = '重新发送验证码';
                btn1.disabled = false; //倒计时结束后能够重新点击发送的按钮
                clearTimeout(timer); //清除定时器
                time = 30; // 设置循环重新开始条件
            }
        }
    };
};
