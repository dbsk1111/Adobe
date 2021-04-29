$(function(){
  // 스크롤에 위치에 따라 on 클래스 넣기
  $(window).scroll(function(){
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop() + (wHeight / 1.5);

    $('section .box').each(function(){
      let thisOffset = $(this).offset().top;
      if ( thisOffset <= thisScrollTop && thisScrollTop < thisOffset + wHeight ){
        $(this).addClass('on');
      }else{
        // $(this).removeClass('on');
      }
    })
  })

  $('a').click(function(){
    let winHeight = $(window).height() + 60;
    let getGoto = $(this).attr('href');
    let goTo = getGoto.substr(1);
    console.log(goTo);

    $('section').each(function(){
      let secId = $(this).attr('id');
      let secTop = $(this).offset().top;
      console.log(secId);
      // let wTop = window.scrollTop();
      // console.log( "윈도우 스크롤 탑: "+wTop );
      // let thisOffset = $(this).offset().top;
      // console.log(thisOffset);
      // console.log($(this).attr('id'));

      if( goTo == secId){
        console.log('일치');
        window.scroll({ top: secTop, behavior: 'smooth' });
      }
    })
    return false;
  })
})
