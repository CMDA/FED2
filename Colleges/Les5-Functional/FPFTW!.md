# Functioneel Javascript

# overzicht

# λ-Calculus
Alonzo Church en Haskell Curry

# vs OOP
- recursie
- functies (parameter(s))
- geen toestand/ state
hergebruik door functie compositie
bug proofing door onveranderlijkheid (pure functions)
unit testing is makkelijker!
makkelijker te begrijpen wat er gebeurt

- variabelen
- objecten
- toestand/ state
hergebruik door classes
bug proofing door encapsulating
unit testing vraagt veel stub’s en mocking
je moet het objectmodel snappen voor je iets kunt doen

# Functionele talen
(P) Haskell
(P) Clean
Erlang
Scala
Clojure
XSLT
F#
SQL
ML/OCaml
Lisp/Scheme
Smalltalk

# Principes

## Anonymous functions
Wordt ondersteund door: JavaScript, PHP (soort van), C# 2.0, Java stinkt (zoals gewoonlijk)

## Unary functions
- Functies hebben slechts één argument en één return waarde

## Pure vs. impure functions
- Puur zijn functies die niet aan te raken zijn door de gebruiker

## io is altijd gelijk (geen side-effects)
λx.x+2 een lamdba functie
λ3.3+2 toepassing van 3 op de functie
λ3.5 onderweg in het oplossen
5 de ‘opgeloste’ functie


# Wat is een functie?
bibliotheek plaatje

# Hogere orde functies
functies die functies als argument nemen en functies return-en

IOW: functie genererende functies

# Hogere orde functies
voorbeeld

# Closure
uitleg, aan refereren

# Closure
voorbeeld

# Map/ Filter/ Reduce (fold)
uitleg

# Map/ Filter/ Reduce (fold)
voorbeeld

** Voorbeelden:
Map - > Reviews
Reduce -> reviews naar 1 resultaat
Filter -> filteren op genre

** Optioneel
Where -> zoeken op basis van searchString (indexOf)
sortBy -> sorteren op beoordeling, titel
groupBy -> groeperen op genre


# Recap

# Vragen?
