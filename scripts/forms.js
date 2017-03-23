function fallback(text,fb) {
  return text === undefined ? (fb === undefined ? "" : fb) : text
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

  var inputName = "input" + opt.step; // for DRY code
  var $label = $("<label></label>")
    .attr("for", inputName)
    .html(fallback(opt.labelContent));
  var $input;
  if (opt.custom !== undefined) {
    $input = opt.custom;
  } else {
    $input = $("<input />")
      .attr("name", inputName).attr("id", inputName)
      .attr("placeholder",fallback(opt.inputPlaceholder))
      .attr("type",fallback(opt.customInputType,"text"))
      .addClass("form-control");
  }
  if (opt.inputRequired === undefined ? false : opt.inputRequired) {
    $input.attr("required","required");
  }

  var $submit = $("<button></button>")
      .addClass("btn")
      .addClass("btn-default")
      .html(fallback(opt.buttonText))
      .click(opt.buttonCallback);



  $step
    .append($head)
    .append($label)
    .append($input)
    .append("<br />");

  if (opt.previousText!== undefined) {
    var $previous = $("<button></button>")
        .addClass("btn")
        .addClass("btn-default")
        .html(fallback(opt.previousText))
        .click(opt.previousCallback);
        $step.append($previous)
  }
      $step
        .append($submit)
        .append("<br / ><br />")
        .append(fallback(opt.content)); // stick everything in

  //var $out = $template.render(opt)
  //$step.html($out)
  // $step.appendTo(opt.parentForm); - this should be done outside of this. Otherwise, what is the point of return?
  return $step
}
