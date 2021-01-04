$(function () {
  const DAYS_IN_YEAR = 366;
  let currentDay = 10;
  const $progress = $(".progress-bar-progress");
  let yearPercentage;

  function setProgress() {
    yearPercentage = (currentDay / DAYS_IN_YEAR) * 100;
    $progress.animate({ width: yearPercentage + "%" });
  }
  setProgress();
  let $increamentButton = $("#increment");
  $increamentButton.click(function () {
    currentDay += 10;
    setProgress();
  });

  let $decreamentButton = $("#decrement");
  $decreamentButton.click(function (event) {
    currentDay -= 10;
    setProgress();
  });
});
