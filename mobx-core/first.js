let {observable, reaction, computed, autorun} = require('mobx'); //CommonJS module system

const rectangle = observable({
    width: 100,
    height: 200,
    getArea: computed(() => {
        console.log("computed called!!!")
        return rectangle.width * rectangle.height;
    })
});

// const getArea = computed(() => {
//     console.log("computed called!!!")
//     return rectangle.width * rectangle.height;
// });

// autorun() -- runs every time observable changes. and also first time
autorun(() => {
    console.log("AutoRun ", rectangle.width , rectangle.height);
});

// reaction - more fine grained autorun()
reaction(() => rectangle.width, (value, prev) => {
    console.log(`width changed from ${prev} to ${value} `)
})

console.log(rectangle.getArea);

rectangle.width = 120;

console.log(rectangle.getArea);

