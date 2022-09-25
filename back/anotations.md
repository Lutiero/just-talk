## User
name:string
email:string
imageProfile:string
isDoctor:boolean

npx sequelize-cli model:generate --name User --attributes name:string,email:string,imageProfile:string,isDoctor:boolean --force


## Theme
title:string
subscribersAmount:integer
smallImage:string
largeImage:string
highlighted:boolean
npx sequelize-cli model:generate --name Theme --attributes title:string,subscribersAmount:integer,smallImage:string,largeImage:string,highlighted:boolean --force

## ThemeUser (Groups)
themeId:integer
userId:integer

npx sequelize-cli model:generate --name ThemeUser --attributes themeId:integer,userId:integer --force

## Topic
content:string
repliesAmount:integer
themeId:integer
userId

npx sequelize-cli model:generate --name Topic --attributes content:string,repliesAmount:integer,themeId:integer,userId:integer --force


## Reply
content:string
userId:integer
topicId:integer

npx sequelize-cli model:generate --name Reply --attributes content:string,userId:integer,topicId:integer --force



