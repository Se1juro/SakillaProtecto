<div class="seccion-idioma">
	<div class="card border-primary">
		<div class="card-header bg-primary text-white">
			EDITAR
		</div>
		<div class="card-body">
			<form id="f-idioma">
				<div class="form-group">
	            	<label for="id">Id</label>
	            	<input type="text" class="form-control" id="id" name="id" readonly>
	            </div>
	            <div class="form-group">
	            	<label for="idioma">Idioma</label>
	            	<input type="text" class="form-control" id="idioma" name="idioma">
	            </div>
            	<button type="submit" class="btn btn-primary" id="actualizar">Actualizar</button>
            	<button type="button" class="btn btn-danger" id="cancelar">Cancelar</button>
          </form>
		</div>
	</div>
	<script>
		$("#f-idioma").validate({
			rules: {
				idioma: "required" 
  			},
			messages:{
				idioma: {
					required: "obligatorio"
				},
			},
			submitHandler: function() {
				actualizar();
 			}
 		});
	</script>
</div>