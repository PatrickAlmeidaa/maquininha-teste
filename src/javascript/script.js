$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
      const header = $('header');
      let activeSectionIndex = 0;

      const scrollPositon = $(window).scrollTop() - header.outerHeight();

      if(scrollPositon <= 0){
        header.css('box-shadow', 'none');
      } else{
        header.css('box=shadow', '5px 1px 5px rgba(0,0,0,0.1)')
      }

      sections.each(function(i){
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();

        if(scrollPositon >= sectionTop && scrollPositon <sectionBottom){
          activeSectionIndex = i;
          return false;
        }
      })

      navItems.removeClass('active')
      $(navItems[activeSectionIndex]).addClass('active');
    });
});

$(document).ready(function(){
    $("#btn_1").click(function(event){
      event.preventDefault();
      $("#caixa1").toggle();
    });
    $("#btn_2").click(function(event){
      event.preventDefault();
      $("#caixa2").toggle();
    });
    $("#btn_3").click(function(event){
      event.preventDefault();
      $("#caixa3").toggle();
    });
});

$(document).ready(function(){
  $("#botao1, #botao2, #botao3").click(function(){
    $("#mensagem").text("Tente novamente").fadeIn().delay(2000).fadeOut();
  });
  $("#botao4").click(function(){
    $("#mensagem").text("ISSO MESMO! O POS Controle é a opção ideal para o cliente.").fadeIn().delay(2000).fadeOut();
  });
});