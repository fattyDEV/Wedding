$('.details').hide();
$('.hotel').hide();
$('.honeymoon').hide();

$('#home').click(() => {
  $('.main-photo').show();
  $('.details').hide();
  $('.hotel').hide();
  $('.honeymoon').hide();
});

$('#details').click(() => {
  $('.main-photo').hide();
  $('.details').show();
  $('.hotel').hide();
  $('.honeymoon').hide();
});

$('#hotel').click(() => {
  $('.main-photo').hide();
  $('.details').hide();
  $('.hotel').show();
  $('.honeymoon').hide();
});

$('#honey').click(() => {
  $('.main-photo').hide();
  $('.details').hide();
  $('.hotel').hide();
  $('.honeymoon').show();
});
