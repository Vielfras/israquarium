// InactivityWatchdog.tsx

import { useEffect, useContext, useState } from 'react';
import { ToastsContext } from '../../context/ToastsContext';
import { AuthContext } from '../../context/AuthContext';

interface InactivityWatchdogProps {
  timeoutDuration?: number; 
  onSignOut?: () => void; 
}

const defaultTimeoutDuration: number = 10 * 60 * 1000; // 10 minutes
const defaultOnSignOut = () => {}
;
export default function InactivityWatchdog({timeoutDuration=defaultTimeoutDuration, onSignOut=defaultOnSignOut}: InactivityWatchdogProps){
  const [inactivityTimer, setInactivityTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [warningTimer, setWarningTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const toastContext = useContext(ToastsContext);
  const auth = useContext(AuthContext);

  const handleSignOut = async () => {
    if (auth?.signOut) {
      await auth.signOut(); 
      onSignOut(); 
      if (toastContext) {
        toastContext.addToast('ℹ️', 'Signed Out', 'You have been signed out due to inactivity.');
      }
      window.location.reload(); 
    }
  };

  const resetInactivityTimeout = () => {
    if (inactivityTimer) clearTimeout(inactivityTimer); 
    if (warningTimer) clearTimeout(warningTimer); 

    const newWarningTimer = setTimeout(() => {
      if (toastContext) {
        toastContext.addToast('⚠️', 'Inactivity Warning', 'You will be signed out in 1 minute due to inactivity.');
      }
    }, timeoutDuration - 1 * 60 * 1000); 

    const newInactivityTimer = setTimeout(() => {
      handleSignOut(); 
    }, timeoutDuration);

    setWarningTimer(newWarningTimer);
    setInactivityTimer(newInactivityTimer);
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

    events.forEach((event) => window.addEventListener(event, resetInactivityTimeout));
    
    resetInactivityTimeout();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetInactivityTimeout));
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (warningTimer) clearTimeout(warningTimer);
    };
  }, []); 

  return (<></>);
}
