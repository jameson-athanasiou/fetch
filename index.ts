console.log('hello world')

type MakeFetchParameterOptions = Record<string, unknown>

type MakeFetch = (url: string, options: MakeFetchParameterOptions) => Promise<Response>

class NetworkError extends Error {
  message: string

  err: Error

  type = 'Network Error'

  constructor(msg: string, err: Error) {
    super(msg)
    this.message = msg
    this.err = err
  }
}

const makeFetch: MakeFetch = async (url, options) => {
  try {
    const result = await fetch(url, options)
    return result
  } catch (e) {
    throw new NetworkError('Network issue encountered; failed to fetch', e as Error)
  }
}

export default makeFetch
