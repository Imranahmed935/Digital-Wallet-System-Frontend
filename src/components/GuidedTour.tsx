import { useState, useEffect } from "react";
import Joyride, { STATUS, type CallBackProps, type Step } from "react-joyride";

interface GuidedTourProps {
  userEmail?: string;
  usersLoaded?: boolean;
  agentsLoaded?: boolean;
  transactionsLoaded?: boolean;
}

const GuidedTour = ({
  userEmail,
  usersLoaded = false,
  agentsLoaded = false,
  transactionsLoaded = false,
}: GuidedTourProps) => {
  const [run, setRun] = useState(false);
  const storageKey = `walletTourDone_${userEmail || "guest"}`;

  const steps: Step[] = [
    { target: "#theme-toggle", content: "Switch between light and dark mode here.", placement: "bottom" },
    { target: "#user-analytics", content: "Here you can check user analytics.", placement: "top" },
    { target: "#admin-analytics", content: "This section shows admin analytics.", placement: "top" },
    { target: "#agent-analytics", content: "Here’s the agent analytics overview.", placement: "top" },
    { target: "#navbar", content: "Use the navbar to navigate across the system.", placement: "bottom" },
  ];

  useEffect(() => {
    if (!userEmail) return;
    if (usersLoaded && agentsLoaded && transactionsLoaded) {
      const tourDone = localStorage.getItem(storageKey);
      if (!tourDone) setRun(true);
    }
  }, [userEmail, usersLoaded, agentsLoaded, transactionsLoaded, storageKey]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRun(false);
      localStorage.setItem(storageKey, "true");
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
          primaryColor: "#4f46e5",
        },
      }}
    />
  );
};

export default GuidedTour;
