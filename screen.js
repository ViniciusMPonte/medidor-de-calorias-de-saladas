const screen = {

    setIngrGridLayout() {
        let ingredientsGrid = document.querySelector("#container-ingredients").classList;
    
        switch (ingredientsGrid.value) {
            case "":
                ingredientsGrid.add("s1-container-layout");
                break;
    
            case "s1-container-layout":
                ingredientsGrid.remove("s1-container-layout");
                ingredientsGrid.add("s2-container-layout");
                break;
    
            case "s2-container-layout":
                ingredientsGrid.remove("s2-container-layout");
                ingredientsGrid.add("s1-container-layout");
                break;
    
        }
    },
    
    showSection1Ingr(array) {

        for (const obj of array) {

            let img = obj.img;
            let name = obj.nome;

            let htmlText = `
            <div class="ingredient-section-1">
                <div class="ingredient-tag">
                    <img src="/img/${img}" alt="">
                    <p class="ingredient-name">${name}</p>
                </div>
                <div class="selector"></div>
            </div>
            `

            document.querySelector("#container-ingredients").innerHTML += htmlText;
        }

    },

    showSection2Ingr(array) {

        for (const obj of array) {

            let img = obj.img;
            let name = obj.nome;

            let carbohydrates = obj.nutritionalInfo.carboidratos;
            let proteins = obj.nutritionalInfo.proteinas;
            let fats = obj.nutritionalInfo.gorduras;
            let portion = obj.nutritionalInfo.porcao;
            let unit = obj.nutritionalInfo.unidadeDeMedida;
            unit = unit.slice(0, 1)

            let htmlText = `
            <div class="ingredient-section-2">

                <div class="ingredient-tag">
                    <img src="/img/${img}" alt="">
                    <p class="ingredient-name">${name}</p>
                </div>

                <div class="nutritional-info">
                    <div>
                        <div class="serving-size">
                            <p>Porção:</p><textarea name="" id="" cols="5" rows="1">${portion}</textarea><p>${unit}</p>
                        </div> 
                        <div class="proportional-values">
                            <div><p>Carboidratos:  <span>${carbohydrates} ${unit}</span></p></div>
                            <div><p>Proteinas:  <span>${proteins} ${unit}</span></p></div>
                            <div><p>Gorduras:  <span>${fats} ${unit}</span></p></div>
                        </div>  
                    </div>
                </div>
            </div>


            `

            document.querySelector("#container-ingredients").innerHTML += htmlText;
        }



    },

    clear() {
        document.querySelector("#container-ingredients").innerHTML = "";
    },

    showNewNutriValues(target, newNutriValues) {
        let { newCarbohydrates, newProteins, newFat, newCalories, unit } = newNutriValues;
        unit = unit.slice(0, 1);

        let htmlText = `
            <div><p>Carboidratos:  </p><span>${newCarbohydrates} ${unit}</span></div>
            <div><p>Proteinas:  </p><span>${newProteins} ${unit}</span></div>
            <div><p>Gorduras:  </p><span>${newFat} ${unit}</span></div>
            <div><p>Calorias:  </p><span>${newCalories} Cal</span></div>
        `;

        if (target.classList.value.includes("nutritional-info")) {
            target.querySelector(".proportional-values").innerHTML = htmlText;
        } else {
            target.closest(".ingredient-section-2").querySelector(".nutritional-info").querySelector(".proportional-values").innerHTML = htmlText;
        }
    },

    showCaloriesResult(result) {

        let htmlText = `<p><strong>Total de calorias:</strong></p><p>${result} Cal</p>`;
        let target = document.querySelector("#calories-result");

        target.innerHTML = htmlText;
        target.classList.remove("hidden");

    }
}

export default screen;