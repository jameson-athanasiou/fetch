import makeFetch from './index'
import { NetworkError } from './error'

global.fetch = jest.fn()

describe('fetch', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({})
  })

  afterEach(() => {
    (global.fetch as jest.Mock).mockReset()
  })

  it('should fetch the url with the provided options', async () => {
    await makeFetch('www.google.com', {})
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('www.google.com', {})
  })

  it('should throw a Network Error if the fetch fails', () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('internet broke'))
    expect(() => makeFetch('www.google.com')).rejects.toThrow(NetworkError)
  })
})
