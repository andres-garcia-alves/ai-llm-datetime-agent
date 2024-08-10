import OpenAI from 'openai'
import gptFunctions from './gptFunctions.js'

const chat = async ( message) => {

  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // gpt-3.5-turbo-0613, gpt-3.5-turbo-1106
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: message }
    ],
    functions: gptFunctions.functions,
    function_call: "auto"
  })

  const completionResponse = completion.choices[0].message

  if (completionResponse.content) {
    return { type: 'TEXT', response: completionResponse.content }
  }
  else {
    const functionName = completionResponse.function_call.name;
    const functionArgs = JSON.parse(completionResponse.function_call.arguments)

    const response = await gptFunctions.parseResponse(functionName, functionArgs)
    return response
  }

  // const response = await gptFunctions.parseGptResponse('time-lookup', { location: 'Asia/Jerusalem' }) // Asia/Shanghai
  return response
}

export default { chat }