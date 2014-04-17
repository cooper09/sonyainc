jQuery(document).ready(function($) {


// Loader removal on content ready
$('body').removeClass('loading');



// Gauge definition
var gCss = new JustGage({
    id: "gauge-css3", 
    value: 95, 
    min: 0,
    max: 100,
    title: "CSS3",
    gaugeWidthScale: 0.8,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    refreshAnimationTime: 2,
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gHtml = new JustGage({
    id: "gauge-html5", 
    value: 70, 
    min: 0,
    max: 100,
    title: "HTML5",
    gaugeWidthScale: 0.8,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gHtml = new JustGage({
    id: "gauge-php", 
    value: 67, 
    min: 0,
    max: 100,
    title: "PHP",
    gaugeWidthScale: 0.8,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gQuery = new JustGage({
    id: "gauge-jquery", 
    value: 73, 
    min: 0,
    max: 100,
    title: "jQuery",
    gaugeWidthScale: 0.8,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gAngular = new JustGage({
    id: "gauge-angular", 
    value: 31, 
    min: 0,
    max: 100,
    title: "AngularJs",
    gaugeWidthScale: 0.6,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gWordpress = new JustGage({
    id: "gauge-wordpress", 
    value: 75, 
    min: 0,
    max: 100,
    title: "Wordpress",
    gaugeWidthScale: 0.8,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gShopify = new JustGage({
    id: "gauge-shopify", 
    value: 25, 
    min: 0,
    max: 100,
    title: "Shopify",
    gaugeWidthScale: 0.6,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 

var gSass = new JustGage({
    id: "gauge-sass", 
    value: 80, 
    min: 0,
    max: 100,
    title: "Sass",
    gaugeWidthScale: 0.6,
    levelColorsGradient: false,
    titleFontColor: '#CCDCEB',
    labelFontColor: '#888888',
    valueFontColor: '#0CA7D3',
    gaugeColor: '#0CA7D3',
    levelColors: ['#e70933','#e76209','#baff00','#4de709']

  }); 




// Contact Form Button Submit
$("#contactForm .button").click(function(e){
      e.preventDefault();
     var input_name = $('#contactForm input[name="name"]').val(),
         input_test = $('#contactForm input[name="test"]').val(),
         input_email = $('#contactForm input[name="email"]').val(),
         input_message = $('#contactForm textarea[name="message"]').val();

     $.post('http://zyadsherif.com/wp-content/themes/zyadsherif/send_mail.php', {name: input_name , email: input_email, message: input_message, test: input_test}, function(data) {
        var form = $('#contactForm');
        $('#respond').addClass('validate');
        setTimeout(function() {
        $('#respond').removeClass('validate');  }, 2000);
        if(data == '1'){
          $('.alert-container').prepend('<div class="alert-box success fade"> Boya,  got that !</div>');
        } 

        else if(data == '2'){
          $('.alert-container').prepend('<div class="alert-box alert fade">Doh! Typo? retry </div>');
        }

        else{
          $('.alert-container').prepend('<div class="alert-box alert">Shit server down, try a manual one zyadsherif2@gmail.com <a href="#" class="close">&times;</a></div>');
        }

        setTimeout(function() {
          $('.alert-container .alert-box.fade').fadeOut( 4000 , function() {});}, 2000);
     })


     return false;
  });




// Menu change on scroll
$('.main-title').waypoint(function(direction) {
	if (direction =='down') {
		$('.main-header').addClass('scrolled');	
	}
	else{
		$('.main-header').removeClass('scrolled');	
	}
});



// Menu Toggle
$('.menu-toggle').click(function(e) {
	e.preventDefault();
	$('.main-menu').toggleClass('open');
});


// Smooth Scrolling
function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function(e) {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
});






// angular code


// Angular App
var app = angular.module('zico', ['zico.controllers']);

//Angular controllers
var controllers = angular.module('zico.controllers', []);

controllers.controller('AppCtrl', function ($scope, $http) {
      //$http.jsonp('http://zyadsherif.com/?p=326&json=1&callback=JSON_CALLBACK').then(function (data) {
      $http.jsonp('http://sonyainc.net/json/get_UI_data.php?json=1&callback=JSON_CALLBACK').then(function (data) {
      // body...
      $scope.title = data.data.clients.title;
      $scope.client = data.data.clients.client;
      $scope.date = data.data.clients.date;
      $scope.technologies = data.data.clients.technologies;
      $scope.siteUrl = data.data.clients.siteUrl;
      $scope.image1 = data.data.clients.image1;
      $scope.image2 = data.data.clients.image2;
      $scope.image3 = data.data.clients.image3;
      $scope.image4 = data.data.clients.image4; 
      
    })

  $scope.updateName = function ($main_url, $post_id) {
    // body...
    console.log('Fetching');
    $http.jsonp($main_url + '/?p='+ $post_id +'&json=1&callback=JSON_CALLBACK').then(function (data) {
      // body...
      jQuery(document).ready(function($) {
        $container = $('#work-view');
        $('html, body').animate({
        scrollTop: $($container).offset().top
    }, 2000);
        $container.slideUp(400);
        setTimeout(function() {
        $container.slideDown(400);  }, 2000);
      })

      $scope.title = data.data.post.title;
      $scope.client = data.data.post.custom_fields.Client[0];
      $scope.date = data.data.post.custom_fields.Date[0];
      $scope.technologies = data.data.post.custom_fields.technologies[0];
      $scope.siteUrl = data.data.post.custom_fields.siteUrl[0];
      $scope.image1 = data.data.post.custom_fields.image1[0];
      $scope.image2 = data.data.post.custom_fields.image2[0];
      $scope.image3 = data.data.post.custom_fields.image3[0];
      $scope.image4 = data.data.post.custom_fields.image4[0];
      
    })
  }

  $scope.clickMe = function() {
    alert("Click ME, Dammit!!!");
  }
});
 








