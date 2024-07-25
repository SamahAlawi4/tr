


const getproducts1= async()=>{
    const {data} = await axios.get(`https://dummyjson.com/products/category/smartphones`);
    return data;
}
const getPro =async ()=>{

    const data = await getproducts1();
    const products =data.products;
    const result = products.map ( (p)=>{
        return `
        <div class="p">
        <div class="product">
       <h3>${p.title}</h3>
       <p>${p.brand}</p>
       <div class="img">
       <img src='${p.thumbnail}'/ >
       </div>

      
   </div>
   </div>
       
       `;
    }).join(' ');

    document.querySelector(".c").innerHTML =result;
}
getPro();