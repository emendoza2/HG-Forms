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
var philippine = {
  inputs: [
    {
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
      content: "<h2>Student Info</h2>",
      inputs: [
        {
      		label: "Name",
      		required: true,
      		fail: /^((?!(^[a-z\-]+\ ?,\ ?[a-z\-]+(\ [a-z\-]+\.?)?$)).)*$/i,
      		messages: {
      			empty: "Please enter a name",
      			error: "Invalid name provided - place your last name followed by a comma and your first name"
      		},
      		customPlaceholder: "Last name, First name, (Middle name or Middle initial - optional)"
      	},
        {
      		label: "(should put something)",
          custom:
            "<div class='form-inline row' style='width:100%'>"+
              "<div class='col-sm-4 form-group'><input type='text' placeholder='[TODO: stick validation and placeholder in for Address]' class='form-control' /*will add verify*//></div>"+
              "<div class='col-sm-4 form-group'><input type='text' placeholder='City' class='form-control verify' data-fail='^((?!^[a-zA-Z0-9][a-zA-Z\ 0-9]*?[a-zA-Z0-9]$).)*$' data-fail-error='Please input a valid city name' data-empty-error='Please input a city name' /></div>"+
              "<div class='col-sm-4 form-group'><input type='text' placeholder='Zip Code' class='form-control verify' data-fail='^((?!^^((GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4})|(GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2})|(IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2})|(\d{5}([ \-]\d{4})?)|([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d)|(\d{5})|(\d{3}-\d{4})|(\d{2}[ ]?\d{3})|(\d{4})|(\d{5})|(\d{4})|(\d{4})|(\d{5})|(\d{4}[ ]?[A-Z]{2})|(\d{4})|(\d{4})|(\d{3}[ ]?\d{2})|(\d{4})|(\d{5}[\-]?\d{3})|(\d{4}([\-]\d{3})?)|(\d{5})|(22\d{3})|(\d{3}[\-]\d{3})|(\d{6})|(\d{3}(\d{2})?)|(\d{6})|(\d{5})|(AD\d{3})|(([A-HJ-NP-Z])?\d{4}([A-Z]{3})?)|((37)?\d{4})|(\d{4})|(((1[0-2]|[2-9])\d{2})?)|(\d{4})|((BB\d{5})?)|(\d{6})|([A-Z]{2}[ ]?[A-Z0-9]{2})|(\d{5})|(BBND 1ZZ)|([A-Z]{2}[ ]?\d{4})|(\d{4})|(\d{5})|(\d{4})|(\d{7})|(\d{4,5}|\d{3}-\d{4})|(\d{5})|(\d{4})|(\d{3}[ ]?\d{2})|(\d{5})|(([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?)|(\d{5})|(\d{5})|(\d{3})|(\d{4})|(\d{3}[ ]?\d{2})|(39\d{2})|(\d{5})|(\d{4})|((?:\d{5})?)|(\d{4})|(\d{3})|(\d{6})|(\d{5})|(\d{5})|(\d{5})|(\d{6})|(\d{5})|(\d{5})|(\d{5})|(\d{4})|((\d{4}([ ]?\d{4})?)?)|((948[5-9])|(949[0-7]))|(\d{5})|(\d{4})|(\d{4})|(\d{5})|(\d{5})|([A-Z]{3}[ ]?\d{2,4})|((\d{3}[A-Z]{2}\d{3})?)|(\d{5})|(\d{4})|(980\d{2})|(\d{5})|(\d{5})|(\d{4})|(((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?)|((\d{6})?)|((PC )?\d{3})|(\d{5})|(\d{4})|(\d{4})|(\d{2}-\d{3})|(00[679]\d{2}([ \-]\d{4})?)|(\d{6})|(\d{6})|(4789\d)|(\d{5})|(\d{5})|(\d{3}[ ]?\d{2})|(\d{4})|(\d{4})|(\d{5})|(\d{6})|(\d{5})|(\d{4})|(\d{5})|(\d{6})|(\d{5})|(\d{5})|(\d{6})|(00120)|(\d{4})|(\d{5})|(96799)|(6799)|(\d{4})|(\d{6})|(8\d{4})|(\d{5})|(\d{5})|(6798)|(\d{4})|(FIQQ 1ZZ)|(2899)|((9694[1-4])([ \-]\d{4})?)|(9[78]3\d{2})|(\d{3})|(9[78][01]\d{2})|(SIQQ 1ZZ)|(969[123]\d([ \-]\d{4})?)|(\d{4})|(\d{4})|(\d{5})|(\d{6})|(\d{4})|(\d{3})|(\d{3})|(969[67]\d([ \-]\d{4})?)|(\d{6})|(9695[012]([ \-]\d{4})?)|(9[78]2\d{2})|(988\d{2})|(\d{4})|(008(([0-4]\d)|(5[01]))([ \-]\d{4})?)|(987\d{2})|(\d{3})|(9[78]5\d{2})|(PCRN 1ZZ)|(96940)|(9[78]4\d{2})|((ASCN|STHL) 1ZZ)|(\d{4})|(\d{5})|([HLMS]\d{3})|(TKCA 1ZZ)|(986\d{2})|(\d{5})|(976\d{2}))$$).)*$' data-fail-error='Please input a valid zip code' data-empty-error='Please input a zip code' /></div>"+
            "</div>"
      	},
      	{
      		label: "Birthdate",
      		required: true,
      		custom: "<div class='input-group date'>" +
      			"<input type='text' class='form-control' name='input3' value='03/13/2017' />" +
      			"<span class='input-group-addon'>" +
      			"<span class='glyphicon glyphicon-calendar'></span>" +
      			"</span>" +
      			"</div>"
      	},
      	{
      		label: "Level",
      		required: true,
      		custom: "<select class='selectpicker form-control' name='input4'>" +
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
      		label: "School year - Can be removed by auto-determining sy",
      		required: true,
      		custom: "<input type='text' class='input-group form-control date' id='year-dp' name='input5' value=' 2016' /><br /><span id='sy'></span>"
      	},
      	{
      		label: "Quarter",
      		required: true,
      		custom: '<label class="radio-inline"><input checked="checked" type="radio" name="input6" value="Q1" />Q1</label>' +
      			'<label class="radio-inline"><input type="radio" name="input6" value="Q2" />Q2</label>' +
      			'<label class="radio-inline"><input type="radio" name="input6" value="Q3" />Q3</label>' +
      			'<label class="radio-inline"><input type="radio" name="input6" value="Q4" />Q4</label>'
      	}
      ]
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
  ],
  execute: function(){
    var currentDate = (new Date());
    $("#year-dp").datepicker( {
        format: " yyyy",
        viewMode: "years",
        minViewMode: "years",
        endDate: currentDate,
        startDate: currentDate.dateAdd("year",-2)
    })
    .on("changeDate",function(e){
      var year = e.date.getFullYear();
      $("#sy").html(year+" - "+(year+1));
    });
    $("#year-dp").val(" " + currentDate.getFullYear());
    $("#year-dp").datepicker('update');
    $(".date:not(#year-dp)").datepicker( { // the year-dp should stay untouched by this
      endDate: currentDate,
      assumeNearbyYear: true
    });
    $('.selectpicker').selectpicker();

  }
};
