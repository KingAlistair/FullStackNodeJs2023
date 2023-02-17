const rocks = [
    { name: "Pet Rock", age: 2 },
    { name: "Led Zeppelin", age: 55 },
    { name: "Dwayne Johnson", age: 50 },
    { name: "Neptune", age: 100_000_000_000 }
];

//loop methods: map, filter, find, reduce, sort, foreach
// map returns a new list
//filter reduces the numbmer of elements
//find gets a single element

//make the rocks one year older

//if you have multiple properties, good to use spreading=> ...rock
const rocksAgedOneYear = rocks.map(rock =>
    ({ ...rock, age: rock.age + 1 }));

console.log(rocksAgedOneYear);

//give me the rocks with even ages

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);

console.log(evenAgedRocks);