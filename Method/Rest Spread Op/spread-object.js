let objectList={
name: 'Dipesh Sharma',
hometown: 'Baglunge Thito',
Passion: 'Software Development',
Age: 20,
isNepali: true,
isModern: false
}



let newSpread={...objectList, lifeExperience: "Average"}
console.log(newSpread);
