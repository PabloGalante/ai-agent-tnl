// Minimun graph: policy -> respond
export async function runGraph(state: import('./state').AgentState) {
    const reply = `Echo: ${state.messages.at(-1)?.content ?? ''}`.trim();
    return {
        ...state,
        messages: [
            ...state.messages,
            { role: 'assistant', content: reply, ts: Date.now() }
        ]
    };
}