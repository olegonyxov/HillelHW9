const length= parseInt(prompt("input array length"));
let inputElement;
let arr=[];

for (i=1; i<=length; i++){
    arr.push(inputElement=prompt("prompt an element for array"));
}

document.write(arr +'</br>');
document.write(arr.sort() +'</br>');
// document.write(arr.splice(1,3)); интересное поведение
arr.splice(1,3)
document.write(arr)

