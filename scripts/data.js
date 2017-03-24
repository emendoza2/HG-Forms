function createGradeSheet() {
  var values = [];
  for (var i = 0; i < arguments.length; i++) {
    values.push({
      label: ""+arguments[i]+"",
      required: true,
      fail: /$a/,
      messages: {
        error: "",
        empty: "Please input the name of your "+arguments[i]+" curriculum"
      },
      customPlaceholder: "Your "+arguments[i]+" curriculum"
    },{
      required: true,
      fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
      messages: {
        error: "Please input a percentage or a fraction",
        empty: "Please input a grade"
      },
      customPlaceholder: "E.G. 9/10 or 90%"
    });
    values.push({
      required: true,
      fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
      messages: {
        error: "Please input a percentage or a fraction",
        empty: "Please input a grade"
      },
      customPlaceholder: "E.G. 9/10 or 90%"
    },
    {
      required: true,
      fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
      messages: {
        error: "Please input a percentage or a fraction",
        empty: "Please input a grade"
      },
      customPlaceholder: "E.G. 9/10 or 90%"
    },
    {
      required: true,
      fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
      messages: {
        error: "Please input a percentage or a fraction",
        empty: "Please input a grade"
      },
      customPlaceholder: "E.G. 9/10 or 90%"
    },
    {

        label: arguments[i]+" Test Grades (5)",
      required: true,
      fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
      messages: {
        error: "Please input a percentage or a fraction",
        empty: "Please input a grade"
      },
      customPlaceholder: "E.G. 9/10 or 90%"
    });
  }
  return values;
}
var data = [{
		label: "Please input your name",
		required: true,
		fail: /^((?!(^[a-z\-]+\ ?,\ ?[a-z\-]+(\ [a-z\-]+\.?)?$)).)*$/i,
		messages: {
			empty: "Please input your name",
			error: "Invalid name provided - place your last name followed by a comma and your first name"
		},
		customPlaceholder: "Last name, First name, (Middle name or Middle initial - optional)"
	},
	{
		label: "What is your child's name?",
		required: true,
		fail: /^((?!(^[a-z\-]+\ ?,\ ?[a-z\-]+(\ [a-z\-]+\.?)?$)).)*$/i,
		messages: {
			empty: "Please enter a name",
			error: "Invalid name provided - place your last name followed by a comma and your first name"
		},
		customPlaceholder: "Last name, First name, (Middle name or Middle initial - optional)"
	},
	{
		label: "Please input his or her birthdate",
		required: true,
		custom: "<div class='input-group date'>" +
			"<input type='text' class='form-control' name='input3' value='03/13/2017' />" +
			"<span class='input-group-addon'>" +
			"<span class='glyphicon glyphicon-calendar'></span>" +
			"</span>" +
			"</div>"
	},
	{
		label: "What is your student's level?",
		required: true,
		custom: "<select class='selectpicker' name='input4'>" +
			"<option>Pre-K</option>" +
			"<option>Kindergarden</option>" +
			"<option>Grade 1</option>" +
			"<option>Grade 2</option>" +
			"<option>Grade 3</option>" +
			"<option>Grade 4</option>" +
			"<option>Grade 5</option>" +
			"<option>Grade 6</option>" +
			"<option>Grade 7</option>" +
			"<option>Grade 8</option>" +
			"<option>Grade 9</option>" +
			"<option>Grade 10</option>" +
			"<option>Grade 11</option>" +
			"<option>Grade 12</option>" +
			"</select>"
	},
	{
		label: "What school year is your student in?",
		required: true,
		custom: "<input type='text' class='input-group form-control date' id='year-dp' name='input5' value=' 2016' /><br /><span id='sy'></span>"
	},
	{
		label: "What quarter is your student in?",
		required: true,
		custom: '<label class="radio-inline"><input checked="checked" type="radio" name="input6" value="Q1" />Q1</label>' +
			'<label class="radio-inline"><input type="radio" name="input6" value="Q2" />Q2</label>' +
			'<label class="radio-inline"><input type="radio" name="input6" value="Q3" />Q3</label>' +
			'<label class="radio-inline"><input type="radio" name="input6" value="Q4" />Q4</label>'
	},
	{
		inputs: createGradeSheet("Language","Reading"),/*[
      {
    		label: "Language",
    		required: true,
    		fail: /$a/,
    		messages: {
    			error: "",
    			empty: "Please input the name of your language curriculum"
    		},
        customPlaceholder: "The name of your language curriculum"
    	},
      {
    		label: "Grades",
    		required: true,
    		fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
    		messages: {
    			error: "Please input a percentage or a fraction",
    			empty: "Please input a grade"
    		},
        customPlaceholder: "E.G. 9/10 or 90%"
    	},
    	{
    		label: "Reading",
    		required: true,
    		fail: /$a/,
    		messages: {
    			error: "",
    			empty: "Please input the name of your reading curriculum"
    		},
        customPlaceholder: "The name of your reading curriculum"
    	},
      {
    		label: "Grades",
    		required: true,
    		fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
    		messages: {
    			error: "Please input a percentage or a fraction",
    			empty: "Please input a grade"
    		},
        customPlaceholder: ""
    	},
    ],*/
    contentText: "<h2>English Materials</h2>"
	},
  {
    inputs: createGradeSheet("Filipino"),
      /*{
        label: "What is your material for Filipino?",
        required: true,
        fail: /$a/,
        messages: {
          error: "",
          empty: "Please input the name of your Filipino curriculum"
        }
      },
      {
    		label: "Grades",
    		required: true,
    		fail: /^((?!^(\d+)\/(\d+)$|(^[1-9][0-9]?(\.[0-9]+)?|^100(\.0+)?)(%)$).)*$/,
    		messages: {
    			error: "Please input a percentage or a fraction",
    			empty: "Please input a grade"
    		},
        customPlaceholder: "E.G. 9/10 or 90%"
    	}
      createGradeSheet("Filipino")
    ],*/

  },
	{
		inputs: createGradeSheet("Araling Palipunan"),
	},
	{
    inputs: createGradeSheet("World History"),

	},
	{
    inputs: createGradeSheet("Bible")
	},
	{
		inputs: createGradeSheet("Character")
	},
	{
		inputs: createGradeSheet("Mother Tongue"),
    contentText: "<small>For grades 1-3 only<small>"
	}
];
