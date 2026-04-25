import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export async function recommendationPromptResponse(query) {
  const response = await client.responses.create({
    model: "gpt-3.5-turbo",
    instructions:
      "You are a movie recommendation system that suggests movies. The results should be comma separated with only movie titles and a list of 20 movies. Example result: Don, Tees Maar Khan, Raees, Golmaal, Dhurandhar, Kabhi Khushi Kabhi Gham, Kuch Kuch Hota Hai",
    input: query,
  });

  return !!response ? response?.output_text : null;
}
