import {List, Typography} from "@mui/material";

import daempfung from "../../assets/Dämpfungsdiagramm.png"

export const Usages = () => {
  return (
    <section
      key={"3"}
    >
      <section
        key={"3-0"}
      >
        <Typography component="h3" variant="h3"> Eigenschaften von
          Hohlleiter</Typography> {/*Verhalten sich wie Hochpässe für Elektromagnetische Wellen*/}

      </section>

      <section
        key={"3-1"}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start"
          }}
        >
          <Typography
            variant={"h4"}
            component={"div"}
            sx={{
              width: "fit-content",
              color: (theme) => {
                return theme.palette.primary.main
              }
            }}
          >
            Vorteile
          </Typography>
          <List>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Störfestigkeit
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Geringe Dämpfung
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Perfekt für die Übertragung von leistungsstarken Signalen
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Verhalten sich wie Hochpäße für drahtlose Signale
            </Typography>
          </List>

          <Typography
            variant={"h4"}
            component={"div"}
            sx={{
              width: "fit-content",
              color: (theme) => {
                return theme.palette.primary.main
              }
            }}
          >
            Nachteile
          </Typography>
          <List>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Schwer
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Massiv
            </Typography>
            <List>
              <Typography
                variant={"h5"}
                component={"li"}
              >
                Viel Planung erforderlich
              </Typography>
              <Typography
                variant={"h5"}
                component={"li"}
              >
                Materialkosten sind sehr hoch
              </Typography>
            </List>
          </List>
          <Typography
            variant={"h4"}
            component={"div"}
            sx={{
              width: "fit-content",
              color: (theme) => {
                return theme.palette.primary.main
              }
            }}
          >
            Anwendungen
          </Typography>
          <List
            sx={{
              marginTop: "-10mm",
            }}
          >
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Satellitenantennen
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Materialkosten sind sehr hoch
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Radaranlagen
            </Typography>
            <Typography
              variant={"h5"}
              component={"li"}
            >
              Mikrowellenherden
            </Typography>
          </List>
        </div>
      </section>
      <section
        key={"3-2"}
      >
        <img src={daempfung}/>
      </section>
    </section>
  )
}