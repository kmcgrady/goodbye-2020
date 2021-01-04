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

  //   let $increamentButton = $("#increment");
  //   $increamentButton.click(function () {
  //     currentDay += 10;
  //     setProgress();
  //   });

  //   let $decreamentButton = $("#decrement");
  //   $decreamentButton.click(function (event) {
  //     currentDay -= 10;
  //     setProgress();
  //   });

  //   $decreamentButton.off();

  let $pageWrapper = $("#page-wrapper");
  $pageWrapper.on("click", "button", function (event) {
    if (event.target.id === "increment") {
      currentDay += 1;
    } else if (event.target.id === "decrement") {
      currentDay -= 1;
    }
    setProgress();
  });

  let interval;
  let count;

  $("#initiateCountdown").click(function () {
    count = 10;
    $("#countdown").text(count);
    interval = setInterval(function () {
      count -= 1;
      if (count === 0) {
        $("#countdown").text("Happy New Year!");
        clearInterval(interval);
      } else {
        $("#countdown").text(count);
      }
    }, 1000);
  });
});
