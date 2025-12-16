export type TaskAttributes = {
  status: 0 | 1 | 2
  priority: 1 | 2 | 3 | 4 | 5
  addedAt: string
  title: string
  boardId: string
  boardTitle: string
  description: string | null
}

export type Task = {
  id: string
  attributes: TaskAttributes
}