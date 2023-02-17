import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Peter Myer 
// peter.sr.myer@gmail.com
// This application is a representation of my own work with no unauthorized help
// Total Time: ~11-13 hours //
//// Planning, Requirements, Fimga : ~1-2 hour
//// Basic MVP Features (Table, Modal, Chart): ~3 hours
//// Basic Styling (CSS + Responsive Design) : ~3 hours
//// Modal enhancements (next/back buttons): ~2 hours
//// Material-UI Chart enchancments: ~3 hours
//// Debugging: ~2 hours
// Comment: 
////Requested features and styling took me around the 5-6 hour mark originally estimated.
////However, I wanted to take the time to dig into Material-UI which I haven't used and add additional
////features such as table sorting.


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
