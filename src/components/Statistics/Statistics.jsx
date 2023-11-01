import css from './statistics.module.css'

const Statistics = ({ good, neutral, bad, positivePercentage }) => {
    return (
        <div className={css.statistics}>
            <h2>Statistics</h2>
                <div>
                    <p>good: {good}</p>
                    <p>neutral: {neutral}</p>
                    <p>bad: {bad}</p>
                    <p>Positive Percentage: {positivePercentage}</p>
            </div>
        </div>

    );
};
export default Statistics;