import { GoogleGenAI, Type } from "@google/genai";
import { AiSuggestion, HighConvertingPlan } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Updated to the latest recommended model for text tasks
const modelName = "gemini-3-flash-preview";

export const generatePinStrategy = async (topic: string): Promise<AiSuggestion> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    You are a professional Pinterest Marketing Expert based on the "PinMaster" strategy.
    
    The user wants to create a Pin about: "${topic}".
    
    Based on high-converting Pinterest strategies (Visual Search Engine logic):
    1. Generate 5 catchy, click-worthy titles (mix of "How-to", "Lists", and "Curiosity gap"). Titles should be 40-50 chars max.
    2. Write a SEO-optimized description (100-200 words) that includes keywords naturally. Do not "stuff" keywords. Focus on the solution, not just the product.
    3. Suggest 5-7 relevant hashtags.
    4. Provide a specific "Pro Tip" for this topic based on visual appeal or seasonal trends.

    Return the result in JSON format.
    Language: Arabic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            titles: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            description: { type: Type.STRING },
            hashtags: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            strategyTip: { type: Type.STRING }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AiSuggestion;
    }
    throw new Error("No response from AI");
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

export const generateHighConvertingPlan = async (topic: string, audience: string): Promise<HighConvertingPlan> => {
    if (!apiKey) throw new Error("API Key is missing");
  
    const prompt = `
      Act as a Pinterest Funnel Expert. Create a "High-Converting Content Plan" for the topic: "${topic}" targeting "${audience}".
      
      You must generate 3 distinct Pin strategies based on User Intent:
      1. Awareness/Inspiration (Viral Intent): Focus on aesthetics, dreams, and broad appeal. High saves.
      2. Consideration/Education (Informational Intent): Focus on "How-to", steps, checklists, solving a specific problem. High clicks.
      3. Conversion/Action (Transactional Intent): Focus on product, offer, scarcity, or direct solution. High sales/signups.
  
      For EACH strategy, provide:
      - Visual Hook: Describe the image layout strictly.
      - Text Overlay: The exact text to put ON the image (Critical for CTR).
      - Title: SEO optimized title.
      - Description: 2 sentences with keywords.
      - Keywords: 3-5 focus keywords.
  
      Language: Arabic.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING },
              strategies: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    intent: { type: Type.STRING },
                    goal: { type: Type.STRING },
                    visualHook: { type: Type.STRING },
                    textOverlay: { type: Type.STRING },
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    keywords: { type: Type.ARRAY, items: { type: Type.STRING } }
                  }
                }
              }
            }
          }
        }
      });
  
      if (response.text) {
        return JSON.parse(response.text) as HighConvertingPlan;
      }
      throw new Error("No response from AI");
    } catch (error) {
      console.error("Gemini Plan Error:", error);
      throw error;
    }
  };
