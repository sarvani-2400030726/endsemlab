import { useState } from "react";
import Child from "./Child";

function App() {
  const [messageFromChild, setMessageFromChild] = useState("");
  const parentMessage = "Hello from Parent Component 👋";

  // Callback function — child will call this
  const handleChildData = (data) => {
    setMessageFromChild(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Parent Component</h1>

      <p><strong>Message sent to Child:</strong> {parentMessage}</p>

      <Child 
        parentData={parentMessage}
        sendToParent={handleChildData}
      />

      <hr />

      <h2>Message received from Child:</h2>
      <p style={{ color: "green" }}>
        {messageFromChild || "Child has not sent data yet"}
      </p>

    </div>
  );
}

export default App;
