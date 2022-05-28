import Carbonbadge from "react-carbonbadge";

export default function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "4.5rem",
          flexDirection: "row",
        }}
      >
        <h5
          style={{
            marginBottom: "1.5em",
            marginRight: "1em",
          }}
        >
          This site is <a href="/sustainability">made sustainibly</a>{" "}
        </h5>
        <Carbonbadge />
      </div>
    </div>
  );
}
