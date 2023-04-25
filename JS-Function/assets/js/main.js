//a) Toplama çıxma, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+', '-', '*', '/') qebul edir.Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.
// function accountsPayable(a,c,b){
//     switch (c){
//         case "+":
//             console.log(Number(a)+Number(b));
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;        
//     }
// }
// accountsPayable(prompt(), prompt(), prompt());



//b) Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.

let personInput1 ={
    name:"Aytən",
    surname: "Ələmli",
    father:  "Baxşeyiş",
    getInfo: function(){
         return this.name
    }
}
  
let personInput2 ={
    name:"Aytən",
    surname: "Ələmli",
    father:  "Baxşeyiş",
    getInfo: function(){
        return this.surname+" "+this.name
    }
}

let personInput3 ={
    name:"Aytən",
    surname: "Ələmli",
    father:  "Baxşeyiş",
    getInfo: function(){ 
        return this.name[0]+"."+this.surname+" "+ this.father
    }
}
if(prompt()){
    console.log(personInput1.getInfo());
}
if(prompt(),prompt()){
    console.log(personInput2.getInfo());
}
if(prompt(),prompt(),prompt()){
    console.log(personInput3.getInfo());
}
// console.log(personInput1.getInfo());
// console.log(personInput2.getInfo());
// console.log(personInput3.getInfo());




//c) 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
// function numInput(num) {
//     var say = 1;
//     if (num < 50) {
//         for (i = 0; i < num; i++) {
//             if (i % 3 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num >= 50 && num <= 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 5 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num > 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 8 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
// }
//     numInput(prompt());