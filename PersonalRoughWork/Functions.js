function FirstCall(Ball) {
    function SecondCall() {
        return console.log(`This is Result`);
        
    }
    return SecondCall();
}


FirstCall();