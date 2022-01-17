stu_a=[];
function submit(){
    var dis_stu_a=[];
    for(var j = 1; j<= 4; j++){
        var n_stu=document.getElementById("n"+j).value;
        console.log(n_stu);
        stu_a.push(n_stu);
    }
    console.log(stu_a);
    var len_n=stu_a.length;
    console.log(len_n);
    for(var k = 0; k < len_n; k++){
        dis_stu_a.push(stu_a[k]);
        console.log(dis_stu_a);
    }
    document.getElementById("nwc").innerHTML = dis_stu_a;
    var r_c= dis_stu_a.join("  ");
    console.log(r_c);
    document.getElementById("nwoc").innerHTML = r_c;
    document.getElementById("sub").style.dislay ="none";
    document.getElementById("sort").style.dislay ="inline-block";
}
function sorting(){
    stu_a.sort();
console.log(stu_a);
var dis_sort = [];
var len =stu_a.length
console.log(len);
for (var k = 0; k < len; k++){
    dis_sort.push(stu_a[k]) 
}

var r_c= dis_sort.join("  ");
console.log(r_c);
document.getElementById("nwoc").innerHTML = r_c;
}