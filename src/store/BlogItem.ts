export default class BlogItem {
  get meta(): Record<string, unknown> {
    return this._meta
  }

  set meta(value: Record<string, unknown>) {
    this._meta = value
  }

  set date(value: Date) {
    this._date = value
  }

  get date() {
    return this._date
  }

  get content(): string {
    return this._content
  }

  set content(value: string) {
    this._content = value
  }

  private _date: Date
  private _content: string
  private _meta: Record<string, unknown>

  constructor(date: Date) {
    this._date = date
    this._content = ''
    this._meta = {}
  }

  set(key: string, value: string) {
    switch (key) {
      case 'content':
        this._content = value
        break
      case 'meta':
        this._meta = Object(value)
        break
    }
  }
}
