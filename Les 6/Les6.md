CMDA201314-Fed2 Les 6
=====================

#Les 6: When all else fails, manipulate the data
**Aan de slag met data: Post data naar de server met Ajax en een Api**

[tShirt](http://www.prettygoodgoods.org/products/117501-manipulate-the-data-tshirt)

###Docenten
* Koop Reynders k.g.reynders@hva.nl   
* Joost Faber j.faber@hva.nl  
* Dennis Tel dennis.tel@hva.nl   
* Nico Brinkkemper n.brinkkemper@hva.nl  

###Lesdoelen

1. Weekly Nerd: Wat is Frontend development? 
2. Leren werken met API's, JSON en AJAX 
3. Data updaten op de server


###Programma (200 minuten)
1. Huishoudelijke mededelingen (10)
2. Opdrachten bespreken (30)
3. Weekly Nerd (30) 
4. Werkopdrachten (120)
5. Terugkijken (10) 

##0. Voorbereiden voor deze les
**Huiswerk voor deze les:**

* Weekly Nerd [les 6](http://weeklynerd.tumblr.com/tagged/fed1314)

* Huiswerk: Werkopdracht 11.3 uit les 5 afmaken. Lesopdracht data van Leaguevine ophalen voor de Game pagina, Schedule pagina en Ranking/Pool pagina (en HTML renderen met je Template engine)

##1. Huishoudelijke mededelingen - 10 minuten (10/200)
**Materiaal:** Papier, pen, beamer 
**Opstelling:** College opstelling

##2. Opdrachten bespreken - 30 minunten (40/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** College opstelling

###Opdrachten

####11.3: 
Hoe kun je JSON  data extern ophalen
en 
Hoe organiseer je deze data in je Webapp
Wat komt waar te staan? verschillende concepten

- Maak een account aan op Leaguevine  
- Bestudeer de API reference van Leaguevine: [Leaguevine API](https://www.leaguevine.com/docs/api/)  
- Bekijk het datamodel van Leaguevine: [Leaguevine Datamodel](https://github.com/CMDA/FED2/tree/master/Les 5/Werkopdrachten/Leaguevine/leaguevine_api_schema.jpg)  
- Haal met behulp van de API data op van ons toernooi: [https://www.leaguevine.com/tournaments/19389/autumn-2013/](https://www.leaguevine.com/tournaments/19389/autumn-2013/) 


##3. De Weekly Nerd - 30 minuten (70/200)
**Materiaal:** Naambordje, 
**Opstelling:** Tafels in de een rondevorm


**Klas 1 leest:** [Front-end Development & Serverside vs Client-side](http://weeklynerd.tumblr.com/post/62974131195/front-end-development-serverside-vs-client-side)

- [Back-end vs. Front-end](http://liquidblog.co.za/2013/back-end-vs-front-end/)
- [Front-end development should cease to be a profession](http://nerd.vasilis.nl/front-end-development-should-cease-to-be-a-profession/)
- [A Proposal: Renaming Backend/Frontend to Application/UI Developers - See more at: http://theothersideofcode.com/renaming-backend-frontend-to-application-ui-developers#sthash.iomZ2eAI.dpuf](http://theothersideofcode.com/renaming-backend-frontend-to-application-ui-developers)
- [Client-side vs. Server-side](http://skillcrush.com/2012/07/30/client-side-vs-server-side/)
- [HTML rendering : client or server ?](http://nicollet.net/2012/07/html-rendering-client-or-server)



**Klas 2 leest:** [National “Security” Agency](http://weeklynerd.tumblr.com/post/63101290908/national-security-agency)

- [What is PRISM](http://gizmodo.com/what-is-prism-511875267)
- [Edward Snowden: the whistleblower behind the NSA surveillance revelations](http://www.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance)
- [Hoofd NSA: surveillanceprogramma's voorkwamen terrorisme in Europa](http://tweakers.net/nieuws/90513/hoofd-nsa-surveillanceprogrammas-voorkwamen-terrorisme-in-europa.html)
- [How NSA’s Prism affects you, and how to protect yourself from being spied on](http://www.extremetech.com/extreme/157777-how-nsas-prism-affects-you-and-how-to-protect-yourself-from-being-spied-on/2)




##4. Werkopdrachten - 120 minuten (190/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** Werkeilanden

###Opdrachten

####12.1:Data posten
Om scores bij te kunnen houden in de Web App moet er een post worden gedaan naar de "post game scores" url bij de API van Leaguevine. Er kan alleen gepost worden naar de server als er een access token wordt meegegeven middels een request header. Verplichte velden bij het posten van een score zijn: "game_id", "team_1_score", "team_2_score" en "is_final".

####12.2:Callback en Feedback
Zodra er data opgehaald of gepost wordt van en naar de API, kan het zijn dat er gewacht moet worden op de callback. Voeg feedback (bijvoorbeeld een lader) toe aan je applicatie zodat de gebruiker weet waar op gewacht wordt.

####12.3:LocalStorage en synchronisatie  
Om de performance van je Web App te verbeteren kan je data in/uit localStorage opslaan/ophalen. Met een synchronisatie script kijk je of er "onderwater" updates met de API nodig zijn.

##5. Terugkijken - 10 minuten (200/200)
**Materiaal** - 
**Opstelling** -  

**Lesdoelen: Wat hebben we behandeld? **
Zie lesdoelen:

1. Weekly Nerd: Wat is Frontend development? 
2. Leren werken met API's, JSON en AJAX 
3. Data updaten op de server


**Werkwijze en planning van het vak**

Je hebt nu een webapp die data van Leaguevie gebruikt. De webapp bestaat uit de 'pagina's' (lees: onderdelen)

1. Schedule pagina (hoe laat speelt wie tegen wie?)
2. Game/scoring pagina (scores bijhouden van een wedstrijd)
3. Ranking/Pool pagina (lijst teams in een pool)


**Huiswerk aankondigen**

Wie doen de Weekly Nerd voor les 7

	Klas 1
	- Bart simons
	- Maik Leenarts
	- Sander Verwaart
	- Roan Zuman
	- Milan Basink
	- Paul rookhuizen
	- Justin (?)
	
	Klas 2
	- Marciano
	- Lex
	- Mehdi
	- Steve
	- Yarich
	- Benjamin
	
Wie doet de Weekly Nerd voor les 8?

	Klas 1
	- volgende week afspreken
	-

	Klas 2
	- Sjoerd V
	- Ted
	- Marijke
	- Rowan


	


Huiswerk: Werkopdracht 12.1 & 12.2 van les 6 afmaken. (Lesopdracht data posten) Begin van les 7 gaan we deze opdracht bespreken. Daarna gaan we aan de interface klussen


Tip: Werk je Webapp uit in een breakdown. 

- Uit welke onderdelen bestaat je Webapp? Werk een screen flow uit én een technische breakdown:
	- Hoe kom je per 'pagina' aan de data die je nodig hebt? Welke call doe je naar de Leaguevine API? 
	- Als je een POST score doet welke informatie heb je dan nodig? game_id, team_1_score, team_2_score, is_final (boolean)
	- Als je een score post heb je een acces_token nodig. Gebruik deze 82996312dc

















