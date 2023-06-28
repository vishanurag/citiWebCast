
let temp_UnitBox = document.getElementById('temp_UnitBox');
let isdeg_C = 1;
let  unit_Arr = ['F', 'C'];

let changeTempUnit = (() => {
    isdeg_C = (isdeg_C == 1)? 0: 1;
    temp_UnitBox.innerHTML = '&deg;' + unit_Arr[isdeg_C];

    currtemperature = +temp.innerHTML;
    
    if(!isdeg_C) {
        temp.innerHTML = Math.round((currtemperature*9/5) + 32);
        currtemperature = +temp.innerHTML;
    } else {
        temp.innerHTML = Math.round((currtemperature - 32)*(5/9));
        currtemperature = +temp.innerHTML;

    }
});