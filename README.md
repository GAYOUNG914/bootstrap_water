# 제주용암수 clone coding
부트스트랩을 이용하여 제주용암수 사이트를 클론 코딩해보았습니다.

## Link
* https://gayoung914.github.io/bootstrap_water/

## Tool
* HTML5
* CSS3
* Jquery
* Bootstrap

## Skill
* Main Contents Interaction
  - **transition을 이용한 컨텐츠 나타내기**<br>
    👉 window.pageYOffset function으로 화면의 높이를 구하고, querySelector을 이용하여 선택자를 정한뒤 offsetTop function으로 높이를 구하여 화면의 높이 수치가 선택자의 높이 수치보다 클 때 opacity값을 1로 변환시켜주는 on class 를 부여하여 화면에 섹션이 interactive하게 나타나도록 구현하였습니다. transition으로 좀더 동적으로 나타내어보았습니다.
```
window.addEventListener("scroll", () => {
  let pageYOffset = window.pageYOffset + 500;
  let updatesOffsetTop = document.querySelector("#updates").offsetTop;
  
   if (pageYOffset > updatesOffsetTop) {
    document.querySelector(".content1_title").classList.add("on");
    document.querySelector(".content1_list").classList.add("on");
  } else {
    document.querySelector(".content1_title").classList.remove("on");
    document.querySelector(".content1_list").classList.remove("on");
  }
  });
```
* Main banner Interaciton
  - **반응형 Crousel 구현**<br>
    👉 부트스트랩이 모든 components에 반응형을 지원하는 것 아니었습니다. crousel도 그 중 한 요소였는데, media query를 사용하여 컨텐츠들에게 잘 녹아들 수 있게 반응형으로 구현해보았습니다.
```
@media screen and (max-width: 991px) {
  .carousel-item {
    height: 400px;
  }
  .carousel-item img {
    object-fit: contain;
    transform: scale(1.8);
  }
  .dot_wrap1,
  .dot_wrap2,
  .dot_wrap3 {
    opacity: 0;
  }

  #second {
    height: auto;
  }

  #second .sec2_bg {
    padding-top: 20px;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 500px;
  }

  .carousel-caption {
    top: 50%;
  }
}
```

## License
COPYRIGHT(C) JEJUYONGAMSOO ALL RIGHTS RESERVED

