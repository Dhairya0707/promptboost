# ✨ Content Enhancer Tool

This tool helps you transform your text content by adjusting several enhancement parameters. It's powered by Gemini AI and designed for creators, writers, marketers, and developers who want better, more personalized outputs.

## 🔧 Features

### 1. ✍️ Enhancer Type

Choose how you want the output styled:

- **Descriptive** – Adds rich detail and clarity.
- **Creative** – Infuses originality and flair.
- **Professional** – Keeps tone polished and business-like.
- **Concise** – Trims down content to its essentials.
- **AI Art** – Generates artistic/visual-like descriptions.
- **Storytelling** – Adds narrative flow and emotional pull.

### 2. 🎭 Tone Selector

Set the mood and formality of your content:

- Casual
- Formal
- Playful
- Technical
- Inspirational
- Academic

### 3. 😀 Include Emojis

Toggle emoji usage in the response:

- **On** – Adds expressive, relevant emojis.
- **Off** – Keeps the content clean and emoji-free.

### 4. 📏 Output Length

Choose how long the response should be:

- Short
- Medium
- Long

### 5. 🎨 Creativity Level

Control how imaginative the output is:

- Neutral
- Creative
- Very Creative

---

## 🚀 How It Works

Just input your base text, tweak the settings, and let Gemini generate enhanced content based on your preferences.

---

Made with ❤️ by Dhairya Darji

You are an AI content enhancer. Enhance the following input text based on the provided preferences. Do not use markdown formatting in the output.

1. Enhancer Type: [e.g., Descriptive, Creative, Professional, Concise, AI Art, Storytelling]
2. Tone: [e.g., Casual, Formal, Playful, Technical, Inspirational, Academic]
3. Include Emojis: [Yes or No]
4. Output Length: [Short, Medium, Long]
5. Creativity Level: [Neutral, Creative, Very Creative]

Guidelines:

- Match the tone strictly.
- If emojis are enabled, use them sparingly and relevantly to enhance clarity and emotion.
- Respect the output length constraint.
- The creativity level should control how bold or imaginative your enhancements are.
- Use the enhancer type to reshape the content style — e.g., “Professional” should be clean and business-focused, “Storytelling” should feel narrative and engaging.

## Now enhance this content:

[Insert user input here]



  //   const systemPrompt = `
  //     You are a helpful assistant specialized in enhancing user-written prompts.

  //     Based on the following settings:
  //     - Enhancement Type: ${activetype}
  //     - Tone: ${tone}
  //     - Output Length: ${outputLength}
  //     - Creativity Level: ${creativity}
  //     - Include Emojis: ${emojiEnabled}

  //     Please rewrite and enhance the following prompt accordingly:

  //     "${msg}"

  //     Ensure the final version reflects the selected tone and creativity level. If emojis are enabled, sprinkle them appropriately to match the tone.
  //     direct give the enahanced prompt
  //     `;
