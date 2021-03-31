//First-Class Functions หมายถึงการที่เราสามารถจับฟังก์ชันยัดลงไปเป็นตัวแปรได้
//Example
const sayHello = function (name) {
  //การประกาศตัวแปรให้เป็นเก็บ function
  console.log(`hello ${name}`);
};
sayHello('name'); //การเรียกใช้ function
