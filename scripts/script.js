$( document ).ready(function() {
  $('#myDropdown').on('show.bs.dropdown', function () {
    $("#span1").removeClass('dropHide');
    $("#span1").addClass('dropOpen');
  })

  $('#myDropdown').on('hide.bs.dropdown', function (e) {
    $("#span1").removeClass('dropOpen');
    $("#span1").addClass('dropHide');
  })
});

function inputSetText1(value) {
  var input = document.getElementById('input1');
  input.value = value;
}

var maxslides,minslides, pager, controls, width = $(window).width();

if (width > 992) {
    minslides = 3;
    maxslides = 3;
    pager=false;
    controls=false;
} else if (width>576 && width<992){
    minslides = 2;
    maxslides = 2;
    pager=true;
    controls=false;
} else if (width<276) {
  minslides = 1;
  maxslides = 1;
  pager=true;
  controls=false;
}
$(function(){
$('.bxslider').bxSlider({
  slideWidth:300,
minSlides: minslides,
maxSlides: maxslides,
moveSlides: 1,
pager: pager,
controls: false,
adaptiveHeight: false
});
});

jQuery(function($){
  var max_col_height = 0; // максимальная высота, первоначально 0
  $('.sect9 .text').each(function(){ // цикл "для каждой из колонок"
    if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
      max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
    }
  });
   $('.sect9 .text').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});

jQuery(function($){
  var max_col_height = 0; // максимальная высота, первоначально 0
  $('.sect9 .fio h6:first-child').each(function(){ // цикл "для каждой из колонок"
    if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
      max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
    }
  });
  $('.sect9 .fio h6:first-child').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});
