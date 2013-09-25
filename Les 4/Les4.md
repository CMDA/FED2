CMDA201314-Fed2 Les 4
=====================

#Les 4: Toon ruggegraat
** Extreme programming: hoe bouw je een web app skeleton? (herhaling les 3)**

Hoe bouw je een gestructureerde web applicatie? Wat is de basis opzet van de applicatie en welke micro libraries heb je nodig?

[tShirt_toonRuggegraat](http://www.spreadshirt.com/black-backbone-women-s-t-shirts-C3376A4206223)

###Docenten
Koop Reynders k.g.reynders@hva.nl   
Joost Faber j.faber@hva.nl  
Dennis Tel dennis.tel@hva.nl   
Nico Brinkkemper n.brinkkemper@hva.nl  

###Lesdoelen
1. Weekly Nerd: Wat is Frontend development? 
2. Gestructureerd programmeren in JavaScript 
3. Basis web app skeleton op kunnen zetten 
4. Micro libs kunnen implementeren 
5. Elkaars code kunnen reviewen 

###Programma (200 minuten)

1. Huishoudelijke mededelingen (5) 
2. Extreme programming, zelfstandig werken (code review) (30)
3. Weekly Nerd (30) 
4. Werkopdrachten (120)
5. Terugkijken & deeltoets 1 bespreken (15)
			
	
##0. Voorbereiden voor deze les

**Huiswerk voor les 4:**

* Weekly Nerd [les 4](http://weeklynerd.tumblr.com/tagged/fed1314)

* Huiswerk: Maak een breakdown van de score app en zet de basis voor deze app op met gestructureerde javascript code en micro libraries (dom ready, router, template engine, selector engine). Zie werkopdrachten 6, 7, 8 & 9 uit les 3.

* Nog meer leren over JavaScript?
Kijk ook eens bij de JavaScript Is Sexy [javascriptissexy.com](javascriptissexy.com)


##1. Huishoudelijke mededelingen - 10 minuten (5/200)
**Materiaal:** - 
**Opstelling:** College opstelling

Wat hebben we gedaan
Wat gaan we doen
Programma voor vandaag


##2. Opdrachten bespreken - 30 minuten (35/200)
**Materiaal:** Papier en pen voor aantekeningen
**Opstelling:** Rijen, college opstelling

####6: Breakdown maken van de 3 pagina's voor de score app: schedule.html, ranking.html, game.html
Maak aan de hand van de voorbeeld html pagina's een breakdown van de score app. Welke pagina's zijn er? Hoe noem je je namespace? Welke functionaliteiten gaat de app per pagina bevatten?

####7: Score app skeleton opzetten 
Maak een eerste opzet van je score app. Het skeleton bevat deze elementen:  
- Namespace  
- Self invoking anonymous function  
- Controller object  
- Dom ready script (micro library: 'ready') 

Code van student bespreken?

##3. De Weekly Nerd - 30 minuten (65/200)
**Materiaal:** -
**Opstelling:** klas in 3 groepen van 15


##4. Werkopdrachten - 120 minuten (185/200)
**Materiaal** Laptop en internet  
**Opstelling** Werkeilanden 2- / 3-tallen


###Opdrachten


####8: Router
Voeg aan je score app een router (micro library: 'routie') toe met routes naar de verschillende pagina's

####9: Templates
Voeg aan je applicatie een template script toe (micro library: 'transparancy'). Genereer met het template script en de data-objecten (te vinden in de broncode van de voorbeeld html pagina's) de html van de verschillende pagina's.

####10: Code review
Review elkaars code via Github.

**Reviewer:**

1. Ga naar project/repository van peer programmer op Guthub
2. Open het bestand dat je wil reviewen
3. Bestudeer de code
4. Kies 'Edit' om aanpassingen te kunnen doen
5. Na eventuele aanpassingen voeg je onderaan een beschrijving van de aanpassing toe en kies je voor 'Propose file change'
6. Kies vervolgens 'Send pull request'

**Code monkie:**
1. In je mail heb je een notificatie gekregen met een voorstel voor een aanpassing aan een bestand (een 'Pull request'). Volg de link
2. Bekijk of je de aanpassing wil doorvoeren ('File changes')
3. Merge de pull request
4. 

####11: Data ophalen vanaf API (les 5)
Voeg aan je applicatie een ajax script toe (micro library: 'microajax') en haal data op vanaf de api url: http://dennistel.nl/movies. Voeg een pagina 'films' toe aan je applicatie en render de html met de opgehaalde data op deze pagina.  

#####Snelle studenten
**Klas 1 **

* Mik de Vries
* Léon Martens
* Sanne 't Hooft
* Gavin Lighart
* Levi Zimmerman
* Roan Zuman 
* Senny Kalidien
* Alexander van der Mije
* David den Toom <
* Sander Vervaart 
* Justin Lek < 

**Klas 2**

* Machiel Banen <
* David de Lusenet
* Rowan Blokdijk
* Frank Kalk 
* Ted Voorend
* Lars Hisken <
* Jim van Zummeren 
* Alexander Eerenberg
* Jesse Eikema
* Jordy Pauw
* Guus Kolk
* Jurgen Ploeger
* Jip Roos <
* Marijke Delder
* Ali Sahin
* Nan Damhuis
* Jurian Koning
* Rizki Calame <
* Hidde Statema <
* Michelle Gemmeke
* Jeffrey Bouva <



###Wat hebben we gedaan?

Voor de score app hebben we een eerste basis structuur opgezet, het skeleton. Waarin we routes naar de verschillende pagina's hebben gedfinieerd en data met behulp van templates omzetten naar html.

Volgende week gaan we werken met een API, Json binnenhalen /GET. Data komt dan niet meer uit een local data object, maar vanaf een server.

###Deeltoets 1 uitleggen (10 minuten)

**Opdracht**

Zie deeltoets beschrijving op [intranet](http://intra.iam.hva.nl/content/1314/verdieping2/frontend_2//lesprogramma/#deeltoets1)

Je code moet op Github staan én je moet je code meenemen in een editor op een laptop

De Webapp is een single page website die het doet in de browser, De Webapp bestaat minimaal uit een Schedule, Game en Ranking deel

De Webapp is gestructureerd opgebouwd met een Namespace, een anonymous self invoking function en een controler object

Er is gebruik gemaakt van een Router waarmee je tussen de verschillende onderdelen kan navigeren

De HTML wordt per onderdeel gerenderd met behulp van een templating-library. De data komt uit een statisch data object

Student kan de code van een mede student uitleggen en waar nodig verbeteren.

**Materiaal**
0p [Github](https://github.com/CMDA/FED2/tree/master/Deeltoets%201)


**Criteria**
Voorbeeld vragen:
- Waarom is het af te raden om veel globale variabelen en objecten te gebruiken- Leg uit wat een closure is. Wijs aan in de code van de andere student- Wat is het verschil tussen een object literal en een object constructor? 

Lees meer op Javascriptissexy over:[OOP in javascript](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)

[wat is 'this'](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

[wat is object literal?](http://javascriptissexy.com/javascript-objects-in-detail/)

[Closure](http://javascriptissexy.com/understand-javascript-closures-with-ease/)



**Rooster op Moodle**
Iedereen erin?




##5. Terugkijken - 5 minuten (200/200)
**Materiaal** Intranet
**Opstelling** - 

Lesdoelen: Wat hebben we behandeld? 

Werkwijze en planning van het vak > op naar deeltoets1


**Huiswerk aankondigen: Hoe ver moet je zijn?**

Aanstaande donderdag heb je een Web app skeleton. Tijdens les 5 gaan we leren met Ajax Json data laden van een externe server. 


Weekly Nerd [les 5](http://weeklynerd.tumblr.com/tagged/fed1314)


Redactie Klas 1, Les 5
Gavin
.. ?



Redactie Klas 1, Les 6
Jeffrey
Ivo
Raymond
.. ?


Redactie Klas 2, Les 5
Ron
Marvin
David
Jesse
Jeffrey


Redactie Klas 2, Les 6
Lars
Jip
Frank
Claire
Mark H









