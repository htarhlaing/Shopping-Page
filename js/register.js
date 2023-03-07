window.onload = function () {
    var phone = document.querySelector("#phone")
    var message = document.querySelector('#message')
    var reg = /^13[4|5|6]\d{9}$/
    var reg1 = /^\d{6}$/
    check(phone, reg)
    check(message, reg1)

    function check(ele, re) {
        ele.onblur = function () {
            if (re.test(this.value)) {
                this.nextElementSibling.className = "success"
                this.nextElementSibling.innerHTML = "<i class='success_icon'></i>输入正确"
            } else {
                this.nextElementSibling.className = "error"
                this.nextElementSibling.innerHTML = "<i class='error_icon'></i>输入错误"

            }
        }
    }
}