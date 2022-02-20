(window.onload = function() {

  // フェードイン処理
  jQuery(window).scroll(function (){
    jQuery('.fadein').each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("scrollin");
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
        //jQuery(this).removeClass('scrollin');
      }
    });
   });

})(); 
