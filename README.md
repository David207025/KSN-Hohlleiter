# Hohlleiter

# Was sind Hohlleiter?

Hohlleiter sind Wellenleiter. Sie leiten elektromagnetische Wellen. Der einzige Unterschied zu Lichtwellenleiter ist, dass LWL hochfrequente Wellen übertragen, während Hohlleiter für niederfrequenten Wellen gemacht sind.

Es gibt sowie Rechteckhohlleiter, als auch Rundhohlleiter oder ellipsenförmige Hohlleiter. (Siehe Folie 3.3)

Die Grundprinzipien der Hohlleiter ist, die zu übertragene Wellen normal zu senden. Allerdings werden diese Signale innerhalb des Hohlleiters begrenzt, wodurch der Leistungsabfall minimiert wird.

# Eigenschaften von Hohlleitern

Sowohl Rechteckhohleiter, als auch Rundhohlleiter werden bei hochfrequenten Signalübertragungen verwendet. Ab 10GHz besitzen Rechteckhohlleiter eine niedrigere Dämpfung wie Koaxialkabel. Allerdings sind die Rundhohlleiter generell effizienter, da die Dämpfung dort mit der Frequenz sinkt. 
Bei Rechteckhohlleitern erzeugen die Eddy-Ströme Verluste innerhalb der Wände, die zu einer Erhöhung der Dämpfung führen.

# Arten von Übertragungen

- Transversal Elektrisch (TE)
  - Bei der TE-Übertragung zeigt das Magnetfeld in die Ausbreitungsrichtung und das elektrische Feld steht normal darauf
- Transversal Magnetisch (TM)
  - Hier zeigen die Feldlinien des elektrischen Feldes in die Ausbreitungsrichtung und das Magnetfeld generiert Schleifen im Hohlleiter

## Einkopplung

Bei TE wird üblicherweise mit einer Antenne eingekoppelt, die von unten oder von oben positioniert wird. Dabei wird sie immer bei einem Wandabstand von $\frac{\lambda}{4}$ platziert.

Für die TM-Übertragung gibt es mehrere Einkopplungsarten. Man kann eine ähnliche Antenne wie bei TE durch die Hinterseite des Leiters befestigen, oder einen fertigen TE-Leiter verwenden, und die Antenne mit einer Leiterschleife ersetzen.

## Anpassung der Grenzfrequenz

Da solche Wellenleiter nie perfekt produziert werden, kann man mit einem zusätzlichen Metallzylinder (oft mittels einer Schraube realisiert) eine Kapazität erzeugen.
Diese Kapazität wird zum Abgleich des induktiven Verhaltens des Leiters verwendet.

## Drosselflansch

Ein Drosselflansch dient zur versicherten Übertragung über Montagestellen. Da Flächen oft nicht perfekt erzeugt werden können, werden Einkärbungen mit einer Gesamtlänge von $\frac{\lambda}{2}$ erzeugt, wo sich die Felder verbreiten können.

Wir betrachten die E-Feldlinien (Abhilfe: Sinuskurve):
Zuerst verbreiten sich die Feldlinien über die Stelle C aus, kommen über B weiter und werden nach Innen weitergeleitet. Die Maxwell-Gleichungen sagen, dass es sich an der Stelle A keinen elektrischen Feld mehr befinden muss.
Da der zurückgelegte Weg $\frac{\lambda}{2}$ beträgt, muss sich an der Stelle C auch eine Nullstelle befinden. Somit kann man der Hohlleiter an mehreren Stellen fest zuschrauben. Diese Öffnungen dienen dazu, die Nullstelle der Welle an der Wand des Hohlleiters zu fixieren.