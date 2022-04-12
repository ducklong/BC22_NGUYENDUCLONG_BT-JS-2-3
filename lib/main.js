document.getElementById("btnLogin").onclick = function () {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;
  console.log(username);
  console.log(password);
  var showIn4 = "User name la:" + username + "   <br> Pass la: " + password;
  console.log(showIn4);
  document.getElementById("footerLogin").innerHTML = showIn4;

  document.getElementById("footerLogin").classList.add("showIn4");
};

// cong 2 so

document.getElementById("btnSum").onclick = function () {
  var number1 = document.getElementById("txtNumber1").value * 1;
  var number2 = document.getElementById("txtNumber2").value * 1;
  console.log(number1, number2);

  // number1= parseInt(number1);
  // number2=parseInt(number2);
  var result = number1 + number2;
  var sum = "sum= " + result;

  console.log(sum);

  document.getElementById("notice").innerHTML = sum;

  // style inline
  // document.getElementById("notice").style.color="white";
  // document.getElementById("notice").style.backgroundColor="blue";
  // document.getElementById("notice").style.fontSize="30px";
  // document.getElementById("notice").style.textAlign="center";
  // document.getElementById("notice").style.width="450px";
  // document.getElementById("notice").style.marginTop="20px";
};
// document.getElementById("notice").className = "showInfor";
document.getElementById("notice").classList.add("showInfor");

// bongden

document.getElementById("btnOff").onclick = function () {
  document.getElementById("imgPic").src = "./image/pic_bulboff.gif";
};

document.getElementById("btnOn").onclick = function () {
  document.getElementById("imgPic").src = "./image/pic_bulbon.gif";
};
document.getElementById("disableBtnon").onclick = function () {
  document.getElementById("btnOn").disabled = true;
};
document.getElementById("enableBtnon").onclick = function () {
  document.getElementById("btnOn").disabled = false;
};

// tien tip
document.getElementById("btnCount").onclick = function () {
  var total = document.getElementById("txtTotal").value;
  var percent = document.getElementById("txtPercent").value;
  var people = document.getElementById("txtPeople").value;

  var tips = (total * percent) / 100 / people;

  // console.log(tips);
  // console.log(total);
  // console.log(percent);
  // console.log(people);
  // document.getElementById("showTips").innerHTML = tips;

  // document.getElementById("showTips").classList.add("showTips");
  var showTips1 = " <div>Moi nguoi tips: " + tips + " USD</div>";
  document.getElementById("showTips").innerHTML = showTips1;
};

// click

document.getElementById("btnCreateP").onclick = function () {
  // var tagP = "<p>Hello Cybersoft</p>";
  // document.getElementById("divContent").innerHTML = tagP;
  document.getElementById("divContent").innerHTML = "";
  var tagP = document.createElement("p");
  tagP.innerHTML = " Hello";
  document.getElementById("divContent").appendChild(tagP);
};

// cinematic
document.getElementById("btnCountmoneyleft").onclick = function () {
  var filmname = document.getElementById("txtFilmname").value;
  var priceadult = document.getElementById("txtAdult").value;
  var pricechild = document.getElementById("txtChild").value;
  var numberadult = document.getElementById("txtNumberadult").value;
  var numberchild = document.getElementById("txtNumberchild").value;
  var ticketSold = numberadult + numberchild;
  var profitbefore = priceadult * numberadult + pricechild * numberchild;
  var profitafter = (profitbefore * 10) / 100;
  var profitall = profitbefore - profitafter;

  // var profitall1 = "Total profit is : " + profitall + " USD!";
  // document.getElementById("showLeftmoney").innerHTML = "";
  // var profitlast = document.createElement("p");
  // profitlast.innerHTML=profitall1;

  // document.getElementById("showLeftmoney").appendChild(profitlast);

  var result1 = "<div class='alert alert-success'>";
  result1 += "<p> film name: " + filmname + " USD</p>";
  result1 += "<p> ticket sold: " + ticketSold + " USD</p>";
  result1 += "<p> revenue: " + profitbefore + " USD</p>";
  result1 += "<p> % charity: 10% </p>";
  result1 += "<p> charity money: " + profitafter + " USD</p>";
  result1 += "<p> profit: " + profitall + " USD </p>";

  result1 += "</div>";

  document.getElementById("showLeftmoney").innerHTML = result1;
};
// tinh luong
document.getElementById("btnCountsalary").onclick = function () {
  var days = document.getElementById("txtDaywork").value;
  const salary = 230000;
  var totalSalary = salary * days;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  var salaryVND = currentFormat.format(totalSalary);

  var salaryVND1 = "<div class='alert alert-success'>";
  salaryVND1 += "<p> Your salary is: " + salaryVND + " VND</p>";
  salaryVND1 += "</div>";
  document.getElementById("showAllsalary").innerHTML = salaryVND1;
};
// nhap so
document.getElementById("btnCountnumber").onclick = function () {
  var numberSo1 = document.getElementById("txtNumberso1").value * 1;
  var numberSo2 = document.getElementById("txtNumberso2").value * 1;
  var numberSo3 = document.getElementById("txtNumberso3").value * 1;
  var numberSo4 = document.getElementById("txtNumberso4").value * 1;
  var numberSo5 = document.getElementById("txtNumberso5").value * 1;

  var totalNumber =
    (numberSo1 + numberSo2 + numberSo3 + numberSo4 + numberSo5) / 5;
  var result2 =
    " <div class='alert alert-success'>average is : " +
    totalNumber +
    " !</div>";
  document.getElementById("showNumberall").innerHTML = result2;
};

// change money

document.getElementById("btnChange").onclick = function () {
  var moneyWant = document.getElementById("txtNumbermoney").value;
  var vNd = 23500;
  var moneyChanged = moneyWant * vNd;
  var moneyLast =
    " <div class='alert alert-success'>VND you have: " +
    moneyChanged +
    "VND!</div>";
  document.getElementById("showMoneychange").innerHTML = moneyLast;
};

// <!-- hinh hoc -->

document.getElementById("btnCaculate").onclick = function () {
  var cmLength = document.getElementById("txtlength").value * 1;
  var cmWidth = document.getElementById("txtwidth").value * 1;
  var periMeter = (cmLength + cmWidth) * 2;
  var acreage = cmLength * cmWidth;
  var resultBoth = " <div class='alert alert-success'> ";

  resultBoth += "<p> perimeter is: " + periMeter + " Cm</p>";
  resultBoth += "<p> acreage is: " + acreage + " Cm</p>";
  resultBoth += "</div>";

  document.getElementById("showResult").innerHTML = resultBoth;
};

// <!-- ký số -->

document.getElementById("btnNumber").onclick = function () {
  var random = document.getElementById("txtNumberrandom").value * 1;
  var unitNumber = random % 10;
  var tensNumber = random / 10;


  var sumRandom = unitNumber + tensNumber;

 

  var showRandom =
    " <div class='alert alert-success'>Ky so is: " + sumRandom + " !</div>";

  document.getElementById("showNumber").innerHTML = showRandom;
};
