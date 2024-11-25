
//1------------------
let list = [
    { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];


 function numberList(list) {

    ehi =  list.filter(dev => dev.language === "Javascript" && dev.continent === "Europe").length;
    return(ehi);
 }

 console.log(numberList(list));
 

 //2------------------
 function addGreeting(list2) {
    return list.map(dev => ({
      ...dev,
      greeting: `Awe ${dev.firstName}, io lavoro con ${dev.language}, ma effettivamente è meglio javascript`
    }));
    return list2.greeting;
  }
  
  let list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  console.log(addGreeting(2));
  

  //3---------------------
  let list3 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
  ];

  function trueOrFalse(list3) {
    occhiVerdi = list3.filter(dev=> dev.eyes === "green" || dev.eyes === "Green");

    return occhiVerdi.length > 0;
  }


  console.log(trueOrFalse(list3));


  //4----------------------

  let list4 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

  function findPython(list4) {
    const developer = list4.find(dev => dev.language === "Python");
  
    if (developer) {
      return `Il primo sviluppatore di ${developer.language} è ${developer.firstName} e viene da ${developer.country}`;
    } else {
      return `Nessun sviluppatore python trovato`;
    }
  }
  
  
  console.log(findPython(list4)); 
  
  
  //5---------------------
  let list5 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
];

function showLogged(list5) {
    return list5.map(dev => {
        if (dev.logged) {
            return `L'utente ${dev.firstName} ${dev.lastName} è registrato`;
        } else {
            return `L'utente ${dev.firstName} ${dev.lastName} non è registrato`;
        }
    });
}
  
alert(showLogged(list5).join("\n"));

//6----------------------


let risposta = prompt('Ciao, accome ti chiami?');

 let p = document.getElementById("paragrafo");
 
  p.innerHTML = `Ciao ${risposta}, come va?`;


  //7---------------------

  let openingDays =[
    {day : 'monday' , from : '9.00' , to : "18.00"},
    {day : 'tuesday' , from : '9.00' , to : "18.00"},
    {day : 'wednesday' , from : '9.00' , to : "18.00"},
    {day : 'thursday' , from : '9.00' , to : "18.00"},
    {day : 'saturday' , from : '9.00' , to : "18.00"},
    {day : 'sunday' , from : '9.00' , to : "18.00"},
  ]


     openingDays.forEach(openings => {
        let ul = document.getElementById("openings");
        
        ul.innerHTML += `<ol>${openings.day} from ${openings.from} to ${openings.to}</ol>`
        
    });

//8---------------------------

h1 = document.getElementsByClassName("color")[0];
function changeStyle(h1) {
    setTimeout(() => {
        h1.classList.remove("color")
        h1.classList.toggle('green');
        
    }, 2000);
    
}

changeStyle(h1);


//9---------------------------

let list9 = [
    { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
    { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
    { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
    { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
    { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
    { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
    { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
    { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
    { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
    { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
];

let container = document.querySelector(".container");

list9.forEach(elemento => {
    let card = document.createElement("div");
    card.classList.add("card");
    switch (elemento.flag) {
        case "it":
            card.innerHTML = ` <i class="flag-icon flag-icon-it"></i>`;
            break;
        case "es":
            card.innerHTML = `  <i class="flag-icon flag-icon-er"></i>`;
            break;
        case "fr":
            card.innerHTML = `  <i class="flag-icon flag-icon-fr"></i>`;
            break;
        case "ch":
            card.innerHTML = `  <i class="flag-icon flag-icon-ch"></i>`;
            break;
        case "jp":
            card.innerHTML =  `  <i class="flag-icon flag-icon-jp"></i>`;
            break;
        case "ar":
            card.innerHTML = `  <i class="flag-icon flag-icon-ar"></i>`;
            break;
        case "gb":
            card.innerHTML = `  <i class="flag-icon flag-icon-gb"></i>`;
            break;
        case "us":
            card.innerHTML = `  <i class="flag-icon flag-icon-us"></i>`;
            break;
        case "de":
            card.innerHTML =  `  <i class="flag-icon flag-icon-de"></i>`;
            break;
        case "co":
            card.innerHTML = `  <i class="flag-icon flag-icon-co"></i>`;
            break;
        default:
            break;
    }
    
    card.innerHTML += 
    `
    <div class ="card-body">
     <h5 class="card-title">${elemento.firstName}</h5>
                  <p class="card-text">${elemento.age} anni, lavora con ${elemento.language}, proveniente da: ${elemento.country}</p>
                  <a href="#" class="btn btn-primary">Contatta</a>
                  </div>`;

    container.appendChild(card);
});


//10----------------------------
let list10 = [
    { id: 1, linkName: 'home', page: 'home.html', icon: 'bi bi-house-door'},
    { id: 2, linkName: 'chi siamo', page: 'chi-siamo.html', icon: 'bi bi-people'},
    { id: 3, linkName: 'servizi', page: 'servizi.html', icon: 'bi bi-bicycle'},
    { id: 4, linkName: 'categorie', page: 'categorie.html', icon: 'bi bi-tag'},
    { id: 5, linkName: 'blog', page: 'blog.html', icon: 'bi bi-newspaper'},
    { id: 6, linkName: 'contatti', page: 'contatti.html', icon: 'bi bi-send'}
]

let navbar = document.querySelector(".navbar");

function editNavbar(list10) {
    list10.forEach(link => {
        let div = document.createElement("div");
        div.innerHTML = `<a href="${link.linkpage}"><i class="${link.icon}">${link.linkName}</i></a>`;

        navbar.appendChild(div);
    });
    
}
editNavbar(list10);


//11------------------------

window.document.addEventListener('scroll', () => {
   
    let scrolled = window.scrollY;
    if(scrolled > 2) {
        navbar.classList.add("color");  
        navbar.classList.remove("green");
    } else {
        navbar.classList.remove("color");  
        navbar.classList.add("green");
  }});


  numero1 = document.getElementById("num1");
  numero2 = document.getElementById("num2");

  num1 = numero1.value;
  num2 = numero2.value;
  console.log(num1);
  