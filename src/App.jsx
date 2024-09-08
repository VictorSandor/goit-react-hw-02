import { useState, useEffect } from "react";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

const App = () => {
    const getLocalFeedback = () => {
        const savedFeedback = localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
    }
    const [feedback, setFeedback] = useState(getLocalFeedback);

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    },[feedback]);
     
    const updateFeedback = (feedbackType) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };
    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    return (
        <div>
            <h1>Sip Happens Café</h1>
            <p>Please leave your feedback about our service by selecting one of the options below.</p>
            <Options 
                onLeaveFeedback={updateFeedback} 
                onReset={resetFeedback} 
                totalFeedback={totalFeedback} 
            />

            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} total={totalFeedback} positivePercentage={positivePercentage}/>
            ) : (
                <Notification message="No Feedback yet"/>
            )}
            </div>
    );
};

export default App;