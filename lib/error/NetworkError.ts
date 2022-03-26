type Options = Record<string, unknown> | undefined

class NetworkError extends Error {
  info: Options

  err: Error

  message: string

  type = 'Network Error'

  constructor(msg: string, err: Error, options? : Options) {
    super(msg)
    this.message = msg
    this.err = err
    this.info = options
  }
}

export default NetworkError
