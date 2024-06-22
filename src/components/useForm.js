import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has validation errors:', errors);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.surveyTopic.trim()) {
      newErrors.surveyTopic = 'Survey Topic is required';
    }
    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteLanguage.trim()) {
        newErrors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!formData.yearsExperience.trim() || isNaN(formData.yearsExperience) || parseInt(formData.yearsExperience) <= 0) {
        newErrors.yearsExperience = 'Years of Experience is required and must be a number greater than 0';
      }
    }
    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency.trim()) {
        newErrors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!formData.dietPreference.trim()) {
        newErrors.dietPreference = 'Diet Preference is required';
      }
    }
    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification.trim()) {
        newErrors.highestQualification = 'Highest Qualification is required';
      }
      if (!formData.fieldOfStudy.trim()) {
        newErrors.fieldOfStudy = 'Field of Study is required';
      }
    }
    if (!formData.feedback.trim() || formData.feedback.trim().length < 50) {
      newErrors.feedback = 'Feedback is required and must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    setFormData,
  };
};

export default useForm;
