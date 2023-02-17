/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklalapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const outputDiv = document.getElementById("output");

fetch("cars.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].brand);
      console.log(data[i].models);
      const carCard = document.createElement("div");
      carCard.classList.add("car-card");
      outputDiv.append(carCard);

      const carBrand = document.createElement("p");
      carBrand.classList.add("car-brand");
      carBrand.innerText = "Car brand: " + data[i].brand;
      carCard.append(carBrand);

      const brandModels = document.createElement("p");
      brandModels.classList.add("brand-models");
      brandModels.innerText = "Models: " + data[i].models.join(", ");
      carCard.append(brandModels);
    }
  });
