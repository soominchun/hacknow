import Link from 'next/link'
import Head from 'next/head'
import Layout from "../../components/layout";
import DayResult from "../../components/dayResult";


import React, { Component } from "react";
// import Checkbox from "./Checkbox";
// import "./styles.css";




export default function Display() {
    return (
      <Layout>
        <div className="container">
          <Head>
            <title>Your schedule</title>
          </Head>
          <main>
            <h2 className="title">
              Welcome to your schedule.
            </h2>

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
        </Layout>
  )
}