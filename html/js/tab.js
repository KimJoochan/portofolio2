$(document).ready(function () {
    var half_win = $(window).width() * 0.5;
    //이메일 전송 창 뜨게 하는 버튼 생성
    var posX;
    var posY;
    $('#tab_quick_but').on('touchmove', function () {
        posX = event.touches[0].clientX - $('#tab_quick_but').width() * 0.5;
        posY = event.touches[0].clientY - $('#tab_quick_but').height() * 0.2;
        $('#tab_quick_but').css({
            top: posY,
            left: posX
        });
        if (posX > half_win) {
            $('#tab_quick_but').animate({
                backgroundColor: '#f47bff'
            }, 500)
        } else if (posX <= half_win) {
            $('#tab_quick_but').css({
                backgroundColor: '#7bb3ff'
            })
        }
    });
    $('#tab_quick_but').on('touchend', function () {
        if (posX > half_win) {
            $('#tab_quick_closed').css({
                top: 25,
                left: 0,
                zIndex: 999
            })
            $('#tab_quick_but').css({
                zIndex: 999
            })
            $('#tab_quick').animate({
                left: 0
            }, 500, function () {
                $('#tab_quick_closed').fadeIn('fast').animate({
                    top: '25px',
                    left: $(window).width() * 0.85
                }, 500);
                $('#tab_quick_but').hide();
            });
        } else {
            $('#tab_quick_but').animate({
                top: posY,
                left: '-25px'
            }, 500)
        }
    });

    $('#tab_quick_closed').click(function () {
        $('#tab_quick_closed').hide();
        $('#tab_quick').animate({
            left: $(window).width() * '-1'
        }, 500);
        posX = -25;
        posY = $(window).height() * 0.5;
        $('#tab_quick_but').show('fast').animate({
            left: posX,
            top: posY,
            backgroundColor: '#7bb3ff'
        }, 500);
    });
    $('#tab_quick_close').click(function () {
        $('#tab_quick_explain').hide('fast');
    })



    //메뉴바클릭시 메뉴등장
    var nac = 0;
    $('#tab_head>nav').click(function () {
        nac++;
        if (nac % 2 == 1) {
            $('#nav_mark>li').eq(0).css({
                top: 20
            }).transition({
                rotate: '135deg'
            });
            $('#nav_mark>li').eq(1).transition({
                rotate: '45deg'
            });
            $('#nav_mark>li').eq(2).hide();
        } else if (nac % 2 == 0) {
            $('#nav_mark>li').eq(0).css({
                top: 0
            }).transition({
                rotate: '0deg'
            });
            $('#nav_mark>li').eq(1).transition({
                rotate: '0deg'
            });
            $('#nav_mark>li').eq(2).show();
        }
        $('#tab_nav').slideToggle(500);
    });
    //메뉴클릭시 내려가는 이벤트
    var wst = $(window).scrollTop();
    $('#tab_nav>li').click(function (event) {
        event.preventDefault(event);
        var aml = $(this).index();
        $('#scroll_bar').animate({
            scrollTop: $('#tab_wrap>li').height() * aml
        }, 500, function () {
            $('#nav_mark>li').eq(0).css({
                top: 0
            }).transition({
                rotate: '0deg'
            });
            $('#nav_mark>li').eq(1).transition({
                rotate: '0deg'
            });
            $('#nav_mark>li').eq(2).show();
            $('#tab_nav').slideUp(500);
            nac = 0;
        })
    })
    //스킬창에서 누르면 변경되게 하기
    $('#tab_prog_chart>img').show();
    $('#prog_select>li').click(function () {
        $('#percent').hide();
        var k = $(this).index();
        var cunt = 0;
        $('#tab_prog_chart>img').css({
            opacity: 0
        });
        if (k == 0) {
            $('#prog').html('PHOTOSHOP');
            $('.counter').animateNumber({
                number: 70
            }, 1000);
            setTimeout(function () {
                $('#tab_prog_chart>img').attr('src', 'imgs/pschart.png');
                $('#tab_prog_chart>img').animate({
                    opacity: 1
                }, 500, function () {
                    $('#percent').fadeIn(500)
                });
            }, 500);
        } else if (k == 1) {
            $('#prog').html('ILLUSTRATOR');
            $('.counter').animateNumber({
                number: 73
            }, 1000);
            setTimeout(function () {
                $('#tab_prog_chart>img').attr('src', 'imgs/aichart.png');
                $('#tab_prog_chart>img').animate({
                    opacity: 1
                }, 500, function () {
                    $('#percent').fadeIn(500)
                });
            }, 500);
        } else if (k == 2) {
            $('#prog').html('HTML');
            $('.counter').animateNumber({
                number: 90
            }, 1000);
            setTimeout(function () {
                $('#tab_prog_chart>img').attr('src', 'imgs/htmlchart.png');
                $('#tab_prog_chart>img').animate({
                    opacity: 1
                }, 500, function () {
                    $('#percent').fadeIn(500)
                });
            }, 500);
        } else if (k == 3) {
            $('#prog').html('CSS');
            $('.counter').animateNumber({
                number: 87
            }, 1000);
            setTimeout(function () {
                $('#tab_prog_chart>img').attr('src', 'imgs/csschart.png');
                $('#tab_prog_chart>img').animate({
                    opacity: 1
                }, 500, function () {
                    $('#percent').fadeIn(500)
                });
            }, 500);
        } else if (k == 4) {
            $('#prog').html('JQUERY');
            $('.counter').animateNumber({
                number: 85
            }, 1000);
            setTimeout(function () {
                $('#tab_prog_chart>img').attr('src', 'imgs/jqchart.png');
                $('#tab_prog_chart>img').animate({
                    opacity: 1
                }, 500, function () {
                    $('#percent').fadeIn(500)
                });
            }, 500);
        }
        $('#prog_select>li').removeClass('tab_on');
        setTimeout(function () {
            $('#prog_select>li').eq(k).addClass('tab_on');
        }, 500)
    })
    /*스와이프배슬라이드*/
    var swiper = new Swiper('.swiper-containe', {
        pagination: {
            el: '.swiper-pagination',
        },
    });
});
