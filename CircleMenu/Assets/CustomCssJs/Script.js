"use strict";

let StateMenuOne = true;
let SectionCircleSubsidiaryOneOne = document.querySelector(
  ".section_circle_subsidiary_one_one"
);
let SectionCircleSubsidiaryTwoOne = document.querySelector(
  ".section_circle_subsidiary_two_one"
);
let SectionCircleSubsidiaryThreeOne = document.querySelector(
  ".section_circle_subsidiary_three_one"
);
let SectionCircleSubsidiaryFourOne = document.querySelector(
  ".section_circle_subsidiary_four_one"
);
let SectionCircleSubsidiaryFiveOne = document.querySelector(
  ".section_circle_subsidiary_five_one"
);

document
  .querySelector(".section_circle_main_one")
  .addEventListener("click", () => {
    if (StateMenuOne) {
      SectionCircleSubsidiaryOneOne.style.bottom = "25px";
      SectionCircleSubsidiaryOneOne.style.left = "25px";

      SectionCircleSubsidiaryTwoOne.style.bottom = "100px";
      SectionCircleSubsidiaryTwoOne.style.left = "50px";

      SectionCircleSubsidiaryThreeOne.style.bottom = "130px";
      SectionCircleSubsidiaryThreeOne.style.left = "125px";

      SectionCircleSubsidiaryFourOne.style.bottom = "100px";
      SectionCircleSubsidiaryFourOne.style.left = "200px";

      SectionCircleSubsidiaryFiveOne.style.bottom = "25px";
      SectionCircleSubsidiaryFiveOne.style.left = "225px";
      StateMenuOne = false;
    } else {
      SectionCircleSubsidiaryOneOne.style.bottom = "20px";
      SectionCircleSubsidiaryOneOne.style.left = "63%";

      SectionCircleSubsidiaryTwoOne.style.bottom = "20px";
      SectionCircleSubsidiaryTwoOne.style.left = "63%";

      SectionCircleSubsidiaryThreeOne.style.bottom = "20px";
      SectionCircleSubsidiaryThreeOne.style.left = "63%";

      SectionCircleSubsidiaryFourOne.style.bottom = "20px";
      SectionCircleSubsidiaryFourOne.style.left = "63%";

      SectionCircleSubsidiaryFiveOne.style.bottom = "20px";
      SectionCircleSubsidiaryFiveOne.style.left = "63%";
      StateMenuOne = true;
    }
  });

let StateMenuTwo = true;
let SectionCircleSubsidiaryOneTwo = document.querySelector(
  ".section_circle_subsidiary_one_two"
);
let SectionCircleSubsidiaryTwoTwo = document.querySelector(
  ".section_circle_subsidiary_two_two"
);
let SectionCircleSubsidiaryThreeTwo = document.querySelector(
  ".section_circle_subsidiary_three_two"
);
let SectionCircleSubsidiaryFourTwo = document.querySelector(
  ".section_circle_subsidiary_four_two"
);
let SectionCircleSubsidiaryFiveTwo = document.querySelector(
  ".section_circle_subsidiary_five_two"
);

document
  .querySelector(".section_circle_main_two")
  .addEventListener("click", () => {
    if (StateMenuTwo) {
      SectionCircleSubsidiaryOneTwo.style.bottom = "25px";
      SectionCircleSubsidiaryOneTwo.style.left = "25px";

      SectionCircleSubsidiaryTwoTwo.style.bottom = "100px";
      SectionCircleSubsidiaryTwoTwo.style.left = "50px";

      SectionCircleSubsidiaryThreeTwo.style.bottom = "130px";
      SectionCircleSubsidiaryThreeTwo.style.left = "125px";

      SectionCircleSubsidiaryFourTwo.style.bottom = "100px";
      SectionCircleSubsidiaryFourTwo.style.left = "200px";

      SectionCircleSubsidiaryFiveTwo.style.bottom = "25px";
      SectionCircleSubsidiaryFiveTwo.style.left = "225px";
      StateMenuTwo = false;
    } else {
      SectionCircleSubsidiaryOneTwo.style.bottom = "20px";
      SectionCircleSubsidiaryOneTwo.style.left = "63%";

      SectionCircleSubsidiaryTwoTwo.style.bottom = "20px";
      SectionCircleSubsidiaryTwoTwo.style.left = "63%";

      SectionCircleSubsidiaryThreeTwo.style.bottom = "20px";
      SectionCircleSubsidiaryThreeTwo.style.left = "63%";

      SectionCircleSubsidiaryFourTwo.style.bottom = "20px";
      SectionCircleSubsidiaryFourTwo.style.left = "63%";

      SectionCircleSubsidiaryFiveTwo.style.bottom = "20px";
      SectionCircleSubsidiaryFiveTwo.style.left = "63%";
      StateMenuTwo = true;
    }
  });
