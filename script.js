
/**
 * Function to calculate simple interest
 * @returns 
 */
function compute() {

    // principal amount entered
    var principal = document.getElementById("principal").value;

    /**
     * checking principal amount is always a valid positive number
     * if not then stop further processing
     */ 

    

    if(!isPrincipalValid(principal)) {
        alert('Enter a positive number');
        document.getElementById("principal").focus;
    } else {
        // rate selected by user
        var rate = document.getElementById("rate").value;

        // time in years
        var years = document.getElementById("years").value;

        // calculate interest
        var interest = (principal * years * rate / 100).toFixed(2);

        // calculate year when amount will be paid back
        var year = new Date().getFullYear() + parseInt(years);

        // create dynamic html snippet for showing result back on screen
        var interestDetails = "If you deposit <span class='result-span'>"+principal
            +"</span>,<br /> at an interest rate of <span class='result-span'>"+rate
            +"%</span>.<br />You will receive an amount of <span class='result-span'>"+interest
            +"</span>,<br />in the year <span class='result-span'>"+year+"</span><br />"
        
        // show result on screen
        document.getElementById("result").innerHTML = interestDetails;
    }

}

/**
 * 
 * @param {*} amount 
 * @returns 
 */
function isPrincipalValid(amount) {
    if(amount < 1) {        
        return false;
    } else {
        return true;
    }
}

/**
 * Function to show selected interest rate on screen
 */
function showRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval +"%";
}
