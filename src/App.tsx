import React from 'react';
import { Activity, LineChart, UserCog, Utensils, Timer, Database } from 'lucide-react';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import TeamSection from './components/TeamSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const features = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Report Generation",
      description: "AI-driven recommendations for nutrition, fitness, and lifestyle based on individual health data and goals.",
      extendedInfo: {
        benefits: [
          "Personalized health insights based on your data",
          "Weekly and monthly progress tracking",
          "Custom PDF report generation",
          "Data visualization and trends"
        ],
        stats: {
          accuracy: "99.9%",
          processingTime: "< 2 seconds",
          dataPoints: "50+ metrics"
        }
      }
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Health Updates",
      description: "Notifications and real-time updates about health status and critical changes, with options for alerts and reminders.",
      extendedInfo: {
        benefits: [
          "Instant health alerts and notifications",
          "Customizable alert thresholds",
          "Emergency contact integration",
          "24/7 monitoring system"
        ],
        stats: {
          responseTime: "< 1 second",
          reliability: "99.99%",
          coverage: "All vital signs"
        }
      }
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: "Personalized Health Insights",
      description: "Organize reports, prescriptions, and scans efficiently for easy access.",
      extendedInfo: {
        benefits: [
          "AI-powered health recommendations",
          "Predictive health analysis",
          "Lifestyle optimization suggestions",
          "Medication management"
        ],
        stats: {
          accuracy: "95%",
          dataPoints: "1000+",
          updateFrequency: "Real-time"
        }
      }
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Personalized Diet and Lifestyle",
      description: "Personalized diet and lifestyle recommendations tailored to individual needs and goals for optimal health.",
      extendedInfo: {
        benefits: [
          "Custom meal planning",
          "Nutritional analysis",
          "Exercise recommendations",
          "Lifestyle coaching"
        ],
        stats: {
          mealPlans: "100+ options",
          exercises: "500+ routines",
          successRate: "92%"
        }
      }
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Integrated Health Risk Assessments",
      description: "Tools for assessing health risks and generating actionable insights, integrated with AI for personalized feedback.",
      extendedInfo: {
        benefits: [
          "Early risk detection",
          "Preventive care recommendations",
          "Health score tracking",
          "Comparative analysis"
        ],
        stats: {
          riskFactors: "200+",
          accuracy: "98%",
          assessmentTime: "5 minutes"
        }
      }
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Storage and Fast Retrieval",
      description: "Efficiently store and retrieve patient data with lightning-fast speed.",
      extendedInfo: {
        benefits: [
          "Secure cloud storage",
          "Instant data access",
          "Automated backups",
          "HIPAA compliant"
        ],
        stats: {
          uptime: "99.999%",
          retrievalSpeed: "< 0.5s",
          storage: "Unlimited"
        }
      }
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#8ea7fa] via-[#e8eefa] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
        <div className="container mx-auto px-4 pt-20 pb-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
                Revolutionizing Healthcare with Seamless Patient Data Management
              </h1>
              <p className="text-white/90 text-xl mb-8">
                Transform your healthcare experience with our innovative platform that puts your health data at your fingertips.
              </p>
              <button className="bg-white text-[#4b6efd] px-10 py-4 rounded-full text-xl font-semibold hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
                alt="Healthcare Technology"
                className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#4b6efd]">Features</h2>
            <p className="text-xl text-gray-600">Discover how we're transforming healthcare management</p>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <CareersSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;