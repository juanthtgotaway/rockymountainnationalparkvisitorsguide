const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        trails: [Trail]
        completedTrails: [CompletedTrail]
    }

    type Trail {
        trailId: ID
        name: String
        description: String
        weather: String
        image: String,
        comments: [Comment]
    }

    input TrailInput {
        trailId: ID
        name: String
        description: String
        weather: String
        image: String
    }

    type CompletedTrail {
        trailName: String,
        dateCompleted: String,
        trailComment: String
    }

    input CompletedTrailInput {
        trailName: String,
        dateCompleted: String,
        trailComment: String
    }

    type Comment {
        commentText: String,
        likes: Int,
        likesCount: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        allTrails: Trail
    }
    
    type Mutation {
        login(username: String, password: String):Auth
        addUser(username: String, password: String):Auth
        saveTrail(trailData: TrailInput):User
        removeTrail(trailId: ID):User
        completeTrail(completeData: CompletedTrailInput):User
    }

   
`

module.exports = typeDefs;