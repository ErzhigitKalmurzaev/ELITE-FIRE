function swagger(){
  const left = document.querySelectorAll(".swagger__left");
  const right = document.querySelectorAll(".swagger__right");

  left.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentNode.parentNode.querySelectorAll(".swagger__img").forEach(item => {
        if(item.classList.length > 1){
          item.classList.remove('active');
        }else{
          item.classList.add('active');
        }
      })
    })
  })
  right.forEach(item=> {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentNode.parentNode.querySelectorAll(".swagger__img").forEach(item => {
        if(item.classList.length > 1){
          item.classList.remove('active');
        }else{
          item.classList.add('active');
        }
      })
    })
  })
}

swagger();