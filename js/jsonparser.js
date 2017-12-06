var infonums = 3;

$.ajax({
	url: 'information/information.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		$(data.general_info).each(function(index, value){
			for(i = 1; i <= infonums; i++){
				$('#info_'+[i]).html(value['information_'+[i]]);
			};
		});
	}
});

