import { describe, it, expect } from 'vitest';
import { runGraph } from '../../packages/agent-core/src/graph';

describe('graph minimal', () => {
    it('responds with Echo', async () => {
        const out = await runGraph({
            sessionId: 't1',
            messages: [{ role: 'user', content: 'Hola', ts: Date.now() }]
        });
        const last = out.messages.at(-1);
        expect(last?.role).toBe('assistant');
        expect(last?.content.startsWith('Echo:')).toBe(true);
    });
});