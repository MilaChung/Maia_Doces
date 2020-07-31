//Creating the object bolos
const bolos = [
    {
      "photo": "img/abacaxi.jpeg",
      "flavor": "abacaxi",
      "name": "bolo de abacaxi",
      "price": 433,
    },
    
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
    let price = document.createTextNode("R$ " + item.price);
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