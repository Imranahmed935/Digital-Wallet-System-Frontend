// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Joyride, {type Step, STATUS } from "react-joyride";

// const GuidedTour = () => {
//   const [run, setRun] = useState(false);
//   const [stepIndex, setStepIndex] = useState(0);
//   const [currentSteps, setCurrentSteps] = useState<Step[]>([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // All steps grouped by route
//   const stepsByRoute: Record<string, Step[]> = {
//     "/": [
//       { target: "#nav-menu", content: "This is the navigation menu.", placement: "bottom" },
//       { target: "#dashboard-stats", content: "Check your stats here.", placement: "top" },
//     ],
//     "/feature": [
//       { target: "#feature-section", content: "Explore features here.", placement: "bottom" },
//     ],
//     "/pricing": [
//       { target: "#pricing-section", content: "Check pricing plans here.", placement: "top" },
//     ],
//     "/about": [
//       { target: "#about-section", content: "Learn more about us.", placement: "top" },
//     ],
//     "/faq": [
//       { target: "#faq-section", content: "Find answers to FAQs.", placement: "bottom" },
//     ],
//     "/contact": [
//       { target: "#contact-form", content: "Use this form to get in touch.", placement: "left" },
//     ],
//   };

//   // Initialize tour
//   useEffect(() => {
//     const hasSeen = localStorage.getItem("multi-page-tour-seen");
//     if (!hasSeen) {
//       setRun(true);
//       setStepIndex(0);
//       setCurrentSteps(stepsByRoute[location.pathname] || []);
//     }
//   }, []);

//   // Update steps when route changes
//   useEffect(() => {
//     if (run) {
//       setCurrentSteps(stepsByRoute[location.pathname] || []);
//       setStepIndex(0);
//     }
//   }, [location.pathname, run]);

//   const handleCallback = (data: any) => {
//     const { status, action, index } = data;

//     if (status === STATUS.SKIPPED || status === STATUS.FINISHED) {
//       localStorage.setItem("multi-page-tour-seen", "true");
//       setRun(false);
//       setStepIndex(0);
//       return;
//     }

//     if (action === "next") {
//       // Navigate to next route when last step of current page finishes
//       const routeKeys = Object.keys(stepsByRoute);
//       const currentStepsCount = (stepsByRoute[location.pathname] || []).length;
//       if (index === currentStepsCount - 1) {
//         const nextRouteIndex = routeKeys.indexOf(location.pathname) + 1;
//         if (nextRouteIndex < routeKeys.length) {
//           navigate(routeKeys[nextRouteIndex]);
//         }
//       }
//     }

//     setStepIndex(index + 1);
//   };

//   return (
//     <Joyride
//       steps={currentSteps}
//       run={run}
//       stepIndex={stepIndex}
//       continuous
//       scrollToFirstStep
//       showSkipButton
//       showProgress
//       disableOverlayClose
//       callback={handleCallback}
//       styles={{
//         options: { primaryColor: "#8b5cf6", zIndex: 99999 },
//         tooltip: { borderRadius: "12px", padding: "16px" },
//       }}
//     />
//   );
// };

// export default GuidedTour;
