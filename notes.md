

# Elliptischer Hohlleiter

Nicht nur TMmn und TEmn, sondern cTM/sTM, cTE/sTE

c... Zwischen die einzelnen Brennpunkte
s... im 90° Winkel auf die s-Richtung

a... Abstand zwischen einem Brennpunkt in dem Mittelpunkt \
$x_0$... große Halbachse \
$y_0$... kleine Halbachse

$$x_0 = a*cosh(\xi)$$
$$y_0 = a*sinh(\xi)$$
$$a^2 = x_0^2 - y_0^2$$

Daraus kann $\xi_0$ ausgerechnet werden

Mathieu-Formel:
$$J_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cosh(\xi)\bigg)$$

Hier wurde cosh gewählt, weil die Funktion nie Null wird.

Bei TM:

$$E_z(\xi, \eta, z, t) = E0*J_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cosh(\xi)\bigg)*c_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cos(\eta)\bigg)$$

$c_{e_m}$ beschreibt die anguläre Bewegung des Feldes, $J_{e_m}$ beschreibt die radiale Bewegung (vom Mittelpunkt zum Rand) der Amplitude.

$\bigg(\frac{k_c}{2}*a\bigg)^2$ beschreibt die eigentliche Funktion. $cosh(\xi)$ beschreibt die Abflachung des Leiters, die durch den Abstand der Brennpunkten entsteht

Da $c_{e_m}$ nie 0 werden kann, muss $J_{e_m}$ am Rand 0 werden. 
D.h., die Feldlinien sind ganz am Rand 0.
$$J_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cosh(\xi)\bigg) = 0$$

Hier kann aus Tabellen die eigentlichen Werte für $\frac{k_c}{2}*a$ bei $cosh(\xi)$ abgelesen werden, 
wonach die Grenzwellenlänge $\lambda_g$ auszurechnen ist.

Würde $a -> 0$ dann verwandelt sich $c_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cos(\eta)\bigg)$ in $cos(\eta)$ und $J_{e_m}\bigg(\bigg(\frac{k_c}{2}*a\bigg)^2, cosh(\xi)\bigg)$ in $J_m(k_c*r)$ wo $r = x_0 = y_0$