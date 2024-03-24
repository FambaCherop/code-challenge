calculateDemerits(80);
function calculateDemerits(speed) {
    let speedLimit = 70;
    let kmPerDemerit = 5;
    
    if (speed <= speedLimit) {
    console.log("Ok");
    }

    else
     {
        let demerits = (speed - speedLimit) / kmPerDemerit;
     

        if (demerits >= 12) {
        console.log("License Suspended");
        } else {
        console.log("Points: " + demerits)
        }
    }
}