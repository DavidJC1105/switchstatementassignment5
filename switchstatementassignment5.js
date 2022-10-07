let letter=prompt("Enter a letter");

switch(letter){
    case 'a':
        console.log("This is a vowel");
        break;
    case 'e':
        console.log("This is a vowel");
        break;
    case 'i':
        console.log("This is a vowel");
        break;
    case 'o':
        console.log("This is a vowel");
        break;
    case 'u':
        console.log("This is a vowel");
        break;
    default:
        console.log("Your letter was not a vowel");
        break;
}
//Exercise 2

let usernumber=Number(prompt("Enter a number"))

if((usernumber % 5) == 0){
    if((usernumber % 11) == 0)
     console.log("This number is evenly divisible by 5 and 11");
     
}else 
{console.log("This number is not evenly divisible by 5 and 11")}

//Exercise 3

let monthnumber=Number(prompt("Enter a number from 1 to 12"))

switch(monthnumber){
    case 1:
        console.log("This month has 31 days");
        break;
    case 2:
        console.log("This month has 28 days");
         break;
    case 3:
        console.log("This month has 31 days");
        break;
    case 4:
        console.log("This month has 30 days");
        break;
    case 5:
        console.log("This month has 31 days");
        break;
    case 6:
        console.log("This month has 30 days");
        break;
    case 7:
        console.log("This month has 31 days");
        break;
    case 8:
        console.log("This month has 31 days");
        break;
    case 9:
        console.log("This month has 30 days");
        break;
    case 10:
        console.log("This month has 31 days");
        break;
    case 11:
        console.log("This month has 30 days");
        break;
    case 12:
        console.log("This month has 31 days");
        break;
    default:
        console.log("Invalid entry");
}

//Exercise 4

let time=Number(prompt("Enter the time in 24 hour clock format"))

if(time =>12){
    console.log("It is AM");
}else{
    console.log("It is PM");
}