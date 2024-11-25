
//1
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
 

 //2
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
  

  //3
  let list3 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
  ];

  function trueOrFalse(list3) {
    for (let index = 0; index <3 ; index++) {
        if (list3.eyes == "Green"){
            index++;
        }
        
        if (index == 0){
            return false;
        }else{
            return true;
        }
      }
    }


  console.log(trueOrFalse(list3));


  //4

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
  
  
  //5
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

//6


let risposta = prompt('Ciao, accome ti chiami?');

 let p = document.getElementById("paragrafo");
 
  p.innerHTML = `Ciao ${risposta}, come va?`;


  //7

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

//8

h1 = document.getElementsByClassName("color")[0];
function changeStyle(h1) {
    setTimeout(() => {
        h1.classList.remove("color")
        h1.classList.toggle('green');
        
    }, 2000);
    
}
changeStyle(h1);


//9


