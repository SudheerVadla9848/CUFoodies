let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 4 seconds
}

function setRating(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = 'gold';
    } else {
      star.style.color = 'gray';
    }
  });
}

function submitReview() {
  const rating = document.querySelectorAll('.star[style="color: gold;"]').length;
  const comment = document.getElementById('comment').value;
  const author = document.getElementById('author').value;

  const reviewContainer = document.getElementById('reviews-container');
  const review = document.createElement('div');
  review.className = 'review';
  review.innerHTML = `
    <p class="rating">${'⭐'.repeat(rating)}</p>
    <p class="comment">${comment}</p>
<p class="author">- ${author}</p>`;
reviewContainer.appendChild(review);

// Clear the form fields
setRating(0);
document.getElementById('comment').value = '';
document.getElementById('author').value = '';
}

// Search Bar
let availableKeywords = [
  'CRUNCHY BITE',
  'CHEFS ON FIRE',
  'Tjs FOOD COURT',
  'The Corner Cafe',
  'X Burgers',
  'MUMMY DI ROTI',
  'SINGH BAKERS',
  'Creative Foods',
  'Chai Theka',
  'La Pinoz Pizza',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
      result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
  }
  display(result);

  if(!result.length){
      resultsBox.innerHTML = '';
  }
}

function display(result){
  const content = result.map((list)=>{
      return "<li onclick=selectInput(this)>" + list + "</li>";
  })

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}


// Scroll to top button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})


// Hamburger menu
function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon")
  document.getElementById("nav").classList.toggle("change")
}

