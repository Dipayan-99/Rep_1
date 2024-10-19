wap in js to capitalize every alternate char of a str given that char at the str only be letter or space
var str="iamdivy";
var n_str="";
for(var i=0 ; i < str.length ;i++){
    if(i%2 === 0){
        n_str += str[i].toUpperCase();
    }
    else{
        n_str += str[i].toLowerCase();
    }
}
console.log(n_str);
