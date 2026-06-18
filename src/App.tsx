import * as React from "react";
import './App.css'
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/moon.css';
import 'katex/dist/katex.min.css';
import Reveal from 'reveal.js';
import RevealMarkdown from "reveal.js/plugin/markdown/markdown"
import RevealHighlight from "reveal.js/plugin/highlight/highlight"
import RevealNotes from "reveal.js/plugin/notes/notes"
import {ThemeProvider} from "@mui/material/styles"; // Cleaned up import source
import {AnimatePresence} from "framer-motion";
import {createTheme, CssBaseline, List, Typography} from "@mui/material";
import {Explanation} from "./sections/Explanation";
import {Usages} from "./sections/Usages";
import {Transmissions} from "./sections/Transmimssions";
import {Rectangular} from "./sections/Rectangular";
import RevealMath from "reveal.js/plugin/math/math"
import {Elliptical} from "./sections/Elliptical"; // Added Typography

function App() {
  const deckDivRef = React.useRef<HTMLDivElement>(null);
  const deckRef = React.useRef<Reveal.Api | null>(null);

  React.useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      scrollProgress: true,
      controls: true,
      hash: true,
      progress: true,
      scrollLayout: "compact",
      slideNumber: true,
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.MathJax3],
      mathjax3: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']]
        }
      },
    });

    deckRef.current.initialize().then(() => {
      // event handlers
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (_e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  const theme = createTheme({
    cssVariables: {
      nativeColor: true
    },
    palette: {
      mode: "dark",
      primary: {
        main: "var(--r-link-color)"
      },
      secondary: {
        main: "var(--r-selection-background-color)"
      }
    },
    typography: {
      // Ensures both MUI and base fallbacks align across all variants
      fontFamily: '"Black Ops One", system-ui, sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#222222",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }
        }
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/> {/* 1. Moved inside the ThemeProvider */}
      <AnimatePresence>
        <div className="reveal" ref={deckDivRef}>
          <div className="slides">
            <section key="0">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center"
                }}
              >
                {/* 2. Replaced native h1 with MUI Typography component mapped to h1 element */}
                <Typography
                  variant="h1"
                  component="h1"
                  style={{color: theme.palette.error.main}}
                >
                  Hohl
                </Typography>
                <Typography variant="h1" component="h1">
                  leiter
                </Typography>
              </div>
            </section>

            <section key="1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "72vh",
                  margin: "none",
                  textAlign: "start"
                }}
              >
                {/* 3. Replaced native h3 */}
                <Typography
                  variant="h3"
                  component="h3"
                  style={{color: theme.palette.primary.main}}

                >
                  Inhaltsverzeichnis
                </Typography>

                <List>

                  <Typography component="li" variant="h4"> Was sind
                    Hohlleiter?</Typography> {/*Verhalten sich wie Hochpässe für Elektromagnetische Wellen*/}

                  <Typography component="li" variant="h4"> Eigenschaften von Hohlleiter</Typography>

                  <Typography component="li" variant="h4"> Arten von
                    Übertragungen</Typography> {/*Auch die Arten der Einkopplung*/}

                  <Typography component="li" variant="h4"> Dimensionierung des Rechteckhohlleiters</Typography>

                  <Typography component="li" variant="h4"> Dimensionierung des elliptischen Hohlleiters</Typography>

                </List>
              </div>
            </section>

            <Explanation/>
            <Usages/>
            <Transmissions/>
            <Rectangular/>
            <Elliptical/>
          </div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;