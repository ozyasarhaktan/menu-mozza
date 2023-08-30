function fetchCoffeeByJson() {
  fetch("./data/kahve.json")
    .then((response) => response.json())
    .then((coffees) => {
      coffees.forEach((coffee) => {
        var kahve = document.getElementById("kahve-baslik");
        var context = `
        <tbody>
          <tr style="font-size: 1.1rem">
            <div class= "my-3">
                <td class="col-md-10 col-sm-8">${coffee.ad}</td>
                <td class="col-md-1 col-sm-2">${coffee.sicakFiyat} ₺</td>
                <td class="col-md-1 col-sm-2">${
                  coffee.sogukFiyat == "-" ? " " : coffee.sogukFiyat + "₺"
                }</td>
            </div>
          </tr>
        </tbody>  `;

        kahve.innerHTML += context;
      });
    })
    .catch((err) => console.log(err));
}

function fetchTeeByJson() {
  fetch("../data/cay.json")
    .then((response) => response.json())
    .then((tees) => {
      tees.forEach((tee) => {
        var cay = document.getElementById("cay-baslik");
        var context = `
      <tbody>
        <tr class="fs-5">
          <div class= "my-3">
              <td class="col-md-10 col-sm-8">${tee.ad}</td>
              <td class="col-md-1 col-sm-2">${tee.sicakFiyat} ₺</td>
              <td class="col-md-1 col-sm-2">${
                tee.sogukFiyat == "-" ? " " : tee.sogukFiyat + "₺"
              }</td>
          </div>
        </tr>
      </tbody>  `;

        cay.innerHTML += context;
      });
    })
    .catch((err) => console.log(err));
}

function fetchBubbleTeaByJson() {
  fetch("../data/bubble-tea.json")
    .then((response) => response.json())
    .then((bubbleTeas) => {
      bubbleTeas.forEach((bubbleTea) => {
        var bubble_tea = document.getElementById("bubble-tea-baslik");
        var context = `
      <tbody>
      <tr class="fs-5">
      <div class= "my-3">
        <td class="col-md-11 col-sm-9">${bubbleTea.ad}</td>
        <td class="col-md-1 col-sm-3 text-center">${bubbleTea.fiyat} ₺</td>
      </div>
    </tr>
      </tbody>  `;

        bubble_tea.innerHTML += context;
      });
    })
    .catch((err) => console.log(err));
}

function fetchMilkshakeByJson() {
  fetch("../data/milkshake.json")
    .then((response) => response.json())
    .then((milkshakes) => {
      milkshakes.forEach((milkshake) => {
        var milk_shake = document.getElementById("milkshake-baslik");
        var context = `
      <tbody>
      <tr class="fs-5">
      <div class= "my-3">
        <td class="col-md-11 col-sm-9">${milkshake.ad}</td>
        <td class="col-md-1 col-sm-3 text-center">${milkshake.fiyat} ₺</td>
      </div>
    </tr>
      </tbody>  `;

        milk_shake.innerHTML += context;
      });
    })
    .catch((err) => console.log(err));
}

function fetchFrozenByJson() {
  fetch("../data/frozen.json")
    .then((response) => response.json())
    .then((frozens) => {
      frozens.forEach((frozen) => {
        var frozen_yeri = document.getElementById("frozen-baslik");
        var context = `
      <tbody>
      <tr class="fs-5">
      <div class= "my-3">
        <td class="col-md-11 col-sm-9">${frozen.ad}</td>
        <td class="col-md-1 col-sm-3 text-center">${frozen.fiyat} ₺</td>
      </div>
    </tr>
      </tbody>  `;

        frozen_yeri.innerHTML += context;
      });
    });
}

function fetchTurkishCoffeeByJson() {
  fetch("../data/turkish-coffee.json")
    .then((response) => response.json())
    .then((turkishCoffees) => {
      turkishCoffees.forEach((turkishCoffee) => {
        var TurkKahvesi = document.getElementById("turkish-coffee-baslik");
        var context = `
      <tbody>
        <tr class="fs-5">
          <div class= "my-3">
            <td class="col-md-11 col-sm-9">${turkishCoffee.ad}</td>
            <td class="col-md-1 col-sm-3 text-end">${turkishCoffee.fiyat} ₺</td>
          </div>
        </tr>
      </tbody>  `;

        TurkKahvesi.innerHTML += context;
      });
    });
}

function fetchOtherDrinkByJson() {
  fetch("../data/other.json")
    .then((response) => response.json())
    .then((others) => {
      others.forEach((other) => {
        var digerİcecekler = document.getElementById("other-baslik");
        var context = `
      <tbody>
        <tr class="fs-5">
          <div class= "my-3">
            <td class="col-md-11 col-sm-9">${other.ad}</td>
            <td class="col-md-1 col-sm-3 text-end">${other.fiyat} ₺</td>
          </div>
        </tr>
      </tbody>  `;

        digerİcecekler.innerHTML += context;
      });
    });
}

function fetchBakeryByJson() {
  fetch("../data/bakery.json")
    .then((response) => response.json())
    .then((bakerys) => {
      bakerys.forEach((bakery) => {
        var firin = document.getElementById("bakery-baslik");
        var context = `
      <tbody>
        <tr class="fs-5">
          <div class= "my-3">
              <td class="col-md-11 col-sm-9">${bakery.ad}</td>
              <td class="col-md-1 col-sm-3 text-center">${bakery.fiyat} ₺</td>
          </div>
        </tr>
      </tbody>  `;

        firin.innerHTML += context;
      });
    });
}

function fetchEkstraByJson() {
  fetch("./data/ekstra.json")
    .then((response) => response.json())
    .then((ekstras) => {
      ekstras.forEach((ekstra) => {
        var ekstra_yeri = document.getElementById("ekstra-baslik");
        var context = `
        <tbody>
          <tr class="fs-5">
            <div class= "my-3">
                <td class="col-md-11 col-sm-9">${ekstra.ad}</td>
                <td class="col-md-1 col-sm-3 text-end">${ekstra.fiyat} ₺</td>
            </div>
          </tr>
        </tbody>  `;

        ekstra_yeri.innerHTML += context;
      });
    });
}

//  PROMİSE DENEME
/* let sayiKontrol = (number) => {
  return new Promise((resolve, reject) => {
     if (number <= 5) {
       resolve(number);
     }else {
        reject("Sayı 5'ten büyük olamaz");
     }
  })
}

sayiKontrol(4).then((data) => {
  console.log(data);
}).then((data2) => {
  console.log(data2);
}).catch((err) => {
  console.log(err);
}) */

document.addEventListener("DOMContentLoaded", () => {
  fetchCoffeeByJson();
  fetchTeeByJson();
  fetchBubbleTeaByJson();
  fetchMilkshakeByJson();
  fetchFrozenByJson();
  fetchTurkishCoffeeByJson();
  fetchOtherDrinkByJson();
  fetchBakeryByJson();
  fetchEkstraByJson();

  var splide = new Splide(".splide", {
    flickMaxPages: (number = 1),
    flickPower: (number = 200),
    wheel: true,
    releaseWheel: true,
    perPage: 6,
    perMove: 1,
    gap: 10,
    pagination: false,
    isNavigation: false,
    arrows: true,
    breakpoints: {
      600: {
        perPage: 4,
        perMove: 4,
      },
    },
  });

  splide.mount();
});

// let map;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: 38.4387131, lng: 27.1419318},
//     zoom: 8,
//   });
// }

// initMap();

const btn = document.getElementById("myBtn");

 const myPopup = document.getElementById("myPopup");
const closePopup = document.getElementById("closePopup");
 btn.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});