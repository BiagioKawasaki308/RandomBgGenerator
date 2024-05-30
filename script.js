const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
    "#303F50",
    "#384A5E",
    "#303030",
    "#656B6B",
    "#4E245A",
    "#334F4F",
    "#124C5A",
    "#3A4650",
    "#303F50",
    "#840084",
    "#346057",
    "#3C6B65",
    "#346434",
    "#696F6F",
    "#4E6B66",
    "#335F5F",
    "#12675A",
    "#3A6B50",
    "#346057",
    "#844E84",
    "#3A7373",
    "#427E81",
    "#3A703A",
    "#6E7373",
    "#4E6B66",
    "#336B66",
    "#12705A",
    "#3A7350",
    "#346057",
    "#848384",
    "#3C8373",
    "#448E81",
    "#3C703C",
    "#6E7373",
    "#4E6B66",
    "#336B66",
    "#12825A",
    "#3A8350",
    "#346057",
    "#848684"
];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random());
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;