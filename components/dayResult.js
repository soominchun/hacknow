import styles from './dayResult.module.css'


function DayResult(props) {
    return (
      <div className={styles.card}>
        <div className={styles.maindetails}>
          <div className={styles.title}>
            <h1>{props.name}</h1>
            <p className="media">
              Today, you'll be watching a {props.mediaType} about Linear Algebra.
              <a href={props.link} target="_blank" className="mediaLink">
              <h3>Learn &rarr;</h3>
              </a>
              <p>{props.description}</p>
            </p>
          </div>
          {/* <p className="content-description">{props.description}</p> */}
        </div>
      </div>
    );
  }

  export default DayResult