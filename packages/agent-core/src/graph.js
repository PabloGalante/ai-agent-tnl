// Minimun graph: policy -> respond
export async function runGraph(state) {
    const reply = `Echo: ${state.messages.at(-1)?.content ?? ''}`.trim();
    return {
        ...state,
        messages: [
            ...state.messages,
            { role: 'assistant', content: reply, ts: Date.now() }
        ]
    };
}
//# sourceMappingURL=graph.js.map