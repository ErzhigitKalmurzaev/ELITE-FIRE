function swagger(){
  const left = document.querySelectorAll(".swagger__left");
  const right = document.querySelectorAll(".swagger__right");
  const block = document.querySelectorAll(".swagger__block");
  const image = document.querySelector(".swagger__img");
  let offset = 0;

  left.forEach((item, i) => {
    item.addEventListener("click", () => {
      if(offset + image.offsetWidth >= block[i].offsetWidth){
        offset = 0;
      }else{
        offset += image.offsetWidth;
        console.log(image.offsetWidth, block[i].offsetWidth)
      }
      block[i].style.left = -offset + "px";
    })
  })

  right.forEach((item, i) => {
    item.addEventListener("click", () => {
      if(offset + image.offsetWidth >= block[i].offsetWidth){
        offset = 0;
      }else{
        offset += image.offsetWidth;
      }
      console.log(offset)
      block[i].style.left = -offset + "px";
    })
  })

}

function slider(){
  const left = document.querySelector(".slide__left");
  const right = document.querySelector(".slide__right");
  const block = document.querySelector(".slide__block");
  const image = document.querySelector(".slide__img");
  let offset = 0;

  left.addEventListener("click", () => {
    if(offset + image.offsetWidth >= block.offsetWidth){
      offset = 0;
    }else{
      offset += image.offsetWidth;
    }
    block.style.left = -offset + "px";
  })

  right.addEventListener("click", () => {
    if(offset + image.offsetWidth >= block.offsetWidth){
      offset = 0;
    }else{
      offset += image.offsetWidth;
    }
    block.style.left = -offset + "px";
  })
}

function burger(){
  const button = document.querySelector(".header__burger");
  const modal = document.querySelector(".header__modal");
  const close = document.querySelector(".close-button")

  button.addEventListener('click', () => {
    modal.style.transform = "translateY(-150%)";
    modal.style.animation = "ani 0.3s forwards"
    modal.style.display = 'flex';
  })
  close.addEventListener('click', () => {
    modal.style.transform = "translateY(0)";
    modal.style.animation = "ani2 0.5s forwards";
  })
  
}

function range(){
  const input = document.querySelector('.range');
  input.addEventListener('input', (e) => {
    input.style.background = `linear-gradient(to right, rgba(255, 207, 122, 1) 0%, rgba(255, 207, 122, 1) ${e.target.value}%, rgba(148, 148, 148, 1) ${e.target.value}%, rgba(148, 148, 148, 1) 100%`;
  })
}

range();
burger();
slider();
swagger();

