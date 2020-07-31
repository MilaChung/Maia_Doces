//Creating the object bolos
const bolos = [
    {
      "photo": "img/abacaxi.jpeg",
      "flavor": "abacaxi",
      "name": "bolo de abacaxi",
      "price": 12,
    },
    {
        "photo": "img/banana.jpeg",
        "flavor": "banana",
        "name": "bolo de banana",
        "price": 12,
      },
    {
        // "photo": "img/cenoura.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "cenoura",
        "name": "bolo de cenoura",
        "price": 12,
      },
      {
        // "photo": "img/cenoura_choco.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "cenoura_choco",
        "name": "bolo de cenoura com chocolate",
        "price": 14,
      },
      {
        // "photo": "img/chocolate.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "chocolate",
        "name": "bolo de chocolate",
        "price": 12,
      },
      {
        "photo": "img/chocolate_cob.jpeg",
        "flavor": "chocolate_cob",
        "name": "bolo de chocolate com cobertura",
        "price": 14,
      },
      {
        // "photo": "img/coco.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "coco",
        "name": "bolo de coco",
        "price": 12,
      },
      {
        // "photo": "img/fuba_coco.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "fuba_coco",
        "name": "bolo de fubá com coco",
        "price": 12,
      },
      {
        "photo": "img/fuba_goiaba.jpeg",
        "flavor": "fuba_goiaba",
        "name": "bolo de fubá com goiabada",
        "price": 14,
      },
      {
        "photo": "img/laranja.jpeg",
        "flavor": "laranja",
        "name": "bolo de laranja",
        "price": 12,
      },
      {
        "photo": "img/limao.jpeg",
        "flavor": "limao",
        "name": "bolo de limão",
        "price": 14,
      },
      {
        // "photo": "img/maca.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "maca",
        "name": "bolo de maçã crocante",
        "price": 14,
      },
      {
        "photo": "img/maracuja.jpeg",
        "flavor": "maracuja",
        "name": "bolo de maracujá",
        "price": 14,
      },
      {
        //"photo": "img/milho.jpeg",
        "photo": "img/foto.jpeg",
        "flavor": "milho",
        "name": "bolo de milho cremoso",
        "price": 16,
      }
  ];

//Returns the current window object (window.self or self)
self.bolos = bolos;

//Initialing cakes page
$(document).ready(function(){
    createItensAndAppendToList(self.bolos);
});

//Function that select html element by id
function selectHtmlElementById(id) {
    return document.querySelector(`#${id}`);
}

//Function that create a html element
function createHtmlElement(element) {
    return document.createElement(element); 
}

//Function that create an item of list
function createItem(item) {
    let li = createHtmlElement('li');
    let img = createHtmlElement('img');
    let sectionf = createHtmlElement('section');
    let sections = createHtmlElement('section');
    let pf = createHtmlElement('p');
    let ps = createHtmlElement('p');
    let button = createHtmlElement('button');
  
    let type = document.createTextNode(`${item.name}`);
    let price = document.createTextNode("R$ " + item.price + ",00");
    let btn = document.createTextNode("Ver mais");
    
    $(li).attr("class", "cards-item");
    $(img).attr("src", item.photo);
    $(img).attr("class", "photo");
    $(sectionf).attr("class", "card");
    $(sections).attr("class", "card-content");
    $(pf).attr("class", "card-type");
    $(ps).attr("class", "card-price");
    $(button).attr("class", "button");
  
    li.appendChild(sectionf);
    sectionf.appendChild(img);
    sectionf.appendChild(sections);
    sections.appendChild(pf);
    sections.appendChild(ps);
    sections.appendChild(button);
    pf.appendChild(type);
    ps.appendChild(price);
    button.appendChild(btn);
    
    return li;
}

//Function that create itens and append to list
function createItensAndAppendToList(bolos){
    let ul = self.selectHtmlElementById('cards');
    
    bolos.map(bolos => {
      const li = self.createItem(bolos);
      ul.appendChild(li);
    })
}

//Function that construct the object by the filter, filtered object
function constructFilterObj(filters) {
    let newFilterObj = {};
    filters.map(filter => {
      for (var key in filter)
        if (filter[key] == ""){
          return;
        }
      return newFilterObj[key] = filter[key];
    })
  
    return newFilterObj;
  }
  
  //Function that filter the cake searched
  function filterBolos(filtersObj) {
    return self.bolos.filter((bolos) => {
      for (var key in filtersObj) {
        if (bolos[key] === undefined || bolos[key] != filtersObj[key])
          return false;
      }
    
      return true;
    });
  }
  
  //Function that when the button is clicked, filter the cakes
  function buttonFilter () {
    let filters = [
      //{"flavor": selectHtmlElementById('validationDefault03').value},
      {"flavor": selectHtmlElementById('validationDefault04').value},
      // "price": selectHtmlElementByClass('price').value,
    ];
    
    let filtersObj = constructFilterObj(filters);
    let bolosFiltered = filterBolos(filtersObj);
  
    $("#cards").empty();
    createItensAndAppendToList(bolosFiltered);
  }