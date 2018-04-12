
/*window.onload = function(){
    //꺽쇠나 dot으로 사진 부르는 함수 실행
    showSlides(slideIndex);
    //자동 슬라이드 함수 실행
    showSlides();
}*/
var slideIndex = 0;
 autoSlides();

        function autoSlides() {
            var i;
            //사진 3개의 리스트를 slides에 대입
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            //사진 3개의 style.display 속성을 none으로 설정: 안 보이게 만든다
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(autoSlides, 2000); // Change image every 2 seconds
        }

//slide
        
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none"; 
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
            //0번 이미지를 보이도록 만듬
          slides[slideIndex-1].style.display = "block"; 
            //0번 dot의 배경색을 진한 회색으로 만듬
          dots[slideIndex-1].className += " active";
            
        }
        
       