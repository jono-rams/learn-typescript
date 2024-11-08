// tuples

let person: [string, number, boolean] = ['Mario', 30, true];

console.log(person);

// tuples examples

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];
console.log(hsla);

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords(): [number, number] {
    // get coords

    const latitude = 30.45;
    const longitude = 120.34;

    return [latitude, longitude];
}

const [lat, long] = useCoords();
console.log(lat, long);

// named tuples

let user: [name: string, age: number];
user = ['Peach', 25];

console.log(user[0]);
