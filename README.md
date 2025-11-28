# Butter AI - Marketing Website Prototype

**Butter AI** is a predictive customer health engine designed for early-stage SaaS founders. It aggregates customer signals from scattered tools (CRM, support, usage) to predict churn before it happens.

This repository contains the **Phase 3 Marketing Website Prototype**, which demonstrates the product vision, core value proposition, and user interface.

## How to View

You can view the live deployed prototype here:

**[Launch Butter AI Website](https://final-project-butter-ai-marketing-website-38773740458.us-west1.run.app)**

## Demo Video

**[Link to Demo Video](https://notredame.zoom.us/rec/share/QSY7h2s8ABs1A2zmSZUM702cwGgHIEvF17umKAlEmNX1HW-lg-u78moAkmUhswv0.96-4guWgEo9ybXgU?startTime=1764358058000)

## Technologies Used

*   **Frontend:** React 19, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS (via CDN for portability)
*   **AI Integration:** Google GenAI SDK (`@google/genai`)
*   **Model:** Gemini 2.5 Flash

## How This Project Uses AI

This prototype features a live, interactive **AI Assistant** embedded in the bottom-right corner of the website.

*   **What it does:** The assistant acts as a knowledgeable support agent for Butter AI. It answers questions about how the product works, explains concepts like "customer churn" and "health scoring," and provides examples of how Butter AI helps founders save time.
*   **How it works:** We use the **Google GenAI SDK** to send user messages to the **Gemini 2.5 Flash** model. The model is given a specific "System Instruction" that defines its persona: helpful, concise, and focused on SaaS metrics.
*   **Why we used it:** This demonstrates the core promise of Butter AI—translating complex data into simple, conversational insights—without needing a full backend infrastructure for this marketing phase.

## License

This project is a prototype created for educational and demonstration purposes.
