'use client';

import { useState } from 'react';
import { Question } from '@/lib/quizData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuizComponentProps {
  title: string;
  questions: Question[];
  domain: string;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  shuffledCorrectAnswer: number;
}

export default function QuizComponent({ title, questions, domain }: QuizComponentProps) {
  const [stage, setStage] = useState<'form' | 'quiz' | 'result'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [quizQuestions, setQuizQuestions] = useState<ShuffledQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState(0);

  // Shuffle array function
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize quiz with shuffled questions and options
  const initializeQuiz = () => {
    // Shuffle and select 10 questions
    const shuffledQuestions = shuffleArray(questions).slice(0, 10);

    // Shuffle options for each question
    const questionsWithShuffledOptions = shuffledQuestions.map((q) => {
      const optionsWithIndex = q.options.map((opt, idx) => ({ opt, idx }));
      const shuffledOptionsWithIndex = shuffleArray(optionsWithIndex);
      const shuffledOptions = shuffledOptionsWithIndex.map((item) => item.opt);
      const newCorrectAnswer = shuffledOptionsWithIndex.findIndex(
        (item) => item.idx === q.correctAnswer
      );

      return {
        ...q,
        shuffledOptions,
        shuffledCorrectAnswer: newCorrectAnswer,
      };
    });

    setQuizQuestions(questionsWithShuffledOptions);
    setSelectedAnswers(new Array(10).fill(null));
  };

  const validateForm = () => {
    const errors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      initializeQuiz();
      setStage('quiz');
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    let calculatedScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].shuffledCorrectAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);

    // Log to console
    console.log('=== QUIZ SUBMISSION ===');
    console.log('Domain:', domain);
    console.log('Name:', formData.name);
    console.log('Phone:', formData.phone);
    console.log('Score:', calculatedScore, '/', quizQuestions.length);
    console.log('======================');

    // Post results to backend
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/skillvita/games`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          number: formData.phone,
          email: formData.email,
          domain: domain,
          round1_score: calculatedScore,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Successfully submitted to backend:', data);
      } else {
        console.error('Failed to submit to backend:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting to backend:', error);
    }

    setStage('result');
  };

  // Form Stage
  if (stage === 'form') {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#32FE6B' }}>{title} Quiz</h1>
          <p className="text-gray-400">
            Please fill in your details to start the quiz
          </p>
        </div>

        <Card className="p-8 max-w-xl mx-auto border-2 rounded-2xl" style={{ borderColor: '#014051' }}>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>Name *</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className={formErrors.name ? 'border-red-500' : ''}
                style={{ borderColor: formErrors.name ? undefined : '#014051' }}
                onFocus={(e) => !formErrors.name && (e.target.style.borderColor = '#32FE6B')}
                onBlur={(e) => !formErrors.name && (e.target.style.borderColor = '#014051')}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className={formErrors.email ? 'border-red-500' : ''}
                style={{ borderColor: formErrors.email ? undefined : '#014051' }}
                onFocus={(e) => !formErrors.email && (e.target.style.borderColor = '#32FE6B')}
                onBlur={(e) => !formErrors.email && (e.target.style.borderColor = '#014051')}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#32FE6B' }}>Phone Number (10 digits) *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter 10-digit phone number"
                maxLength={10}
                className={formErrors.phone ? 'border-red-500' : ''}
                style={{ borderColor: formErrors.phone ? undefined : '#014051' }}
                onFocus={(e) => !formErrors.phone && (e.target.style.borderColor = '#32FE6B')}
                onBlur={(e) => !formErrors.phone && (e.target.style.borderColor = '#014051')}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full font-semibold text-black transition-all" 
              size="lg"
              style={{ backgroundColor: '#32FE6B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2de55f'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32FE6B'}
            >
              Start Quiz
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  // Quiz Stage
  if (stage === 'quiz') {
    const currentQ = quizQuestions[currentQuestion];
    const isLastQuestion = currentQuestion === quizQuestions.length - 1;
    const allAnswered = selectedAnswers.every((answer) => answer !== null);

    return (
      <div className="container mx-auto py-6 md:py-10 px-4">
        <div className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2" style={{ color: '#32FE6B' }}>{title} Quiz</h1>
          <p className="text-sm md:text-base text-gray-400">
            Question {currentQuestion + 1} of {quizQuestions.length} • {selectedAnswers.filter((a) => a !== null).length} answered
          </p>
        </div>

        <Card className="p-4 md:p-6 border-2 rounded-2xl" style={{ borderColor: '#014051' }}>
          {/* Progress Bar */}
          <div className="mb-4 md:mb-6">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                  backgroundColor: '#32FE6B'
                }}
              />
            </div>
          </div>

          {/* Question */}
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6" style={{ color: '#32FE6B' }}>{currentQ.question}</h3>

          {/* Options */}
          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            {currentQ.shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className="w-full p-3 md:p-4 text-left text-sm md:text-base rounded-lg border-2 transition-all"
                style={{
                  borderColor: selectedAnswers[currentQuestion] === index ? '#32FE6B' : '#014051',
                  backgroundColor: selectedAnswers[currentQuestion] === index ? 'rgba(50, 254, 107, 0.1)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (selectedAnswers[currentQuestion] !== index) {
                    e.currentTarget.style.borderColor = '#32FE6B';
                    e.currentTarget.style.backgroundColor = 'rgba(50, 254, 107, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedAnswers[currentQuestion] !== index) {
                    e.currentTarget.style.borderColor = '#014051';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span className="font-medium mr-2 md:mr-3" style={{ color: '#32FE6B' }}>
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#014051' }}>
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="flex-1 md:flex-none md:min-w-[120px]"
              style={{ borderColor: '#014051', color: '#32FE6B' }}
            >
              Previous
            </Button>

            <div className="flex-1 md:flex-none"></div>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmitQuiz}
                disabled={!allAnswered}
                className="flex-1 md:flex-none md:min-w-[120px] font-semibold text-black transition-all md:ml-auto"
                style={{ backgroundColor: '#32FE6B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2de55f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32FE6B'}
              >
                Submit Quiz
              </Button>
            ) : (
              <Button 
                onClick={handleNext} 
                className="flex-1 md:flex-none md:min-w-[120px] font-semibold text-black transition-all md:ml-auto"
                style={{ backgroundColor: '#32FE6B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2de55f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32FE6B'}
              >
                Next
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  // Result Stage
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#32FE6B' }}>Quiz Complete!</h1>
        <p className="text-gray-400">
          Thank you for completing the {title} quiz
        </p>
      </div>

      <Card className="p-6 max-w-2xl mx-auto border-2 rounded-2xl" style={{ borderColor: '#014051' }}>
        {/* Score Display */}
        <div className="text-center mb-8 pb-8 border-b" style={{ borderColor: '#014051' }}>
          <div className="text-7xl font-bold mb-4" style={{ color: '#32FE6B' }}>
            {score}/{quizQuestions.length}
          </div>
          <p className="text-2xl font-semibold mb-2" style={{ color: '#32FE6B' }}>
            {Math.round((score / quizQuestions.length) * 100)}%
          </p>
          <p className="text-gray-400">Great job, {formData.name}!</p>
        </div>

      </Card>
    </div>
  );
}
