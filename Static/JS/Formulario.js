var 
$form   = $('#formulario'),
$titulo = $('#titulo'),
$url    = $('#url'),
$button = $('#mostrar-form'),
$list   = $('#trabajo'),
$post   = $('.Work-item').first();



function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	
	return false;
}


function agregarPost(){
   var url = $url.val(),
   titulo= $titulo.val(),
   $clone= $post.clone();
   $clone.find('.Work-imageContainer figcaption').text(titulo); /*guarda lo que se escribe en titulo para mostrarlo en el nuevo elemento*/
  /* alert(url);*/
   $clone.hide();
   $list.prepend($clone);
   $clone.fadeIn();
   $form.slideToggle();
   $form[0].reset();
  

   return false;
}

$button.click(mostrarFormulario);
$form.on("submit",agregarPost);


