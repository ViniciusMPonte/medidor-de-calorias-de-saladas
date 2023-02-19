const input = {
    
    addEvListenerOnBtn(targets, fn) {

        let arrayOfTargets = document.querySelectorAll(targets);

        for (const button of arrayOfTargets) {

            button.addEventListener("click", (event) => {

                let buttonClicked = event.target.parentElement;
                fn(buttonClicked);

            })
        }
    },

    selectIngredient(target) {

        target.classList.toggle("selected-ingredient");

    },

    addEvListenerOnTextarea(targets, fn) {

        let arrayOfTextareas = document.querySelectorAll(targets);
    
        for (const textarea of arrayOfTextareas) {
    
            textarea.addEventListener("input", (event) => {
                 
                fn(event.target);
    
            })
        }
    },

    filterMeasureTextarea(textarea) {

        let editedValue = textarea.value;
    
        editedValue = editedValue.replace(/[^0-9.]/g, "");
        editedValue = editedValue.replace(/(\.*)(\d+)(\.?\d{0,2})([0-9.]*)/g, "$2" + "$3");
        editedValue = editedValue.slice(0,5);
    
        textarea.value = editedValue;
    }
}


export default input;