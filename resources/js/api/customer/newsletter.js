import {_alert, _confirm} from "../../functions/message";

function RegisterNews(newsData) {
    $.ajax({
        url: '/Customer/RegisterNewsletter/',
        type: 'GET',
        data: newsData,
        dataType: 'json'
	})
	.done(function (response) {
		if (response.Success === true) {
			swal({
				text: response.Message,
				type: response.type,
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'OK'
			}).then(function () {
				$('.newsletter').find('.nome_news,.email_news').val('');
			});
		}
		else {
			swal({
				text: response.Message,
				type: response.type,
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'OK'
			}).then(function () {

			});
		}
	}).fail(function (request, error) {
		//console.log("Erro ao realizar cadastro de news letter");
	});
}
$(document).ready(function () {
	var news = $('form.newsletter');
	news.submit(false);

    $('.newsletter').on("click", '#btn_news', function (event) {
		var form = $(event.target).parents('.newsletter');
		
		var newsData = form.serialize();
        RegisterNews(newsData);
    });
});

