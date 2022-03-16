//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ['best seller', 'golden globe winner', 'wooden spoon', 'top 100'];

movies.forEach((x,i) => document.querySelector('h2').innerText += movies[1])

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let num = [2,4,5,6,7,];

// this will always grab : element, index, then array in that order 

num.forEach((item, ind)=> { num[i]= item + 3
});

//Find the average of all the numbers from question three

let sum = 0;

num.forEach((num)=> sum += num);

// or 

for (let i = 0; i <num.length; i++){
    sum += num[i]
}