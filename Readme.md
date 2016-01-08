# Noteorious
Copied + modified from the Redux TodoMVC example.

Cause the work needs another Javascript Todo app.

## Structure
There will be a list of books/notes/leafs:

let notebook = [
    {
        id: 0,
        title: 'Mi9',
        notes: [
            {
                id: 3,
                title: 'Team'
            },
            {
                id: 4,
                title: 'WWOS'
            },
            {
                id: 5,
                title: 'TV Guide'
            }]
    },
    {
        id: 1,
        title: 'Recipes',
        notes: [
            {
                id: 6,
                title: 'Baking'
            }
        ]
    },
    {
        id: 2,
        title: 'Archer'
    }
]

But will be flattened in the DB:
let notebook = [
    {
        id: 0,
        title: 'Mi9'
    },
    {
        id: 1,
        title: 'Recipes'
    },
    {
        id: 2,
        title: 'Archer'
    },
    {
        id: 3,
        title: 'Team',
        parentId: 0
    },
    {
        id: 4,
        title: 'WWOS',
        parentId: 0
    },
    {
        id: 5,
        title: 'TV Guide',
        parentId: 0
    },
    {
        id: 6,
        title: 'Baking',
        parentId: 1
    }
]

Then lists:
let notes = [{
    id: 0,
    notebookId: 0,
    title: 'Todos'
    list: [{
        text: 'autosize',
        completed: true,
        id: 0
    },{
        text: 'Create next note after in multiline',
        completed: true,
        id: 1,
        multiline: true,
        height: 36
    },{
        text: 'Create new list',
        completed: false,
        id: 2
    },{
        text: 'Give me some CSS',
        completed: true,
        id: 3
    }]
},
{
    id: 1,
    notebookId: 2,
    title: 'Second list',
    list: [{
        text: 'something here',
        id: 4
    }]
}]
