let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");
let nextBtn2 = document.getElementById("nextbtn2");

function updateButtonStyle(activeBtn) {
    const buttons = [nextBtn, nextBtn2, backBtn];
    buttons.forEach(btn => {
        if (btn === activeBtn) {
            btn.style.width = "20px";
            btn.style.height = "20px";
            btn.src = "./images/dot.png";
        } else {
            btn.style.width = "8px";
            btn.style.height = "8px";
            btn.src = "./images/black.png";
        }
    });
}

function scrollContainerBy(offset) {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += offset;
}

function handleButtonClick(event) {
    const clickedBtn = event.target;
    if (clickedBtn === nextBtn) {
        scrollContainerBy(310);
        updateButtonStyle(nextBtn);
    } else if (clickedBtn === backBtn) {
        scrollContainerBy(-310);
        updateButtonStyle(backBtn);
    } else if (clickedBtn === nextBtn2) {
        scrollContainerBy(310);
        updateButtonStyle(nextBtn2);
    }
}

nextBtn.addEventListener("click", handleButtonClick);
backBtn.addEventListener("click", handleButtonClick);
nextBtn2.addEventListener("click", handleButtonClick);


 //handle image change
 function changeImage() {
    const newSrc = this.getAttribute('data-img-src');
    document.getElementById('mainImage').src = newSrc;
  }

  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', changeImage);
  });

var modal = document.getElementById("myModal");

var btn = document.getElementById("contactBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('formId').addEventListener('submit', function(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            alert('Form submitted successfully!');
        } else {
            alert('Form submission failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});