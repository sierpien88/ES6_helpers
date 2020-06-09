// FOREACH FILTER

const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ];

 let template = '';

 
 products.forEach(function(product){

    function discount(){
        if(product.price < 100){
            return `<span>On sale !!</span>`;
        }
        return ``;
    }

    template += `
    <div class="product">
        <h1>${product.name}</h1>
        <strong>Price: $ ${product.price} </strong>
        ${discount()}
    </div>`
   
 });

 document.body.insertAdjacentHTML('afterbegin', template);


//  MAP FILTER excercise one
// We have an array of paintings.
// We need to loop the array and create a new array with messages like  “The Mona lisa is 200 x 200”

const paintings = [
    {painting:'Mona lisa',width:200,height:200},
    {painting:'The scream',width:400,height:600},
    {painting:'The last supper',width:600,height:700}
 ]


 const messages = paintings.map(function(painting){
    return  `${painting.painting} is ${painting.width} x ${painting.height}`;
 });

 console.log(messages);


//  MAP FILTER excercise two
//  We have a list of cars with a brand and a price, and we want to convert the price to a different currency, and put it in a new array just like  “Ford is 40000 rupies”.

 const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Chevy',price:600}
]

function convertion(price){
    return price * 14.6;
}
const carsIndia = cars.map(function(car){
    
    return `The ${car.name} is  ${convertion(car.price)} ruppees`;

});

console.log(carsIndia);

// FILETER HELPER EXCERCISE ONE
// We have a list of channels and we want to create a new array only with the premium channels.

const channel = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];

 const premiumChannel = channel.filter(function(oneChannel){
     return oneChannel.premium
 })

 console.log(premiumChannel);


// FILETER HELPER EXCERCISE TWO
// We will use the same channels example, but this time we have a user object, with some settings.
// So we need to get the NOT premium channels and the PREMIUM CHANNELS whenever we call the methods. See  the USER object below.

 const user = {
    name:'Francis',
    premium: true,
    premiumChannels:function(){
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        const $this = this;
        return channel.filter(function(premium){
            return premium.premium && $this.premium;
        })
    },
    channels:function(){
        // GET THE NON-PREMIUM CHANNELS
        return channel.filter(function(nonPremium){
            return nonPremium.premium == false;
        })
    }
 }
 console.log(user.premiumChannels())
 // brings HBO and MAX