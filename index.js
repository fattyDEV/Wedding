$('.main-photo').fadeIn(2000);
$('.details').hide();
$('.hotel').hide();
$('.honeymoon').hide();

$('#home').click(() => {
  $('.main-photo').fadeIn(2000);
  $('.details').hide();
  $('.hotel').hide();
  $('.honeymoon').hide();
});

$('#details').click(() => {
  $('.details').fadeIn(2000);
  $('.main-photo').hide();
  $('.hotel').hide();
  $('.honeymoon').hide();
});

$('#hotel').click(() => {
  $('.hotel').fadeIn(2000);
  $('.main-photo').hide();
  $('.details').hide();
  $('.honeymoon').hide();
});

$('#honey').click(() => {
  $('.honeymoon').fadeIn(2000);
  $('.main-photo').hide()
  $('.details').hide()
  $('.hotel').hide()
});
