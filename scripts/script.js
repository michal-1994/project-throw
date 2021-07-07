let a = 10; // Correct value
// let b = 2; // Correct value
let b = 'Tom'; // Incorrect value for test throw Error

function calculateArea(width, height) {     
    try {
        let area = width * height;
        if (!isNaN(area)) {
            return area;
        } else {
            throw new Error('calculateArea() received invalid number'); 
        }
    } catch(e) {
        console.log(e.name + ' ' + e.message); // Message for developers
        return 'Obliczenie pola jest niemożliwe'; // Message for client
    }
}

document.getElementById('area').innerHTML = calculateArea(a, b);