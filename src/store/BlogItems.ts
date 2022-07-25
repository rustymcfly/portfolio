import BlogItem from '@/store/BlogItem'

export default class BlogItems {
  get source(): string {
    return this._source
  }

  set source(value: string) {
    this._source = value
  }

  get maxItems(): number {
    return this._maxItems
  }

  set maxItems(value: number) {
    this._maxItems = value
  }
  get items(): BlogItem[] {
    return this._items
  }

  set items(value: BlogItem[]) {
    this._items = value
  }

  get itemsPerPage(): number {
    return this._itemsPerPage
  }

  set itemsPerPage(value: number) {
    this._itemsPerPage = value
  }

  private _items: BlogItem[]

  private _itemsPerPage: number

  private _maxItems: number

  private _source: string

  constructor() {
    this._items = []
    this._itemsPerPage = 10
    this._maxItems = 0
    this._source = 'Blog'
  }

  load(page = 1) {
    this._items = []
    const context = require.context('@/assets')
    const blog = context.keys().filter((path) => {
      return path.includes(this.source)
    })
    this._maxItems = blog.length
    blog.map((entry, index) => {
      if (page * this._itemsPerPage > index + 1 && page * this._itemsPerPage < index + this._itemsPerPage + 1) {
        const date = entry.replace(`./${this.source}/`, '').split('.')
        const item = context(entry)
        this.set(date[0], date[1], item)
      }
    })
    console.log(this.get())
    return this.get()
  }

  findByDate(date: Date) {
    return this._items.find((item) => date.toString() === item.date.toString())
  }

  set(dateString: string, key: string, value: string) {
    const date = new Date(parseInt(dateString))
    let item = this.findByDate(date)
    if (!item) {
      item = new BlogItem(date)
      this._items.push(item)
    }
    item.set(key, value)
  }

  get() {
    return this._items
  }
}
