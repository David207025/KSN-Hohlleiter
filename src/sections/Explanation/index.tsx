import {Card, Typography} from "@mui/material";
import {Connector} from "../../components/connector.tsx";
import bsp1 from "../../assets/images/bsp1.png"
import bsp2 from "../../assets/images/bsp2.png"
import bsp3 from "../../assets/images/bsp3.png"



export const Explanation = () => {


  return (
    <section
      key={"2"}
    >
      <section
        key={"2-0"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography component="h3" variant="h3"> Was sind
          Hohlleiter?</Typography> {/*Verhalten sich wie Hochpässe für Elektromagnetische Wellen*/}

      </section>

      <section
        key={"2-1"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "70vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr 1fr 1fr"
          }}
        >
          <Card
            sx={{
              gridColumn: "2 / span 5"
            }}
          >
            <Typography variant={"h4"} component={"h4"}>
              Wellenleiter
            </Typography>
          </Card>


          <Connector
            style={{
              gridRow: "2",
              gridColumn: "2",
              width: "100%",
              height: "100%"
            }}
            horizontal={false}
          />


          <Connector
            style={{
              gridRow: "2",
              gridColumn: "6",
              width: "100%",
              height: "100%"
            }}
            horizontal={false}
          />

          <Card
            sx={{
              gridRow: "3",
              gridColumn: "1 / span 3",
              backgroundColor: theme => theme.palette.secondary.main

            }}
          >
            <Typography variant={"h4"} component={"h4"}>
              Glasfaser
            </Typography>
          </Card>

          <Card
            sx={{
              gridRow: "3",
              gridColumn: "5 / span 3",
              backgroundColor: theme => theme.palette.primary.main
            }}
          >
            <Typography variant={"body1"} component={"h4"}>
              Hohlleiter
            </Typography>
          </Card>

          <Connector
            style={{
              gridRow: "4",
              gridColumn: "2",
              width: "100%",
              height: "100%"
            }}
            horizontal={false}
          />


          <Connector
            style={{
              gridRow: "4",
              gridColumn: "6",
              width: "100%",
              height: "100%"
            }}
            horizontal={false}
          />

          <Card
            sx={{
              gridRow: "5",
              gridColumn: "1 / span 3",
              backgroundColor: theme => theme.palette.success.main
            }}
          >
            <Typography variant={"h5"} component={"h5"}>
              Hochfrequente Wellen
            </Typography>
          </Card>

          <Card
            sx={{
              gridRow: "5",
              gridColumn: "5 / span 3",
              backgroundColor: theme => theme.palette.success.main
            }}
          >
            <Typography variant={"h5"} component={"h5"}>
              Niederfrequente Wellen
            </Typography>
          </Card>
        </div>
      </section>
      <section
        key={"2-2"}
      >
        <img
          src={bsp1}
          style={{
            height: "6cm"
          }}
        />
        <img
          src={bsp2}
          style={{
            height: "6cm"
          }}
        />
        <img
          src={bsp3}
          style={{
            height: "6cm"
          }}
        />
      </section>
      <section
        key={"2-3"}
      >
        <Typography variant="h3" component="h3">
          Prinzip
        </Typography>

        <Typography variant="h4" component="div">
          Signale mittels einer Antenne einkoppeln
        </Typography>
        <br/>
        <Typography variant="h4" component="div">
          Die elektromagnetischen Wellen innerhalb des Hohlleiters begrenzen
        </Typography>
      </section>


    </section>
  )
}