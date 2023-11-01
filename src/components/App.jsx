import React, { useState } from 'react';
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Section from "components/Section/Section";
import Notification from './Notification/Notification'


export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedbackType) => {

    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

 
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div>
        <Section title="Please leave feedback">
          {options.length === 0 ? (
            <p className="noFeedback">There is no feedback</p>
          ) : (
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleFeedback}
            />
          )}
        </Section>

        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
export default App;