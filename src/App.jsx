import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Kakao from "./components/Template/KaKaoPages/Kakao";
import MainPage from "./components/Template/MainPages/mainPage";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              message={message}
              setMessage={setMessage}
              messages={messages}
              setMessages={setMessages}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          }
        />
        <Route path="/Kakao" element={<Kakao />} />
      </Routes>
    </Router>
  );
}

export default App;
