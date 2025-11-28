# Butter AI - Marketing Website Prototype

**Butter AI** is a predictive customer health engine designed for early-stage SaaS founders. It aggregates customer signals from scattered tools (CRM, support, usage) to predict churn before it happens.

This repository contains the **Phase 3 Marketing Website Prototype**, which demonstrates the product vision, core value proposition, and user interface.

## How to View

To run and view this project on your local machine:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Configure API Key:**
    Create a `.env` file in the root directory and add your Google Gemini API key:
    ```env
    VITE_API_KEY=your_google_api_key_here
    ```

3.  **Start the Server:**
    ```bash
    npm run dev
    ```
    Open your browser to the URL provided in the terminal (usually `http://localhost:5173`).

## Demo Video

[Link to Demo Video]

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
