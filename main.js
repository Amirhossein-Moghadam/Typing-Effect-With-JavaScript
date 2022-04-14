document.getElementById("test-typing").addEventListener("click", writeText);
document.getElementById("test-erasing").addEventListener("click", eraseText);

function writeText() {
  var textValue = document.getElementById("user-caption").value;
  var caption = document.getElementById("caption");

  if (textValue === "") {
    textValue = "typing test!";
  }

  var res = "";
  var text = [...textValue].map((i) => {
    res += i;
    return res;
  });

  var counter = 0;

  // setTimeout(() => {
  var interval = setInterval(() => {
    caption.textContent = "";
    var text2 = document.createTextNode(text[counter]);
    caption.appendChild(text2);
    counter++;
    if (counter === text.length) {
      clearInterval(interval);
    }
  }, 30);
  // }, 30);
}

function eraseText() {
  var textValue = document.getElementById("user-caption").value;
  var caption = document.getElementById("caption");

  if (textValue === "") {
    textValue = "erasing test!";
    caption.textContent = textValue;
  }

  var res = "";
  var text = [...textValue].map((i) => {
    res += i;
    return res;
  });

  var counter = 0;

  text.unshift("");
  text = text.reverse();

  // setTimeout(() => {
  var interval = setInterval(() => {
    caption.textContent = "";
    var text2 = document.createTextNode(text[counter]);
    caption.appendChild(text2);
    counter++;
    if (counter === text.length) {
      clearInterval(interval);
    }
  }, 30);
  // }, 30);
}
