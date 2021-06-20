$(function () {
  //section offset top 값으로 class 추가
  const addTop = 500;

  let wHeight = $(window).innerHeight();
  // console.log("window height: " + wHeight);
  $(window).scroll(function () {
    let thisScrollTop = $(this).scrollTop();
    $("section").each(function () {
      let thisOffset = $(this).offset();
      if (thisOffset.top <= thisScrollTop + addTop && thisScrollTop < thisOffset.top + wHeight) {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
    });
  });

  $(".back_to_top a").click(function () {
    $("html,body").stop();
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
});
