var dt;

function paises() {

	// $('#contenido').on('click','button#actualizar',function() {

	// 	var datos = $('#f-pais').serialize();

	// 	$.ajax({

	// 		type: 'get',
	// 		url: './paises/controlador_paises.php?accion=editar',
	// 		data: datos,
	// 		dataType: 'json'

	// 	}).done(function(e) {

	// 		if (e.respuesta == 'correcto') {

	// 			swal.fire(
	// 				'Actualizado',
	// 				'Datos actualizados de forma correcta',
	// 				'success'
	// 			)

	// 			dt.ajax.reload();

	// 			$('#nuevo-editar').html('');
	// 			$('#nuevo-editar').addClass('d-none');
	// 			$('#paises').removeClass('d-none');

	// 		} else {

	// 			swal.fire({
	// 				type: 'error',
	// 				title: 'Error',
	// 				text: 'Ocurrio un error durante el proceso'
	// 			})

	// 		}

	// 	});

	// })

	$('#contenido').on('click','a.borrar',function() {

		var id = $(this).data('id');

		swal.fire({

			title: '¿Continuar?',
			text: '¿Realmente desea borrar este registro?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar'

		}).then((e) => {

			if (e.value) {

				var request = $.ajax({

					method: 'get',
					url: './paises/controlador_paises.php',
					data: { 
						id: id,
					 	accion:'borrar'
					},
					dataType: 'json'

				})

				request.done(function(e) {

					if (e.respuesta == 'correcto') {

						swal.fire(
							'Borrado',
							'El registro se ha eliminado con exito',
							'success'
						)

						dt.ajax.reload();

					} else {

						swal.fire({
							type: 'error',
							title: 'Error',
							text: 'Ocurrio un error durante el proceso'
						})

					}

				});

				request.fail(function(jqXHR, textStatus) {

					swal.fire({
						type: 'error',
						title: 'Error',
						text: 'Ocurrio un error durante el proceso - ' + textStatus
					})

				});

			}

		})

	});

	$('#contenido').on('click','button#cancelar',function() {

		$('#nuevo-editar').html('');
		$('#nuevo-editar').addClass('d-none');
		$('#paises').removeClass('d-none');

	});

	/*$('#contenido').on('click','button#cerrar',function() {

		$('#contenedor').addClass('d-none');
		$('#contenido').html('');

	})*/

	$('#contenido').on('click','button#nuevo',function() {

		$('#nuevo-editar').load('./paises/nuevo_pais.php');
		$('#nuevo-editar').removeClass('d-none');
		$('#paises').addClass('d-none');

	});

	// $('#contenido').on('click','button#agregar',function() {

 //      	var datos = $('#f-pais').serialize();

	// 	$.ajax({

	// 		type: 'get',
	// 		url: './paises/controlador_paises.php?accion=nuevo',
	// 		data: datos,
	// 		dataType: 'json'

	// 	}).done(function(e) {

	// 		if (e.respuesta == 'correcto') {

	// 			swal.fire(
	// 				'Agregado',
	// 				'El registro se agrego correctamente',
	// 				'success'
	// 			)

	// 			dt.ajax.reload();

	// 			$('#nuevo-editar').html('');
	// 			$('#nuevo-editar').addClass('d-none');
	// 			$('#paises').removeClass('d-none');

	// 		} else {

	// 			swal.fire({
	// 				type: 'error',
	// 				title: 'Error',
	// 				text: 'Ocurrio un error durante el proceso'
	// 			})

	// 		}

	// 	});	

	// });

	$('#contenido').on('click','a.editar',function() {

		var id = $(this).data('id');

		$('#nuevo-editar').load('./paises/editar_pais.php');
		$('#nuevo-editar').removeClass('d-none');
		$('#paises').addClass('d-none');

		$.ajax({

			type: 'get',
			url: './paises/controlador_paises.php',
			data: {
				id: id,
				accion: 'consultar'
			},
			dataType: 'json'

		}).done(function(e) {

			if (e.respuesta === "no existe") {

				swal.fire({
					type: 'error',
					title: 'Error',
					text: 'El registro no existe'
				})

			} else {

				$('#id').val(e.id);
				$('#pais').val(e.pais);

			}

		});

	});

}

function agregar() {
	var datos = $('#f-pais').serialize();

	$.ajax({

		type: 'get',
		url: './paises/controlador_paises.php?accion=nuevo',
		data: datos,
		dataType: 'json'

	}).done(function(e) {

		if (e.respuesta == 'correcto') {

			swal.fire(
				'Agregado',
				'El registro se agrego correctamente',
				'success'
			)

			dt.ajax.reload();

			$('#nuevo-editar').html('');
			$('#nuevo-editar').addClass('d-none');
			$('#paises').removeClass('d-none');

		} else {

			swal.fire({
				type: 'error',
				title: 'Error',
				text: 'Ocurrio un error durante el proceso'
			})

		}

	});	
}

function actualizar() {
	var datos = $('#f-pais').serialize();

	$.ajax({

		type: 'get',
		url: './paises/controlador_paises.php?accion=editar',
		data: datos,
		dataType: 'json'

	}).done(function(e) {

		if (e.respuesta == 'correcto') {

			swal.fire(
				'Actualizado',
				'Datos actualizados de forma correcta',
				'success'
			)

			dt.ajax.reload();

			$('#nuevo-editar').html('');
			$('#nuevo-editar').addClass('d-none');
			$('#paises').removeClass('d-none');

		} else {

			swal.fire({
				type: 'error',
				title: 'Error',
				text: 'Ocurrio un error durante el proceso'
			})

		}

	});
}

$(document).ready(() => {

	$('#contenido').off('click','button#nuevo');
	$('#contenido').off('click','a.editar');
	$('#contenido').off('click','a.borrar');
	$('#contenido').off('click','button#agregar');
	$('#contenido').off('click','button#actualizar');
	$('#contenido').off('click','button#cancelar');
	//$('#contenido').off('click','button#cerrar');

	dt = $('#tabla').DataTable({

		'ajax': './paises/controlador_paises.php/?accion=listar',
		'columns': [
			{'data': 'id'},
			{'data': 'pais'},
			{
				'data': 'id',
				render: function (data) {
					return '<a href="#" data-id="' + data + '" class="btn btn-warning editar">Editar</a> ' +
						   '<a href="#" data-id="' + data + '" class="btn btn-danger borrar">Borrar</a>'
				}
			},
		]

	});

	paises();

})