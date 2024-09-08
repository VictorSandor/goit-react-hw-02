import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
    return (
        <div className="optSect">
            <button  onClick={() => onLeaveFeedback("good")}>Good</button>
            <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
            <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={onReset}>Reset</button>
            )}
        </div>
    );
};

Options.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    totalFeedback: PropTypes.number.isRequired,
};

export default Options;