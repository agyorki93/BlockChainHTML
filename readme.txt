Fájlstruktúra:

Főmappa
- index.html --> frontend, ahol a felhasználó beviheti vizuálisan felület a kért adatokat
- style.css --> sima css, ahol a design be van állítva, egyelőre csak butított verzió, későbbiekben "vizuálisabbra" lesz állítva, csak a minimális designt tartalmazza

JS mappa
- blockchain.js 
	Data osztály létrehozása, 
	calculateHash():  a hashelés megalkotása (return SHA256(name+street+.....+phonenumber).toString();
	signTransaction(signingKey()) : a tranzakció aláírásának folyamatát valósítja meg a blokkláncon
	Blokk osztály létrehozása, 
	mineBlock : már nem fontos, az előző prototípusból bent maradt mechanizmus "bányász"
	Blockchain osztály létrehozása, működésének beállítása
- keygenerator.js 
	kulcspár generálás
- formhandler.js
	saveData function létrehozása: a beviteli adatokat összegyűjti a data constructorban, majd azokat a "dataHash" constructorba tölti hashelve (calculateHash-el),
									végül meghívja az addBlock functiont, 
	displayBlock function létrehozása: hivatott (lenne) a blokklánc egy blokkjának adatait megjeleníteni a felhasználói felületen 
- main.js
	updateDataContainer : feltölti a datacontainert
	
	
A kód alapból így nem futott, úgyhogy neten találtak alapján a "browserify" telepítése után, össze lettek fűzve a modulok és fájlok a bundle.js-ben.
