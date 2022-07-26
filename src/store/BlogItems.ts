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

  async load(page = 1) {
    this._items = []
    const metaFiles = import.meta.glob(
      ['@/assets/**/*.json', '@/assets/**/*.html'],
      { eager: true, as: 'raw' }
    )
    for (const [index, entry] of Object.entries(metaFiles)) {
      if (index.includes(this.source)) {
        const date = index.replace(`/src/assets/${this.source}/`, '').split('.')
        this.set(
          date[0],
          date[1],
          index.includes('.json') ? JSON.parse(entry) : entry
        )
      }
    }
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
