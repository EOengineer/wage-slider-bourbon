$(document).ready(function() {
  var ceoSal = $('#ceo-salary').text();
  var percent = $('#rangevalue').text();

  $('#slider').change(function() {
    newCeoSal = ceoSal * percent
    alert(newCeoSal)
  });
})
