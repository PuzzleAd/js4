//1) დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

function ageCalculator(a) {
    let int = 65 - a;
    return int;
}

console.log(ageCalculator(40));

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.

let int = null;

function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            int = num1 + num2;
            break;
        case "-":
            int = num1 - num2;
            break;
        case "*":
            int = num1 * num2;
            break;
        case "/":
            int = num1 / num2;
            break;
        default:
            break;
    }
    return int;
}

console.log(calculator(10, 5, "+"));

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.



function checkPasswordStrength(password) {
    if (password.length > 16) {
        console.log("too much symbols, make it under 16 symbols!");
    } else if(password.length < 8){
        console.log("too few symbols, make it minimum 8 symbols!");
    }else{
        console.log(password);
    }
}

checkPasswordStrength("sdfadfdfsdffsdfsfgsde");

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!

function flowersChecker(flower) {
    switch (flower) {
        case "tita":
            console.log("this flower is found");
            break;
        case "vardi":
            console.log("this flower is found");
            break;
        case "ia":
            console.log("this flower is found");
            break;
        case "endzela":
            console.log("this flower is found");
            break;
        default:
            console.log("this flower has not been found!");
            break;
    }
}

flowersChecker("tita");

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!


function biggestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(`${num1} is the highest`);
    } else if(num2 >= num1 && num2 >= num3 ){
        console.log(`${num2} is the highest`);
    }else{
        console.log(`${num3} is the highest`);
    }
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

console.log(`numbers are ${num1}, ${num2}, ${num3}.`);
biggestNumber(num1, num2, num3);
