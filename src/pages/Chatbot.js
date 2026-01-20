import { Chatbot } from "@sisense/sdk-ui/ai";

const CodeExample = () => {
  return (
    <Chatbot
      height={"700px"}
      width={"100%"}
      config={{
        enableFollowupQuestions: true,
        numOfRecommendations: 4,
        dataTopicsList: ["Sample ECommerce", "Sample Retail"],
        numOfRecentPrompts: 4,
        inputPromptText: "Ask me anything",
        welcomeText: "Welcome to Sisense AI",
        enableHeader: true,
        enableInsights: true,
      }}
    />
  );
};

export default function Chat_bot() {
  return <CodeExample />;
}
