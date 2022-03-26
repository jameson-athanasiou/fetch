import { NetworkError } from './error'

type MakeFetchParameterOptions = Record<string, unknown>

type MakeFetch = (url: string, options?: MakeFetchParameterOptions) => Promise<unknown>

const parseBody = (response: Response) => {
  try {
    return response.json()
  } catch (e) {
    return response.text()
  }
}

const handleSuccess = (response: Response) => {

}

const handleFailure = (response: Response) => {

}

const handleResponse = async (response: Response) => {
  if (response.ok) {
    handleSuccess(response)
  } else {
    handleFailure(response)
  }
}

const makeFetch: MakeFetch = async (url, options) => {
  try {
    const result = await fetch(url, options)
    return handleResponse(result)
    return result
  } catch (e) {
    throw new NetworkError('Network issue encountered; failed to fetch', e as Error)
  }
}

export default makeFetch
