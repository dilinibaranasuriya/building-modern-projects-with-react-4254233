import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App message="Hey there! You are now using a component from another file!" />)