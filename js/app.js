jQuery(document).ready(function($) {


// Loader removal on content ready
$('body').removeClass('loading');

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
 

controllers.controller('DataCtrl', function ($scope, $http) {
   $scope.newTask = '';

   $scope.code = null;
   $scope.response = null;


    $http.jsonp('http://sonyainc.net/todo/php/get_sql_data.php?format=jsonp&callback=JSON_CALLBACK').success(function(data, status) {
        $scope.data = data;
        $scope.status = status;

        $scope.total = data.length;
    }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
   
   
    $scope.getData = function() {
       // alert("get data: "+ $scope.data[0].task );
      }
      
      $scope.putData = function(taskname) {
        $scope.newTask = '';

          $http.jsonp("http://sonyainc.net/todo/php/put_item.php?task="+taskname+"&format=jsonp&callback=JSON_CALLBACK").success(function(data, status) {
            $scope.data = data;
            $scope.status = status;
            $scope.watch();
        }).
          error(function(data, status) {
            $scope.data = data || "Put Request failed";
            $scope.status = status;
        });
      }


      $scope.deleteData = function(taskId) {
         $http.jsonp('http://sonyainc.net/todo/php/delete_item.php?taskid='+taskId +'&format=jsonp&callback=JSON_CALLBACK').success(function(data, status) {
            $scope.data = data;
            $scope.status = status;
            $scope.watch(); 
        }).
          error(function(data, status) {
            $scope.data = data || " Delete Request failed";
            $scope.status = status;
        }); 
   
      }

      $scope.refresh = function() {
        $http.jsonp('http://sonyainc.net/todo/php/get_sql_data.php?format=jsonp&callback=JSON_CALLBACK').success(function(data, status) {
        $scope.data = data;
        $scope.status = status;
         $scope.newTask = '';
        $scope.total = data.length;
    }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });

      }

}//end DataCtrl controller 





