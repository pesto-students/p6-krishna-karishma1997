export const initialState = JSON.parse(window.localStorage.getItem("todos"))|| {
    todos:[
        {
            id:0,
            title: "Buy milk",
            completed: false,
            important: false
        },
        {
            id:1,
            title: "clean my room",
            completed: true,
            important: false
        },
        {
            id:2,
            title: "get medicine",
            completed: false,
            important: true
        },
        {
            id:3,
            title: "car service",
            completed: false,
            important: true
        },
        {
            id:4,
            title: "prepare for meeting",
            completed: true,
            important: false
        }
    ]
}