// Solution 1
const name = 'Rafsan';
let price = 200;

//৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const detail = `Hey ${name}, How are you today. The product price is only ${price}`;
// console.log(detail);

//solution 3.1
const divideByFive = (number) => (number / 5);
const divideFive = divideByFive(100) ;
// console.log(divideFive);

//s৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে
// তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 


const calculate = (num1, num2) => ((num1 + 2) * (num2 + 2));
const input = calculate(2, 2);
// console.log(input);

//৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে 
//গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyInput = multiply(2, 2, 2)
// console.log(multiplyInput);

//৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর 
//সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const calculateDetail = (num1, num2) => {
    num1 = num1 + 2;
    num2 = num2 + 2;
    return num1 * num2;
    
}
const input2 = calculateDetail(2, 2);
// console.log(input2);

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে 
//গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const output = numbers.map(x => x * 5)
// console.log(output);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const num = [5, 13, 7, 41, 30, 5, 2, 19, 20, 22, 33];
const output2 = num.filter(x => x %  2)
// console.log(output2);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
// const product = products.filter(x => (x.price == 5000));
const product = products.find(x => (x.price == 5000));
// console.log(product);

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
const employee = {
    md: { id: 1, name: 'Shabbir', post: 'Managing Director' },
    director: {
        dId: 2, dName: 'Abid', dPost: 'Director',
        assistant: { aId: 3, aName: 'Nabid', aPost: 'Director Assistant' }
    }
}
const mdName= employee.md.name;
// console.log(mdName);

//৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring 
//করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
const number = [5, 13, 7, 41, 30, 5, 2, 19];
const [one, two, three] = number;
// console.log(three);

//১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। 
//আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

const sumCalculation = (x, y, z=7) => (x + y + z);
// console.log(sumCalculation(2, 4));

//১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে 
//অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )


const stuff = {
    md: { id: 1, name: 'Shabbir', post: 'Managing Director' },
    director: {
        dId: 2, dName: 'Abid', dPost: 'Director',
        assistant: { 
            aId: 3, aName: 'Nabid', aPost: 'Director Assistant' 
        }
    }
}
const directorAssistant = stuff?.director?.assistant?.aName;
console.log(directorAssistant);

