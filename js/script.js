$(document).ready(function(){
    var form = $('#form'),
	button = $('#submit_button', form);
    var name = $('#fio');
    var tel = $('#phone');
    var email = $('#email');
	$(form).on('change keyup', function (e) {
		if (name.val() != '' && !(tel.val().replace(/\D/g,'').length<10) && email.val()!='') {
			button.prop('disabled', false);
		}
		else {
			button.prop('disabled', true);
		}
	});
		
    $(tel).on('change keyup', function (e) {
        this.value = this.value.replace(/\D/g, ''); 
    });
    
	$('#form').on('submit', function (e) {
        if(tel.val().replace(/\D/g,'').length<11){
            $('#form_error').text("Номер должен состоять из 11-и цифр");
            $('#form_error').toggle();
            button.prop('disabled', true);
            return false;
        }   
        $('#form_error').toggle();
		button.prop('disabled', true);
	});
    
    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

   $('#href_profile').on('click',function(){
       if(navigator.userAgent.search("MSIE") >= 0  || navigator.userAgent.search("Edge") >= 0){
           window.scrollTo(0,scrollHeight-$('#form_block').outerHeight());
       }
       else{
            window.scrollTo({
              top: scrollHeight-$('#form_block').outerHeight(),
              behavior: 'smooth'
            });   
       }
   }); 
});