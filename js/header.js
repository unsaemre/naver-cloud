// gnb

$(".gnb>li").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
});
$(".gnb>li").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
});

// service
$(".service").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
});
$(".service").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
});

// languages
$("#up1, #lang").hide();

$(".lang_text, #down1").on("click", function () {
  $("#down1, .lang_text").hide();
  $("#up1, #lang").show();
});
$("#lang, #up1").on("click", function () {
  $("#up1, #lang").hide();
  $("#down1, .lang_text").show();
});

$(".lang_slide").hide();

$(".lang_text, #down1").click(function () {
  $(".lang_slide").stop().slideDown("fast");
});

$(".lang_slide").find("p:first").addClass("active");

$(".lang_slide p").click(function () {
  if ($(this).hasClass("active")) {
    $(".lang_slide p").removeClass("active");
  } else {
    $(".lang_slide p").removeClass("active");

    $(this).addClass("active");
  }
});

$(document).mouseup(function (e) {
  if ($(".lang_slide").has(e.target).length === 0) {
    $(".lang_slide").slideUp("fast");
    $("#up1").hide();
    $("#down1").show();
    $("#lang").hide();
    $(".lang_text").show();
  }
});

// contact

$("#up2, #contact").hide();

$(".c_text, #down2").on("click", function () {
  $("#down2, .c_text").hide();
  $("#up2, #contact").show();
});
$("#contact, #up2").on("click", function () {
  $("#up2, #contact").hide();
  $("#down2, .c_text").show();
});

$(".contact").hide();

$(".c_text, #down2").click(function () {
  $(".contact").slideToggle("fast");
});

$(".contact").find("li:first").addClass("active");

$(".contact li").click(function () {
  if ($(this).hasClass("active")) {
    $(".contact li").removeClass("active");
  } else {
    $(".contact li").removeClass("active");

    $(this).addClass("active");
  }
});

$(document).mouseup(function (e) {
  if ($(".contact").has(e.target).length === 0) {
    $(".contact").slideUp("fast");
    $("#up2").hide();
    $("#down2").show();
    $("#contact").hide();
    $(".c_text").show();
  }
});

// search

$(".search").hide();

$("#search").on("click", function () {
  $(".search").show();
  $(".search_wrap").addClass("active");
  $("body").addClass("active");
});

$("#close").on("click", function () {
  $(".search").hide();
  $(".search_wrap").removeClass("active");
  $("body").removeClass("active");
});

$(".search_wrap").on("click", function () {
  $(this).removeClass("active");
  $("body").removeClass("active");
});

// $(document).mouseup(function (e) {
//   if ($(".search").has(e.target).length === 0) {
//     $(".search").hide();
//   }
// });

$(document).mouseup(function (e) {
  var container = $(".search");

  if (container.has(e.target).length === 0) {
    container.css("display", "none");
  }
});
