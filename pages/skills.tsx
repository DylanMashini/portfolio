import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import getMobile from "../mobile";

export default function Skills({ svg }) {
  const [mobile, setMobile] = useState(false);
  const changeMobile = (value: boolean) => {
    setMobile(value);
  };
  getMobile(changeMobile);
  return (
    <Layout mobile={mobile}>
      <div
        className="fade"
        style={{
          marginTop: "7vh",
          marginLeft: "2em",
        }}
      >
        <h2>Here are the skills and technologies I use to build things:</h2>
      </div>
      <div
        className="fade"
        style={{
          marginLeft: "2em",
        }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const svg = await fetch(
    "https://skillicons.dev/icons?theme=dark&perline=5&i=ts,js,rust,wasm,python,react,figma,mongodb,nextjs,vim"
  ).then((res) => res.text());
  return { props: { svg: svg } };
}
