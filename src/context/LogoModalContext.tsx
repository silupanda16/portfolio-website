import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { BrandLogoModal } from '../components/BrandLogoModal';

interface LogoModalContextType {
  isOpen: boolean;
  openLogoModal: () => void;
  closeLogoModal: () => void;
}

const LogoModalContext = createContext<LogoModalContextType | undefined>(undefined);

export const LogoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLogoModal = useCallback(() => setIsOpen(true), []);
  const closeLogoModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeLogoModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLogoModal]);

  return (
    <LogoModalContext.Provider value={{ isOpen, openLogoModal, closeLogoModal }}>
      {children}
      <BrandLogoModal isOpen={isOpen} onClose={closeLogoModal} />
    </LogoModalContext.Provider>
  );
};

export const useLogoModal = () => {
  const context = useContext(LogoModalContext);
  if (!context) {
    throw new Error('useLogoModal must be used within a LogoModalProvider');
  }
  return context;
};
