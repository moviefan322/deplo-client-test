import { useSelector } from "react-redux";
import Spinner from "@/components/spinner/spinner";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from "./results.module.css";

function results() {
  const state = useSelector((state: any) => state.auth.stats);
  const loading = useSelector((state: any) => state.auth.loading);

  const returnButtonHandler = (e: any) => {
    e.preventDefault();
    console.log("return button clicked", e);
  };

  const nextButtonHandler = (e: any) => {
    e.preventDefault();
    console.log("next button clicked", e);
  };

  if (loading || !state) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div className={styles.results}>
      <h1>Congratulations!</h1>
      <div className={styles.card}>
        <h2>Here are your results:</h2>
        {state.map((item: any, index) => {
          return (
            <div key={index}>
              <p>
                {item.lessonId} - {item.score}/{item.outOf}
              </p>
            </div>
          );
        })}
        <p>
          Total Points:{" "}
          {state.reduce((acc: number, item: any) => {
            return acc + item.score;
          }, 0)}
          /
          {state.reduce((acc: number, item: any) => {
            return acc + item.outOf;
          }, 0)}
        </p>
        <p>
          Accuracy:{" "}
          {(
            state.reduce((acc: number, item: any) => {
              return acc + item.score;
            }, 0) /
            state.reduce((acc: number, item: any) => {
              return acc + item.outOf;
            }, 0)
          )
            .toFixed(2)
            .slice(2)}
          %
        </p>
      </div>
      <div className={styles.bottom}>
        <button className={styles.button} onClick={returnButtonHandler}>
          <FaArrowLeft />
          Back Home
        </button>
        <button className={styles.button} onClick={nextButtonHandler}>
          Next Unit
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default results;
