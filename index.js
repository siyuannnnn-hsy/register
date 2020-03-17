$(function () {
    var $name = $('#name'),
        $tel = $('#tel'),
        $pwd = $('#pwd'),
        $yan = $('#yan'),
        $namemsg = $('#namemsg'),
        $telmsg = $('#telmsg'),
        $pwdmsg = $('#pwdmsg'),
        $yanmsg = $('#yanmsg'),
        $yan2 = $('#yan2'),
        $btn = $('#btn');

    $name.focusout(function () {
        if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+[^\d]+$/.test($name.val()) || $name.val()===''){
            $namemsg.html('用户名仅支持中英文、数字、下划线且不能为纯数字')
            $name.select();
            return false;
        }
        else{
            $namemsg.html('')
        }
    })

   $tel.focusout(function(){
       console.log($tel.val().length)
       if(!/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test($tel.val()) || $tel.val()===''){
            $telmsg.html('手机号格式不正确')
            $tel.select();
            return false;
        }  
        else{
            $telmsg.html('')
        }
    })

    $pwd.focusout(function () {
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,8}$/.test($pwd.val()) || $pwd.val()===''){
            $pwdmsg.html('密码长度要4-8位，由数字和字母组成')
            $pwd.select();
            return false;
        }
        else{
            $pwdmsg.html('')
        }
    })

    $yan2.click(function(){
        $yan2.attr("disabled","disabled")
        var i = 60,
            timer;
        timer = setInterval(function (){
            i--;
            if(i === 0){
                clearInterval(timer);
                $yan2.val('获取验证码');
                $yan2.removeAttr('disabled')
            }else{
    
                $yan2.val('获取验证码('+i+'s)')
            }
            
        }, (1000));   
    })
})