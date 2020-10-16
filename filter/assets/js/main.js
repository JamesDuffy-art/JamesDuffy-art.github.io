$(document).ready(function () {
  console.log("hello world");

  $(".btn-box").click(function () {
    $(".box").addClass("active");
  });

  $(".btn-slide").click(function () {
    $(".slide").toggleClass("active");
  });

  $(".box").click(function () {
    $(this).toggleClass("active");
  });

  $(".btn-hor").click(function () {
    $(".item").addClass("hide");
    $(".item.hor").removeClass("hide");
  });

  $(".btn-sup").click(function () {
    $(".item").addClass("hide");
    $(".item.sup").removeClass("hide");
  });

  $(".btn-ama").click(function () {
    $(".item").addClass("hide");
    $(".item.ama").removeClass("hide");
  });

  $(".btn-prop").click(function () {
    $(".item").addClass("hide");
    $(".item.prop").removeClass("hide");
  });

  $(".btn-pat").click(function () {
    $(".item").addClass("hide");
    $(".item.pat").removeClass("hide");
    console.log("pat");
  });

  $(".btn-reset").click(function () {
    $(".item").removeClass("hide");
    console.log("reset");
  });
});