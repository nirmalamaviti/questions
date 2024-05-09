var icons = document.querySelectorAll(".quebtn");

    icons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        var question = this.closest(".Que");
        var answer = question.querySelector(".Qtext");
        var plusIcon = this.querySelector(".plusicon");
        var minusIcon = this.querySelector(".minusicon");

        if (question.classList.contains("expanded")) {
          question.classList.remove("expanded");
          answer.style.display = "none";
          plusIcon.style.display = "inline";
          minusIcon.style.display = "none";
        } else {
          question.classList.add("expanded");
          answer.style.display = "block";
          plusIcon.style.display = "none";
          minusIcon.style.display = "inline";
        }
      });
    });


























    
// document.addEventListener("DOMContentLoaded", function () {
//     var icons = document.querySelectorAll(".quebtn");

//     icons.forEach(function (icon) {
//       icon.addEventListener("click", function () {
//         var question = this.closest(".Que");
//         var answer = question.querySelector(".Qtext");
//         var plusIcon = this.querySelector(".plusicon");
//         var minusIcon = this.querySelector(".minusicon");

//         if (question.classList.contains("expanded")) {
//           question.classList.remove("expanded");
//           answer.style.display = "none";
//           plusIcon.style.display = "inline";
//           minusIcon.style.display = "none";
//         } else {
//           question.classList.add("expanded");
//           answer.style.display = "block";
//           plusIcon.style.display = "none";
//           minusIcon.style.display = "inline";
//         }
//       });
//     });
//   });