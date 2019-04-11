function check_fisrt_letter_upper_case (str) {
    var regexp = /^[A-Z]/;
    console.log(regexp.test(str));
    if (regexp.test(str)) {
        console.log("First letter is upper case.");
    } else {console.log("First letter is NOT upper case.");}
};