import React, { useEffect } from "react";

const OrimonChatbot = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://bot.orimon.ai/deploy/index.js";
    script.setAttribute("tenantId", "a072ef83-6c28-4018-8509-5fb1164fef09");
    script.async = true;

    // Append script to body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI needed, the chatbot will load automatically
};

export default OrimonChatbot;
