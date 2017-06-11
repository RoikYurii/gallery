(function($){

	$.fn.blurPlug = function(conf){
		var conf = $.extend({
			filter: 'blur'
		}, conf)

		var start = function(){

			var section = $(this).parent().parent();
			console.log(section);
			var bgImg = $(this).attr('src');
			console.log(bgImg);
			section.append('<div class="filtered">');
			$('.filtered').css('background-image', 'url(' + bgImg + ')');
			if( conf.filter === 'blur' ){
				$('.filtered').css('filter', 'blur(10px)')
			}else if( conf.filter === 'grayscale' ){
				$('.filtered').css('filter', 'grayscale(1)')
			}

		}

		return this.each(start)
	}

}(jQuery))
