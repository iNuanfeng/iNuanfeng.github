let content = '<div class="col"><span class="label">联系电话：</span><span>025-66002342</span><span class="link-click" onclick="openPhonePopup(this)" tyc-event-click="" tyc-event-ch="CompanySearch.MoreTel">查看更多</span></div><div class="col"><span class="label">邮箱：</span><span>sdf@tdtz888.com</span><spanclass="link-click" onclick="openEmailPopup(this)">查看更多</span></div>'

let phoneExp = /[0-9]([0-9]|-){6,}[0-9]/
let phone = content.match(phoneExp)
console.log(phone)

let mailExp = /([a-z0-9\-_\.]+@[a-z0-9]+\.[a-z0-9\-_\.]+)+/i
let mail = content.match(mailExp)
console.log(mail)