//Informações extraidas do site:
//https://vitat.com.br/alimentacao/busca-de-alimentos/

const ingredientes = [
    {
        nome: 'cebola roxa',
        img: 'cebola-roxa.png',
        nutritionalInfo: {
            carboidratos: 10,
            proteinas: 0,
            gorduras: 0,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }

    },
    {
        nome: 'cebolinha',
        img: 'cebolinha.png',
        nutritionalInfo: {
            carboidratos: 3.4,
            proteinas: 1.9,
            gorduras: 0.4,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'cenoura',
        img: 'cenoura.png',
        nutritionalInfo: {
            carboidratos: 7.7,
            proteinas: 1.3,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'chuchu',
        img: 'chuchu.png',
        nutritionalInfo: {
            carboidratos: 4.1,
            proteinas: 0.7,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'couve flor',
        img: 'couve-flor.png',
        nutritionalInfo: {
            carboidratos: 4.5,
            proteinas: 1.9,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'rúcula',
        img: 'rucula.png',
        nutritionalInfo: {
            carboidratos: 2.2,
            proteinas: 1.8,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'salmão',
        img: 'salmao.png',
        nutritionalInfo: {
            carboidratos: 0,
            proteinas: 19.3,
            gorduras: 9.7,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'salsinha',
        img: 'salsinha.png',
        nutritionalInfo: {
            carboidratos: 6.34,
            proteinas: 2.98,
            gorduras: 0.79,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'abobora',
        img: 'abobora.png',
        nutritionalInfo: {
            carboidratos: 6.1,
            proteinas: 0.7,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'abobrinha',
        img: 'abobrinha.png',
        nutritionalInfo: {
            carboidratos: 6.1,
            proteinas: 0.7,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'acelga',
        img: 'acelga.png',
        nutritionalInfo: {
            carboidratos: 4.6,
            proteinas: 1.4,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'agrião',
        img: 'agriao.png',
        nutritionalInfo: {
            carboidratos: 2.3,
            proteinas: 2.7,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'alface americana',
        img: 'alface-americana.png',
        nutritionalInfo: {
            carboidratos: 1.7,
            proteinas: 0.6,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'alface crespa',
        img: 'alface-crespa.png',
        nutritionalInfo: {
            carboidratos: 1.7,
            proteinas: 1.3,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'batata doce',
        img: 'batata-doce.png',
        nutritionalInfo: {
            carboidratos: 28.2,
            proteinas: 1.3,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'batata palha',
        img: 'batata-palha.png',
        nutritionalInfo: {
            carboidratos: 37.2,
            proteinas: 5.6,
            gorduras: 48,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'berinjela',
        img: 'berinjela.png',
        nutritionalInfo: {
            carboidratos: 4.4,
            proteinas: 1.2,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'beterraba',
        img: 'beterraba.png',
        nutritionalInfo: {
            carboidratos: 11.1,
            proteinas: 1.9,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'brócolis',
        img: 'brocolis.png',
        nutritionalInfo: {
            carboidratos: 4,
            proteinas: 3.6,
            gorduras: 0.3,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'camarão',
        img: 'camarao.png',
        nutritionalInfo: {
            carboidratos: 0,
            proteinas: 10,
            gorduras: 0.5,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'tomate cereja',
        img: 'tomate-cereja.png',
        nutritionalInfo: {
            carboidratos: 3.1,
            proteinas: 1.1,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'tomate',
        img: 'tomate.png',
        nutritionalInfo: {
            carboidratos: 3.1,
            proteinas: 1.1,
            gorduras: 0.2,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'espinafre',
        img: 'espinafre.png',
        nutritionalInfo: {
            carboidratos: 3.75,
            proteinas: 2.97,
            gorduras: 0.26,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'molho branco',
        img: 'molho-branco.png',
        nutritionalInfo: {
            carboidratos: 14.8,
            proteinas: 6.66,
            gorduras: 12.73,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'pepino',
        img: 'pepino.png',
        nutritionalInfo: {
            carboidratos: 2,
            proteinas: 0.9,
            gorduras: 0,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    },
    {
        nome: 'repolho roxo',
        img: 'repolho-roxo.png',
        nutritionalInfo: {
            carboidratos: 7.2,
            proteinas: 1.9,
            gorduras: 0.1,
            porcao: 100,
            unidadeDeMedida: 'gramas'
        }
    }
]

export default ingredientes;