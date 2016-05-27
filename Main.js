var Observable = require('FuseJS/Observable');
var menuList = Observable();
menuList.add({menuName:"Activity"});
menuList.add({menuName:"Members"});
menuList.add({menuName:"Events"});
menuList.add({menuName:"YouTube"});
menuList.add({menuName:"Office"});
menuList.add({menuName:"Admin"});


module.exports = {
	menuList: menuList
}