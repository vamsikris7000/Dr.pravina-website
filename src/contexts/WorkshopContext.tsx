import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Workshop {
  id: number;
  title: string;
  subtitle: string;
  audience: string;
  emoji: string;
  day: string;
  date: string;
  time: string;
  features: string[];
}

interface WorkshopContextType {
  workshops: Workshop[];
  updateWorkshop: (id: number, updates: Partial<Workshop>) => void;
  resetWorkshops: () => void;
}

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const useWorkshops = () => {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error('useWorkshops must be used within a WorkshopProvider');
  }
  return context;
};

interface WorkshopProviderProps {
  children: ReactNode;
}

export const WorkshopProvider: React.FC<WorkshopProviderProps> = ({ children }) => {
  // Default workshops
  const defaultWorkshops: Workshop[] = [
    {
      id: 1,
      title: "The Weight Reset for Women",
      subtitle: "Not Just Weight Loss, A Full Body Reset",
      audience: "For All Women 18+",
      emoji: "👩🏻‍⚕️",
      day: "Sunday",
      date: "8th Aug",
      time: "4:50 PM - 8:00 PM",
      features: [
        "Understand your hormones & weight connection",
        "Tackle belly fat, cravings & low energy",
        "Anti-inflammatory nutrition made practical",
        "Smart movement & strength strategies",
        "Stress, sleep & metabolism mastery",
        "Build habits that last, not bounce back"
      ]
    },
    {
      id: 2,
      title: "PCOS Unplugged",
      subtitle: "Your Hormones, Hair, Skin & Sanity",
      audience: "For Teens & Young Women",
      emoji: "🌸",
      day: "Saturday",
      date: "9th Aug",
      time: "3:00 PM - 6:30 PM",
      features: [
        "Decode your hormones & cycle",
        "Period problems & PCOS types", 
        "Skin, hair, mood & weight tips",
        "Menstrual cup basics & hygiene",
        "PCOS-friendly food & movement",
        "Cycle syncing & stress hacks"
      ]
    },
    {
      id: 3,
      title: "Pre-Pregnancy Power Couple",
      subtitle: "Plan Parenthood with Purpose",
      audience: "For Couples Planning Pregnancy",
      emoji: "👫🏻",
      day: "Friday",
      date: "10th Aug",
      time: "5:00 PM - 8:30 PM",
      features: [
        "Fertility nutrition for both partners",
        "Cycle tracking & fertile window basics",
        "Lifestyle shifts to boost conception",
        "Detox, stress & sleep prep",
        "Emotional alignment & partner mindset",
        "Myths vs science of getting pregnant"
      ]
    },
    {
      id: 4,
      title: "Pregnancy Wellness Workshop",
      subtitle: "Feel Nourished, Calm & Connected",
      audience: "For Expecting Mothers (All Trimesters)",
      emoji: "🤰🏻",
      day: "Thursday",
      date: "11th Aug",
      time: "4:00 PM - 7:30 PM",
      features: [
        "Trimester-wise nutrition & cravings",
        "Safe movement & breathing practices",
        "Sleep, stress & mental wellness",
        "Gut health & immunity boosters",
        "Indian wisdom meets modern care",
        "Rituals for bonding & body trust"
      ]
    },
    {
      id: 5,
      title: "Confident Breastfeeding & Postpartum Healing",
      subtitle: "Nurture Your Baby. Reclaim Your Body.",
      audience: "For New & Expecting Moms",
      emoji: "🤱🏻",
      day: "Wednesday",
      date: "12th Aug",
      time: "6:00 PM - 9:30 PM",
      features: [
        "Lactation techniques & myths",
        "Latch, supply, positions & pumping",
        "Recovery after birth for body, mind, sleep",
        "Postpartum nutrition & emotional support",
        "Indian rituals & modern healing practices",
        "Space for real talk, not just survival"
      ]
    },
    {
      id: 6,
      title: "First Foods & Beyond",
      subtitle: "Foundations of Child Nutrition & Lifestyle",
      audience: "For Moms with Children (6 Months to 5 Years)",
      emoji: "🍲",
      day: "Tuesday",
      date: "13th Aug",
      time: "5:30 PM - 9:00 PM",
      features: [
        "When & how to start solids",
        "Daily feeding plans & schedules",
        "Immunity-boosting foods & habits",
        "Gut health, picky eating & meal battles",
        "Holistic child lifestyle routines (food, sleep, screen, play)",
        "Indian food wisdom with modern evidence"
      ]
    }
  ];

  const [workshops, setWorkshops] = useState<Workshop[]>(defaultWorkshops);

  // Load workshops from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWorkshops = localStorage.getItem('patholife-workshops');
      if (savedWorkshops) {
        try {
          const parsedWorkshops = JSON.parse(savedWorkshops);
          setWorkshops(parsedWorkshops);
        } catch (error) {
          console.error('Error loading workshops from localStorage:', error);
          // If there's an error parsing, use default workshops
          setWorkshops(defaultWorkshops);
        }
      }
    }
  }, []);

  const updateWorkshop = (id: number, updates: Partial<Workshop>) => {
    setWorkshops(prevWorkshops => {
      const updatedWorkshops = prevWorkshops.map(workshop =>
        workshop.id === id ? { ...workshop, ...updates } : workshop
      );
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('patholife-workshops', JSON.stringify(updatedWorkshops));
      }
      
      return updatedWorkshops;
    });
  };

  const resetWorkshops = () => {
    setWorkshops(defaultWorkshops);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('patholife-workshops');
    }
  };

  return (
    <WorkshopContext.Provider value={{ workshops, updateWorkshop, resetWorkshops }}>
      {children}
    </WorkshopContext.Provider>
  );
}; 