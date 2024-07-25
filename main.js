const getProduct =async ()=>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    return data;

}

    const displayProducts = async ()=>{

        const data = await getProduct();
        const products = data.products;
        const result = products.map ( (product)=>{
            return `
            <div class="product">
           <h3>${product.category}</h3>
           <p>${product.brand}</p>
           <img src='${product.thumbnail}'/ >
          
       </div>
           
           `;
        }).join(' ');
        document.querySelector(".products").innerHTML = result;
        document.querySelector(".overlay").classList.add('d-none');
    } 

  
  
    
 
  

   