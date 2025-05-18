var voteEligibility =function(age){
if (age==null || age<=0  || age>=100 ){
    console.log(`Invalide Data: ${age}`);
}else{
    if(age>=18){
        console.log(`You are eligible ${age}..Thank you`)
    }else{
        console.log(`Not Eligible :${age}`)
    }
}
}
voteEligibility(null);
voteEligibility(undefined);
voteEligibility(0);
voteEligibility(-10);
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(200);
