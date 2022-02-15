$(document).ready(function () {
 /*   var agent = navigator.userAgent.toLowerCase();

    if (agent.indexOf("chrome") != -1) {
        alert('현 페이지는 크롬에 최적화 되어있습니다. 현 브라우저는 크롬입니다.');
    } else {
        alert('이 홈페이지는 크롬에 최적화 되어있습니다.');
    }
*/
    var alw = $('#all_wrap>li').width();
    var i = 0;
    var j;
    $(window).resize(function () {
        alw = $('#all_wrap>li').width();
    })
    /*바디에서 스크롤시 화면전환*/
    $('body,html').mousewheel(function (event, delta) {
        if (delta < 0) {
            if ($('#all_wrap').is(':animated')) {
                return;
            } else {
                i--;
                if (i >= -6) {
                    $('#all_wrap').animate({
                        left: alw * i
                    }, 1000, function () {
                        $('#all_menu>li').removeClass('on');
                        j = i;
                        j *= -1;
                        $('#all_menu>li').eq(j).addClass('on');
                    })
                } else if (i < -6) {
                    i = -7;
                }

            }
        } else if (delta > 0) {
            if ($('#all_wrap').is(':animated')) {
                return;
            } else {
                i++;
                if (i < 1) {
                    $('#all_wrap').animate({
                        left: alw * i
                    }, 1000, function () {
                        $('#all_menu>li').removeClass('on');
                        j = i;
                        j *= -1;
                        $('#all_menu>li').eq(j).addClass('on');
                    })
                } else if (i >= 1) {
                    i = 0;
                }
            }
        }
        if (i != -2) {
            $('.graph img').css({
                opacity: '0'
            });
            $('#snow1').css({
                opacity: 0
            })
            $('#snow2').css({
                opacity: 0
            })
            $('.graph').animate({
                marginTop: '0px'
            })

        } else if (i == -2) {
            $('#snow1').css({
                opacity: 1
            })
            $('#snow2').css({
                opacity: 1
            })
            k = 0;
            l = 0;
            h = 0;
            g = 0;
            d = 0;
            setTimeout(function () {
                $('.reward').html('??')
            }, 500)
        }
    });

    /*메뉴바를 클릭시 화면전환*/
    var ali;
    $('#all_menu>li').click(function () {
        ali = $(this).index();
        i = ali * -1;
        $('#all_wrap').animate({
            left: alw * i
        }, 1000, function () {
            $('#all_menu>li').removeClass('on');
            $('#all_menu>li').eq(ali).addClass('on');
        })
        if (i != -2) {
            $('.graph img').css({
                opacity: '0'
            });
            $('#snow1').css({
                opacity: 0
            })
            $('#snow2').css({
                opacity: 0
            })
            $('.graph').animate({
                marginTop: '0px'
            })
        } else if (i == -2) {
            $('#snow1').css({
                opacity: 1
            })
            $('#snow2').css({
                opacity: 1
            })
            k = 0;
            l = 0;
            h = 0;
            g = 0;
            d = 0;
            setTimeout(function () {
                $('.reward').html('??')
            }, 500)
        }
    });
    //퀙메뉴의 설명
    var qbl = 0;
    $('#quci_buts>li').click(function () {
        qbl = $(this).index();
        $('#quick_ex').animate({
            left: -qbl * $('#center_mask').width()
        }, 500, function () {
            $('#quci_buts>li').removeClass('quci_on');
            $('#quci_buts>li').eq(qbl).addClass('quci_on');
        });
    });
    $('.quick_arrow.left').click(function () {
        qbl--;
        $('#quick_ex').animate({
            left: -qbl * $('#center_mask').width()
        }, 500, function () {
            $('#quci_buts>li').removeClass('quci_on');
            $('#quci_buts>li').eq(qbl).addClass('quci_on');
        });
    });
    $('.quick_arrow.right').click(function () {
        qbl++;
        $('#quick_ex').animate({
            left: -qbl * $('#center_mask').width()
        }, 500, function () {
            $('#quci_buts>li').removeClass('quci_on');
            $('#quci_buts>li').eq(qbl).addClass('quci_on');
        });
    })
    $('#quick_close').click(function () {
        $('#quick_explain').hide('fast');
    })
    $('#quick_but>p').click(function () {
        $('#pc_quick').slideUp('fast');
        $('#quick_but').animate({
            top: '-25px',
            left: $(window).width() * 0.5,
            backgroundColor: '#f47bff'
        }, function () {
            $('#quick_but').find('p').hide();
        })
    });
    var quick_butX;
    var quick_butY;
    $('#quick_but').mousedown(function () {
        $('body').mousemove(function (event) {
            quick_butX = event.pageX + $('#quick_but').width() * 0.5;
            quick_butY = event.pageY - $('#quick_but').height() * 0.5;
            $('#quick_but').css({
                zIndex: '999',
                top: quick_butY,
                left: quick_butX
            });
            if (quick_butY > 200) {
                $('#quick_but').stop().animate({
                    backgroundColor: '#7bb3ff'
                }, 500)
            } else if (quick_butY <= 200) {
                $('#quick_but').css({
                    backgroundColor: '#f47bff'
                })
            }
            event.preventDefault(event);
        })
    }).mouseup(function () {
        if (quick_butY > 200) {
            $('#pc_quick').stop().slideDown(500);
            quick_butX = $(window).width() * 0.5 + 570;
            quick_butY = 0;
            $('#quick_but').stop().animate({
                left: quick_butX,
                top: quick_butY
            }, 1000, function () {
                $('#quick_but>p').stop().fadeIn('fast');
            });
        } else {
            $('#quick_but').animate({
                top: '-25px'
            }).css({
                left: quick_butX
            })
        }
        $('body').unbind('mousemove');
    })
    /*첫페이지 로딩후 이벤트*/
    $('#home').mousemove(function (event) {
        var posX = event.clientX;
        var posY = event.clientY;
        $('#leave1').css({
            left: posX / 10 * '-1',
            top: posX / 10
        })
        $('#leave2').css({
            top: posX / 10,
            left: posY / 25 * '-1'
        })
    });
    $('.up_mvig').animate({
        top: 0
    }, 500)
    /*세번째 화면에서 눈의 이동*/
    $('#skill').mousemove(function (event) {
        var posX = event.clientX;
        var posY = event.clientY;
        $('#snowdown1').css({
            left: posX / 20 * '-1',
            top: posY / 5 * '-1'
        })
        $('#snowdown2').css({
            left: posX / 5,
            top: posY / 10
        })
    });
    /*네번째화면에서 점갤러리 클릭시 변환*/
    var pdl = 0;
    $('#pc_dot>li').click(function () {
        $('#pc_dot>li').removeClass('dot_on');
        $(this).addClass('dot_on');
        pdl = $(this).index();
        $('#renchart>li').eq(0).animate({
            left: '-100%'
        }, 500, function () {
            $('#renchart>li').eq(0).animate({
                left: '0'
            })
        });
        $('#renchart>li').eq(1).animate({
            left: '100%'
        }, 500, function () {
            $('#renchart>li').eq(1).animate({
                left: '0'
            })
        })
        setTimeout(function () {
            if (pdl == 0) {
                $('#renchart>li').eq(0).find('img').attr('src', 'imgs/pc_renwal_1be.jpg')
                $('#renchart>li').eq(1).find('img').attr('src', 'imgs/pc_renwal_1.jpg')
            } else if (pdl == 1) {
                $('#renchart>li').eq(0).find('img').attr('src', 'imgs/pc_renwal_2be.jpg')
                $('#renchart>li').eq(1).find('img').attr('src', 'imgs/pc_renwal_2.jpg')
            } else if (pdl == 2) {
                $('#renchart>li').eq(0).find('img').attr('src', 'imgs/pc_renwal_3be.jpg')
                $('#renchart>li').eq(1).find('img').attr('src', 'imgs/pc_renwal_3.jpg')
            } else if (pdl == 3) {
                $('#renchart>li').eq(0).find('img').attr('src', 'imgs/pc_renwal_4be.jpg')
                $('#renchart>li').eq(1).find('img').attr('src', 'imgs/pc_renwal_4.jpg')
            }
        }, 500)
    });
    $('#renchart>li').eq(0).click(function () {
        $('#renchart>li').eq(0).find('#renewal_explain').fadeIn(500);
        $('#renchart>li').eq(0).find('#renewal_explain>li').eq(pdl).show(500);
    });
    $('#renchart>li').eq(1).click(function () {
        $('#renchart>li').eq(1).find('#renewalafter_explain').fadeIn(500);
        $('#renchart>li').eq(1).find('#renewalafter_explain>li').eq(pdl).show(500);
    });
    $('#renchart>li').eq(0).find('#renewal_explain').mouseleave(function () {
        $('#renchart>li').eq(0).find('#renewal_explain').fadeOut(500);
        $('#renchart>li').eq(0).find('#renewal_explain>li').eq(pdl).fadeOut(500);
    })
    $('#renchart>li').eq(1).find('#renewalafter_explain').mouseleave(function () {
        $('#renchart>li').eq(1).find('#renewalafter_explain').fadeOut(500);
        $('#renchart>li').eq(1).find('#renewalafter_explain>li').eq(pdl).fadeOut(500);
    });
    /*리뉴어전 설명창에서 바로가기 클릭시 이동*/
    //리뉴얼전 아주대학병원의 원래사이트 링크
    $('#hosp').find('.go_before').click(function () {
        window.open('http://hosp.ajoumc.or.kr/');
    });
    //리뉴얼전 용성토건
    $('#youngsun').find('.go_before').click(function () {
        alert("만료")
    });
    //리뉴얼전 경희실용음악
    $('#music').find('.go_before').click(function () {
        window.open('http://www.khmusic.co.kr/index.php');
    });
    //리뉴얼전 쿠쿠전자 광고
    $('#cocoelect').find('.go_before').click(function () {
        window.open('http://www.cuckoo.co.kr/product/product_view.aspx?iproductkey=1985&scatmenucode=shp011&scatrefcode=shp011001');
    });
    /*리뉴얼후 참고 사이트 클릭시 링크*/
    //리뉴얼후 아주대학교병원
    $('#hospafter').find('.ref_1').click(function () {
        window.open('http://www.soram.kr/')
    });
    $('#hospafter').find('.ref_2').click(function () {
        window.open('https://www.snuh.org/main.do')
    });
    $('#hospafter').find('.go_page').click(function () {
        window.open("https://kimjoochan.github.io/academy2hos/html/");
    });
    //리뉴얼후 용성토건 참고사이트
    $('#youngsunafter').find('.ref_1').click(function () {
        window.open('http://deterrace.com/');
    });
    $('#youngsunafter').find('.go_page').click(function () {
        window.open('https://kimjoochan.github.io/academy2Youn/html/')
    });
    //리뉴얼후 경희실용음악학원 참고사이트
    $('#musicafter').find('.ref_1').click(function () {
        window.open('http://www.kec.sc.kr/main.php?NaPm=ct%3Djft9r934%7Cci%3D0zq0003mjqLoXMFX6eLV%7Ctr%3Dsa%7Chk%3D2fabf12844956d611e7529a12c0cc794b4e04b74#');
    });
    $('#musicafter').find('.ref_2').click(function () {
        window.open('http://www.jam.or.kr/wpage/index.php');
    }); $('#musicafter').find('.go_page').click(function () {
        window.open("https://kimjoochan.github.io/academy2music/html/");
    });
    //리뉴얼후 쿠쿠전자 참고사이트
    $('#cocoafter').find('.go_page').click(function () {
window.open("https://kimjoochan.github.io/academy1coco/html/");
    });
    //리뉴얼전에서 색상표에 hover시 나타나는 색상박스 
    //병원
    $('#hosp').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#0464b1'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#hosp').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#dfdfdf'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //용성토건
    $('#youngsun').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#0464b1'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#youngsun').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#de3e4a'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //경희실용음악
    $('#music').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#dfdfdf'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#music').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#fcc125'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //쿠쿠전자광고
    $('#cocoelect').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#dfdfdf'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#cocoelect').find('.sub_color.red').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#ff2400'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#cocoelect').find('.sub_color.blue').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#3333ff'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //리뉴얼후에서 색상표에 hover시 나타나는 색상박스 
    //병원
    $('#hospafter').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#0b62a5'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#hospafter').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#de3e4a'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //용성토건
    $('#youngsunafter').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#0b62ff'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#youngsunafter').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#de3e4a'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //경희실용음악
    $('#musicafter').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#cccccc'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#musicafter').find('.sub_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#fcc125'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    //쿠쿠전자광고
    $('#cocoafter').find('.origin_color').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#cccccc'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#cocoafter').find('.sub_color.red').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#ef2c2c'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    $('#cocoafter').find('.sub_color.blue').mouseenter(function () {
        $('body,html').mousemove(function (event) {
            var BHPX = event.pageX;
            var BHPY = event.pageY;
            $('#color_box').show().css({
                top: BHPY + 10,
                left: BHPX + 10,
                backgroundColor: '#2c6bea'
            })
        })
    }).mouseleave(function () {
        $('body,html').unbind('mousemove');
        $('#color_box').hide();
    });
    var ww = $(window).width();
    $(window).resize(function () {
        ww = $(window).width();
        if (ww < 1410) {
            /*노트화면일때 제이쿼리 전환*/
            $('#skill_chart>li').mouseenter(function () {
                var img = $(this).find('.graph');
                img.animate({
                    marginTop: '-310px'
                }, 500, function () {
                    img.find('img').css({
                        opacity: '1'
                    });
                })
                 $('#skill_chart>li').eq(0).mouseenter(function () {
            k++;
            var sclf = $(this);
            if (k == 1) {
                $(this).find('.reward').animateNumber({
                    number: 70
                }, 1000);
                setTimeout(function () {
                    sclf.find('.reward').html('70%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(1).mouseenter(function () {
            l++;
            var scls = $(this);
            if (l == 1) {
                $(this).find('.reward').animateNumber({
                    number: 73
                }, 1000);
                setTimeout(function () {
                    scls.find('.reward').html('65%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(2).mouseenter(function () {
            h++;
            var sclt = $(this);
            if (h == 1) {
                $(this).find('.reward').animateNumber({
                    number: 90
                }, 1000);
                setTimeout(function () {
                    sclt.find('.reward').html('90%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(3).mouseenter(function () {
            g++;
            var sclfo = $(this);
            if (g == 1) {
                $(this).find('.reward').animateNumber({
                    number: 87
                }, 1000);
                setTimeout(function () {
                    sclfo.find('.reward').html('85%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(4).mouseenter(function () {
            d++;
            var sclfi = $(this);
            if (d == 1) {
                $(this).find('.reward').animateNumber({
                    number: 85
                }, 1000);
                setTimeout(function () {
                    sclfi.find('.reward').html('80%')
                }, 1100)
            } else {
                return;
            }
        })
            });
        } else {
            /*세번째페이지 이미지 클릭시 이벤트(pc화면)*/
            $('#skill_chart>li').mouseenter(function () {
                var img = $(this).find('.graph');
                img.animate({
                    marginTop: '-400px'
                }, 500, function () {
                    img.find('img').css({
                        opacity: '1'
                    });
                });
            });
            $('#skill_chart>li').eq(0).mouseenter(function () {
                $('#skill_chart>li').eq(0).mouseenter(function () {
                    k++;
                    var sclf = $(this);
                    if (k == 1) {
                        $(this).find('.reward').animateNumber({
                            number: 70
                        }, 1000);
                        setTimeout(function () {
                            sclf.find('.reward').html('70%')
                        }, 1100)
                    } else {
                        return;
                    }
                });
                $('#skill_chart>li').eq(1).mouseenter(function () {
                    l++;
                    var scls = $(this);
                    if (l == 1) {
                        $(this).find('.reward').animateNumber({
                            number: 73
                        }, 1000);
                        setTimeout(function () {
                            scls.find('.reward').html('73%')
                        }, 1100)
                    } else {
                        return;
                    }
                });
                $('#skill_chart>li').eq(2).mouseenter(function () {
                    h++;
                    var sclt = $(this);
                    if (h == 1) {
                        $(this).find('.reward').animateNumber({
                            number: 90
                        }, 1000);
                        setTimeout(function () {
                            sclt.find('.reward').html('90%')
                        }, 1100)
                    } else {
                        return;
                    }
                });
                $('#skill_chart>li').eq(3).mouseenter(function () {
                    g++;
                    var sclfo = $(this);
                    if (g == 1) {
                        $(this).find('.reward').animateNumber({
                            number: 87
                        }, 1000);
                        setTimeout(function () {
                            sclfo.find('.reward').html('87%')
                        }, 1100)
                    } else {
                        return;
                    }
                });
                $('#skill_chart>li').eq(4).mouseenter(function () {
                    d++;
                    var sclfi = $(this);
                    if (d == 1) {
                        $(this).find('.reward').animateNumber({
                            number: 85
                        }, 1000);
                        setTimeout(function () {
                            sclfi.find('.reward').html('85%')
                        }, 1100)
                    } else {
                        return;
                    }
                })
            })
        }
    })
    if (ww < 1410) {
        /*노트화면일때 제이쿼리 전환*/
        $('#skill_chart>li').mouseenter(function () {
            var img = $(this).find('.graph');
            img.animate({
                marginTop: '-310px'
            }, 500, function () {
                img.find('img').css({
                    opacity: '1'
                });
            })
            $('#skill_chart>li').eq(0).mouseenter(function () {
                k++;
                var sclf = $(this);
                if (k == 1) {
                    $(this).find('.reward').animateNumber({
                        number: 70
                    }, 1000);
                    setTimeout(function () {
                        sclf.find('.reward').html('70%')
                    }, 1100)
                } else {
                    return;
                }
            });
            $('#skill_chart>li').eq(1).mouseenter(function () {
                l++;
                var scls = $(this);
                if (l == 1) {
                    $(this).find('.reward').animateNumber({
                        number: 73
                    }, 1000);
                    setTimeout(function () {
                        scls.find('.reward').html('73%')
                    }, 1100)
                } else {
                    return;
                }
            });
            $('#skill_chart>li').eq(2).mouseenter(function () {
                h++;
                var sclt = $(this);
                if (h == 1) {
                    $(this).find('.reward').animateNumber({
                        number: 90
                    }, 1000);
                    setTimeout(function () {
                        sclt.find('.reward').html('90%')
                    }, 1100)
                } else {
                    return;
                }
            });
            $('#skill_chart>li').eq(3).mouseenter(function () {
                g++;
                var sclfo = $(this);
                if (g == 1) {
                    $(this).find('.reward').animateNumber({
                        number: 87
                    }, 1000);
                    setTimeout(function () {
                        sclfo.find('.reward').html('87%')
                    }, 1100)
                } else {
                    return;
                }
            });
            $('#skill_chart>li').eq(4).mouseenter(function () {
                d++;
                var sclfi = $(this);
                if (d == 1) {
                    $(this).find('.reward').animateNumber({
                        number: 85
                    }, 1000);
                    setTimeout(function () {
                        sclfi.find('.reward').html('85%')
                    }, 1100)
                } else {
                    return;
                }
            })
        });
    } else {
        /*세번째페이지 이미지 클릭시 이벤트(pc화면)*/
        $('#skill_chart>li').mouseenter(function () {
            var img = $(this).find('.graph');
            img.animate({
                marginTop: '-400px'
            }, 500, function () {
                img.find('img').css({
                    opacity: '1'
                });
            })
        });
        $('#skill_chart>li').eq(0).mouseenter(function () {
            k++;
            var sclf = $(this);
            if (k == 1) {
                $(this).find('.reward').animateNumber({
                    number: 70
                }, 1000);
                setTimeout(function () {
                    sclf.find('.reward').html('70%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(1).mouseenter(function () {
            l++;
            var scls = $(this);
            if (l == 1) {
                $(this).find('.reward').animateNumber({
                    number: 73
                }, 1000);
                setTimeout(function () {
                    scls.find('.reward').html('73%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(2).mouseenter(function () {
            h++;
            var sclt = $(this);
            if (h == 1) {
                $(this).find('.reward').animateNumber({
                    number: 90
                }, 1000);
                setTimeout(function () {
                    sclt.find('.reward').html('90%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(3).mouseenter(function () {
            g++;
            var sclfo = $(this);
            if (g == 1) {
                $(this).find('.reward').animateNumber({
                    number: 87
                }, 1000);
                setTimeout(function () {
                    sclfo.find('.reward').html('87%')
                }, 1100)
            } else {
                return;
            }
        });
        $('#skill_chart>li').eq(4).mouseenter(function () {
            d++;
            var sclfi = $(this);
            if (d == 1) {
                $(this).find('.reward').animateNumber({
                    number: 85
                }, 1000);
                setTimeout(function () {
                    sclfi.find('.reward').html('85%')
                }, 1100)
            } else {
                return;
            }
        })

    }
});
