function fallback(text,fb) {
  return text === undefined ? (fb === undefined ? "" : fb) : text;
} // if a string is undefined, return fb or "", otherwise, return the string

function createStep(opt) {
  var $step = $("<div></div>")
    .attr("id","step"+opt.step)
    .addClass("col-md-6");

  //var $template = $.templates("#step");
  if (typeof(opt.visible) === "undefined" || !opt.visible) {
      $step.hide(0); // hide invisible elements (to be animated later)
  }

  var $head = $("<h1></h1>")
    .html("Step " + opt.step + " of " + opt.noSteps); // create the header

  var inputs = [];
  var labels = [];
  var $label;
  var $input;

  if (opt.custom !== undefined) {
    $label = $("<label></label>")
      .html(fallback(opt.inputs[0].labelContent));
     inputs.push(opt.custom);
     labels.push($label);
  } else {

    for (i = 0; i < opt.inputs.length; i ++) {

      var currentData = opt.inputs[i]; // more DRY
      var inputName = currentData.inputName === undefined ? "input" + opt.step + "g" + i : currentData.inputName; // for DRY code

      if (typeof(currentData.labelContent) === "string") {
        $label = $("<label></label>")
          .attr("for", inputName)
          .html(fallback(currentData.labelContent));
      }

      if (currentData.custom !== '') {
        var $formGroup = $("<div></div>").addClass("form-group");
        console.log("currentData is not custom");
        var $insideInput = $("<input />")
          .attr("name", inputName).attr("id", inputName)
          .attr("placeholder",fallback(currentData.inputPlaceholder))
          .attr("type",fallback(currentData.customInputType,"text"))
          .addClass("form-control");

        if (currentData.inputRequired === undefined ? false : currentData.inputRequired) {
          $insideInput.attr("required","required");
        }

        $formGroup.append($insideInput);
        $input = $formGroup;

      } else {
        console.log("currentData is custom - ",currentData);
        $input = currentData.custom;
      }
      labels[inputs.length] = $label;
      console.log(inputs.length, $label.html());
      inputs.push($input);


    }

  }

  var $submit = $("<button></button>")
      .addClass("btn")
      .addClass("btn-default")
      .html(fallback(opt.buttonText))
      .click(opt.buttonCallback);

  $step.append($head).append(fallback(opt.content));

  for (var i = 0; i < inputs.length; i++) {
    console.log(labels[i]);
    $step.append(labels[i]).append("<br />");
    $step.append(inputs[i]).append("<br />");
  }

  $step.append("<br />");

  if (opt.previousText!== undefined) {
    var $previous = $("<button></button>")
        .addClass("btn")
        .addClass("btn-default")
        .html(fallback(opt.previousText))
        .click(opt.previousCallback);
        $step.append($previous);
  }

  $step
    .append($submit)
    .append("<br / ><br />"); // stick everything in

  //var $out = $template.render(opt)
  //$step.html($out)
  // $step.appendTo(opt.parentForm); - this should be done outside of this. Otherwise, what is the point of return?
  return $step;
}
console.log("breakpoint1");
Date.prototype.dateAdd = function(size,value) {
  var newDate = new Date(this);
  value = parseInt(value);
  var incr = 0;
  switch (size) {
      case 'day':
          incr = value * 24;
          newDate.dateAdd('hour',incr);
          return newDate;
      case 'hour':
          incr = value * 60;
          newDate.dateAdd('minute',incr);
          return newDate;
      case 'week':
          incr = value * 7;
          newDate.dateAdd('day',incr);
          return newDate;
      case 'minute':
          incr = value * 60;
          newDate.dateAdd('second',incr);
          return newDate;
      case 'second':
          incr = value * 1000;
          newDate.dateAdd('millisecond',incr);
          return newDate;
      case 'month':
          value = value + newDate.getUTCMonth();
          if (value/12>0) {
              newDate.dateAdd('year',value/12);
              value = value % 12;
          }
          newDate.setUTCMonth(value);
          return newDate;
      case 'millisecond':
          newDate.setTime(newDate.getTime() + value);
          return newDate;
      case 'year':
          newDate.setFullYear(newDate.getUTCFullYear()+value);
          return newDate;
      default:
          throw new Error('Invalid date increment passed');
          //break;
  }
}; // for later
// Style Guide: //
/*
* When creating an element, prefix it's var name with $
* Define it with only the minimum valid html tag required for that element - e.g. $("<a></a>")
* All text content in the element must be added using .html()
* All attributes are defined using .attr or .addClass
* All children must be appended to the parent with append or appendTo
*/

// Define everything here

// Constants
var fadeOutTime = 300;
var fadeInTime = 500;


// Vars

/* PARAMETERS FOR STEP():
* step (step index)
* noSteps (number of steps)
* buttonCallback (duh)
* labelContent (optional)
* (does not do anything anymore) parentForm
* content (optional)
* visible (optional, but reccomended)
* inputPlaceholder (optional)
* buttonText (also optional)
*/
var $form, steps, canPressButton, currentStep, noSteps, $finalForm, $button, $head; // define all variables so they can be accessed through the console (will be changed later for security)


// Utility functions


  function startForm(data,container) {

    function refreshActive(dir) {

      function /* local! */ createAlert(text) { // DRY
        var $alert = $("<div></div>")
          .addClass("alert")
          .addClass("alert-danger")
          .addClass("alert-dismissable")
          .attr("role","alert")
          .append(
            $("<button></button>")
              .addClass("close")
              .attr("type","button")
              .attr("data-dismiss","alert")
              .attr("aria-label","Close")
              .html($("<span></span>").attr("aria-hidden","true").html("&times;"))
          )
          .append(text);
          return $alert;
      }

      function /* local */ nextStep(){ //DRY DRY DRY!!!!
          canPressButton = false; // ugh..
          steps[currentStep].addClass("ignore");
          steps[currentStep].fadeOut(fadeOutTime,function() {
              steps[currentStep].removeClass("ignore");

              canPressButton = true; // yuck..

              currentStep += 1; // incrememt currentStep (yech)

              function /* (local) */ fadeIn() {
                steps[currentStep].fadeIn(fadeInTime);
              }

              if (currentStep < noSteps) { // make sure we don't get a nil step
                fadeIn();
              } else {
                currentStep = steps.length - 1;
                //complete the form
                fadeIn();
              }
          }); // increment step. once that is done, fade in the next step
      }

      if ( dir === undefined || dir === 1 ) {

        var allOK = true;
        for (var i = 0; i < data.inputs[currentStep].inputs.length; i++) {
        var currentData = data.inputs[currentStep].inputs[i];
        var failRegex = currentData.fail;
        var inputValue = $("[name='input"+(currentStep+1)+"g"+i+"']").val(); // more DRY
        if (failRegex !== undefined) {
          console.log(currentData.required);
          var $alert;
          if (inputValue.match(failRegex) && inputValue !== "") {
            $alert = createAlert(currentData.messages.error); // create alert with error message
            allOK = false;
          } else if(currentData.required === true && (inputValue === "" || inputValue.match(/^\s+$/))) { // kill nasty empty input fields (if they are required)
            console.log(currentData.messages.empty);
            $alert = createAlert(currentData.messages.empty); // create alert with empty message
            allOK = false;
          }
          steps[currentStep].append("<br />").append($alert === undefined ? "" : $alert); // display alert or nothing if there was no error
        }
      }
      if (allOK) { // need this, otherwise multiple steps will appear out of nowhere!
        nextStep();
      }
      } else {
        canPressButton = false; // ugh..
        steps[currentStep].addClass("ignore");
        steps[currentStep].fadeOut(fadeOutTime,function() {
          steps[currentStep].removeClass("ignore");

          canPressButton = true; // yuck..

          currentStep -= 1; // incrememt currentStep (yech)

          function /* (local) */ fadeIn() {
            steps[currentStep].fadeIn(fadeInTime);
          }

          if (currentStep < noSteps) { // make sure we don't get a nil step
            fadeIn();
          } else {
            currentStep = steps.length - 1;
            //complete the form
            fadeIn();
          }
        }); // increment step. once that is done, fade in the next step
      }
    }
    // end

    function finish() {
      for (var i = 0; i < steps.length; i ++) {
        steps[i].fadeOut(fadeOutTime);
      }
    }

    // Main code (time to *do* stuff)
    function defaultCallback(e) {
        e.preventDefault();
        if (canPressButton) {
          console.log("refreshed");
          refreshActive();
        } else {
          console.log(canPressButton);
        }
    }
    function goback(e) {
      e.preventDefault();
      if (canPressButton) {
        refreshActive(-1);
      }
    }


    function createInput(datas, inputs) {
      return {
        inputPlaceholder: datas.customPlaceholder,
        customInputType: datas.customInputType,
        inputRequired: datas.inputRequired,
        labelContent: datas.label,
        fail: datas.fail,
        messages: datas.messages,
        inline: datas.inline
      };
    }

    $form = $("<form></form>").attr("id","mainForm"); // the form container

    steps = []; // the array that will hold all the steps
    canPressButton = true; // this is sooo ugly.. I wish I could remove it
    currentStep = 0; // I don't know if I need this either
    noSteps = data.inputs.length; // the number of steps
    // final area with "submit" button
    $finalForm = $("<div></div>")
      .addClass("form-group")
      .addClass("col-md-6");
    $button = $("<input />")
      .addClass("btn")
      .addClass("btn-success")
      .attr("type","submit")
      .html("Finish")
      .click(finish);
    $head = $("<h4></h4>")
      .html("Thank you for using this form");
    $finalForm
      .append($("<br />"))
      .append($head)
      .append($("<br />"))
      .append($button)
      .fadeOut(0);

    // Note to self: js arrays start at 0!
    for (var i = 0; i < noSteps; i ++) {
      var inputs = [];
      var currentData = data.inputs[i];
      if (typeof currentData.inputs == 'object') { // create multiple
        for (var j = 0; j < currentData.inputs.length; j++) {
          currentInput = currentData.inputs[j];
          inputs.push(createInput(currentInput));
        }
      } else {
        inputs.push(createInput(currentData));
        currentData.inputs = inputs;
      }
      steps[i] = createStep({
        step: i+1, // put this so that steps are shown as index in array + 1
        noSteps: noSteps,
        buttonText: "&gt;&gt;",
        buttonCallback: defaultCallback,
        previousText: i > 0 ? "&lt;&lt;" : undefined,
        previousCallback: goback,// no need for check here; previous is defined by previousText
        content: currentData.contentText === undefined ? "<br />" : data.inputs[i].contentText + "<br />",
        //labelContent: data.inputs[i].label,
        custom: currentData.custom,
        inputs: inputs
      });
      steps[i].addClass("ignore");
    }

    steps.push($finalForm);

    for (i = 0; i < steps.length; i ++) {
      var $el = steps[i];
      $el.appendTo($form);
    }
    $form.appendTo(container);
    steps[0].fadeIn(500);

    $form.submit(function(e) { // at last, we intercept the form and gloriously console.log the output!!!
      e.preventDefault();
      var formSubmission = $(this).serializeArray();
      console.log(formSubmission); // for me
      alert(JSON.stringify(formSubmission)); //for mom
    });

    /* Rendering stuff */
    data.execute();
  }

  console.log(startForm);
