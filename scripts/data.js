var data =
[
{
label:"Please input your name",
required:true,
fail:/^((?!(^[a-z\-]+,\ ?[a-z\-]+$)).)*$/i,
messages:{
empty:"Please input your name",
error:"Invalid name provided - place your last name followed by a comma and your first name"
},
customPlaceholder:"Last name, First name"
},
{
label:"What is your child's name?",
required:true,
fail:/^((?!(^[a-z\-]+,\ ?[a-z\-]+$)).)*$/i,
messages:{
empty:"Please enter a name",
error:"Invalid name provided - place your last name followed by a comma and your first name"
},
customPlaceholder:"Last name, First name"
},
{
label:"Please input his or her birthdate",
required:true,
custom:"<div class='input-group date'>"+
              "<input type='text' class='form-control' />"+
              "<span class='input-group-addon'>"+
                  "<span class='glyphicon glyphicon-calendar'></span>"+
              "</span>"+
          "</div>"
},
{
label:"What is your student's level?",
required:true,
custom:"<select class='selectpicker'>"+
  "<option>Pre-K</option>"+
  "<option>Kindergarden</option>"+
  "<option>Grade 1</option>"+
  "<option>Grade 2</option>"+
  "<option>Grade 3</option>"+
  "<option>Grade 4</option>"+
  "<option>Grade 5</option>"+
  "<option>Grade 6</option>"+
  "<option>Grade 7</option>"+
  "<option>Grade 8</option>"+
  "<option>Grade 9</option>"+
  "<option>Grade 10</option>"+
  "<option>Grade 11</option>"+
  "<option>Grade 12</option>"
},
{
label:"What school year is your student in?",
required:true,
custom:"<div class='input-group date' id='year-dp'>"+

          "</div>"
},
{
label:"What quarter is your student in?",
required:true,
custom:
'<label class="checkbox-inline"><input type="checkbox" value="">Q1</label>'+
'<label class="checkbox-inline"><input type="checkbox" value="">Q2</label>'+
'<label class="checkbox-inline"><input type="checkbox" value="">Q3</label>'+
'<label class="checkbox-inline"><input type="checkbox" value="">Q4</label>'
},
{
label:"English",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for English language?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for Filipino?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for Araling Palipunan?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for World History?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for Bible?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for Character?",
required:true,
fail:/$a/,
messages:{
error:"",
empty:""
}
},
{
label:"What is your material for Mother Tongue (MT)? (For Grades 1 - 3 only)",
required:false,
fail:/$a/,
messages:{
error:"",
empty:""
}
}
]
