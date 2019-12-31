export interface Data {
    children: Array<Post>;
}

export interface Post {
    kind: string;
    data: Data;
}