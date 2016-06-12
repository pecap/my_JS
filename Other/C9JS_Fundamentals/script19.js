/*
$(function(){
	alert('got here');
});
*/
/*
the getJSON method has a major fault - if it cannot get to the server//data (i.e "data19a.json, cannot find file") it presents no error
we will retype our code getting around this problem by doing it the long way (the ajax method)

$(function(){
	$('#clickMe').click(function(){	
		$.getJSON('data19.json', function(data){		
			var items = [];			
			$.each(data, function(key, val){				
				items.push('<li id="' + key + '">' + val + '</li>');
			});
			$('<ul/>', {
				'class': 'interest-list',
				html: items.join('')
			}).appendTo('body');
		});
	});
});
*/

$(function(){
	$('#clickMe').click(function(){
		$.ajax({
			url:'data19a.json',
			dataType: 'json',
			success: function(data){
				var items = [];			
				$.each(data, function(key, val){				
					items.push('<li id="' + key + '">' + val + '</li>');
				});
				$('<ul/>', {
				'class': 'interest-list',
				html: items.join('')
				}).appendTo('body');
			},
			statusCode: {
				//no 404 from your own harddrive. function should work if the data19.json file would be placed on a webserver
				404: function(){
					alert('There was a problem with the server. try again soon!');
				}
			}
		})
	})
})