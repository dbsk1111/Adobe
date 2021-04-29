$(function(){
  // 스크롤에 위치에 따라 on 클래스 넣기
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop() + (wHeight / 1.8);

    $('section .box').each(function(){
      let thisOffset = $(this).offset().top;
      if ( thisOffset <= thisScrollTop ){
        $(this).addClass('on');
      }
    })
  })

  $('a').click(function(){
    let winHeight = $(window).height();
    let getGoto = $(this).attr('href');
    let goTo = getGoto.substr(1);

    $('section').each(function(){
      let secId = $(this).attr('id');
      let secTop = $(this).offset().top - 60;
      if( goTo == secId){
        window.scroll({ top: secTop, behavior: 'smooth' });
      }
    })
    return false;
  })
})
