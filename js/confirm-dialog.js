// Функция для установки cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Функция для получения значения cookie по имени
function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}

// Проверяем, был ли уже ответ сохранен в cookie
var ageConfirmationCookie = getCookie("ageConfirmation");
if (ageConfirmationCookie === "yes") {
  // Показываем контент, так как пользователь ответил "Да" ранее
  document.getElementById("only-after-18").style.display = "block";
} else {
  // Показываем диалоговое окно, если ответ не был сохранен или был "Нет"
  document.getElementById("ageConfirmation").style.display = "flex";
  // Скрываем контент
  document.getElementById("only-after-18").style.display = "none";
}

// Обработчики нажатия на кнопки "Да" и "Нет"
document.getElementById("yesButton").addEventListener("click", function() {
  // Сохраняем ответ в cookie
  setCookie("ageConfirmation", "yes", 365); // Сохраняем на 365 дней
  // Показываем контент
  document.getElementById("only-after-18").style.display = "block";
  // Скрываем диалоговое окно
  document.getElementById("ageConfirmation").style.display = "none";
});

document.getElementById("noButton").addEventListener("click", function() {
  // Сохраняем ответ в cookie
  setCookie("ageConfirmation", "no", 365); // Сохраняем на 365 дней
  // Скрываем контент
  document.getElementById("only-after-18").style.display = "none";
  // Скрываем диалоговое окно
  document.getElementById("ageConfirmation").style.display = "none";
});
