import React, { useState } from 'react';
import { StatusBar } from '@/components/StatusBar';
import { Header } from '@/components/Header';
import { WelcomeSection } from '@/components/WelcomeSection';
import { RulesSection } from '@/components/RulesSection';
import { CTAButton } from '@/components/CTAButton';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    setIsLoading(true);
    
    // Simulate account creation process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically handle the actual account creation
      console.log('Account creation initiated');
      
      // You could redirect to a sign-up form or next step
      alert('Welcome to BizzKnit! Let\'s start building together!');
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    // Handle close action - could navigate back or close modal
    console.log('Closing welcome screen');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=SF+Pro:wght@400;500;590;700&family=Poppins:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <div className="w-[428px] h-[932px] relative bg-white mx-auto my-0 max-md:w-full max-md:max-w-[428px] max-sm:w-full max-sm:max-w-full">
        <StatusBar />
        
        <Header onClose={handleClose} />
        
        <main>
          <WelcomeSection />
          
          <RulesSection />
          
          <CTAButton 
            onClick={handleCreateAccount}
            loading={isLoading}
            disabled={isLoading}
          />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
