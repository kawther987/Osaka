/// <reference types="../@types/jquery" />

//change navbar color
$(window).on("scroll", function () {
  let sectionOffset = $("#about").offset().top;
  let windowScroll = $(window).scrollTop();
  if (windowScroll > sectionOffset - 30) {
    $(".navbar").css("backgroundColor", "black");
    $("#btnUp").fadeIn(500);
  } else {
    $(".navbar").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500);
  }
});

// smooth scrol behavior
$("a[href^='#']").on("click", function (e) {
  //   let aHref = $(e.target).attr("href");
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  console.log(sectionOffset);
  $("html,body").animate({ scrollTop: sectionOffset }, 1000);
});

//loader
$(function () {
  $(".spinner").fadeOut(1500, function () {
    $(".loading").slideUp(1500, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

//toggle side bar
$("#icon").on("click", function () {
  $(".sideBox").animate({ width: "toggle", paddingInline: "toggle" }, 2000);
});

//customize color
let colors = ["#7FC7D9", "#DC84F3", "#FFB534", "#FF90BC", "#A7D397"];
for (let i = 0; i < colors.length; i++) {
  $(".boxColor").eq(i).css("backgroundColor", colors[i]);
}

$(".boxColor").on("click", function (e) {
  let currentColor = $(e.target).css("backgroundColor");
  $(" h2, h1 ,a").css("cssText", `color : ${currentColor} !important`);
});

//change background
$(".boxbg img").on("click", function (e) {
  let img = $(e.target).attr("src");
  $("#home").css("backgroundImage", `url(${img}`);
});

//button up
$("#btnUp").on("click", function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});
