import Link from 'next/link'
import Head from 'next/head'

import React, { Component } from "react";
// import Checkbox from "./Checkbox";
// import "./styles.css";

function DayResult(props) {
  return (
    <div className="card">
      <div className="main-details">
        <div className="title-elements">
          <h1>{props.name}</h1>
          <p className="media">
            Today, you'll be watching a {props.mediaType} about Linear Algebra.
            <a href={props.link} target="_blank" className="mediaLink">
            <h3>Learn &rarr;</h3>
            </a>
            <p className="card">{props.description}</p>
          </p>
        </div>
        {/* <p className="content-description">{props.description}</p> */}
      </div>
    </div>
  );
}


export default function Display() {
    return (
    <div className="container">
      <Head>
        <title>Your schedule</title>
      </Head>
      <main>
        <h1 className="title">
          Welcome to your schedule. Ready to start learning?
        </h1>

        <p className="description">
          Get started on today's TODO!!!! lesson.
        </p>

        <div className="grid">
          <DayResult
            name="Monday"
            mediaType="video" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="A comprehensive video about eigenfucks."
          />

          <DayResult
            name="Tuesday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          <DayResult
            name="Wednesday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          <DayResult
            name="Thursday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          <DayResult
            name="Friday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          <DayResult
            name="Saturday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          <DayResult
            name="Sunday"
            mediaType="podcast" // make into const OPTIONS?
            link="https://www.youtube.com/watch?v=mt9r-pjzG-Q"
            description="Blah blah."
          />

          {/* <a href="/posts/input" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/posts/display" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .main-details {
          flex: 1 0 200px;
          align-items: center;
        }
        
        .title-elements {
          display: flex;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .week {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
  }