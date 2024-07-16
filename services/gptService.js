import OpenAI from 'openai'
import backendFunctions from './gptService/backendFunctions.js'

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })


const chat = async (auth, message) => {

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
    return { type: 'TEXT', message: completionResponse.content }
  }
  else {
    const functionName = completionResponse.function_call.name;
    const functionArgs = JSON.parse(completionResponse.function_call.arguments)

    const response = await backendFunctions.parseGptResponse(auth, functionName, functionArgs)
    return response
  }

  // const response = await backendFunctions.parseGptResponse(auth, 'time-lookup', { location: 'Asia/Jerusalem' }) // Asia/Shanghai
  // const response = await backendFunctions.parseGptResponse(auth, 'budget-extended', { sortDesc: true, limit: 4 })

  return response
}

export default { chat }