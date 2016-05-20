/*$(function () {
	$('form input [type=submit]').on('click', onClick)

	function onClick() {

	}
}

	);
*/

$(function () {
	$('#primero').on('click', onClick)

	function onClick() {
		this.css( {'background-color':'blue', 'color' : 'yelow'});

	}
}

	);

$(function () {
	$('.segundo').on('click', onClick)

	function onClick() {
		console.log ('hice click en segundo');
	}
}

	);

$(function () {
	$('menu li :eq(2) a').on('click', onClick)

	function onClick() {
		console.log ('hice click en tercero');
	}
}

	);