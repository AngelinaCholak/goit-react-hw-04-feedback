import css from './feedbackoptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
        {options.map((option) => (
          <button
            className={css.feedbackButton}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
  </div>
);

export default FeedbackOptions;
