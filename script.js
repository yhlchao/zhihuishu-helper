(function () {
  const delay = 5 * 1000;
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

  const start = async function () {
    console.log("智慧树助手已启动");

    while (true) {
      if (!$(".speedBox").find("span").text().match(/1\.5/)) {
        console.log("提升到1.5倍速");
        $(".speedTab15").click();
      }

      if ($(".definiBox").find("span").text() !== "流畅") {
        console.log("更改画质");
        $(".line1bq").click();
      }

      if ($(".volumeBox").find(".passVolume").height() != 0) {
        console.log("静音");
        $(".volumeIcon").click();
      }

      if ($(".playButton").length) {
        console.log("点击播放");
        $(".playButton").click();
      }

      if ($(".dialog-test").length) {
        console.log("发现弹题");
        $(".dialog-test").find(".topic-item")[0].click();
        $(".dialog-test").find(".btn").click();
      }

      if ($(".current_play").find(".time_icofinish").length) {
        console.log("本节完成，" + delay / 1000 + " 秒后将切到下一课");
        await sleep(delay);
        $(".controlsBar").find(".nextButton").click();
      }

      await sleep(1000);
    }
  };

  start();
})();
