import OpenAI from 'openai'
import axios from 'axios'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
})

async function lookupTime(location) { // 'Buenos_Aires'
  console.log('lookupTime', location)
  const url = `https://worldtimeapi.org/api/timezone/${ location }`
  console.log('url', url)

  const response = await axios.get(url)
  const { datetime } = response.data

  console.log(`El tiempo actual en ${ location } es ${ datetime } !!!`)
}

async function main() {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // gpt-3.5-turbo-0613, gpt-3.5-turbo-1106
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Que hora es en Montevideo, Uruguay?' }
      //{ role: 'user', content: 'Qué hora es en Buenos Aires, Argentina?' }
    ],
    functions: [
      {
        name: 'lookupTime',
        description: 'Look up the current time in a given location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'The location to look up the time for. Eg. Beijing, China.' +
              'But must be on the TimeZone name, for instance: Asia/Shangai, America/Bogota, Europe/Madrid, etc.'
            }
          },
          requiered: ['location']
        }
      }
    ],
    function_call: "auto"
  })

  const completionResponse = completion.choices[0].message
  console.log(completionResponse)

  if (!completionResponse.content) {
    const functionCallName = completionResponse.function_call.name;
    console.log(`Funcion a llamar: ${ functionCallName }`)

    if (functionCallName === 'lookupTime') {
      const args = JSON.parse(completionResponse.function_call.arguments)

      console.log('args', args)
      lookupTime(args.location)
    }
  }
  else {
    console.log('completionResponse.content', completionResponse.content)
  }
}

main()