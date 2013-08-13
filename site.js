$(document).ready(function() {

	var windowMaxWidth = parseInt($('body').css('max-width'));

	var fullScreenHeight = $(window).height();

	$('.full_screen').css({ height: fullScreenHeight });

	$('.zoom-content').on({
		mouseover: function() {
			$('#video_layer').stop().animate({ zoom: '103%' }, 1000);
		},
		mouseout: function() {
			$('#video_layer')	.stop().animate({ zoom: '100%' }, 1000);
		}
	});

	function setVideoPosition() {
		var actualWindowWidth = $(window).width();
		var normalLeftPos = 660;
		if (actualWindowWidth < windowMaxWidth) {
			var newValue = 660 - ((windowMaxWidth - actualWindowWidth) / 2);
			$('#root_video').css({ left : newValue });
		}		
	}

	setVideoPosition();

	$(window).resize(function() {
		setVideoPosition();
	});


});
