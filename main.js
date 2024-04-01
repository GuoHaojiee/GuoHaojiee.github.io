
let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "你好.jpg") {
      myImage.setAttribute("src", "哭了.jpg");
    } else {
      myImage.setAttribute("src", "你好.jpg");
    }
};
  
let myText = document.getElementById('Text');
myText.onclick = function () {
    myText.innerText = "你还真是敢点，有种继续";
    myText.onclick = function () {
        myText.innerText = "怎么说 別再点了";
        myText.onclick = function () {
            myText.innerText = "好吧 告诉你实话";
        };
    };
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "太帅了，" + myName;

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "帅炸了，" + storedName;
    }

}
  
myButton.onclick = function () {
    setUserName();
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
};
  
  