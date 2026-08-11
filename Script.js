function openCard() {
  const envelope = document.getElementById("envelope");
  const envelopePage = document.getElementById("envelopePage");
  const cardPage = document.getElementById("cardPage");
  const music = document.getElementById("music");

  // باز شدن پاکت
  envelope.classList.add("open");

  // تلاش برای شروع موسیقی بعد از لمس کاربر
  if (music) {
    music.play().catch(function () {});
  }

  // بعد از باز شدن پاکت، کارت ظاهر شود
  setTimeout(function () {
    envelopePage.style.opacity = "0";
    envelopePage.style.pointerEvents = "none";

    cardPage.classList.add("show");
  }, 700);
}


function toggleMusic() {
  const music = document.getElementById("music");

  if (!music) {
    return;
  }

  if (music.paused) {

    music.play().catch(function () {
      alert("فایل موسیقی هنوز به کارت اضافه نشده است.");
    });

  } else {

    music.pause();

  }
}
