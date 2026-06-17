import {Typography} from "@mui/material";

import te_example from "../../assets/TE_Example.jpeg"
import tm_example from "../../assets/TM_Example.png"
import transmission from "../../assets/Rechteckhohlleiter_Einkopplung.jpg"

export const Transmissions = () => {
  return (
    <section
      key={"4"}
    >
      <section
        key={"4-0"}
      >
        <Typography component="h3" variant="h3"> Arten von
          Übertragungen</Typography> {/*Verhalten sich wie Hochpässe für Elektromagnetische Wellen*/}

      </section>
      <section
        key={"4-1"}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%"
          }}
        >
          <Typography
            variant={"h4"}
            component={"h4"}
          >
            Transversal Elektrisch (TE)
          </Typography>
          <Typography
            variant={"h4"}
            component={"h4"}
          >
            Transversal Magnetisch (TM)
          </Typography>

          <img src={te_example}/>
          <img src={tm_example}/>
        </div>
      </section>
      <section
        key={"4-2"}
      >
        <Typography
          variant={"h4"}
          component={"h4"}
        >
          Einkopplung
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Typography
            variant={"h4"}
            component={"div"}
          >
            TM
          </Typography>
          <Typography
            variant={"h4"}
            component={"div"}
          >
            TE
          </Typography>
        </div>
        <img
          src={transmission}
          style={{
            height: "14cm"
          }}
        />
      </section>
    </section>
  )
}