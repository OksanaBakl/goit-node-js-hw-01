# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list

 <img src="./joxiScreen/1.jpg"  alt="action list">

# Получаем контакт по id

node index.js --action get --id 5
<img src="./joxiScreen/2.jpg"  alt="action get">

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
<img src="./joxiScreen/3.jpg"  alt="action add">

# Удаляем контакт

node index.js --action remove --id=3
<img src="./joxiScreen/4.jpg"  alt="action remove">
