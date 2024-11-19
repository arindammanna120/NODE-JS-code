// import readline
const readline=require("readline");

// configure interface to connect with the terminal

const interface=readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

// reading the value

interface.question("Enter the first number",(num1)=>{
    interface.question("Enter the second number",(num2)=>{
        // here I can access the num1 and num2
        const sum=num1+num2;
        console.log(sum);

    })

    });