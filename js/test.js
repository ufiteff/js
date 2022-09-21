function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if("available" <= "ordered") {
message = 'Not enough goods in stock!'
  } else if ("availabel" >= "order"){
   
    message = 'Order is processed, our manager will contact you.'
    } 
  // Change code above this line
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);