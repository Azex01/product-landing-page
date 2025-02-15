function playVid(){
    let video =document.getElementById("video");
    let icon = document.getElementById("icon");
    if(video.paused){
        video.play();
        icon.classList.remove("fa-video");
        icon.classList.add("fa-pause");
        
    }
    else{
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-video");
    }
}

let fullYear=document.getElementById("fullyear");
fullYear.innerHTML=new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()