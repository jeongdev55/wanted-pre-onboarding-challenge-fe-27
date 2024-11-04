export interface TodoItemType {
    title: string;
    content: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface TodoListType {
    data: TodoItemType[];
}

export interface CreateTodoRequest {
    title: string;
    content: string;
}

export interface TodoDetailResponse {
    data: TodoItemType;
}

export interface UpdateTodoRequest {
    id: string;
    title: string;
    content: string;
}