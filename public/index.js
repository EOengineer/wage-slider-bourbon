

$(document).ready(function() {
  // gathering data attributes
  var min = $('#minsal').attr('data-start');
  var ceoSalary = $('#ceo-salary').attr('data-ceosalary');
  var prettyCeoSalary = accounting.formatMoney(ceoSalary);
  var percent = $('#slider').attr('value');

  // set data in view
  $('#ceo-salary').text(prettyCeoSalary);
  $('#rangevalue').text(percent + '%');
  $('#minsal').text('$' + min);


  // update when touched
  $('#slider').change(function() {
    percent = $('#slider').attr('value');
    var newCeoSalary = ceoSalary - (ceoSalary - (ceoSalary * percent)/100);
    var prettyNewCeoSalary = accounting.formatMoney(newCeoSalary);
    $('#rangevalue').text(percent + '%');
    $('#ceo-salary').text(prettyNewCeoSalary);
  });
})
