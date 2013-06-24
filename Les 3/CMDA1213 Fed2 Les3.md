CMDA201213-Fed2 Les 3
=====================

#Les 3: MVC
**MVC in JavaScript: introductie**

Werken met een MVC framework (les 3) 

[tShirt_forkYou](http://shop.github.com/products/fork-you-shirt-mens-medium)

###Docenten
Koop Reynders k.g.reynders@hva.nl 

Joost Faber j.faber@hva.nl

###Lesdoelen
1. Introductie MVC
2. Wat is Frontend development?
3. Werken met Javascript MVC Backbone: Het Model, de View, Template en Collection
4. Samenwerken met Github


###Programma (200 minuten)

1. Huishoudelijke mededelingen (10) 
2. College (20)
3. Weekly Nerd (30) 
4. Werkopdrachten (120)
5. Terugkijken (10) 
		
		

##1. Huishoudelijke mededelingen - 10 minuten (10/200)
**Materiaal:** - 
**Opstelling:** College opstelling

Wat hebben we gedaan
Wat gaan we doen
Programma voor vandaag


##2. College - 20 minuten (30/200)
**Materiaal:** Papier en pen voor aantekeningen
**Opstelling:** Rijen, college opstelling

Van objecten voorbeeld IcanHasGeo naar MVC structuur.

Bedrijfsstrategieën voor de Lead developer:

- Voordelen Frameworks/MVC
- Nadelen Framworks/MVC, denk aan bedrijven en keuzes voor een framework.
Dit moet bijdragen aan strategische keuzes die de (technische) studenten moeten kunnen maken aangaande teamwerk, workflow, techniek in het bedrijfsleven
- Versie beheer, bugtracking > Github



##3. De Weekly Nerd - 30 minuten (60/200)
**Materiaal:** -
**Opstelling:** klas in 2 groepen? 2 grote eilanden

###Mobile Fed (groep 1.1)
De eerste editie van de Weekley Nerd door studenten is aangebroken. Voor deze editie hebben we de 5 artikelen geselecteerd die interessant zijn voor de front-end developer in het mobiele werkveld. articles.forEach(read(), article){}

####JS, Good but not always
Javascript: Interactie op de frontend (en een beetje CSS en nog steeds Flash en ...)

The problem

 1. Usr verwacht een native app, die kun je niet waarmaken met JavaScipt
 2. sodf 
 3. JavaScript werkt niet crossbrowser hetzelfde
 4. Kost veel meer tijd om te testen, al die apparaten
 5. "If in doubt leave out" < is dit een JavaScript specifiek probleem?

The solution

 1. Ensure all features
 2. Mobile First, reduce complexity
 3. Vraag je af: Kost het meer om extra complexitiet te bouwen?
 4. Test om de waarde van feautures te bepalen
 5. Toenemende complexiteit zal je product duurder maken
 
Don't try to compete with native applications and when in doubt, leave it out.

####YUIConf 2010 Panel Discussion: The Future of Frontend Engineering

####Early findings: 97% of mobile end-user response time happens at the front end

####CSS3 & HTML5 & JS against Native

####We have to optimize for mobile


###Concurrenten van Javascript (Groep 2.1)
Concurrenten van Javascript? Dit vak gaat toch alleen over javascript zelf? Waarom moeten we dan iets lezen over andere script-talen?

####Google Dart
What on earth is Google Dart?
Google tries to solve the issues that exist in JavaScript

 - This all sounds great. The developer community must be overjoyed!
 - But the developers of web browsers must at least be pleased?
 

####TypeScript
Microsoft TypeScript: the JavaScript we need, or a solution looking for a problem?

####The Next Big Language
Wat wordt de nieuwe frontend taal? Waar moet deze aan voldoen?
Rule #1: C-like syntax
Rule #2: Dynamic typing with optional static types.
Rule #3: Performance
Rule #4: Tools
Rule #5: Kitchen Sink
Rule #6: Multi-Platform

Wanneer is een taal goed en wanneer slecht?
Moet een taal malti-platform zijn?



##4. Werkopdrachten - 130 minuten (190/200)
**Materiaal** Laptop en internet
**Opstelling** Werkeilanden voor team van 3


Deze les gaan we beginnen met het Backbone skeleton opzetten van de Scoring app.

In les 3 behandelen we: 

 1. **mvc1** Teams maken en Repo op Github
 2. **mvc2** Breakdown maken van de 3 pagina's Schedule.html, Ranking.html, Game.html
 3. **mvc3** Backbone skeleton opzetten, model, collection, view, template in je App.js
 4. **mvc4** Het script omzetten naar losse bestanden, Structuur als namespace en/of Global

Volgende week behandelen we:

 5. **mvc5** Filteren & ordenen van data-lijst
 6. **mvc6** Events
 7. **mvc7** Toevoegen & Weghalen van elementen in de data-lijst
 8. **mvc6** Werken met een API, Json binnenhalen/GET

	

###mvc1: teams maken en Repo opzetten op Github (20 minuten)

Repo aanmaken met het team van 3 personen
Backbone neerzetten + folder structuur
Alle teamleden werken aan 1 pagina: Schedule, Ranking of Game
Dus maak je nu ook per pagina een eigen App.js functies aan appSchedule.js, appRanking.js en appGame.js
Dit doe je omdat je met Github versiecontrol gaat regelen, dan wil je niet in hetzelfde App.js werken voor de verschillende pagina's.

Zorg dat je op Github een master hebt staan en werk zelf allemaal in je eigen branch. Deze synchroniseer je naar de master als je aanpassingen hebt gedaan. Kijk [hier voor een uitleg van Donny](http://cl.ly/2Z0d2I114514)

Na les 3 en 4 ziet je mappen structuur er ongeveer zo uit:

	(- index.html)
	- game.html
	- ranking.html
	- schedule.html
		- media
		- css
		- js
			- app
				- views
					- team.js
					- ranking.js
					- schedule.js
				- models
					- team.js
					- ranking.js
					- schedule.js
				(- app.js) 
				- appGame.js
				- appRanking.js
				- appSchedule.js
			- lib
				- backbone 0.9.dinges
				- jquery
				- underscore

[Github]
Maak je eigen branch. Dit is een afgeleide van de master.

**Na een aanpassing doe je: Remote branch synchroniseren**
Dit doe je als je wijzigingen in je branch ook remote wil synchroniseren

git add . (wijzigingen toevoegen aan je lokale branch)
git commit -m "commit comment" (wijzigingen klaar zetten om te synchroniseren)
git push origin branchNaam (wijzigingen toevoegen aan remote branch)

**Master branch synchroniseren met je eigen branch**
Dit doe je als je wijzigingen in je eigen branch naar de master wil synchroniseren. Daarna kan je teamgenoot ook deze wijzigingen ophalen

git checkout master (lokaal in de master gaan staan)
git merge branchNaam (Master en je eigen branch synchroniseren)
git push origin master (wijzigingen toevoegen aan remote master branch)


**Wijzigingen in de Master branch ophalen**

git checkout master 
git pull 







###mvc2: Breakdown van de app (20 minuten)

Breakdown van eindproduct:
Het Eindproduct scoring app voor sport toernooi op basis van de [Leaguevine API](https://www.leaguevine.com/tournaments/18519/threesome/) 
Bekijk [de mobile scoring App](https://m.leaguevine.com) die Leaguevine zelf heeft gemaakt

Je develop team bestaat uit 3 leden die voor deeltoets 1 allemaal een eigen pagina gaan maken:

1. Game-pagina - Wedstrijden met sets en scores
2. Ranking-pagina - Pools & Brackets
3. Schedule-pagina - Lijst van westrijden per pool of bracket



###mvc3: Backbone skeleton opzetten (90 minuten)

Werken aan je app,js met daarin
een model
een collection
de view
de template definite in de html

Op Github staat hoe je pagina eruit moet komen te zien:

1. [Game-pagina](https://github.com/KoopReynders/CMDA1213-Fed2/blob/master/Les%203/Lesopdrachten/Backbone%20Skeleton/game.html)
2. [Ranking-pagina](https://github.com/KoopReynders/CMDA1213-Fed2/blob/master/Les%203/Lesopdrachten/Backbone%20Skeleton/ranking.html)
3. [Schedule-pagina](https://github.com/KoopReynders/CMDA1213-Fed2/blob/master/Les%203/Lesopdrachten/Backbone%20Skeleton/schedule.html)

Op Github staat het voorbeeld dat we in de les hebben behandeld
Backbone Model, Views, Collection, Template [voorbeeld](https://github.com/KoopReynders/CMDA1213-Fed2/blob/master/Les%203/Lesopdrachten/Backbone%20Tournaments/js/app/app.js)

###mvc4: Het script omzetten naar losse bestanden (90 minuten)

Als je met meerdere developers aan één project werkt wil je je code duidelijk structuren en opdelen in verschillende files. Net zoals we in les 2 het IcanHasGeo script hebben omgezet in objecten moet je nu je app.js script opdelen in verschillende files.
De model bewaar je in de map /js/app/model/
De View bewaar je in /js/app/view/
De collectie in /js/app/collectie/
en de tempate definieer je in de html zelf.

Als je je script omzet in losse files, let dan goedop de scoping. Bedenk of je alle globaal wil definieren of in een namespace. Lees bijvoorbeeld [hier](http://elegantcode.com/2011/01/26/basic-javascript-part-8-namespaces/) meer over je code opzetten in een namespace.

Op Github staat een voorbeeld van het Backbonen project in een [globale scope](https://github.com/KoopReynders/CMDA1213-Fed2/tree/master/Les%203/Lesopdrachten/Backbone%20Tournaments%20global) en in een [namespace](https://github.com/KoopReynders/CMDA1213-Fed2/tree/master/Les%203/Lesopdrachten/Backbone%20Tournaments%20namespace) 


##5. Terugkijken - 10 minuten (200/200)
**Materiaal** Intranet
**Opstelling** - 

Lesdoelen: Wat hebben we behandeld? 

Werkwijze en planning van het vak > op naar deeltoets1

Huiswerk aankondigen: Hoe ver moet je zijn?
Doe nog een keer huiswerk voor les 3 en zorg dat je app met losse files maakt. Model. Collection. View en template

[Tutsplus](http://net.tutsplus.com/?s=backbone)






