// $(function () {
//     var flag = true
//     function toggletool() {
//         var tooltop = $(".box-hd").offset().top
//         if ($(document).scrollTop() >= tooltop) {
//             $(".bar").show()
//         }
//         else {
//             $(".bar").hide()
//         }
//     }
//     toggletool()
//     $(window).scroll(function () {
//         toggletool()
//         if (flag) {
//             $('.floor .w').each(function (i, ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {

//                     $(".bar li").eq(i).addClass("current").siblings().removeClass()
//                 }
//             })
//         }
//     })
//     $(".bar li").click(function () {
//         flag = flase
//         var index = $(this).index()
//         var current = $(".floor .w").eq(index).offset().top

//         $("body,html").stop().animate(
//             {
//                 scrollTop: current
//             }, function () {
//                 flag = ture
//             }
//         )
//         $(this).addClass("current").siblings().removeClass("current")
//     })


// })

window.addEventListener('load', function () {
    const focus = document.querySelector(".focus")
    const ul = focus.children[2]
    const pre = focus.children[0]
    const nex = focus.children[1]
    var timer = null;
    const circle = document.querySelector('.circle')
    const imgWidth = focus.offsetWidth
    console.log(imgWidth);
    focus.addEventListener('mouseenter', function () {
        pre.style.display = "block"
        nex.style.display = "block"
        clearInterval(timer)
        timer = null
    })
    focus.addEventListener("mouseleave", function () {
        pre.style.display = "none"
        nex.style.display = "none"
        timer = setInterval(function () {
            nex.click()
        }, 2000)
    })
    var num = 0;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')

        circle.appendChild(li)
        li.setAttribute('index', i)
        li.addEventListener('click', function () {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ""
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            num = index
            zero = index
            animate(ul, -index * imgWidth)
        })
    }
    var zero = 0;
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    nex.addEventListener('click', function () {
        if (num == 4) {
            ul.style.left = 0 + "px"
            num = 0
        }
        num++
        animate(ul, -num * imgWidth)
        zero++
        if (zero == ul.children.length - 1) {
            zero = 0
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ""
        }
        circle.children[zero].className = "current"
    })
    pre.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1
            ul.style.left = -num * imgWidth + "px"
        }

        num--

        animate(ul, -num * imgWidth)

        zero--
        if (zero < 0) {
            zero = circle.children.length - 1
        }
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ""
        }
        circle.children[zero].className = "current"

    })

})