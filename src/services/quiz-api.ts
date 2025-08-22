const API_BASE_URL = '/.netlify/functions';

export interface QuizLeadData {
  name: string;
  email: string;
  score: number;
  result: {
    range: string;
    title: string;
    message: string;
  };
  pillarScores: {
    [key: string]: {
      score: number;
      maxScore: number;
      percentage: number;
    };
  };
  answers: { [key: number]: number };
}

export const submitQuizLead = async (data: QuizLeadData): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz-leads/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit quiz lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting quiz lead:', error);
    throw error;
  }
};

export const getQuizLeads = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz-leads`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch quiz leads');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching quiz leads:', error);
    throw error;
  }
};

export const updateQuizLeadEmailStatus = async (id: string, emailSent: boolean): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/quiz-leads/${id}/email-status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailSent }),
    });

    if (!response.ok) {
      throw new Error('Failed to update email status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating email status:', error);
    throw error;
  }
};
