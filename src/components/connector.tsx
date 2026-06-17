import type {CSSProperties} from "react";

export const Connector = (props: {
  style?: CSSProperties
  horizontal?: boolean
}) => {

  const horizontal = !!props.horizontal

  return (
    <div
      style={props.style}
    >
      {
        horizontal ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%"
            }}
          >
            <span
              style={{
                flexGrow: "1",
                borderBottom: "solid 0.5mm white"
              }}
            >

            </span>
            <span
              style={{
                flexGrow: "1",
                borderTop: "solid 0.5mm white"
              }}
            >

            </span>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%"
            }}
          >
            <span
              style={{
                flexGrow: "1",
                borderRight: "solid 0.5mm white"
              }}
            >

            </span>
            <span
              style={{
                flexGrow: "1",
                borderLeft: "solid 0.5mm white"
              }}
            >

            </span>
          </div>
        )
      }
    </div>
  )
}