name_of_the_student_arry=[];

function submit() {
var display_student_arry=[];

for(var j=1; j<=4; j++);
{
    var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_the_student_arry);
    name_of_the_student_arry.push(name_of_the_student);
}
console.log(name_of_the_student_arry);

var length_of_the_name_arry= name_of_the_student_arry.length;
console.log(length_of_the_name_arry);

for (var k=0; k < length_of_the_name_arry[k]; k++);
{
    display_student_arry.push ("<h4>NAME -"+ name_of_the_student_arry[k] + "</h4>");
    console.log(display_student_arry);

    console.log(display_student_arry);
    document.getElementById("display_name_with_commas").innerHTML= display_student_arry;

    var remove_commas = display_student_arry.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display= "inline-block";

}
}
function sorting()
{
name_of_the_student_arry.sort();
console.log(name_of_the_student_arry);


var display_studnet_sorting=[];

var length_of_the_name_arry= name_of_the_student_arry.length;
console.log(length_of_the_name_arry);

for (var k=0; k < length_of_the_name_arry[k]; k++);
{
    display_student_arry_sorting.push ("<h4>NAME -"+ name_of_the_student_arry[k] + "</h4>");
    console.log(display_student_arry_sorting);

    console.log(display_student_arry_sorting);
    document.getElementById("display_name_with_commas").innerHTML= display_student_arry;

    var remove_commas = display_student_arry_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;

}
}