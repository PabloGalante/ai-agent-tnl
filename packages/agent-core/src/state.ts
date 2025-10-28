export type ROLE = 'user' | 'assistant' | 'tool';

export type Message = {
    role: ROLE;
    content: string;
    ts: number;
};

export interface AgentState {
    sessionId: string;
    messages: Message[];
}