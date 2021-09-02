$(function(){

	$.ajax({
		url:'https://alunos.b7web.com.br/cinema/',
		type:'GET',
		dataType:'json',
		beforeSend:function(){
			$('.filmes').html(`<div class="spinner-border text-primary d-flex justify-content-center align-items-center" role="status">
			
		  </div>`);
		},
		success:function(json) {

			var html = '';

			for(var i in json) {
				html += '<div class="col-md-4"><div class="filme"><img src="'+json[i].avatar+'" />'+json[i].titulo+'</div></div>';
			}

			$('.filmes').html(html);

		}
	});

});