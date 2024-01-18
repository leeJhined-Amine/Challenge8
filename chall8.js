//1-Even numbers
let array0=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function numbers(even){
    let EvenNumbers=[];
    for (i in even){
        if (even[i] % 2 == 0) {
            EvenNumbers.push(even[i]);
        }
    }
    return EvenNumbers;
}
console.log(numbers(array0));

//2-People Over 30yo
let Persons = [
    {
        name: "John",
        age: 30,
        email: "cnifnsn@gmail.com",
    },
    {
        name: "Amine",
        age: 20,
        email: "fuebwfb@gmail.com"
    },
    {
        name: "leeJhined",
        age: 31,
        email: "febwufubw@gmail.com"
    }
]
function age(tryy){
    let array2 =[]
    for (i in tryy){
        if (tryy[i].age>30){
            array2.push(tryy[i])
        }
    }
    return array2
}
console.log(age(array1))

//5-Vowels removed
let arrayVowels = "Hello My name Is Something"
function Vowel(sentence){
    return sentence.replace(/[aeiou]/gi,'')
}
console.log(Vowel(arrayVowels))

//6-Unique elements of array
let array =[1,2,3,4,5,6,7,8,54]
let array6=[1,2,54,5,7,24,60,58]
function findCommonElements(arr1, arr2) {
    let exist = false;
    let arraycommon=[];
    for(i in arr1){
        for(y in arr2){
            if(arr1[i]==arr2[y]){
                exist=true
            }
        }
        if(exist==false){
            arraycommon.push(arr1[i]);
        }
        exist=false;
    }
    for(i in arr2){
        for(y in arr1){
            if(arr1[y]==arr2[i]){
                exist=true
            }
        }
        if(exist==false){
            arraycommon.push(arr2[i]);
        }
        exist=false;
    }
return arraycommon;
}
console.log(findCommonElements(array,array6));
