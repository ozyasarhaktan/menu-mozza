let click = 0;
// Accordion butonlarını seçin
const accordionButtons = document.querySelectorAll('.accordion-button');
// Her butona tıklanıldığında gerçekleşecek olayları tanımlayın
accordionButtons.forEach(button => {
  button.addEventListener('click', function() {
    // click++;
    // this.style.height = "15rem";
    // Butonun altındaki accordion-collapse divini bulun
    const accordionCollapse = this.nextElementSibling;
    console.log(accordionCollapse.previousElementSibling.classList);

    // Diğer tüm accordion-collapse bölümlerini kapatın
    accordionButtons.forEach(otherButton => {
      if (otherButton !== this) {
        const otherCollapse = otherButton.nextElementSibling;
    otherCollapse.classList.remove('show');
    otherCollapse.previousElementSibling.style.height = "9rem";
      }
    });
//     if(click % 2 == 0){
//       // accordionCollapse.classList.remove('show');
//       if(this.style.height = "15rem")
//       this.style.height = "9rem";
//       else
//       this.style.height = "15rem";
// }
    // Tıklanan butonun accordion-collapse bölümünü açın veya kapatın
/*     if (accordionCollapse.classList.contains('show')) {
      accordionCollapse.classList.remove('show');
    } else {
      accordionCollapse.classList.add('show');
    }  */
 
  });
});

const tumEkran = document.querySelectorAll("#tum-ekran");
tumEkran.forEach((element) => { element.style.display = "none"; });

window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const logo = document.querySelector(".logo");
  logo.animate(
    [
      // keyframes
      { transform: "rotate(0deg)" },
      { transform: "rotate(360deg)" },
    ],
    {
      // timing options
      duration: 2000,
      iterations: 1,
    }
  );
  
  setTimeout(() => {
    // body.style.backgroundColor = "white";
    loadingScreen.style.display = "none";
     tumEkran.forEach((element) => { element.style.display = "block"; });
    
  }, 2000);
});
loadingScreen.style.display = "none";
