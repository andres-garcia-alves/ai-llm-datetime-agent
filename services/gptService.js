import OpenAI from 'openai'
import backendFunctions from './gptService/backendFunctions.js'

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })


const gptChat = async (authorization, message) => {

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // gpt-3.5-turbo-0613, gpt-3.5-turbo-1106
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message }
    ],
    functions: backendFunctions.functions,
    function_call: "auto"
  })

  const completionResponse = completion.choices[0].message

  if (completionResponse.content) {
    return completionResponse.content
  }
  else {
    const functionName = completionResponse.function_call.name;
    const functionArgs = JSON.parse(completionResponse.function_call.arguments)

    return await backendFunctions.parseGptResponse(authorization, functionName, functionArgs)
  }
}

export default gptChat