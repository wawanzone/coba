// $('body').toggleClass(localStorage.mode);

// function darkLight() {
//     /*DARK CLASS*/
//     if (localStorage.mode != 'dark') {
//         $('body').toggleClass('dark', true);
//         localStorage.mode = "dark";

//     } else {
//         $('body').toggleClass('dark', false);
//         localStorage.mode = "light";
//     }
// }

// /*Add 'checked' property to input if background == dark*/
// if ($('body').hasClass('dark')) {
//     $('#customSwitch1').prop("checked", true)
// } else {
//     $('#customSwitch1').prop("checked", false)
// }

$(document).ready(function() {
    // $("#customSwitch1").change(function() {
    //
    // }).change();

    // $("#hosting-switch").change(function() {
    //     $(".hosting-display").toggleClass("d-block ", this.checked);
    // }).change();

    $("#akun-switch").change(function() {
        $(".akun-register").toggleClass("d-none ", this.checked);
    }).change();

    $("#akun-switch").change(function() {
        $(".akun-login").toggleClass("d-block ", this.checked);
    }).change();

    $("#domain-1").change(function() {
        $("#domain-1-exp").toggleClass("show", this.checked);
    }).change();

    $("#domain-2").change(function() {
        $("#domain-2-exp").toggleClass("show", this.checked);
    }).change();

    $("#domain-3").change(function() {
        $("#domain-3-exp").toggleClass("show", this.checked);
    }).change();

    $("#buy-click").click(function() {
        $("#buy-now").toggleClass("show");
    }).change();



    $(".buy-clicks").click(function() {
        $("#buy-now").addClass("show");
    }).change();

    $('#order-paket-hosting input[type=radio]').click(function() {
        $('#order-kontrak-hosting').addClass("show");
        $('#get-free-xyz').addClass("show");
        $('.paket-based').hide();
        $('#' + $(this).val()).show();
    });

    $('#order-kontrak-hosting input[type=radio]').click(function() {
        $('#get-free-xyz').addClass("show");
        $('#summary').addClass("show");
        $('#' + $(this).val()).show();
    });

    $('#has-domain-q input[type=radio]').click(function() {
        $('#has-domain-yes').addClass("show");
        $('.has-domain').hide();

        $('#' + $(this).val()).show();
    });

    $('#has-akun-q input[type=radio]').click(function() {
        $('#has-akun-yes').addClass("show");
        $('.akun-login').hide();

        $('#' + $(this).val()).show();
    });
    $('#has-akun-q input[type=radio]').click(function() {
        $('#has-akun-no').addClass("show");
        $('.akun-register').hide();

        $('#' + $(this).val()).show();
    });

    $('#transfer-q-yes input[type=radio]').click(function() {
        $('#transfer-yes').addClass("show");
    });

    $('#transfer-q-no input[type=radio]').click(function() {
        $('#transfer-yes').removeClass("show");
    });

    $('#btn-log').click(function() {
        $('#payment-box').addClass("show");
        $('#sukses-login').addClass("show");
        $('#has-akun-q').hide();
        $('#' + $(this).val()).show();
    });
    $('#btn-reg').click(function() {
        $('#payment-box').addClass("show");
        $('#sukses-login').addClass("show");
        $('#has-akun-q').hide();

        $('#' + $(this).val()).show();
    });

    // $("input#emailchecklogin").blur(function() {
    //     if ($(this).val().length < 6) {
    //
    //         $('.cek-login-fail').addClass("show");
    //         $('.cek-login-success').removeClass("show");
    //     } else {
    //         $('.cek-login-success').addClass("show");
    //         $('.cek-login-fail').removeClass("show");
    //     }
    // });

    // feather
    feather.replace({
        width: '18',
        height: '18'
    })

    // $("#btnFetch").click(function() {
    //     // disable button
    //     $(this).prop("disabled", true);
    //     // add spinner to button
    //     $(this).html(
    //         `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
    //     );
    //     $('#search-result').append('<div class="col-md-12 shadow-xs"><div class="m-0  row align-items-center py-2 alert-info"><div class=" col-sm-12"><div class="py-2 small">GRATIS .com /.net /.org / .info / .biz / .xyz / .my.id / .or.id / .ac.id / .web.id / .biz.id / .ponpes.id pada paket hosting Cute, Awesome, Fantastic, Corporate</div></div></div></div> ');
    //     for (var i = 1; i < 11; i++) {
    //         if (i < 5) {
    //             $('#search-result').append('<div class="col-md-6 shadow-right " id="search-result-' + i + '"></div>');
    //             $('#search-result-' + i).load('search-result-available.html');
    //             // ...and so on
    //         } else if (i < 8) {
    //             $('#search-result').append('<div class="col-md-6 shadow-right " id="search-result-' + i + '"></div>');
    //             $('#search-result-' + i).load('search-result-unavailable.html');
    //         } else {
    //             $('#search-result').append('<div class="col-md-6 shadow-right " id="search-result-' + i + '"></div>');
    //             $('#search-result-' + i).load('search-result-loading.html');
    //         }
    //     }
    //     $('#search-result').append('<div class="col-md-12"><div class="m-0  row align-items-center py-2 "><div class=" col-sm-12"><a href="cek-domain.html" class="btn-link btn btn-block">Lihat Semua Domain</a></div></div></div> ');
    // });
    //
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(function() {
      $('[data-toggle="popover"]').popover({
        html: true,
        content: function() {
          let contentID = $(this).data('htmlcontent');
          return $(contentID).html();
        }
      });
    });


    function addAttr(selector, attr, val) {
        document.querySelectorAll(selector).forEach(item => {
            item.setAttribute(attr, val)
        })
    }
    if (document.body.clientWidth < 768) {
        addAttr('#hero-image', 'loading', 'lazy')
    }
    // window.CHATONOMY_COMPANY_ID = 4;
    // window.CHATONOMY_COMPANY_NAME = 'idwebhost';
    // window.CHATONOMY_WHITELIST_DEPTS = [2, 4, 6];
    //
    // if (window.matchMedia("(min-width: 768px)").matches) {
    //     function downloadJSAtOnload() {
    //         var element = document.createElement("script");
    //         element.src = "assets/libs/chatonomy/chatonomy-widget.min.js";
    //         document.body.appendChild(element);
    //     }
    //     if (window.addEventListener)
    //         window.addEventListener("load", downloadJSAtOnload, false);
    //     else if (window.attachEvent)
    //         window.attachEvent("onload", downloadJSAtOnload);
    //     else window.onload = downloadJSAtOnload;
    // };


    // $(window).resize(function() {
    //     if ($(window).width() < 768) {
    //         $(".become").toggleClass('sticky-top');
    //     }
    // });
    //
    // function media() {
    //     if ($(window).width() < 768) {
    //         $(".become").toggleClass('sticky-top');
    //     }
    // }
    // media();

});
