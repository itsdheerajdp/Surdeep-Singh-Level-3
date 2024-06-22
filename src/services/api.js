const fetchAdditionalQuestions = async(topic) => {
    const mockData = {
        Technology: [
            { id: 1, question: 'What is your favorite programming language?' },
            { id: 2, question: 'How many years of experience do you have?' },
        ],
        Health: [
            { id: 1, question: 'How often do you exercise?' },
            { id: 2, question: 'What is your diet preference?' },
        ],
        Education: [
            { id: 1, question: 'What is your highest qualification?' },
            { id: 2, question: 'What was your field of study?' },
        ],
    };

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const questions = mockData[topic] || [];
        return questions;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
};

export { fetchAdditionalQuestions };