import React from 'react';

export interface ChatProps {
  readOnly?: boolean;
  chatData?: any;
}

export const Chat: ChatProps;

export function createRoot(element: HTMLElement, chatCls?: React.FC): void;