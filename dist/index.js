$(function(){var t=$("#name"),l=$("#tel"),a=$("#pwd"),e=$("#yan"),n=$("#namemsg"),c=$("#telmsg"),s=$("#pwdmsg"),m=$("#yanmsg"),v=$("#yan2"),o=$("#btn");t.focusout(function(){if(!/^(?!\d+$)[\da-zA-Z]+$/.test(t.val())||""===t.val())return n.html("用户名仅支持英文、数字、下划线且不能为纯数字"),t.select(),!1;n.html("")}),l.focusout(function(){if(console.log(l.val().length),!/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test(l.val())||""===l.val())return c.html("手机号格式不正确"),l.select(),!1;c.html("")}),a.focusout(function(){if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,8}$/.test(a.val())||""===a.val())return s.html("密码长度要4-8位，由数字和字母组成"),a.select(),!1;s.html("")}),v.click(function(){v.attr("disabled","disabled");var t,l=60;t=setInterval(function(){0===--l?(clearInterval(t),v.val("获取验证码"),v.removeAttr("disabled")):v.val("获取验证码("+l+"s)")},1e3)}),o.click(function(){""===t.val()&&n.html("用户名不能为空"),""===a.val()&&s.html("密码不能为空"),""===l.val()&&c.html("手机号不能为空"),""===e.val()?m.html("验证码不能为空"):m.html("")})});