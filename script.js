$(function(){


///////////////////////////////
// スライダーの配置
///////////////////////////////
var images = ['http://placehold.jp/250x100.png?text=1ばん',
              'http://placehold.jp/250x100.png?text=2ばん',
              'http://placehold.jp/250x100.png?text=3ばん',
            ];

var image_count = images.length;
var image_doms = [];

for(i=0;i<image_count;i++){
  
  var image_dom = $('<div></div>', {
                    'id': 'image_' + (i+1),
                    css:{display: 'none',
                        width: 250,
                        height: 100,
                        background: `url(${images[i]})`,
                    }
  });
  
  image_doms.push(image_dom);
}

var slider_dom = $('<div class="slider"></div>');
$('body').append(slider_dom);
$('.slider').append(image_doms);

$('#image_1').css('display', 'block');

///////////////////////////////
// スライダー処理 
///////////////////////////////
const FADEIN_TIME = 1000;
const FADEOUT_TIME = 1000;
const SHOW_TIME = 4000;
var count = 1
var slider = '';

function fadein(){
  setTimeout(function(){
    $(`#image_${count}`).fadeIn(FADEIN_TIME);
  },FADEOUT_TIME);
}

function fadeout(){
  $(`#image_${count}`).fadeOut(FADEOUT_TIME);
}


function setSlider(){

  slider = setInterval(function(){
    fadeout();
    
    if(count < image_count){
      count++;
   }else if(count === image_count){
      count = 1;
   }
    
   fadein();

  },SHOW_TIME);

}

///////////////////////////////
// ボタン処理 
///////////////////////////////

var next = $('#next');
var prev = $('#prev');

next.on('click',function(){
  clearInterval(slider);
  fadeout();
  count++;
  if(count > image_count){
    count = 1;
  }
  fadein();
  setSlider();
})

prev.on('click',function(){
  clearInterval(slider);
  fadeout();
  count--;
  if(count < 1){
      count = image_count;
  }
  fadein();
  setSlider();
})




setSlider();

});