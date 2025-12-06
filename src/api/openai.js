import axios from "axios";

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

export async function fetchChatCompletion({
  apiKey,
  prompt,
  signal,
  language = "en",
}) {
  if (!apiKey) {
    throw new Error("missing-api-key");
  }

  const systemPrompt =
    language === "ar"
      ? "اكتب نصاً موجزاً وواضحاً يشرح الضائقة المالية بلغة عربية بسيطة ومتعاطفة، كأن مقدم الطلب يكتبها بنفسه (150-200 كلمة)."
      : "You help citizens clearly explain their financial hardship in simple, empathetic language as if they themselves are writing it. Don't write it as an email; keep it like a plain description (150-200 words).";

  const response = await axios.post(
    OPENAI_URL,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      signal,
    }
  );

  if (response.status !== 200) {
    throw new Error("Request failed");
  }

  const text = response.data?.choices?.[0]?.message?.content?.trim() || "";
  return text;
}
