import {makeAutoObservable} from "mobx";

export default class RecipeStore {
    constructor() {
        this._recipes = [
          {id: 1,
           name: 'Харчо',
           time: '2 часа',
           timeOnKitchen: '2 часа',
           country: 'Грузия',
           quantity: '4 порции',
           ingredients: '',
           steps: '',
           img: '../img/AllRecipesCard/Xarcho.png',
           imgFlag: ''
          },
          {id: 2,
            name: 'Хачапури по-аджарски',
            time: '1ч. 45мин',
            timeOnKitchen: '1ч. 45мин',
            country: 'Грузия',
            quantity: '5 порций',
            ingredients: '',
            steps: '',
            img: '../img/AllRecipesCard/xachapuri.png',
            imgFlag: ''
           },
           {id: 3,
             name: 'Хинкали',
             time: '1ч. 30мин',
             timeOnKitchen: '1ч. 30мин',
             country: 'Грузия',
             quantity: '4 порции',
             ingredients: '',
             steps: '',
             img: '../img/AllRecipesCard/manti.png',
             imgFlag: ''
            },
            {id: 4,
              name: 'Чурчхела',
              time: '1 час',
              timeOnKitchen: '1 час',
              country: 'Грузия',
              quantity: '6 порций',
              ingredients: '',
              steps: '',
              img: '../img/AllRecipesCard/churchhella.png',
              imgFlag: ''
             },
             {id: 5,
               name: 'Чахохбили',
               time: '2ч. 30мин',
               timeOnKitchen: '2ч. 30мин',
               country: 'Грузия',
               quantity: '6 порций',
               ingredients: '',
               steps: '',
               img: '../img/AllRecipesCard/5.png',
               imgFlag: ''
              },
              {id: 6,
                name: 'Шурпа',
                time: '2 часа',
                timeOnKitchen: '2 часа',
                country: 'Узбекистан',
                quantity: '8 порций',
                ingredients: '',
                steps: '',
                img: '../img/AllRecipesCard/6.png',
                imgFlag: ''
               },
               {id: 7,
                 name: 'Самса',
                 time: '45мин',
                 timeOnKitchen: '45мин',
                 country: 'Узбекистан',
                 quantity: '16 порций',
                 ingredients: '',
                 steps: '',
                 img: '../img/AllRecipesCard/7.png',
                 imgFlag: ''
                },
                {id: 8,
                  name: 'Манты',
                  time: '1ч. 30мин',
                  timeOnKitchen: '1ч. 30мин',
                  country: 'Узбекистан',
                  quantity: '8 порций',
                  ingredients: '',
                  steps: '',
                  img: '../img/AllRecipesCard/8.png',
                  imgFlag: ''
                 },
                 {id: 9,
                   name: 'Долма',
                   time: '2ч',
                   timeOnKitchen: '2ч',
                   country: 'Узбекистан',
                   quantity: '6 порций',
                   ingredients: '',
                   steps: '',
                   img: '../img/AllRecipesCard/9.png',
                   imgFlag: ''
                  },
                  {id: 10,
                    name: 'Плов',
                    time: '2ч. 30мин',
                    timeOnKitchen: '2ч. 30мин',
                    country: 'Узбекистан',
                    quantity: '10 порций',
                    ingredients: '',
                    steps: '',
                    img: '../img/AllRecipesCard/10.png',
                    imgFlag: ''
                   },
                   {id: 11,
                     name: 'Щи',
                     time: '1ч. 30мин',
                     timeOnKitchen: '1ч. 30мин',
                     country: 'Россия',
                     quantity: '6 порций',
                     ingredients: '',
                     steps: '',
                     img: '../img/AllRecipesCard/11.png',
                     imgFlag: ''
                    },
                    {id: 12,
                      name: 'Блины',
                      time: '30 минут',
                      timeOnKitchen: '30 минут',
                      country: 'Россия',
                      quantity: '4 порции',
                      ingredients: '',
                      steps: '',
                      img: '../img/AllRecipesCard/12.png',
                      imgFlag: ''
                     }
        ]
        makeAutoObservable(this)
    }


    setRecipes(recipes) {
        this._recipe = recipes
    }

    get recipes() {
        return this._recipes
    }

}