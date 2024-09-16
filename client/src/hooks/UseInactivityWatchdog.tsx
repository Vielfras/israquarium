import { useEffect, useContext, useState } from 'react';
import { ToastsContext } from '../context/ToastsContext';
import { AuthContext } from '../context/AuthContext';

interface InactivityWatchdogProps {
  timeoutDuration?: number; // Optional timeout duration (defaults to 10 minutes)
  onSignOut: () => void; // Function to call when the user is signed out
}

const defaultTimeoutDuration: number = 10 * 60 * 1000; // 10 minutes

export default function InactivityWatchdog({timeoutDuration = defaultTimeoutDuration, onSignOut}: InactivityWatchdogProps){
  const [inactivityTimer, setInactivityTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [warningTimer, setWarningTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const toastContext = useContext(ToastsContext);
  const auth = useContext(AuthContext);

  // Function to handle sign-out
  const handleSignOut = async () => {
    console.log("Watchdog sign out");
    if (auth?.signOut) {
      await auth.signOut(); // Sign out the user
      onSignOut(); // Call the provided onSignOut function
      if (toastContext) {
        toastContext.addToast('ℹ️', 'Signed Out', 'You have been signed out due to inactivity.');
      }
      window.location.reload(); // Reload the page after signing out
    }
  };

  // Function to reset inactivity and warning timers
  const resetInactivityTimeout = () => {
    console.log("Watchdog set time out");

    if (inactivityTimer) clearTimeout(inactivityTimer); // Clear the previous inactivity timer
    if (warningTimer) clearTimeout(warningTimer); // Clear the previous warning timer

    // Set the warning timer (1 minute before sign out)
    const newWarningTimer = setTimeout(() => {
      if (toastContext) {
        toastContext.addToast('⚠️', 'Inactivity Warning', 'You will be signed out in 1 minute due to inactivity.');
      }
    }, timeoutDuration - 1 * 60 * 1000); // Show the warning 1 minute before timeout

    // Set the new inactivity timer
    const newInactivityTimer = setTimeout(() => {
      handleSignOut(); // Sign the user out when the timeout expires
    }, timeoutDuration);

    setWarningTimer(newWarningTimer);
    setInactivityTimer(newInactivityTimer);
  };

  useEffect(() => {
    // List of events to monitor for user activity
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];

    // Attach event listeners to reset the inactivity timer on user activity
    events.forEach((event) => window.addEventListener(event, resetInactivityTimeout));

    // Start the inactivity timer when the component mounts
    resetInactivityTimeout();

    // Cleanup function to remove event listeners and clear timers when unmounted
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetInactivityTimeout));
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (warningTimer) clearTimeout(warningTimer);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount
}
