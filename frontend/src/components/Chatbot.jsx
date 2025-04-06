import React, { useState } from "react";
import {ConvoPane} from "./chatbot/convo-pane"
import {TypeView }from "./chatbot/typing-bar"
import {ChatProvider} from "./chatbot/chat-provider"

export function Chatbot() {
  return (
    <div className='w-screen h-screen bg-[#222226]'>
      <ChatProvider>
        <ConvoPane />
        <TypeView />
      </ChatProvider>      
    </div>
  );
}
