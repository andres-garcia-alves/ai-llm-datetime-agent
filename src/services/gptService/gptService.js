import OpenAI from 'openai'
import gptAvailableFunctions from './gptAvailableFunctions.js'

const chat = async (message) => {

  const enableFunctions = true
  // const enableFunctions = (process.env.CUSTOM_FUNCTIONS.toUpperCase() === 'TRUE'); 

  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini', // 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message }
    ],
    n: 1,
    max_tokens: 400,
    functions: (enableFunctions) ? gptAvailableFunctions.functions : null,
    function_call: (enableFunctions) ? "auto" : null
  })

  let response = {}
  const completionResponse = completion.choices[0]

  if (completionResponse.finish_reason === 'function_call') {
    const functionName = completionResponse.message.function_call.name;
    const functionArgs = JSON.parse(completionResponse.message.function_call.arguments)

    response = await gptAvailableFunctions.parseResponse(functionName, functionArgs)
  }
  else {
    response = { type: 'text', response: completionResponse.message.content }
  }

  return response
}

export default { chat }