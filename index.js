let serial=0;

document.getElementById('first-card').addEventListener('click',function(){
    serial+=1;
   const productName=document.getElementById('first-name').innerText;
   const productPrice=document.getElementById('first-price').innerText;
   const productQuantity=document.getElementById('first-quantity').innerText;
   const total=parseInt(productPrice)*parseInt(productQuantity);

  //  const sumTotal=document.getElementById('total-product').innerText;
  //  const sum=parseInt(sumTotal)+parseInt(total);
  //  //document.getElementById('total-product').innerText=sum;
  //  sumTotal.innerText=sum;
  document.getElementById('total-product').innerText=serial;

   displayData(productName,productPrice,productQuantity,total)
   
})
function displayData(productName,productPrice,productQuantity,total){
    const container=document.getElementById('table-container')
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${total}</td>

    `;
    container.appendChild(tr);
}

document.getElementById('second-card').addEventListener('click',function(){
    serial+=1;
   const productName=document.getElementById('second-name').innerText;
   const productPrice=document.getElementById('second-price').innerText;
   const productQuantity=document.getElementById('second-quantity').innerText;
   const total=parseInt(productPrice)*parseInt(productQuantity);
   document.getElementById('total-product').innerText=serial;
   displayData(productName,productPrice,productQuantity,total)
   
})
document.getElementById('last-card').addEventListener('click',function(){
    serial+=1;
    const productName = document.getElementById("last-title").innerText;
    const productPrice = document.getElementById("first-input").value;
    const productQuantity = document.getElementById("second-input").value;
    const total=parseInt(productPrice)*parseInt(productQuantity);

    displayData(productName,productPrice,productQuantity,total)
    if (
        productPrice == "" ||
        productQuantity == "" ||
        productPrice <= 0 ||
        productQuantity <= 0
      ) {
        return alert("please enter any valid number");
      }
})


