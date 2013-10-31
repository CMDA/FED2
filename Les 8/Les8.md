CMDA201314-Fed2 Les 8
=====================

#Les 8: Got Code?
*Interface & Interactiepatronen*

[tShirt Got Code?](http://www.zazzle.com/got_code_shirt-235181433578776102)
les 8 gaat over het programmeren van de interface en interactiepatronen. In de les werk je verder aan de eindopdracht en gaan we functionele animaties en gestures implementeren. 

[T-Shirt It must be User error](http://www.zazzle.com/it_must_be_user_error_tees-235797644708160457)
Ook gaan we tijd besteden aan een Code review. Doet je Webapp het? 


###Docenten
* Koop Reynders k.g.reynders@hva.nl   
* Joost Faber j.faber@hva.nl  
* Dennis Tel dennis.tel@hva.nl   
* Nico Brinkkemper n.brinkkemper@hva.nl  

###Lesdoelen

1. Code review
2. Interactie patronen toepassen
3. JavaScript performance optimalisaties
4. Weekly Nerd, wat is een Front-End Developer



###Programma (200 minuten)
1. Huishoudelijke mededelingen (10)
2. Opdrachten bespreken (30)
3. Weekly Nerd (30) 
3. Werkopdrachten (100)
4. Terugkijken (10) 


##0. Voorbereiden voor deze les
**Huiswerk voor deze les:**

* Weekly Nerd [les 8](http://weeklynerd.tumblr.com/tagged/fed1314)

* Je hebt minimaal 3 'paginas' die gerendered worden met Leaguevine data
	- Schedule
	- Pool/ranking 
	- Game/score
	
* Je hebt een postscore functionaliteit

* Je hebt feedback naar de user als er data wordt gestuurd en/of opgehaald van Leaguevine

* Interface & interactie programmeren. Webapp moet het doen op je mobiel!
	- Hoe ga je van pagina naar pagina? scroll-to-navigate
	- Animaties toevoegen? page-flipper
	- Data synchroniseren? pull-to-refresh



##1. Huishoudelijke mededelingen - 10 minuten (10/200)
**Materiaal:** Papier, pen, beamer 
**Opstelling:** College opstelling


##2. Opdrachten bespreken - 30 minunten (40/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** College opstelling

###Opdrachten

####14: Interactie patronen toepassen

* Scroll to navigatie
* Page-flipper
* Pull-to-refresh


##2. De Weekly Nerd - 30 minuten (70/200)
**Materiaal:** Naambordje, 
**Opstelling:** Tafels in de een rondevorm




##3. Werkopdrachten - 120 minuten (190/200)
**Materiaal:** Laptop, beamer, internet
**Opstelling:** Werkeilanden


###Opdrachten

####15: Code review via Github
Review elkaars code in tweetallen via Github. Doe dit door middel van Pull Request. De code review (uitvoeren/ontvangen) is een AVV voor de eindtoets.

Review elkaars code via Github.

Reviewer:

Ga naar project/repository van peer programmer op Guthub
Open het bestand dat je wil reviewen
Bestudeer de code
Kies 'Edit' om aanpassingen te kunnen doen
Na eventuele aanpassingen voeg je onderaan een beschrijving van de aanpassing toe en kies je voor 'Propose file change'
Kies vervolgens 'Send pull request'
Code monkie: 1. In je mail heb je een notificatie gekregen met een voorstel voor een aanpassing aan een bestand (een 'Pull request'). Volg de link 2. Bekijk of je de aanpassing wil doorvoeren ('File changes') 3. Merge de pull request 4.

Let bij de code review op o.a. deze best practices:

* Don't use global variables/objects
* Use short clear (meaningful) names
* Constructor function start with capital
* Constants with all captials
* camelCase the rest
* Place external scripts at the bottom of the page
* Comment your code
* Indent your code
* ["Best Practices for a Faster Web App with HTML5"](http://www.html5rocks.com/en/tutorials/speed/quick/)

####16: Tweak 'n Tune de interface
Verder werken aan de interface en interactie patronen

####17: JavaScript performance optimalisaties (extra)
* Experimenteer met de mogelijkheden van de HTML 5 api's [LocalStorage](http://www.html5rocks.com/en/tutorials/offline/whats-offline/) en [Webworkers](http://www.html5rocks.com/en/tutorials/workers/basics/)
* Algemene performance optimalisaties voor het web: ["Make The Web Faster"](https://developers.google.com/speed/articles/)
* En een advanced article: ["Improving the Performance of your HTML5 App"](http://www.html5rocks.com/en/tutorials/speed/html5/)




##4. Terugkijken - 10 minuten (200/200)
**Materiaal** - 
**Opstelling** -  

**Lesdoelen: Wat hebben we behandeld in de hele reeks? **

[Intentie van het vak](http://intra.iam.hva.nl/content/1314/verdieping2/frontend_2/studiegids/)

Ook willen we je kennis en vaardigheden bieden om je verder te ontwikkelen als [Frontend developer](http://intra.iam.hva.nl/content/algemeen/beroepsrollen/frontend_developer/) Ook door deuren open te zetten naar meer literatuur, tools, werkmethoden, werkwijzen …

Wat is een Frontend developer

Maar ook, als je de sprong hebt gewaagd, om nog beter te worden als  [interaction designer](http://intra.iam.hva.nl/content/algemeen/beroepsrollen/interaction_designer/) en/of [Interface designer](http://intra.iam.hva.nl/content/algemeen/beroepsrollen/visual_interface_designer/) en misschien zelfs [Content designer](http://intra.iam.hva.nl/content/algemeen/beroepsrollen/content_manager/)
Een CMD-er is breed opgeleid, weet heel veel van het WEB en kan het, zo nodig ook MAKEN. Eigen prototypes. Respopnsive design realiseren in de browser, interactie patronen maken, UX+ animatie scripten in je interface

Op de opleiding CMDA leer je alles over het ontwerpen van online interactieve media.  
Dit betekent het **BEGRIJPEN**, **BEDENKEN** en **MAKEN** van online interactieve media toepassingen zoals websites, mobiele applicaties en interactieve televisie.






**Criteria eindopdracht voor mondeling**

**Eindopdracht**

De eindopdracht: is een WebApp voor de mobiel die minimaal bestaat uit 3 delen:

 - Schedule
 - Pool/ranking 
 - Game/score
	
De data voor de WebApp komt van het toernooi [Autumn 2013](https://www.leaguevine.com/tournaments/19389/autumn-2013/) dat op Leaguevine wordt gehost.

De code van de WebApp is gestructureerd opgebouwd. Er is gebruik gemaakt van de verschillende design principes en best practices die in de lessen zijn behandeld, bijvoorbeeld namespace, controler, page render, change, events en een data object. De data die je gebruikt wordt geladen en gepost met behulp van ajax en json-data. 

In je code maak je gebruik van duidelijke comments en je kan laten zien hoe je de Console gebruikt in je werkprocess en hoe de Network werkt in de Inspect elements

De benodigde functionaliteiten heb je uitgewerkt in een screen flow en technische breakdown. 

De functionaliteiten heb je geprogrammeerd met behulp van verschillende js micro libraries, bijvoorbeeld een dom-ready library, templating, selector engine en interface/interactie api's.

Naast bovenstaande zit in de WebApp minimaal:

 - Feedback naar de gebruiker als je data laadt, bv loading feedback of een tekstuele feedback als er json-data wordt geladen
 - Functionele animatie, bv een  Scroll-to navigatie voor elke state
 - Gebruik van een gesture navigatie, bv swipe om games te scoren



**Aankondiging tentamen**

Als je geen redactie hebt gedaan en/of je hebt meer dan 1 keer niet gepresteerd tijdens de Weekly Nerd moet je een tentamen doen over de artikelen die zijn besproken. Op Moodle staat een lijst met studenten die het tentamen moeten doen.

Voor klas 1 moeten alle artikelen worden gelezen op de [Tumblr van klas 1](http://weeklynerd.tumblr.com/tagged/klas1) en voor klas 2 die artikelen die zijn getagged met [klas 2](http://weeklynerd.tumblr.com/tagged/klas2)

Het tentamen bestaat uit 5 vragen over de stof. De Duur van de toets is maximaal 150 minuten je mag aantekeningen erbij houden. Tijdens het tentamen is het niet toegestaan te communiceren met je telefoon, laptop, tablet of ander apparaat.
Per vraag krijg je een definitie/uitleg vraag en een inzicht vraag.

Bijvoorbeeld:
Voorbeeld vraag: Over het artikel [Responsive Workflow van Mark Boulton]()
1 - a) De schrijver vertelt op een gegeven moment dat de ‘oude’ workflow (ontwerp methode) voor het vormgeven van een webpagina niet werkt voor responsive design. Hoe heet deze manier van werken en wat houdt deze oude workflow precies in?
1 - b) Waar ligt volgens Mark Boulton het probleem binnen deze workflow? En leg uit of je hier mee eens bent en waarom.

