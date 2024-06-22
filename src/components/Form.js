import React, { useState } from 'react';
import useForm from './useForm';
import { fetchAdditionalQuestions } from '../services/api';
import './Form.css';

const Form = () => {
  const { formData, errors, handleChange, handleSubmit, setFormData } = useForm();
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleTopicChange = async (e) => {
    const { value } = e.target;
    setFormData({ ...formData, surveyTopic: value });
    if (value) {
      const questions = await fetchAdditionalQuestions(value);
      setAdditionalQuestions(questions);
    } else {
      setAdditionalQuestions([]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (Object.keys(errors).length === 0) {
      const enteredData = { ...formData };
      additionalQuestions.forEach((question, index) => {
        enteredData[`question_${index}`] = formData[`question_${index}`];
      });
      setSubmittedData(enteredData);
    }
  };

  const renderAdditionalQuestions = () => {
    return additionalQuestions.map((question, index) => (
      <div key={question.id} className="form-group">
        <label>{`Additional Question ${index + 1}: ${question.question}`}</label>
        <input type="text" name={`question_${index}`} onChange={handleChange} />
      </div>
    ));
  };

  if (submittedData) {
    return (
      <div className="container">
        <h1>Submitted Data</h1>
        <div className="submitted-data">
          <div className='submitted-data-data'><strong>Full Name:</strong> {submittedData.fullName}</div>
          <div className='submitted-data-data'><strong>Email:</strong> {submittedData.email}</div>
          <div className='submitted-data-data'><strong>Survey Topic:</strong> {submittedData.surveyTopic}</div>
          {submittedData.surveyTopic === 'Technology' && (
            <>
              <div className='submitted-data-data'><strong>Favorite Programming Language:</strong> {submittedData.favoriteLanguage}</div>
              <div className='submitted-data-data'><strong>Years of Experience:</strong> {submittedData.experience}</div>
            </>
          )}
          {submittedData.surveyTopic === 'Health' && (
            <>
              <div className='submitted-data-data'><strong>Exercise Frequency:</strong> {submittedData.exerciseFrequency}</div>
              <div className='submitted-data-data'><strong>Diet Preference:</strong> {submittedData.dietPreference}</div>
            </>
          )}
          {submittedData.surveyTopic === 'Education' && (
            <>
              <div className='submitted-data-data'><strong>Highest Qualification:</strong> {submittedData.qualification}</div>
              <div className='submitted-data-data'><strong>Field of Study:</strong> {submittedData.fieldOfStudy}</div>
            </>
          )}
          {additionalQuestions.length > 0 && (
            <>
              <h2>Answers of Additional Questions</h2>
              {additionalQuestions.map((question, index) => (
                <div key={question.id}><strong>Answer {index + 1}:</strong> {submittedData[`question_${index}`]}</div>
              ))}
            </>
          )}
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Survey Form - Level 3</h1>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Survey Topic:</label>
          <select name="surveyTopic" value={formData.surveyTopic} onChange={handleTopicChange}>
            <option value="">Select...</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <p className="error">{errors.surveyTopic}</p>}
        </div>

        {formData.surveyTopic === 'Technology' && (
          <div className="form-section">
            <div className="form-group">
              <label>Favorite Programming Language:</label>
              <select name="favoriteLanguage" value={formData.favoriteLanguage} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteLanguage && <p className="error">{errors.favoriteLanguage}</p>}
            </div>
            <div className="form-group">
              <label>Years of Experience:</label>
              <input type="number" name="experience" value={formData.experience} onChange={handleChange} />
              {errors.experience && <p className="error">{errors.experience}</p>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div className="form-section">
            <div className="form-group">
              <label>Exercise Frequency:</label>
              <select name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && <p className="error">{errors.exerciseFrequency}</p>}
            </div>
            <div className="form-group">
              <label>Diet Preference:</label>
              <select name="dietPreference" value={formData.dietPreference} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
              {errors.dietPreference && <p className="error">{errors.dietPreference}</p>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div className="form-section">
            <div className="form-group">
              <label>Highest Qualification:</label>
              <select name="qualification" value={formData.qualification} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.qualification && <p className="error">{errors.qualification}</p>}
            </div>
            <div className="form-group">
              <label>Field of Study:</label>
              <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
              {errors.fieldOfStudy && <p className="error">{errors.fieldOfStudy}</p>}
            </div>
          </div>
        )}

        {renderAdditionalQuestions()}

        <div className="form-group">
          <label>Feedback:</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange}></textarea>
          {errors.feedback && <p className="error">{errors.feedback}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
