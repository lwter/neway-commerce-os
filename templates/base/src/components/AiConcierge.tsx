import { FormEvent, useMemo, useState } from "react";
import { askConcierge } from "../lib/api";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const DEFAULT_REPLY =
  "Based on your goals, I’d start with UI Kit Pro if you want fast visual launch speed, or AI Workflow Pack if you want automation and repeatable AI workflows. If you want, I can help narrow it down by budget or use case.";

function AiConcierge() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I’m your AI shopping concierge. Tell me what you're trying to launch, and I’ll recommend the best product."
    }
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canSend) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const data = await askConcierge({ messages: nextMessages });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: typeof data?.reply === "string" && data.reply.trim() ? data.reply : DEFAULT_REPLY
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: DEFAULT_REPLY
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="assistant-card stack">
      <div className="section-title">
        <div>
          <h3>AI Shopping Concierge</h3>
          <p>Ask for the best product based on your use case, budget, or launch stage.</p>
        </div>
      </div>

      <div className="chat-log">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`chat-bubble ${message.role === "user" ? "user" : "assistant"}`}
          >
            {message.content}
          </div>
        ))}
      </div>

      <form className="stack" onSubmit={onSubmit}>
        <textarea
          className="textarea"
          placeholder="I’m launching a design product and want the fastest path to revenue..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="row-between">
          <span className="muted">
            {loading ? "Thinking..." : "Get a recommendation in one reply."}
          </span>
          <button className="button" type="submit" disabled={!canSend}>
            {loading ? "Advising..." : "Ask concierge"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AiConcierge;
