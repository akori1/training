$(function(){

	$('input[type=submit]').on('click', onClick);

	function onClick(){
		$.ajax({
			url:'/persona',
			method:'POST',
			data:{
				nombre:$('input[type=text]').val()
			},
			success: function(data){
				console.log(data);
			}
		});		
		return false;
	}
});