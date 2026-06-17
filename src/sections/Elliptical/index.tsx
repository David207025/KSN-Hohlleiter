import {Typography, Box} from "@mui/material";

export const Elliptical = () => {
  return (
    <section key={"6"}>
      <section key={"6-0"}>
        <Typography component="h3" variant="h3" gutterBottom>
          Dimensionierung des elliptischen Hohlleiters
        </Typography>
      </section>

      <section key={"6-1"}>
        <Typography variant="h4" component="h4" gutterBottom>
          Formeln für Mathieu-Moden
        </Typography>

        {/* Die allgemeine Definition für q, genau wie du sie haben wolltest */}
        {'\\[ q = \\left(\\frac{k \\cdot a}{2}\\right)^2 \\]'}

        <Box sx={{my: 2, padding: 2, bgcolor: 'background.paper', borderRadius: 1}}>
          <Typography variant="subtitle1" fontWeight="bold">TM-Moden:</Typography>
          <Typography variant="body1">
            {'\\[ E_{z,TM}(\\xi, \\eta, z, t) = E_0 \\cdot \\cos(k_z z - \\omega t) \\cdot \\begin{pmatrix} Ce_m(q, \\cosh\\xi) \\cdot ce_m(q, \\cos\\eta) \\\\ Se_m(q, \\cosh\\xi) \\cdot se_m(q, \\cos\\eta) \\end{pmatrix} \\]'}
          </Typography>
        </Box>

        <Box sx={{my: 2, padding: 2, bgcolor: 'background.paper', borderRadius: 1}}>
          <Typography variant="subtitle1" fontWeight="bold">TE-Moden:</Typography>
          <Typography variant="body1">
            {'\\[ H_{z,TE}(\\xi, \\eta, z, t) = H_0 \\cdot \\cos(k_z z - \\omega t) \\cdot \\begin{pmatrix} Ce_m(q, \\cosh\\xi) \\cdot ce_m(q, \\cos\\eta) \\\\ Se_m(q, \\cosh\\xi) \\cdot se_m(q, \\cos\\eta) \\end{pmatrix} \\]'}
          </Typography>
        </Box>

      </section>

      <section
        key={"6-2"}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          Formeln für Mathieu-Moden
        </Typography>

        <Box sx={{my: 2, padding: 2, bgcolor: 'background.paper', borderRadius: 1}}>
          <Typography variant="body2" fontWeight="bold" fontSize={"1.4rem"}>
            {'\\[ \\begin{pmatrix} Ce_m(q, \\cosh\\xi) \\cdot ce_m(q, \\cos\\eta) \\\\ Se_m(q, \\cosh\\xi) \\cdot se_m(q, \\cos\\eta) \\end{pmatrix} \\]'}
          </Typography>
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            align={"left"}
            sx={{
              width: "fit-content",
              fontSize: "1.2rem",
            }}
          >
            {'$Ce_m$'}... Gerade Mathieu-Funktion (Orientierung entlang der Hauptachse).<br/>
            {'$Se_m$'}... Ungerade Mathieu-Funktion (Orientierung entlang der Nebenachse) <br/>
            {'$ce_m$'}... Winkelkomponente der geraden Mathieu-Funktion<br/>
            {'$se_m$'}... Winkelkomponente der ungeraden Mathieu-Funktion
          </Typography>
        </div>

      </section>
      <section
        key={"6-3"}
      >
        <Typography variant="h4" component="h4" gutterBottom>
          Prinzip der Dimensionierung
        </Typography>


        <Typography variant="body1" fontSize={"1.4rem"} >Winkelkomponente wird bei manchen Moden nie 0</Typography>
        <Typography variant="body1" fontSize={"1.4rem"} >Amplitude wird bei der Grenzfrequenz am Rand des Leiters 0</Typography>
        <Typography variant="body1" fontSize={"1.4rem"} >Daher muss gelten:</Typography>


        <Typography variant="body1" fontWeight="bold" fontSize={"1.4rem"}>
          {'\\[ Ce_m(q, \\cosh\\xi) = 0\\]'} <br/>
          oder <br/>
          {'\\[ Se_m(q, \\cosh\\xi) = 0 \\]'}<br/>
        </Typography>

      </section>

      <section
        key={"6-4"}
      >
        <Typography variant="h4" component="div" gutterBottom>
          Berechnung von {'$cosh(\\xi)$'} und {'$a$'}
        </Typography>

        <Typography
          variant={"body1"}
          component={"div"}
        >
          {'$ x_0 $'}... große Halbachse <br/>
          {'$ y_0 $'}... kleine Halbachse <br/>
          {'$ a $'}... Abstand zwischen dem Mittelpunkt und einen Brennpunkt <br/><br/>
        </Typography>

        <Typography variant="h5" component="div" gutterBottom>
          Formeln:
        </Typography>

        {'\\[ cosh(\\xi)^2-sinh(\\xi)^2=1 \\]'}
        {'\\[ x_0^2-y_0^2=a^2 \\]'}

        <Typography variant="h5" component="div" gutterBottom>
          Daraus ergibt sich: {'$cosh(\\xi)=\\left(\\frac{x_0}{a}\\right)$'}
        </Typography>

      </section>
      <section
        key={"6-5"}
      >
        <iframe src="https://www.desmos.com/calculator/3pbqcoappw" width="1000" height="600"></iframe>
      </section>
      <section
        key={"6-6"}
      >
        <iframe src="https://scispace.com/pdf/tables-of-values-of-the-modified-mathieu-functions-2vatb13oai.pdf" width={"1000"} height={"600"}/>
      </section>
    </section>
  );
};