// Landing Section
// Particles
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});

// Work Section
// Work Skills Used
var skillList = new Vue({
  el: '#skill-list',
  data: {
    skills: [
      {class: 'devicon-javascript-plain colored'},
      {class: 'devicon-vuejs-plain colored'},
      {class: 'devicon-angularjs-plain colored'},
      {class: 'devicon-jquery-plain colored'},
      {class: 'devicon-bootstrap-plain colored'},
      {class: 'devicon-rails-plain colored'}
    ]
  }
})
// Work Samples
var workSampleList = new Vue({
  el: '#work-samples',
  data: {
    samples: [
      {
        alt:   'A small screenshot of the landing page for Glam by Adelina',
        link:  'work/glam.html',
        image: 'img/portfolio/glam/GlamSmall.png',
        class: 'vue-sample javascript-sample jquery-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the landing page for A2 Accessories',
        link:  'work/a2.html',
        image: 'img/portfolio/a2/A2Small.png',
        class: 'rails-sample javascript-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of the site for Gameplan Jobs',
        link:  'work/gameplan.html',
        image: 'img/portfolio/gpj/GameplanSmall.png',
        class: 'vue-sample rails-sample javascript-sample angular-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of Eideldev, this site',
        link:  'http://eideldev.com/404',
        image: 'img/portfolio/eideldev/EideldevSmall.png',
        class: 'vue-sample javascript-sample jquery-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of Tvitzar on a user\'s profile page',
        link:  'https://tvitzar.herokuapp.com/',
        image: 'img/portfolio/tvitzar/TvitzarSmall.png',
        class: 'rails-sample bootstrap-sample'
      },
      {
        alt:   'A small screenshot of NearMe, an Angular app',
        link:  'http://nearme.bitballoon.com/#/',
        image: 'img/portfolio/nearme/NearMeSmall.png',
        class: 'javascript-sample angular-sample'
      }
    ]
  }
})

// Skills Section
var frontEnd = new Vue({
  el: '#front-end-skills',
  data: {
    skills: [
      {class: 'devicon-javascript-plain colored'},
      {class: 'devicon-vuejs-plain colored'},
      {class: 'devicon-angularjs-plain colored'},
      {class: 'devicon-react-plain colored'},
      {class: 'devicon-jquery-plain colored'},
      {class: 'devicon-coffeescript-plain colored'},
      {class: 'devicon-html5-plain colored'},
      {class: 'devicon-css3-plain colored'},
      {class: 'devicon-sass-plain colored'},
      {class: 'devicon-bootstrap-plain colored'},
      {class: 'devicon-photoshop-plain colored'},
      {class: 'devicon-illustrator-plain colored'}
    ]
  }
})
var backEnd = new Vue({
  el: '#back-end-skills',
  data: {
    skills: [
      {class: 'devicon-ruby-plain colored'},
      {class: 'devicon-rails-plain colored'},
      {class: 'devicon-redis-plain colored'},
      {class: 'devicon-postgresql-plain colored'},
      {class: 'devicon-mysql-plain colored'},
      {class: 'devicon-heroku-plain colored'}
    ]
  }
})
var workFlow = new Vue({
  el: '#workflow-skills',
  data: {
    skills: [
      {class: 'devicon-webpack-plain colored'},
      {class: 'devicon-vim-plain colored'},
      {class: 'devicon-atom-plain atom-colored'},
      {class: 'devicon-git-plain colored'},
      {class: 'devicon-github-plain white'},
      {class: 'devicon-slack-plain colored'}
    ]
  }
})

// jQuery
$(document).ready(function(){
  // Smooth Scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .workName a, .btm-but a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });
  // Navbar Drop Down
  $(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
  });
  // Work: Portfolio Effect
  $('#skills-used i').mouseenter(function() {
    var skill = $(this).attr('class')
    if (skill == 'devicon-vuejs-plain colored') {
      $('.sample-title').html('Vue');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.vue-sample').addClass('select-sample');
    } else if (skill == 'devicon-rails-plain colored') {
      $('.sample-title').html('Rails');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.rails-sample').addClass('select-sample');
    } else if (skill == 'devicon-javascript-plain colored') {
      $('.sample-title').html('JavaScript');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.javascript-sample').addClass('select-sample');
    } else if (skill == 'devicon-jquery-plain colored') {
      $('.sample-title').html('jQuery');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.jquery-sample').addClass('select-sample');
    } else if (skill == 'devicon-angularjs-plain colored') {
      $('.sample-title').html('Angular');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.angular-sample').addClass('select-sample');
    } else if (skill == 'devicon-bootstrap-plain colored') {
      $('.sample-title').html('Bootstrap');
      $('.portfolio-sample').addClass('shadow-sample');
      $('.bootstrap-sample').addClass('select-sample');
    }
  });
  $('#skills-used i').mouseleave(function() {
    $('.portfolio-sample').removeClass('shadow-sample');
    $('.portfolio-sample').removeClass('select-sample');
    $('.sample-title').html('Work');
  });
  // History Image Slide-In
  $(window).scroll(function(){
    $('.container p').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
            windowHeight  = $(window).height(),
            breakPoint    = windowHeight*0.9;
        if (distance > breakPoint) {
          $(this).addClass("more-padding");
        }  if(distance < breakPoint) {
          $(this).removeClass("more-padding");
        }
    });
  });

  //Contact Form
  $("#input-message").css({
    "background-color": "white",
    "color": "black"
  });

  $("#input-message").on("keyup", function() {
    var charCount = $("#input-message").val().length;
    console.log(charCount);
    $("#char-count").html(charCount);
    if(charCount > 200 && charCount < 500) {
      $("#char-count").css("color", "yellow"); // need to turn character count yellow to indicate it's getting a liiiiiittle long
    } else if(charCount >= 500) {
      $("#char-count").css("color", "red"); // too long!
    } else {
      $("#char-count").css("color", "white"); // normal
    }
  });
});

// Google Maps must be outside the $(document).ready function in order
// to load before Maps API; see HTML.
var map;

var myLatLng = {lat: 37.7813636, lng: -122.3914047};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8
  });

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'You Can Find Me in the Bay'
  });
}
