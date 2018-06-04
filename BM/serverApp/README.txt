Uputstvo za koriscenje
-Instalirati NodeJS

-Instaliranje modula:
    npm -install )

-Pokretanje Dev servera
    npm run build - podize server
    npm run build:prod - ne podize server vec samo generise fajlove
    localhost:8080/
 
-Pokretanje Node servera
    npm start - podize server
    localhost:3030/products -get metoda proverava da li radi server
    localhost:3030/products -post metoda upisuje objekat u mongodb
    localhost:3030/products/all - get metoda vraca sve podatke iz baze
    za sve ostale izlazi error poruka

Funkcionalnosti:
-Webpack
    -Sakuplja sve fajlove,minimizuje ih i prebacuje ih u 1 html, 1 css i 1js.
    Ne podrzava SASS (za sada)
-babel - transpajlira ES6 u ES5
-ubacen je modul za mapiranje JS i CSSa
-sakuplja sve slike i stavlja ih u img folder

-instaliran nodemon za kontrolu NodeJS-a
-instaliran body parser
-odradjena podrska za cros origin resource sharing
-NodeJS povezan sa online MongoDBom
