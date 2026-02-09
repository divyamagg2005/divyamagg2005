import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import signatureAnimation from '../assets/lottie/animation.json';
import { EncryptedText } from '@/components/ui/encrypted-text';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Wait for animation to complete before transitioning
  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationComplete, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Lottie signature animation - scaled up for prominence */}
          <div className="mx-auto mb-4" style={{ width: '800px', height: '300px', maxWidth: '90vw' }}>
            <Lottie
              animationData={signatureAnimation}
              loop={false}
              autoplay={true}
              onComplete={() => setAnimationComplete(true)}
              rendererSettings={{
                preserveAspectRatio: 'xMidYMid meet'
              }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="mt-8 font-mono text-xl md:text-2xl text-center">
            <EncryptedText
              text="Welcome to my digital space."
              encryptedClassName="text-gray-600"
              revealedClassName="text-white font-medium"
              revealDelayMs={1200}
              interval={80}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;