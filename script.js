/*side bar
document.querySelector(".sidebar-menu1 .toggle-btn")
.addEventListener("click", function(){
  document.querySelector(".sidebar-menu1")
  .classList.toggle("active")
});

document.querySelectorAll(".sidebar-menu1 .sidebar1 .links1 .link1 a")
.forEach(function(link1){
link1.addEventListener("click",function(e){
  if(e.target.parentNode.children.length > 1) {
    e.target.parentNode.classList.toggle("active");
  }
})
});
this code was causing the next and previous button not to work*/

/*side bar end*/

$(document).ready(function(){

    $(window).scroll(function(){
  
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
                }
  
          // Scrolling Button Btn
          if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show");
            }else{
            $('.scroll-up-btn').removeClass("show");
            }   
    });
  
    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
  
    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop:true,
        navigation:true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
  
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
  
  
  });
  //Button to scroll to the top of page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // 'js/mian.js'
  
  
  const review = [
    {   id: 1,
        img:
        "Media/houstonfoodratingwhole.png"
    },
    {   id: 2,
        img:
        "Media/5highrateandrating.png"
    },
    {   id: 3,
        img:
        "Media/cheapest5food.png"
    }
    ];
    
    //selector
    const img = document.getElementById("person");
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    
    //set starting item
    let currentItem = 0;
    
    //load intial item
    window.addEventListener('DOMContentLoaded', function() {
        showPerson(currentItem);
    });
    
    //show person based on item
    
    function showPerson(person){
        const item = review[person];
        img.src = item.img;
    }
    
    //show next person
    
    nextBtn.addEventListener('click', function() {
        currentItem++;
        if(currentItem > review.length - 1){
            currentItem = 0;
        }
        showPerson(currentItem);
    });
    prevBtn.addEventListener('click', function() {
        currentItem--;
        if(currentItem < 0){
            currentItem = review.length -1;
        }
        showPerson(currentItem);
    });
    
    // Second Image Slider
  const review2 = [
      {
          id: 1,
          img: "Media/flourshracelvl.png",
        },
      {
        id: 2,
        img: "Media/yeardepresslvl.png",
      },
      {
        id: 3,
        img: "Media/topfivestateANX.png",
      },
      {
        id: 4,
        img: "Media/AgeComANXdepr.png",
      }
    ];
  //Image-counter 1
  
  const img3 = document.getElementById("person");
  const prevBtn1 = document.querySelector("#slider1 .prev-btn");
  const nextBtn1 = document.querySelector("#slider1 .next-btn");
  const imageNumber1 = document.querySelector(".image-number1"); // Get the element to display the image number
  
  let currentItem1 = 0;
  
  window.addEventListener('DOMContentLoaded', function() {
    showPerson1(currentItem1);
  });
  
  function showPerson1(person) {
    const item = review[person];
    img3.src = item.img;
    imageNumber1.textContent = `${person + 1} of ${review.length}`; // Update the image number
  }
  
  nextBtn1.addEventListener('click', function() {
    currentItem1++;
    if (currentItem1 > review.length - 1) {
      currentItem1 = 0;
    }
    showPerson1(currentItem1);
  });
  
  prevBtn1.addEventListener('click', function() {
    currentItem1--;
    if (currentItem1 < 0) {
      currentItem1 = review.length - 1;
    }
    showPerson1(currentItem1);
  });
  
  //Image-counter 2
  const img2 = document.getElementById("person2");
  const prevBtn2 = document.querySelector("#slider2 .prev-btn");
  const nextBtn2 = document.querySelector("#slider2 .next-btn");
  const imageNumber = document.querySelector(".image-number"); // Get the element to display the image number
  
  let currentItem2 = 0;
  
  window.addEventListener('DOMContentLoaded', function() {
    showPerson2(currentItem2);
  });
  
  function showPerson2(person) {
    const item = review2[person];
    img2.src = item.img;
    imageNumber.textContent = `${person + 1} of ${review2.length}`; // Update the image number
  }
  
  nextBtn2.addEventListener('click', function() {
    currentItem2++;
    if (currentItem2 > review2.length - 1) {
      currentItem2 = 0;
    }
    showPerson2(currentItem2);
  });
  
  prevBtn2.addEventListener('click', function() {
    currentItem2--;
    if (currentItem2 < 0) {
      currentItem2 = review2.length - 1;
    }
    showPerson2(currentItem2);
  });
  
    // Get all the "View Query" links
    const viewQueryLinks = document.querySelectorAll('.view-query');
  
    // Attach click event listener to each link
    viewQueryLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
  
        // Get the parent div of the link (the entire question)
        const questionDiv = link.parentElement;
  
        // Get the <dd> element (the query text)
        const queryText = questionDiv.querySelector('p');
  
        // Toggle the display of the query text
        if (queryText.style.display === 'none') {
          queryText.style.display = 'block';
        } else {
          queryText.style.display = 'none';
        }
      });
    });