const mathTools = {

    calculateNewNutriValues(ingredientObj, newServingSize) {
        let { carboidratos: carbohydrates, proteinas: proteins,
            gorduras: fat, porcao: servingSize, unidadeDeMedida: unit
        } = ingredientObj.nutritionalInfo;

        let newCarbohydrates = Number(((newServingSize * carbohydrates) / servingSize).toFixed(2));
        let newProteins = Number(((newServingSize * proteins) / servingSize).toFixed(2));
        let newFat = Number(((newServingSize * fat) / servingSize).toFixed(2));
        let newCalories = Number(((newCarbohydrates * 4) + (newProteins * 4) + (newFat * 9)).toFixed(2));

        return { newCarbohydrates, newProteins, newFat, newServingSize, newCalories, unit };
    }
}



export default mathTools;