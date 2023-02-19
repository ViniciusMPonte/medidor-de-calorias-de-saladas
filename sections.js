import screen from "./screen.js";
import input from "./input.js";
import dataTools from "./dataTools.js";
import mathTools from "./mathTools.js";
import ingredientes from "./ingredients.js";


var section1Ingredients;
var section2Ingredients;

var htmlSection1;

var startFns = {

    prepareDatabase() {
        section1Ingredients = [...ingredientes];
        dataTools.sortObjects(section1Ingredients, "nome");
        dataTools.upFirstLetter(section1Ingredients, "nome");
    },

    loadScreen() {
        screen.showSection1Ingr(section1Ingredients);
        screen.setIngrGridLayout();
    },

    addInitialInputs() {
        input.addEvListenerOnBtn(".ingredient-section-1", input.selectIngredient);
        sections.setChangeSectionBtnEvListener("start");
    }

}

var section1Fns = {

    reloadSection1() {
        screen.clear();
        screen.setIngrGridLayout();
        document.querySelector("#container-ingredients").innerHTML = htmlSection1;
    },

    hiddenCaloriesResult() {
        document.querySelector("#calories-result").classList.add("hidden");
    },

    addInputsSection1() {
        input.addEvListenerOnBtn(".ingredient-section-1", input.selectIngredient);
        sections.setChangeSectionBtnEvListener("continue");
    }

}

var section2Fns = {

    getSelectIngredientsSection1() {
        let selectedIngrNames = dataTools.createSelectedIngArray();
        return dataTools.filterObjs(section1Ingredients, selectedIngrNames);
    },

    changeS1ToS2(selectedIngredients) {
        htmlSection1 = document.querySelector("#container-ingredients").innerHTML;
        screen.clear();
        screen.setIngrGridLayout();
        screen.showSection2Ingr(selectedIngredients);
    },

    updateSection2Ingredients(selectedIngredients) {
        selectedIngredients = this.updateNutriInfo();
        if (!Array.isArray(selectedIngredients)) { selectedIngredients = [selectedIngredients]; };
        section2Ingredients = dataTools.updateArrayOfObjs(section2Ingredients, selectedIngredients);
    },

    updateSection2Screen() {
        this.updateDataScreenSection2();
        this.updateSumAllCal();
    },

    addInputsSection2() {
        input.addEvListenerOnTextarea(".nutritional-info textarea", input.filterMeasureTextarea);
        input.addEvListenerOnTextarea(".nutritional-info textarea", (textarea) => {
            let updatedObj = this.updateNutriInfo(textarea);

            let indexToReplace = section2Ingredients.findIndex(obj => obj.nome === updatedObj.nome);
            section2Ingredients.splice(indexToReplace, 1, updatedObj);

            screen.showNewNutriValues(textarea, updatedObj.newNutriValues);
            this.updateSumAllCal();
        });

        sections.setChangeSectionBtnEvListener("back");
    },

    updateNutriInfo(textarea) {

        let textareaAll;
        let resultArray = [];

        if (textarea) {
            if (Array.isArray(textarea)) {
                textareaAll = textarea;
            } else {
                textareaAll = [textarea];
            }
        } else {
            textareaAll = document.querySelectorAll(".nutritional-info textarea");
        }

        for (let i = 0; i < textareaAll.length; i++) {

            let newServingSize = Number(textareaAll[i].value);

            let ingredientName = textareaAll[i].closest(".ingredient-section-2").querySelector(".ingredient-name").innerHTML;
            let ingredientObj = { ...dataTools.filterObjs(section1Ingredients, [ingredientName])[0] };
            let newNutriValues = mathTools.calculateNewNutriValues(ingredientObj, newServingSize);

            ingredientObj.newNutriValues = { ...newNutriValues };
            resultArray.push(ingredientObj);

        }

        if (resultArray.length === 1) {
            return resultArray[0];
        } else {
            return resultArray;
        }
    },

    updateSumAllCal() {
        let allCalories = dataTools.extractProperty(section2Ingredients, "newNutriValues.newCalories");
        let allCaloriesAddedUp = Number(allCalories.reduce((acc, current) => acc + current).toFixed(2));
        screen.showCaloriesResult(allCaloriesAddedUp);
    },

    reloadServingSize() {
        let textareaAll = document.querySelectorAll(".nutritional-info textarea");

        for (const textarea of textareaAll) {
            let ingredientName = textarea.closest(".ingredient-section-2").querySelector(".ingredient-name").innerHTML;
            let ingredientObj = dataTools.filterObjs(section2Ingredients, [ingredientName])[0];

            textarea.innerHTML = ingredientObj.newNutriValues.newServingSize;
        }
    },

    updateDataScreenSection2() {
        let targets = document.querySelectorAll(".ingredient-name");

        for (const target of targets) {
            let ingredientName = target.innerHTML;
            let ingredientObj = dataTools.filterObjs(section2Ingredients, [ingredientName])[0];

            screen.showNewNutriValues(target, ingredientObj.newNutriValues);
            this.reloadServingSize();
        }
    }

}

var sections = {

    start() {

        startFns.prepareDatabase();
        startFns.loadScreen();
        startFns.addInitialInputs();

    },

    toSection1Fns() {

        section1Fns.reloadSection1();
        section1Fns.hiddenCaloriesResult();
        section1Fns.addInputsSection1();

    },

    toSection2Fns() {

        let selectedIngredients = section2Fns.getSelectIngredientsSection1();

        if (selectedIngredients.length > 0) {

            section2Fns.changeS1ToS2(selectedIngredients);
            section2Fns.updateSection2Ingredients(selectedIngredients);
            section2Fns.updateSection2Screen();
            section2Fns.addInputsSection2();

        }
    },

    setChangeSectionBtnEvListener(command) {
        let btn = document.querySelector("#change-section");

        switch (command) {
            case "start":
                btn.addEventListener("click", this.toSection2Fns);
                break;

            case "continue":
                btn.innerHTML = `
                <button class="navigation-btn">
                    Continuar  <i class="fa-solid fa-arrow-right"></i>
                </button>
                `;
                btn.removeEventListener("click", this.toSection1Fns);
                btn.addEventListener("click", this.toSection2Fns);
                break;

            case "back":
                btn.innerHTML = `
                <button class="navigation-btn">
                    Voltar  <i class="fa-solid fa-arrow-rotate-left"></i>
                </button>
                `;
                btn.removeEventListener("click", this.toSection2Fns);
                btn.addEventListener("click", this.toSection1Fns);
                break;
        }
    }
}

export default sections;

