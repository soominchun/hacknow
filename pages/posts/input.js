import React, { useState } from 'react';
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const [schedule, setSchedule] = useState([0,0,0,0,0,0]);
const [subject, setSubject] = useState("");

function DayInput(props) {
  return (
    <div className="day">
      <div className="dayName">
        <p>{props.dayName}</p>
      </div>
      <select>
        <option value="0.5">0:30 </option>
        <option value="1">1:00 </option>
        <option value="1.5">1:30 </option>
        <option value="2">2:00 </option>
      </select>
    </div>
  );
}

export default function Input() {
  return (
    <Layout>
      <Head>
        <title> Sign Up </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Enter how much time each day?</h1>
      <div className="week">
        <DayInput dayName="Monday" />
        <DayInput dayName="Tuesday" />
        <DayInput dayName="Wednesday" />
        <DayInput dayName="Thursday" />
        <DayInput dayName="Friday" />
      </div>
      <h1>What subject would you like to study? </h1>
      <a href="/posts/display" className="next">
        <h3> Next &rarr;</h3>
      </a>

      <style jsx>{`
        .week {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .next {
            display:flex;
            align-items: flex-end;
        }
      `}</style>
    </Layout>
  );
}
