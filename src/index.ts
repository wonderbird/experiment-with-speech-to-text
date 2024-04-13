import fs from "fs";
import OpenAI from "openai";
import 'dotenv/config';

const openai = new OpenAI();

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("./speech.mp3"),
    model: "whisper-1",
  });

  console.log(transcription.text);
}

console.log(`Using OpenAI API key "${process.env.OPENAI_API_KEY_NAME}"`);
main();
