//array loop
var members = ['egoing', 'k8805', 'hoya'];
var i = 0;
while(i < members.length){
	console.log('array loop', members[i]);
	i = i + 1;
	  }

//object loop
var roles = {
	'progammer':'egoing',
	'designer':'k8805',
	'manager':'hoya'
}
for(var name in roles){
	console.log('object :',name, 'value :', roles[name]);
}