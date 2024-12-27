import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { PiToolboxDuotone } from "react-icons/pi";


import Notion from "../../public/notion.png";
import Figma from "../../public/figma.png";
import ReactImage from "../../public/reactjs.png";
import Node from "../../public/Node.js.png";
import Next from "../../public/Next.png";
import Jira from "../../public/jira.png";
import n8n from "../../public/n8n.png";
import supabase from "../../public/supabase.png";
import zapier from "../../public/zapier.png";
import firebase from '../../public/firebase.png'
import ClickUp from "../../public/clickup.png"
import MongoDB from "../../public/mongodb.png";
import PostgreSQL from "../../public/postgresql.png";
import GCloud from "../../public/cloud.png";
import Monday from "../../public/monday.png";
import Slack from "../../public/slack.png";
import openai from "../../public/openai.png";
import webflow from "../../public/webflow.png";
import framer from "../../public/framer.png";
import confluence from "../../public/confluence.png";


const MarqueeTech = () => {
  return (
    <div className="pt-16 0 flex flex-col items-center justify-center">
      <h3 className="text-sm z-50 text-white pt-10 pb-8 opacity-60 flex items-center">
      <PiToolboxDuotone className="inline-block text-[#white] mr-2" />
      Herramientas Code, Low-Code & No-Code
      </h3>
      <section className="max-[420px]:scale-90">
        <Marquee
          speed={80}
          gradient={true}
          gradientColor="black"
          gradientWidth={"200px"}
          pauseOnHover={true}
          play={true}
          className="w-full z-50 flex items-center justify-center max-w-[90vw]"
        >
          <Image src={Notion} width={120} alt="Notion" className="mr-12" />
          <Image src={Figma} width={106} alt="Figma" className="mr-12" />
          <Image src={ReactImage} width={128} alt="React.js" className="mr-12" />
          <Image src={Next} width={128} alt="Next.js" className="mr-12" />
          <Image src={Node} width={128} alt="Node.js" className="mr-12" />
          <Image src={MongoDB} width={130} alt="MongoDB" className="mr-12" />
          <Image src={PostgreSQL} width={144} alt="PostgreSQL" className="mr-12" />
          <Image src={GCloud} width={148} alt="Google Cloud" className="mr-12" />
          <Image src={supabase} width={140} alt="Supabase" className="mr-12" />
          <Image src={firebase} width={136} alt="Firebase" className="mr-12" />
          <Image src={Jira} width={84} alt="Jira" className="mr-12" />
          <Image src={confluence} width={148} alt="Confluence" className="mr-12" />
          <Image src={ClickUp} width={128} alt="Click Up" className="mr-12" />
          <Image src={Monday} width={152} alt="Monday" className="mr-12" />
          <Image src={Slack} width={116} alt="Slack" className="mr-12" />
          <Image src={n8n} width={100} alt="n8n" className="mr-12" />
          <Image src={zapier} width={124} alt="Zapier" className="mr-12" />
          <Image src={openai} width={120} alt="OpenAI" className="mr-12" />
          <Image src={webflow} width={140} alt="Webflow" className="mr-12" />
          <Image src={framer} width={110} alt="Framer" className="mr-12" />
        </Marquee>
      </section>
    </div>
  );
};

export default MarqueeTech;
