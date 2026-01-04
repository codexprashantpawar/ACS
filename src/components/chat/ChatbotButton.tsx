// import { useState, useRef, useEffect } from "react";
// import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { buildChatbotContext } from "@/data/chatbot/chatbotContext";

// const GEMINI_API_KEY = "AIzaSyC5OED0cohVmP7el23D-Xrq1y2Z5UI1ByY";

// interface Message {
//   id: string;
//   text: string;
//   isBot: boolean;
//   timestamp: Date;
// }

// export const ChatbotButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       text: "Hello! 👋 Welcome to SNBP ACS. I'm here to help you with any questions about admissions, courses, fees, or campus facilities. How can I assist you today?",
//       isBot: true,
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = async () => {
//     if (!inputValue.trim() || isLoading) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: inputValue,
//       isBot: false,
//       timestamp: new Date(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     const userQuery = inputValue;
//     setInputValue("");
//     setIsLoading(true);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: `${buildChatbotContext()}\n\nUser Question: ${userQuery}\n\nProvide a helpful, concise response.` }] }],
//             generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
//             safetySettings: [
//               { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
//               { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
//               { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
//               { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here to help! Could you please rephrase your question?";
//       setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: botText, isBot: true, timestamp: new Date() }]);
//     } catch (error) {
//       setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: "I'm sorry, please contact us at 02027488628.", isBot: true, timestamp: new Date() }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-strong hover:scale-110 transition-transform flex items-center justify-center" aria-label="Open chatbot">
//         {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
//       </button>
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-card rounded-xl shadow-strong border border-border overflow-hidden animate-scale-in">
//           <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"><Bot className="w-5 h-5" /></div>
//             <div><h3 className="font-semibold">SNBP ACS Assistant</h3><p className="text-xs opacity-90">Powered by AI</p></div>
//           </div>
//           <div className="h-[300px] overflow-y-auto p-4 space-y-3">
//             {messages.map((message) => (
//               <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
//                 <div className={`max-w-[80%] p-3 rounded-lg text-sm ${message.isBot ? "bg-secondary text-foreground" : "bg-primary text-primary-foreground"}`}>
//                   <p className="whitespace-pre-line">{message.text}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && <div className="flex justify-start"><div className="bg-secondary p-3 rounded-lg flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /><span className="text-sm">Thinking...</span></div></div>}
//             <div ref={messagesEndRef} />
//           </div>
//           <div className="p-3 border-t border-border">
//             <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
//               <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask about admissions, courses..." className="flex-1" disabled={isLoading} />
//               <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}><Send className="w-4 h-4" /></Button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buildChatbotContext } from "@/data/chatbot/chatbotContext";

const GEMINI_API_KEY = "AIzaSyC5OED0cohVmP7el23D-Xrq1y2Z5UI1ByY";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

// Hardcoded answers for keywords
const hardcodedAnswers = {
  fees: `BBA Fee Structure: http://snbpacsms.com/WebsitePages/PDF/Fees.PDF
BCA Fee Structure: http://snbpacsms.com/WebsitePages/PDF/Fees.PDF`,

  principal: `Dr. Dashrath Bhosale is the Principal of SNBP ACS.`,

  contact: `Contact Information:
SANT DNYANESHWAR NAGAR, MHADA COLONY, MORWADI, PIMPRI, PUNE - 411018
Phone: 02027488628, 7770003862, 9168628603, 7774059645
Email: snbpacs@gmail.com`,

  address: `SANT DNYANESHWAR NAGAR, MHADA COLONY, MORWADI, PIMPRI, PUNE - 411018`,
};

export const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to SNBP ACS. I'm here to help you with any questions about admissions, courses, fees, or campus facilities. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Checks if the input matches any keyword for hardcoded answers
  const getHardcodedAnswer = (text: string): string | null => {
    const lower = text.toLowerCase();
    if (
      lower.includes("fee") ||
      lower.includes("fees") ||
      lower.includes("bba") ||
      lower.includes("bca")
    ) {
      return hardcodedAnswers.fees;
    }
    if (
      lower.includes("principal") ||
      lower.includes("dr. dashrath") ||
      lower.includes("dr dashrath")
    ) {
      return hardcodedAnswers.principal;
    }
    if (lower.includes("contact")) {
      return hardcodedAnswers.contact;
    }
    if (lower.includes("address")) {
      return hardcodedAnswers.address;
    }
    return null;
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const userQuery = inputValue;
    setInputValue("");

    // Check for hardcoded answers first
    const hardcodedResponse = getHardcodedAnswer(userQuery);
    if (hardcodedResponse) {
      // If matched, show answer immediately, no API call
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: hardcodedResponse,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
      return;
    }

    // Else call API
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${buildChatbotContext()}\n\nUser Question: ${userQuery}\n\nProvide a helpful, concise response.`,
                  },
                ],
              },
            ],
            generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_NONE",
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_NONE",
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_NONE",
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botText =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm here to help! Could you please rephrase your question?";
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: botText,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "I'm sorry, please contact us at 02027488628.",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-strong hover:scale-110 transition-transform flex items-center gap-2 px-4 py-3"
        aria-label="Open chatbot">
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        <span className="font-semibold select-none">AI Assistance</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-card rounded-xl shadow-strong border border-border overflow-hidden animate-scale-in flex flex-col">
          <div className="p-3 border-b border-border max-h-40 overflow-y-auto">
            <h4 className="font-semibold mb-2">Frequently Asked Questions</h4>
            <ul className="space-y-2 text-sm">
              {/* List of clickable questions for quick access */}
              <li
                className="cursor-pointer text-primary hover:underline"
                onClick={() => {
                  // Clicking question triggers the same as typing it
                  const question = "What is the contact information?";
                  const answer = hardcodedAnswers.contact;
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: `q-${Date.now()}`,
                      text: question,
                      isBot: false,
                      timestamp: new Date(),
                    },
                    {
                      id: `a-${Date.now() + 1}`,
                      text: answer,
                      isBot: true,
                      timestamp: new Date(),
                    },
                  ]);
                }}>
                Contact Information
              </li>
              <li
                className="cursor-pointer text-primary hover:underline"
                onClick={() => {
                  const question = "Who is the Principal?";
                  const answer = hardcodedAnswers.principal;
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: `q-${Date.now()}`,
                      text: question,
                      isBot: false,
                      timestamp: new Date(),
                    },
                    {
                      id: `a-${Date.now() + 1}`,
                      text: answer,
                      isBot: true,
                      timestamp: new Date(),
                    },
                  ]);
                }}>
                Principal Information
              </li>
              <li
                className="cursor-pointer text-primary hover:underline"
                onClick={() => {
                  const question = "What is the address?";
                  const answer = hardcodedAnswers.address;
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: `q-${Date.now()}`,
                      text: question,
                      isBot: false,
                      timestamp: new Date(),
                    },
                    {
                      id: `a-${Date.now() + 1}`,
                      text: answer,
                      isBot: true,
                      timestamp: new Date(),
                    },
                  ]);
                }}>
                Address
              </li>
              <li
                className="cursor-pointer text-primary hover:underline"
                onClick={() => {
                  const question = "What are the fees?";
                  const answer = hardcodedAnswers.fees;
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: `q-${Date.now()}`,
                      text: question,
                      isBot: false,
                      timestamp: new Date(),
                    },
                    {
                      id: `a-${Date.now() + 1}`,
                      text: answer,
                      isBot: true,
                      timestamp: new Date(),
                    },
                  ]);
                }}>
                Fee Structure (BBA & BCA)
              </li>
            </ul>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-secondary text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                  <p className="whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-lg flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about admissions, courses..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !inputValue.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
