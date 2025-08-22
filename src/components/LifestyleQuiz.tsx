import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { X, ArrowRight, CheckCircle, TrendingUp, Heart, Star } from 'lucide-react';
import { submitQuizLead, QuizLeadData } from '../services/quiz-api';

interface QuizQuestion {
  id: number;
  pillar: string;
  pillarTitle: string;
  question: string;
  reverseScored?: boolean;
}

interface QuizResult {
  score: number;
  range: string;
  title: string;
  message: string;
  color: string;
  icon: React.ReactNode;
}

const quizQuestions: QuizQuestion[] = [
  // Nutrition - What You Eat Heals You
  { id: 1, pillar: "nutrition", pillarTitle: "Nutrition – What You Eat Heals You", question: "How often do you include fruits, vegetables, and whole grains in your meals?" },
  { id: 2, pillar: "nutrition", pillarTitle: "Nutrition – What You Eat Heals You", question: "How often do you eat packaged/junk/fast food in a week?", reverseScored: true },
  
  // Movement - Move for Strength, Hormones & Health
  { id: 3, pillar: "movement", pillarTitle: "Movement – Move for Strength, Hormones & Health", question: "Do you get at least 30 minutes of intentional activity (walking, yoga, exercise) most days?" },
  { id: 4, pillar: "movement", pillarTitle: "Movement – Move for Strength, Hormones & Health", question: "Do you include strength or flexibility exercises (yoga, weights, stretches) weekly?" },
  
  // Sleep - Rest to Heal, Reset, and Recharge
  { id: 5, pillar: "sleep", pillarTitle: "Sleep – Rest to Heal, Reset, and Recharge", question: "Do you sleep 7–8 hours most nights and wake up refreshed?" },
  { id: 6, pillar: "sleep", pillarTitle: "Sleep – Rest to Heal, Reset, and Recharge", question: "Do you avoid late-night screen time or caffeine close to bedtime?" },
  
  // Stress Management - Calm is a Superpower
  { id: 7, pillar: "stress", pillarTitle: "Stress Management – Calm is a Superpower", question: "Do you practice stress-reducing habits (deep breathing, journaling, prayer, mindfulness)?" },
  { id: 8, pillar: "stress", pillarTitle: "Stress Management – Calm is a Superpower", question: "When stressed, do you feel able to calm yourself without food, alcohol, or anger?" },
  
  // Sexual Health - Knowledge, Confidence, and Comfort
  { id: 9, pillar: "sexual", pillarTitle: "Sexual Health – Knowledge, Confidence, and Comfort", question: "Do you feel comfortable and informed about your reproductive/sexual health?" },
  { id: 10, pillar: "sexual", pillarTitle: "Sexual Health – Knowledge, Confidence, and Comfort", question: "Do you feel confident in discussing your needs or concerns with a partner/doctor?" },
  
  // Social Connection - Healing Happens in Community
  { id: 11, pillar: "social", pillarTitle: "Social Connection – Healing Happens in Community", question: "Do you have 2–3 people you can openly talk to and rely on?" },
  { id: 12, pillar: "social", pillarTitle: "Social Connection – Healing Happens in Community", question: "How often do you spend quality time with family, friends, or supportive groups?" },
  
  // Avoiding Risky Substances - Protect Your Body, Protect Your Future
  { id: 13, pillar: "substances", pillarTitle: "Avoiding Risky Substances – Protect Your Body, Protect Your Future", question: "Do you avoid smoking, alcohol, or recreational substances?" },
  { id: 14, pillar: "substances", pillarTitle: "Avoiding Risky Substances – Protect Your Body, Protect Your Future", question: "Do you limit caffeine, energy drinks, or excessive packaged beverages?" }
];

const getQuizResult = (score: number): QuizResult => {
  if (score >= 14 && score <= 28) {
    return {
      score,
      range: "14-28",
      title: "Needs Attention 🚨",
      message: "Your lifestyle score shows that your daily habits may be pulling your health down. The good news? Small steps every day can create massive change over time.",
      color: "from-red-500 to-red-600",
      icon: <TrendingUp className="w-8 h-8 text-red-500" />
    };
  } else if (score >= 29 && score <= 49) {
    return {
      score,
      range: "29-49",
      title: "Work in Progress 🌱",
      message: "You're doing some things right, but there's plenty of room for growth. Focus on consistency and balancing all pillars.",
      color: "from-orange-500 to-orange-600",
      icon: <Heart className="w-8 h-8 text-orange-500" />
    };
  } else if (score >= 50 && score <= 63) {
    return {
      score,
      range: "50-63",
      title: "Strong Foundations 💪",
      message: "You're building healthy habits already! Keep nurturing them, and try to refine the areas where you scored lower.",
      color: "from-yellow-500 to-yellow-600",
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />
    };
  } else {
    return {
      score,
      range: "64-70",
      title: "Thriving 🌸",
      message: "Fantastic! Your habits are supporting your health and future. Keep shining and inspiring others with your lifestyle choices.",
      color: "from-green-500 to-green-600",
      icon: <Star className="w-8 h-8 text-green-500" />
    };
  }
};

const getScorePercentage = (score: number): number => {
  return ((score - 14) / (70 - 14)) * 100;
};

interface LifestyleQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreServices?: () => void;
}

const LifestyleQuiz: React.FC<LifestyleQuizProps> = ({ isOpen, onClose, onExploreServices }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowLeadCapture(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = (): number => {
    let totalScore = 0;
    quizQuestions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        if (question.reverseScored) {
          totalScore += (6 - answer);
        } else {
          totalScore += answer;
        }
      }
    });
    return totalScore;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const score = calculateScore();
      const result = getQuizResult(score);
      
      // Calculate pillar scores
      const pillarScores: { [key: string]: { score: number; maxScore: number; percentage: number } } = {};
      ['nutrition', 'movement', 'sleep', 'stress', 'sexual', 'social', 'substances'].forEach((pillar) => {
        const pillarQuestions = quizQuestions.filter(q => q.pillar === pillar);
        const pillarScore = pillarQuestions.reduce((total, q) => {
          const answer = answers[q.id];
          if (answer) {
            return total + (q.reverseScored ? (6 - answer) : answer);
          }
          return total;
        }, 0);
        const maxScore = pillarQuestions.length * 5;
        const percentage = (pillarScore / maxScore) * 100;
        
        pillarScores[pillar] = { score: pillarScore, maxScore, percentage };
      });

      const quizData: QuizLeadData = {
        name: leadData.name,
        email: leadData.email,
        score,
        result: {
          range: result.range,
          title: result.title,
          message: result.message
        },
        pillarScores,
        answers
      };

      await submitQuizLead(quizData);
      setShowResults(true);
      setShowLeadCapture(false);
    } catch (error) {
      console.error('Error submitting lead:', error);
      // Still show results even if API fails
      setShowResults(true);
      setShowLeadCapture(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowLeadCapture(false);
    setShowResults(false);
    setLeadData({ name: '', email: '' });
    onClose();
  };

  if (!isOpen) return null;

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full md:max-h-none max-h-[90vh] overflow-y-auto md:overflow-visible [&::-webkit-scrollbar]:hidden"
        style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {/* Header */}
        <div className="relative p-8 border-b border-gray-200 rounded-t-3xl" style={{ backgroundColor: '#1a5f57' }}>
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="text-center">
            {!showResults && (
              <h2 className="font-playfair text-2xl font-bold text-white">
                Path'o'Life Lifestyle Score Quiz
              </h2>
            )}
          </div>

          {/* Progress Bar */}
          {!showResults && (
            <div className="mt-8">
              <div className="flex justify-between text-sm font-inter font-semibold mb-3 text-white">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div 
                  className="h-4 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #ffffff 0%, #e0f2e0 100%)'
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Quiz Content */}
        {!showLeadCapture && !showResults && (
          <div className="p-8 rounded-b-3xl">
            {/* Pillar Header */}
            <div className="mb-6 text-center">
              <div className="inline-block px-4 py-2 rounded-full text-xs font-inter font-semibold mb-3" style={{ backgroundColor: '#338B81', color: 'white' }}>
                {currentQ.pillarTitle}
              </div>
              <h3 className="font-playfair text-lg font-bold text-gray-800 leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleAnswer(currentQ.id, value)}
                  className={`w-full p-3 rounded-lg border-2 transition-all duration-300 text-left group ${
                    answers[currentQ.id] === value
                      ? 'border-[#338B81] bg-[#e9f5e9] text-[#338B81] shadow-md'
                      : 'border-gray-200 hover:border-[#338B81] hover:bg-[#f0f9f8] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-sm font-semibold">
                      {value === 1 && 'Never'}
                      {value === 2 && 'Rarely'}
                      {value === 3 && 'Sometimes'}
                      {value === 4 && 'Often'}
                      {value === 5 && 'Always'}
                    </span>
                    {answers[currentQ.id] === value && (
                      <CheckCircle className="w-4 h-4" style={{ color: '#338B81' }} />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="px-6 py-2 font-inter font-semibold text-sm border-2 hover:bg-gray-50"
                style={{ borderColor: '#338B81', color: '#338B81' }}
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQ.id]}
                className="px-6 py-2 font-inter font-semibold text-sm transition-all duration-300"
                style={{ 
                  backgroundColor: answers[currentQ.id] ? '#338B81' : '#ccc',
                  color: 'white',
                  opacity: answers[currentQ.id] ? 1 : 0.6
                }}
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Lead Capture */}
        {showLeadCapture && (
          <div className="p-8 text-center rounded-b-3xl" style={{ backgroundColor: '#f8fafc' }}>
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#338B81' }}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3" style={{ color: '#338B81' }}>
                ✨ Almost There!
              </h3>
              <p className="font-inter text-sm text-gray-700 font-medium">
                Enter your details to see your personalized Lifestyle Score and get a copy sent to your inbox!
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <Label htmlFor="name" className="text-left block mb-2 font-inter font-semibold text-gray-700 text-sm">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={leadData.name}
                  onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full p-3 text-sm font-inter border-2 focus:border-[#338B81] focus:ring-[#338B81]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-left block mb-2 font-inter font-semibold text-gray-700 text-sm">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={leadData.email}
                  onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full p-3 text-sm font-inter border-2 focus:border-[#338B81] focus:ring-[#338B81]"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !leadData.name || !leadData.email}
                className="w-full p-3 font-inter font-semibold text-sm transition-all duration-300"
                style={{ 
                  backgroundColor: (isSubmitting || !leadData.name || !leadData.email) ? '#ccc' : '#338B81',
                  color: 'white',
                  opacity: (isSubmitting || !leadData.name || !leadData.email) ? 0.6 : 1
                }}
              >
                {isSubmitting ? 'Processing...' : 'Get My Lifestyle Score'}
              </Button>
            </form>
          </div>
        )}

        {/* Results */}
        {showResults && (
          <div className="p-8 rounded-b-3xl">
            <div className="text-center mb-4">
              <h3 className="font-playfair text-lg font-bold mb-2" style={{ color: '#338B81' }}>
                Your Lifestyle Score
              </h3>
              
              {/* Score Display */}
              <div className="mb-3">
                <div className="text-3xl font-bold mb-1" style={{ color: '#338B81' }}>
                  {calculateScore()}
                </div>
                <div className="font-inter text-xs text-gray-600 font-medium">out of 70</div>
              </div>

              {/* Gauge Meter */}
              <div className="mb-4">
                <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000"
                    style={{ 
                      width: `${getScorePercentage(calculateScore())}%`,
                      background: 'linear-gradient(90deg, #338B81 0%, #4CAF50 100%)'
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs font-inter font-medium mt-1" style={{ color: '#338B81' }}>
                  <span>14</span>
                  <span>28</span>
                  <span>49</span>
                  <span>63</span>
                  <span>70</span>
                </div>
              </div>
            </div>

            {/* Result Card */}
            <Card className="mb-4 border-2" style={{ borderColor: '#338B81' }}>
              <CardHeader className="text-center pb-2">
                <CardTitle className="flex items-center justify-center gap-2 text-base font-playfair font-bold" style={{ color: '#338B81' }}>
                  {getQuizResult(calculateScore()).icon}
                  {getQuizResult(calculateScore()).title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-xs text-gray-700 text-center leading-relaxed">
                  {getQuizResult(calculateScore()).message}
                </p>
              </CardContent>
            </Card>

            {/* Pillar Breakdown */}
            <div className="mb-4">
              <h4 className="font-playfair text-base font-bold text-center mb-3" style={{ color: '#338B81' }}>
                Your Pillar Breakdown
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['nutrition', 'movement', 'sleep', 'stress', 'sexual', 'social', 'substances'].map((pillar) => {
                  const pillarQuestions = quizQuestions.filter(q => q.pillar === pillar);
                  const pillarScore = pillarQuestions.reduce((total, q) => {
                    const answer = answers[q.id];
                    if (answer) {
                      return total + (q.reverseScored ? (6 - answer) : answer);
                    }
                    return total;
                  }, 0);
                  const maxScore = pillarQuestions.length * 5;
                  const percentage = (pillarScore / maxScore) * 100;
                  
                  return (
                    <div key={pillar} className="bg-[#f8fafc] p-2 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-inter font-semibold text-gray-700 capitalize text-xs">
                          {pillar === 'sexual' ? 'Sexual Health' : 
                           pillar === 'substances' ? 'Avoiding Risky Substances' : pillar}
                        </span>
                        <span className="font-inter font-bold text-xs" style={{ color: '#338B81' }}>
                          {pillarScore}/{maxScore}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${percentage}%`,
                            background: 'linear-gradient(90deg, #338B81 0%, #4CAF50 100%)'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#e9f5e9' }}>
              <h4 className="font-playfair text-base font-bold mb-2" style={{ color: '#338B81' }}>
                🌿 Remember: Your lifestyle is your medicine
              </h4>
              <p className="font-inter text-xs text-gray-700 mb-3 font-medium">
                Every choice counts. Start small, stay consistent, and celebrate your progress.
              </p>
              <Button
                onClick={() => {
                  onClose();
                  if (onExploreServices) {
                    onExploreServices();
                  }
                }}
                className="px-4 py-2 font-inter font-semibold text-xs transition-all duration-300"
                style={{ backgroundColor: '#338B81', color: 'white' }}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LifestyleQuiz;
