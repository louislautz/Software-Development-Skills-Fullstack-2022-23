db.posts.insertOne({
    title: 'Post One',
    body: 'Bodyof post one',
    category: 'News',
    likes: 4,
    tage: ['news', 'events'],
    user: {
        name: 'Louis Lautz',
        status: 'author'
    },
    date: Date()
})

db.posts.updateOne({ title: 'Post Two' },
    {$set: {
        body: 'New New Body of post one',
    }},
    {
        upsert: true
    }
)

db.posts.updateOne({ title: 'Post One' },
    {$set: {
        comments: [
            {
                user: 'Mary Williams',
                body: 'Comment One',
                date: Date()
            },
            {
                user: 'Harry White',
                body: 'Comment Two',
                date: Date()
            }
        ]
    }},
    {
        upsert: true
    }
)

db.posts.find({
    comments: {
        $elemMatch: {
            user: 'Mary Williams'
        }
    }
})

db.posts.find({
    $text: {
        $search: "\"Post O\""
    }
})