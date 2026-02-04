
localStorage.setItem('city',"Delhi")
localStorage.setItem('user1',"prashant varnwal")


localStorage.clear();

localStorage.setItem('city',"mumbai")
localStorage.setItem('city',"Delhi")

localStorage.setItem('user1',"prashant varnwal")

localStorage.setItem('user2',"Aman")
localStorage.setItem('user3',"Abhay")

localStorage.removeItem("user2")


// 1. localstorage.clear() - to clean localStorage.
// 2. localStorage.setItem("key","value") - to add new items or overwrite existing ones.
// 3. localStorage.getItem("key") - to get the element
// 4. localStorage.removeItem("key") - to remove any items


let object = {
    name: "prashant",
    rollNo: 902,
    city: "Delhi"
}

localStorage.setItem('obj1',object) //❌ Object direct save (galat) , ( output : "[object Object]" )

// Object → String
let newobj = JSON.stringify(object);

localStorage.setItem('obj',newobj);

const objData = localStorage.getItem('obj');

const data = JSON.parse(objData);


const marks = {
    math: 87,
    science: 98,
    Computer: 100,
}

localStorage.setItem('marks' , JSON.stringify(marks));
const M  = JSON.parse(localStorage.getItem('marks'))


// JSON.stringify : Array / object -> str 
// JSON.parse : str -> Array / object 


// sessionStorage
sessionStorage.setItem('user', 'prashant');
sessionStorage.setItem('rollNO', 27);

sessionStorage.removeItem('roll')


// localStorage -> tab/browser band hone ke baad bhi data rehta.
// sessionStorage -> tab band hote hi data delete ho jata. 


//sessionStorage is similar to localStorage, but the data is cleared when the browser tab is closed.
