import { NetworkError } from '.'

describe('NetworkError', () => {
  it('should inherit from Error', () => {
    expect(new NetworkError('failure', new Error())).toBeInstanceOf(Error)
  })

  it('should set the properties', () => {
    const originalError = new Error('wtf happened?')
    const err = new NetworkError('man, this looks bad', originalError)

    expect(err.type).toEqual('Network Error')
    expect(err.message).toEqual('man, this looks bad')
    expect(err.err).toBe(originalError)
    expect(err.info).toBeUndefined()
  })

  it('should add an info property when options are provided', () => {
    const originalError = new Error('wtf happened?')
    const err = new NetworkError('man, this looks bad', originalError, { details: 'OK, here is what really happened...' })

    expect(err.info).toEqual({ details: 'OK, here is what really happened...' })
  })
})
