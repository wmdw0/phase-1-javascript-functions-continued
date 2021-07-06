// Your code here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
};

function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`);
}

function wrapAdjective(name="*"){
    // if (name) {
    //     console.log(name)
    // }
    // else {
    //     name = "*"
    // }
    const part1 = "You are"
    console.log(name + "NAME LINE")
    return function(x){
        console.log(x + "X LINE")
        return `${part1} ${name}${x}${name}!`;
    }
}
wrapAdjective()();