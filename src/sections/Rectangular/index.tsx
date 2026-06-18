import {Typography} from "@mui/material";

export const Rectangular = () => {
  // Use a clean String.raw layout string

  return (
    // 1. Keep the root slide key wrapper
    <section key="5">

      {/* 2. Slide 5-0 */}
      <section key="5-0">
        <Typography component="h3" variant="h3">
          Dimensionierung des Rechteckhohlleiters
        </Typography>
      </section>

      <section
        key={"5-1"}
      >
        <Typography variant="h4" component="h4">
          Definitionen
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            width: "115%",
            marginLeft: "-7.5%",
          }}
        >
          <span>{'$m$'}... Anzahl der Halbwellen in x-Richtung</span> <br/>
          <span>{'$n$'}... Anzahl der Halbwellen in y-Richtung</span><br/>
          <span>{'$k$'}... Wellenzahl (wie viele Wellen in einem Meter hineinpassen)</span><br/>
          <span>{'$TE_{mn}/TM_{mn}$'}... {'$TE/TM$'} mit {'$m$'} und {'$n$'} Halbwellen </span><br/>
          <span>Bsp.: {'$TE_{10}, TM_{11}, TE_{02}, TM_{23}$'}</span> <br/>
          <span>Es wird auch {'$H_{mn}$'} für {'$TE$'} oder {'$E_{mn}$'} für {'$TM$'} hergenommen</span>
        </div>
      </section>

      <section key="5-2">
        <>
          <Typography variant="h4" component="h4">
            Formeln
          </Typography>

          {'\\[ k = \\frac{2\\cdot \\pi}{\\lambda}\\]'}
          {'\\[ k^2 = k_x^2 + k_y^2 + k_z^2\\]'}
          {'\\[c=f*\\lambda \\]'}
        </>
        <aside className={"notes"}>
          k = Wellenzahl. k beschreibt, wie viele wellen in einem Meter hineinpassen. Geschwindigkeit der Schwingung.
          Vergleichbar mit Omega
        </aside>
      </section>
      <section key="5-3">
        <Typography variant="h4" component="h4" gutterBottom>
          Herleitung der transversalen Wellenzahlen
        </Typography>

        <Typography variant="body1">
          Aus der Definition der Wellenzahl gilt für die Raumrichtungen $X$ und $Y$:
        </Typography>
        {'\\[ k_x = \\frac{2\\pi}{\\lambda_x} \\quad \\text{und} \\quad k_y = \\frac{2\\pi}{\\lambda_y} \\]'}

        <Typography variant="body1" sx={{mt: 2}}>
          Die geometrische Randbedingung fordert, dass sich innerhalb der Breite $a$ und der Höhe $b$
          jeweils eine ganzzahlige Anzahl ({'$m, n$'})
          von <strong>Halbwellen</strong> {'($\\frac{\\lambda}{2}$)'} ausbilden muss:
        </Typography>
        {'\\[ a = m \\cdot \\frac{\\lambda_x}{2} \\implies \\lambda_x = \\frac{2 \\cdot a}{m} \\]'}
        {'\\[ b = n \\cdot \\frac{\\lambda_y}{2} \\implies \\lambda_y = \\frac{2 \\cdot b}{n} \\]'}
      </section>
      <section
        key={"5-4"}
      >

        <Typography variant="body1" sx={{mt: 2}}>
          Setzt man diese Wellenlängen nun oben in die $k$-Formeln ein, erhält man:
        </Typography>
        {'\\[ k_x = \\frac{2\\pi}{\\frac{2 \\cdot a}{m}} = \\frac{m \\cdot \\pi}{a} \\]'}
        {'\\[ k_y = \\frac{2\\pi}{\\frac{2 \\cdot b}{n}} = \\frac{n \\cdot \\pi}{b} \\]'}

      </section>
      <section
        key={"5-5"}
      >
        <Typography variant="body1" sx={{mt: 2}}>
          Bei der Grenzfrequenz gibt es keine Ausbreitung in der Z-Richtung
        </Typography>
        {'\\[ k_z = 0 \\]'}
        <Typography variant="body1" sx={{mt: 2}}>
          Daraus ergibt sich:
        </Typography>
        {'\\[ k^2=k_x^2+k_y^2 \\]'}
        {'\\[ k^2=\\left(\\frac{m \\cdot \\pi}{a}\\right)^2+\\left(\\frac{n \\cdot \\pi}{b}\\right)^2 \\]'}
        {'\\[ k=\\sqrt{\\left(\\frac{m \\cdot \\pi}{a}\\right)^2+\\left(\\frac{n \\cdot \\pi}{b}\\right)^2} \\]'}

      </section>

      <section key="5-6">
        <Typography variant="h4" component="h4" gutterBottom>
          Die Grenzfrequenz
        </Typography>
        <Typography variant="body1">
          Da allgemein {'$k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi \\cdot f}{c}$'} gilt, setzen wir für den Grenzwert
          ein:
        </Typography>
        {'\\[ \\frac{2\\pi \\cdot f_g}{c} = \\sqrt{\\left(\\frac{m \\cdot \\pi}{a}\\right)^2 + \\left(\\frac{n \\cdot \\pi}{b}\\right)^2} \\]'}

        <Typography variant="body1" sx={{mt: 2}}>
          Zieht man das $\\pi$ aus der Wurzel heraus, kürzt es sich komplett weg. Umgeformt nach $f_g$ erhalten wir:
        </Typography>
        {'\\[ f_g = \\frac{c}{2} \\cdot \\sqrt{\\left(\\frac{m}{a}\\right)^2 + \\left(\\frac{n}{b}\\right)^2} \\]'}

      </section>

    </section>
  );
};