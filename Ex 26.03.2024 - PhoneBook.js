function phoneBook(input) {
let phonebook = {};

for (let info of input) {
    let [name, number] = info.split(` `)
phonebook[name] = number
}
for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
}
    console.log();
}
phoneBook(['Gosho 0890234554',
'Peter 0877547887',
'Svilen 0878123456',
'Magda 0890123456']
);