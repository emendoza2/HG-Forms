function fallback(text,fb) {
  return text === undefined ? (fb === undefined ? "" : fb) : text;
} // if a string is undefined, return fb or "", otherwise, return the string

function createStep(opt) {
  var $step = $("<div></div>")
    .attr("id","step"+opt.step)
    .addClass("form-group")
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
  //var $input;
  if (opt.custom !== undefined) {
    $label = $("<label></label>")
      .html(fallback(opt.inputs[0].labelContent));
     inputs.push(opt.custom);
     labels.push($label);
  } else {
    for (i = 0; i < opt.inputs.length; i ++) {

      var currentData = opt.inputs[i]; // more DRY
      var inputName = currentData.inputName === undefined ? "input" + opt.step + "-" + i : currentData.inputName; // for DRY code

      if (typeof(currentData.labelContent) === "string") {
        $label = $("<label></label>")
          .attr("for", inputName)
          .html(fallback(currentData.labelContent));
      }

      if (currentData.custom !== '') {
        console.log("currentData is not custom");
        $input = $("<input />")
          .attr("name", inputName).attr("id", inputName)
          .attr("placeholder",fallback(currentData.inputPlaceholder))
          .attr("type",fallback(currentData.customInputType,"text"))
          .addClass("form-control");

        if (currentData.inputRequired === undefined ? false : currentData.inputRequired) {
          $input.attr("required","required");
        }

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
