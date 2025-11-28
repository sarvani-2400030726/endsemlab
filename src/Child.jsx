import { useState } from "react";

function Child({ parentData, sendToParent }) {
  const [childMessage, setChildMessage] = useState("");

  const sendData = () => {
    sendToParent(childMessage);  
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>

      <h2>Child Component</h2>

      <p><strong>Data received from Parent:</strong> {parentData}</p>

      <input
        type="text"
        placeholder="Type message to parent"
        value={childMessage}
        onChange={(e) => setChildMessage(e.target.value)}
        style={{ padding: "8px", width: "60%", marginRight: "10px" }}
      />

      <button
        onClick={sendData}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Send to Parent
      </button>
      
    </div>
  );
}

export default Child;
