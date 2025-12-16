export type TaskAttributes = {
  status: number
  addedAt: string
  priority: number
  title: string
}

export type Task = {
  id: string
  attributes: TaskAttributes
}