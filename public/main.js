$(document).ready(function(){
//login
	$('#login').on('click', function(){
		$.ajax({
			url: '/get_log',
			type:'POST'
			dataType: 'json',
			data: {
				username: $('#name').val();
				password: $('#pass').val();
			}
		});

//signup
	$('#signup').on('click', function(){
		$.ajax({
			url: '/get_sign',
			type: 'POST',
			dataType: 'json',
			data: {
				username: $('#name').val();
				password: $('#pass').val();
			}
		});
});