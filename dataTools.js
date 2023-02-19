let dataTools = {
    filterObjs(arrayOfObjects, arrayOfValues, property) {

        let filtedObjects = arrayOfObjects.filter((obj) => {

            if (property) {

                let properties = property.split(".");
                let valueObj = properties.reduce((reduceObj, key) => reduceObj[key], obj);
                return arrayOfValues.includes(valueObj);

            } else {

                let arrayOfValuesObj = Object.values(obj)
                let arrayOfFiltedValuesObj = arrayOfValuesObj.filter(valueObj => arrayOfValues.includes(valueObj));
                return arrayOfFiltedValuesObj.length > 0;

            }
            
        });

        return filtedObjects;
    },

    extractProperty(array, property) {
        let result = [];
        let properties = property.split(".");
    
    
        for (let i = 0; i < array.length; i++) {
    
            result.push(properties.reduce((obj, key) => obj[key], array[i]));
    
        }
        
        return result;
    },

    sortObjects(array, property) {
        let properties = property.split(".");
        array.sort(function(a, b) {
            let valueA = properties.reduce((obj, key) => obj[key], a);
            let valueB = properties.reduce((obj, key) => obj[key], b);
            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });
        return array;
    },

    upFirstLetter(array, property) {

        let properties = property.split(".");
        
        
        for (let i = 0; i < array.length; i++) {
    
            let originalWord = properties.reduce((obj, key) => obj[key], array[i]);
    
            if (typeof(originalWord) !== 'string') {
                continue;
            }
    
            let treatedWord = originalWord.replace(/([a-zà-ú])(.+)/i, ($0, $1, $2) => {
    
                let firstLetter = $1;
                let remainderWord = $2;
                firstLetter = firstLetter.toUpperCase();
                remainderWord = remainderWord.toLowerCase();
                return firstLetter + remainderWord;
    
            });
    
            eval(`array[i].${property} = "${treatedWord}"`);
    
        }
    
        return array;
    
    },

    createSelectedIngArray() {

        var selectedIngredients = [];
        var ingredients = document.querySelectorAll(".selected-ingredient");

        for (const ingredient of ingredients) {

            selectedIngredients.push(ingredient.querySelector(".ingredient-name").innerHTML)

        }

        return selectedIngredients;
    },

    updateArrayOfObjs(section2Ingredients, selectedIngredients) {

        if (section2Ingredients) {
            let section2IngrNames = dataTools.extractProperty(section2Ingredients, "nome");
    
            for (let i = 0; i < section2IngrNames.length; i++) {
    
                let commonObjArray = dataTools.filterObjs(selectedIngredients, [section2IngrNames[i]], "nome");
    
                if (commonObjArray.length === 0) {
                    let indexToRemove = section2Ingredients.findIndex(obj => obj.nome === section2IngrNames[i]);
                    section2Ingredients.splice(indexToRemove, 1);
                }
            }
    
            let selectedIngrNames = dataTools.extractProperty(selectedIngredients, "nome");
    
            for (let i = 0; i < selectedIngrNames.length; i++) {
    
                let commonObjArray = dataTools.filterObjs(section2Ingredients, [selectedIngrNames[i]], "nome");
    
                if (commonObjArray.length === 0) {
                    section2Ingredients.push(selectedIngredients[i]);
                    section2Ingredients = dataTools.sortObjects(section2Ingredients, "nome");
                }
            }
            
        } else {
            section2Ingredients = [...selectedIngredients];
        }
    
        return section2Ingredients;
    }
}

export default dataTools;