let words = ["apple", "house", "dog", "cat", "book", "water", "sun", "friend", "car", "tree"];
let trans = ["яблуко", "будинок", "собака", "кіт", "книга", "вода", "сонце", "друг", "машина", "дерево"];
let left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let cur = 0;
let step = 0;
let good = 0;
let bad = 0;

function next() {
  let r = Math.floor(Math.random() * left.length);
  cur = left[r];
  left.splice(r, 1);
  step++;
  $("#word").text(words[cur]);
  $("#step").text(step);
  $("#answer").val("");
}

function finish() {
  let level = "Низький";
  if (good >= 9) {
    level = "Високий";
  } else if (good >= 6) {
    level = "Середній";
  }
  $("#level").text(level);
  $("#result").text(good + " з " + words.length);
  $("#modal").css("display", "block");
}

$(function () {
  $("#total").text(words.length);
  next();

  $("#card").click(function () {
    let a = $("#answer").val().trim().toLowerCase();
    if (a == "" || /\d/.test(a)) {
      $("#answer").addClass("error");
      return;
    }
    $("#answer").removeClass("error");

    if (a == trans[cur]) {
      good++;
    } else {
      bad++;
    }
    $("#good").text(good);
    $("#bad").text(bad);

    if (left.length == 0) {
      finish();
    } else {
      next();
    }
  });

  $("#again").click(function () {
    location.reload();
  });
});
