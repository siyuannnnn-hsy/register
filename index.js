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
        if($name.val()===''){
            $namemsg.html('用户名不能为空')
            $name.select();
            return false;
        }
        if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+[^\d]+$/.test($name.val())){
            $namemsg.html('用户名仅支持中英文、数字、下划线且不能为纯数字')
            $name.select();
            return false;
        }
    })

   $tel.focusout(function(){
       console.log($tel.val().length)
       if($tel.val()===''){
            $telmsg.html('手机号不能为空')
            $tel.select();
            return false;
       }
       if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($tel.val())){
            $telmsg.html('必须是数字')
            $tel.select();
            return false;
       }
       if($tel.val().length<11){
            $telmsg.html('手机号格式不正确')
            $tel.select();
            return false;
       }
    })

    $pwd.focusout(function () {
        if($pwd.val()===''){
            $pwdmsg.html('密码不能为空')
            $pwd.select();
            return false;
        }
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,8}$/.test($pwd.val())){
            $pwdmsg.html('密码长度要4-8位，由数字和字母组成')
            $pwd.select();
            return false;
        }
    })

    $yan2.click(function(){
        // $yan2 = $('#yan2')
        // $yan2.setAttr('disabled');
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