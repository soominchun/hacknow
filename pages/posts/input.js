import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
function DayInput(props) {
  return (
    <div className="day">
        <div className = "dayName"> 
            <p>{props.dayName}</p>
        </div>
        <select>
            <option value="0:30">0:30 </option>
            <option value="1:00">1:00 </option>
            <option value="1:30">1:30 </option>
            <option value="2:00">2:00 </option>
        </select>
    </div>
  );
}


export default function Input() {
  return (
    <Layout>
      <Head>
        <title> Enter how much time each day? </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <div className = "week">
        <DayInput dayName = "Monday"/>
        <DayInput dayName = "Tuesday"/>
        <DayInput dayName = "Wednesday"/>
        <DayInput dayName = "Thursday"/>
        <DayInput dayName = "Friday"/>
      </div>
    </Layout>
  );
}

<style jsx>{`
        .week {
            display: flex;
            background-color: DodgerBlue;
            align-items: center;
        }
        .day {
            width: 100px;
        }
      `}</style>