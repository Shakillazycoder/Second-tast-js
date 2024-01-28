const age = 31;
const ticket = 800;
if (age <10){
    console.log('You will get a ticket free');
}
else if(age >=10 && age <=30){
    // 50% discount
    const discount = ticket * 50/100;
    const payAmount = ticket - discount;
    console.log(payAmount)
}
else if (age >=60){
    // 15% discount
    const discount = ticket * 15/100;
    const payAmount = ticket - discount;
    console.log(payAmount)
}

else{
    console.log(ticket)
}