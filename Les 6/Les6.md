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
2. Weekly Nerd (30) 
3. Werkopdrachten (100)
4. Terugkijken (10) 

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


##2. De Weekly Nerd - 30 minuten (70/200)
**Materiaal:** Naambordje, 
**Opstelling:** Tafels in de een rondevorm

##3. Werkopdrachten - 120 minuten (190/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** Werkeilanden

###Opdrachten

####12.1:Data posten
Om scores bij te kunnen houden in de Web App moet er een post worden gedaan naar de "post game scores" url bij de API van Leaguevine. Er kan alleen gepost worden naar de server als er een access token wordt meegegeven middels een request header. Verplichte velden bij het posten van een score zijn: "game_id", "team_1_score", "team_2_score" en "is_final".

####12.2:Callback en Feedback
Zodra er data opgehaald of gepost wordt van en naar de API, kan het zijn dat er gewacht moet worden op de callback. Voeg feedback (bijvoorbeeld een lader) toe aan je applicatie zodat de gebruiker weet waar op gewacht wordt.

####12.3:LocalStorage en synchronisatie  
Om de performance van je Web App te verbeteren kan je data in/uit localStorage opslaan/ophalen. Met een synchronisatie script kijk je of er "onderwater" updates met de API nodig zijn.

##4. Terugkijken - 10 minuten (200/200)
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

Huiswerk: Werkopdracht 12.1 & 12.2 van les 6 afmaken. Lesopdracht data posten. 

Tip: Werk je Webapp uit in een breakdown. 

- Uit welke onderdelen bestaat je Webapp? Werk een screen flow uit en een technische breakdown:
	- Hoe kom je per 'pagina' aan de data die je nodig hebt? Welke call doe je naar de Leaguevine API? 
	- Als je een POST score doet welke informatie heb je dan nodig? game_id, team_1_score, team_2_score, is_final (boolean)
	- Als je een score post heb je een acces_token nodig. Gebruik deze 82996312dc




