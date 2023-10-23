let shop =document.getElementById("shop");
let shopItemsData=[
    {
        id:"hdhdj",
        name:"round tshirt",
        price:79,
        img:"images/image1.jpg",
    },
    {
        id:"jgjg",
        name:"Crown tshirt",
        price:110,
        img:"images/image4.jpg",    
    },
    {
        id:"kglgl",
        name:"Crop tshirt",
        price:120,
        img:"images/image5.jpg",       
    },
    {
        id:"kgkg",
        name:"Black tshirt",
        price:125,
        img:"images/image6.jpg",          
    }
];

let basket =[];

let generateShop =() => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
        let { id, name, price, img } = x;
        return `
       <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <div class="price-quantity">
                        <h2>R${price}</h2>
                        <div class="button">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i> 
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div> 
        
     </div>
    
     `;            
    })
    .join(""));
};

generateShop();

let increment = (id) =>{
    let selectedItem = id;
    let search= basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }
    else{search.item +=1;

    }

    // console.log(basket);
    update( selectedItem.id );
};
let decrement = (id) =>{
     let selectedItem = id;
     let search = basket.find((x)=> x.id === selectedItem.id);
     if (search.item === 0) return;
     else{
        search.item -= 1;
     }
    // console.log(basket);
    update( selectedItem.id );
};
let update = (id) =>{
    let search = basket.find((x)=> x.id ===id);
    // 
    console.log(search.item )
    document.getElementById(id).innerHTML= search.item;
    calculation();

};

let calculation =()=>{
    let cartIcon = document.getElementById("cartAmount");
cartIcon.innerHTML= (basket.map((x)=>x.item).reduce((x,y)=>x + y, 0));

};

