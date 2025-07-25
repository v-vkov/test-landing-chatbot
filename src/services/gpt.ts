export async function askGpt(messages: {role: 'user'|'assistant', content: string}[]): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || 'YOUR_OPENROUTER_API_KEY';
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': window.location.origin,
      'X-Title': 'AI Onboarding Assistant'
    },
    body: JSON.stringify({
      model: 'openai/gpt-3.5-turbo',
      messages
    })
  });
  if (!res.ok) throw new Error('GPT error');
  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'No response from GPT.';
} 