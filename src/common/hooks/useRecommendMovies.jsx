import { useMutation } from "@tanstack/react-query";
import { client } from "../utils/openai";

function useRecommendMovies(setMovieTitles) {
  const recommendationPromptResponse = async (query) => {
    const response = await client.responses.create({
      model: "gpt-3.5-turbo",
      instructions:
        "You are a movie recommendation system that suggests movies. The results should be comma separated with only movie titles and a list of 20 movies. Example result: Don, Tees Maar Khan, Raees, Golmaal, Dhurandhar, Kabhi Khushi Kabhi Gham, Kuch Kuch Hota Hai",
      input: query,
    });

    return !!response ? response?.output_text : null;
  };
  return useMutation({
    mutationFn: async (query) => {
      return recommendationPromptResponse(query);
    },
    onMutate: () => {
      setMovieTitles([]);
    },
    onSuccess: (data) => {
      const titles = data
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      setMovieTitles(titles);
    },
  });
}

export default useRecommendMovies;
