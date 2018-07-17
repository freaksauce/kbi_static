(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  $('#hamburger').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.mobileMenu').css({ display: 'none' });
      $('.navbar-collapse').fadeOut();
    } else {
      $(this).addClass('open');
      $('.mobileMenu').css({ display: 'block' });
      $('.navbar-collapse').fadeIn();
    }
  });

  if ($('.Project').length === 1) {
    // init slick carousel
    if ($('.carousel').length === 1) {
      $('.carousel').slick({
        dots: true,
        arrows: false
      });
    }
  }
  if ($('.Projects').length === 1) {
    $('.project a').hover(function () {
      if (!$(this).hasClass('hover')) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });
  }
  if ($('.Project').length === 1) {
    $('.details').on('click', function () {
      if (!$('.project-wrapper').hasClass('open')) {
        $('.project-wrapper').addClass('open');
      } else {
        $('.project-wrapper').removeClass('open');
      }
    });
    $('.close').on('click', function () {
      $('.project-wrapper').removeClass('open');
    });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFXO0FBQ1gsSUFBRSxZQUFGLEVBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckMsUUFBSSxFQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE1BQWpCLENBQUosRUFBOEI7QUFDNUIsUUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixNQUFwQjtBQUNBLFFBQUUsYUFBRixFQUFpQixHQUFqQixDQUFxQixFQUFDLFNBQVMsTUFBVixFQUFyQjtBQUNBLFFBQUUsa0JBQUYsRUFBc0IsT0FBdEI7QUFDRCxLQUpELE1BSUs7QUFDSCxRQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE1BQWpCO0FBQ0EsUUFBRSxhQUFGLEVBQWlCLEdBQWpCLENBQXFCLEVBQUMsU0FBUyxPQUFWLEVBQXJCO0FBQ0EsUUFBRSxrQkFBRixFQUFzQixNQUF0QjtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxNQUFJLEVBQUUsVUFBRixFQUFjLE1BQWQsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUI7QUFDQSxRQUFJLEVBQUUsV0FBRixFQUFlLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsUUFBRSxXQUFGLEVBQWUsS0FBZixDQUFxQjtBQUNuQixjQUFNLElBRGE7QUFFbkIsZ0JBQVE7QUFGVyxPQUFyQjtBQUlEO0FBQ0Y7QUFDRCxNQUFJLEVBQUUsV0FBRixFQUFlLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsTUFBRSxZQUFGLEVBQWdCLEtBQWhCLENBQXNCLFlBQVc7QUFDL0IsVUFBSSxDQUFDLEVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsT0FBakIsQ0FBTCxFQUFnQztBQUM5QixVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE9BQWpCO0FBQ0QsT0FGRCxNQUVLO0FBQ0gsVUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixPQUFwQjtBQUNEO0FBQ0YsS0FORDtBQU9EO0FBQ0QsTUFBSSxFQUFFLFVBQUYsRUFBYyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQzlCLE1BQUUsVUFBRixFQUFjLEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBVztBQUNuQyxVQUFJLENBQUMsRUFBRSxrQkFBRixFQUFzQixRQUF0QixDQUErQixNQUEvQixDQUFMLEVBQTZDO0FBQzNDLFVBQUUsa0JBQUYsRUFBc0IsUUFBdEIsQ0FBK0IsTUFBL0I7QUFDRCxPQUZELE1BRUs7QUFDSCxVQUFFLGtCQUFGLEVBQXNCLFdBQXRCLENBQWtDLE1BQWxDO0FBQ0Q7QUFDRixLQU5EO0FBT0EsTUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBVztBQUNqQyxRQUFFLGtCQUFGLEVBQXNCLFdBQXRCLENBQWtDLE1BQWxDO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0EzQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpIHtcbiAgJCgnI2hhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICQoJy5tb2JpbGVNZW51JykuY3NzKHtkaXNwbGF5OiAnbm9uZSd9KVxuICAgICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmZhZGVPdXQoKVxuICAgIH1lbHNle1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgJCgnLm1vYmlsZU1lbnUnKS5jc3Moe2Rpc3BsYXk6ICdibG9jayd9KVxuICAgICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmZhZGVJbigpXG4gICAgfVxuICB9KTtcblxuICBpZiAoJCgnLlByb2plY3QnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBpbml0IHNsaWNrIGNhcm91c2VsXG4gICAgaWYgKCQoJy5jYXJvdXNlbCcpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgJCgnLmNhcm91c2VsJykuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaWYgKCQoJy5Qcm9qZWN0cycpLmxlbmd0aCA9PT0gMSkge1xuICAgICQoJy5wcm9qZWN0IGEnKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaG92ZXInKSkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdob3ZlcicpO1xuICAgICAgfWVsc2V7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgaWYgKCQoJy5Qcm9qZWN0JykubGVuZ3RoID09PSAxKSB7XG4gICAgJCgnLmRldGFpbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghJCgnLnByb2plY3Qtd3JhcHBlcicpLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgJCgnLnByb2plY3Qtd3JhcHBlcicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgJCgnLnByb2plY3Qtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAkKCcucHJvamVjdC13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KVxuICB9XG59KTtcbiJdfQ==
