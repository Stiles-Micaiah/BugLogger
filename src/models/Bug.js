export default class Bug {
  constructor(data) {
    this.closed = data.losed
    this.description = data.description
    this.creator = data.creator
    this.user = data.user
    this.title = data.title
    this._id = data._id
    this.created = data.createdAt
    this.updated = data.updatedAt
  }
}