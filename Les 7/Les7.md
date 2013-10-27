CMDA201314-Fed2 Les 7
=====================

#Les 7: Kiss My CSS
*Interface & Interactiepatronen*

[tShirt Kss My CSS](http://www.neatoshop.com/product/Kiss-My-CSS)

les 7 gaat over het programmeren van de interface en interactiepatronen. In de les werk je verder aan de eindopdracht en gaan we een screen-flow en technische breakdown maken. Hoe komt een gebruiker van de ene state naar de andere? Hoe programmeer je feedback als je met Ajax data van de server ophaalt en je moet wachten?


###Docenten
* Koop Reynders k.g.reynders@hva.nl   
* Joost Faber j.faber@hva.nl  
* Dennis Tel dennis.tel@hva.nl   
* Nico Brinkkemper n.brinkkemper@hva.nl  

###Lesdoelen

1. Weekly Nerd: Wat is Frontend development? 
2. Data updaten op de server
3. Feedback scripten
4. Interface patronen toepassen


###Programma (200 minuten)
1. Huishoudelijke mededelingen (10)
2. Weekly Nerd (30) 
3. Werkopdrachten (100)
4. Terugkijken (10) 


##0. Voorbereiden voor deze les
**Huiswerk voor deze les:**

Huiswerk: Werkopdracht 12.1 & 12.2 van les 6 afmaken. (Lesopdracht data posten) Aan het begin van deze les gaan we de opdracht bespreken. 


Tip: Werk je Webapp uit in een breakdown. 

- Uit welke onderdelen bestaat je Webapp? Werk een screen flow uit én een technische breakdown:
- Hoe kom je per 'pagina' aan de data die je nodig hebt? Welke call doe je naar de Leaguevine API? 
- Als je een POST score doet welke informatie heb je dan nodig? game_id, team_1_score, team_2_score, is_final (boolean)
- Als je een score post heb je een acces_token nodig. Gebruik deze 82996312dc. Beter nog is om je eigen token aan te maken:

		Leaguevine 
		So here's how your students should go about creating their own access tokens:
		- Create a regular user account on Leaguevine
		- Create an app. Your students can discover this link themselves if they are logged in and click the "API" link at the bottom.
		- Follow Method 1 in our Authentication Docs to obtain an access token that will last for 5 years.	


##1. Huishoudelijke mededelingen - 10 minuten (10/200)
**Materiaal:** Papier, pen, beamer 
**Opstelling:** College opstelling


##2. Opdrachten bespreken - 30 minunten (40/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** College opstelling

###Opdrachten

####12.1:Data posten
Om scores bij te kunnen houden in de Web App moet er een post worden gedaan naar de "post game scores" url bij de API van Leaguevine. 

####12.2:Callback en Feedback
Zodra er data opgehaald of gepost wordt van en naar de API, kan het zijn dat er gewacht moet worden op de callback. Voeg feedback (bijvoorbeeld een lader) toe aan je applicatie zodat de gebruiker weet waar op gewacht wordt.

Hoe maak je de laad tijd korter? Geef specifieke velden door als je Leaguevinen Get doet. Scheelt zomaar 2,5 seconde.
Dat die je binnenhaalt stop je in je eigen darta object.



##2. De Weekly Nerd - 30 minuten (70/200)
**Materiaal:** Naambordje, 
**Opstelling:** Tafels in de een rondevorm




##3. Werkopdrachten - 120 minuten (190/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** Werkeilanden


###Opdrachten

Rondje maken, hoe ver is iedereen
en hoe goed snappen ze alles, schaal 1,2,3,4,5


####13: Breakdown maken (30 minuten)
- Screen flow: Uit welke onderdelen bestaat je Webapp? 

- Technsiche breakdown: Hoe kom je per 'pagina' aan de data die je nodig hebt? Hoe ziet je data object eruit? Welke call doe je naar de Leaguevine API? Welke informatie heb je dan nodig? game_id, team_1_score, team_2_score, is_final (boolean)? 


####14: Interactie patronen toepassen

* Scroll to navigatie
* Page-flipper
* Pull-to-refresh


##4. Terugkijken - 10 minuten (200/200)
**Materiaal** - 
**Opstelling** -  

**Lesdoelen: Wat hebben we behandeld? **

2. Data updaten op de server - gebruik pool id & filters !
3. Feedback scripten - als je a-synchroon (ajax) data gaat ophalen geef dan feedback terug aan de gebruiker
4. Interface patronen toepassen <<< ? hoe ver ben jij? Je hebt nu een Screen flow en Technische breakdown.




**Werkwijze en planning van het vak**

Les 8 gaan we verder met voorbeelden van Interface en interactie patronen.

In les 8 doen we ook een code review via Github. Al je code moet op Github staan

Volgende week maandag 21 oktober klusles van 1000-1400


De **eindopdracht**: is een WebApp voor de mobiel die minimaal bestaat uit 3 delen:

- Schedule
- Pool/ranking 
- Game/score

De data voor de WebApp komt van het toernooi '[Autumn 2013](https://www.leaguevine.com/tournaments/19389/autumn-2013/pools/)' dat op Leaguevine wordt gehost.

De code van de WebApp is gestructureerd opgebouwd. Er is gebruik gemaakt van de verschillende design principes en best practices die in de lessen zijn behandeld, bijvoorbeeld namespace, controler, page render, change, events en een data object. De data die je gebruikt wordt geladen en gepost met behulp van ajax en json-data. In je code maak je gebruik van duidelijke comments en je kan laten zien hoe je de Console gebruikt in je werkprocess en hoe de Network werkt in de Inspect elements

De benodigde functionaliteiten heb je uitgewerkt in een screen flow en technische breakdown. De functionaliteiten heb je geprogrammeerd met behulp van verschillende js micro libraries, bijvoorbeeld een dom-ready library, templating, selector engine en interface/interactie api's.

Naast bovenstaande zit in de WebApp minimaal:

- Feedback naar de gebruiker als je data laadt, bv loading feedback of een tekstuele feedback als er json-data wordt gesynchroniseerd
- Functionele animatie, bv een  Scroll-to navigatie voor elke state
- Gebruik van een gesture navigatie, bv swipe om games te scoren




**Huiswerk aankondigen**

* Je hebt minimaal 3 'paginas' die gerendered met Leaguevine data
	
	- Schedule
	- Pool/ranking 
	- Game/score
	
* Je hebt een postscore functionaliteit

* Je hebt feedback naar de user als er data wordt gestuurd en/of opgehaald van Leaguevine


* Interface & interactie programmeren. Webapp moet het doen op je mobiel!
	- Hoe ga je van pagina naar pagina? scroll-to-navigate
	- Animaties toevoegen? page-flipper
	- Data synchroniseren? pull-to-refresh



