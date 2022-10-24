// 登录

function goIndex() {
    window.location.href = 'index2.html';
    var free = document.querySelectorById('free');
    if (free.display.style == 'inline') {
        free.style.display = 'none';
    }
}

// 轮播图
$('.arrows').hide();
$('.col_con').css({
    width: '' + $('.col_window img').length * 600 + 'px',
});
$('.col_window')
    .bind('mouseover', function () {
        //鼠标放上图片
        $('.arrows').show(0);
        clearInterval(timer);
    })
    .bind('mouseleave', function () {
        $('.arrows').hide(0);
        timer = setInterval(auto, 5000);
    });
var left = 0;

function auto() {
    //自动轮播
    left -= 600;
    if (left < -($('.col_con img').length - 1) * 600) left = 0;
    $('.col_con').css({
        left: '' + left + 'px',
    });
    for (var j = 0; j < $('span').length; j++)
        $('span:eq(' + j + ')').css({
            backgroundColor: '#496274',
        });
    $('span:eq(' + -left / 600 + ')').css({
        backgroundColor: '#a1b5c3',
    });
}
var timer = setInterval(auto, 5000);
$('.arrows_Lcon').on('click', function () {
    //左滑
    left += 600;
    if (left > 0) {
        left = -($('.col_window img').length - 1) * 600;
    }
    $('.col_con').css({
        left: '' + left + 'px',
    });
    for (var j = 0; j < $('span').length; j++)
        $('span:eq(' + j + ')').css({
            backgroundColor: '#496274',
        });
    $('span:eq(' + -left / 600 + ')').css({
        backgroundColor: '#a1b5c3',
    });
    clearInterval(timer);
    //timer = setInterval(auto,5000);
});
$('.arrows_Rcon').on('click', function () {
    //右滑
    left -= 600;
    if (left < -($('.col_window img').length - 1) * 600) left = 0;
    $('.col_con').css({
        left: '' + left + 'px',
    });
    for (var j = 0; j < $('span').length; j++)
        $('span:eq(' + j + ')').css({
            backgroundColor: '#496274',
        });
    $('span:eq(' + -left / 600 + ')').css({
        backgroundColor: '#a1b5c3',
    });
    clearInterval(timer);
    //timer = setInterval(auto,5000);
});
$('.dots span').on('click', function () {
    //点击切换
    for (var j = 0; j < $('span').length; j++)
        $('span:eq(' + j + ')').css({
            backgroundColor: '#496274',
        });
    $(this).css({
        backgroundColor: '#a1b5c3',
    });
    left = -600 * $(this).index();
    $('.col_con').css({
        left: '' + left + 'px',
    });
    clearInterval(timer);
    //timer = setInterval(auto,5000);
});
