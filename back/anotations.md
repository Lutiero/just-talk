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


const Op: OpTypes = {
  eq: Symbol.for('eq'),  // equal
  ne: Symbol.for('ne'),  // not equal
  gte: Symbol.for('gte'), // greater than or equal
  gt: Symbol.for('gt'), // greater than
  lte: Symbol.for('lte'), // less than or equal
  lt: Symbol.for('lt'), // less than
  not: Symbol.for('not'),
  is: Symbol.for('is'),
  in: Symbol.for('in'),
  notIn: Symbol.for('notIn'),
  like: Symbol.for('like'),
  notLike: Symbol.for('notLike'),
  iLike: Symbol.for('iLike'),
  notILike: Symbol.for('notILike'),
  startsWith: Symbol.for('startsWith'),
  endsWith: Symbol.for('endsWith'),
  substring: Symbol.for('substring'),
  regexp: Symbol.for('regexp'),
  notRegexp: Symbol.for('notRegexp'),
  iRegexp: Symbol.for('iRegexp'),
  notIRegexp: Symbol.for('notIRegexp'),
  between: Symbol.for('between'),
  notBetween: Symbol.for('notBetween'),
  overlap: Symbol.for('overlap'),
  contains: Symbol.for('contains'),
  contained: Symbol.for('contained'),
  adjacent: Symbol.for('adjacent'),
  strictLeft: Symbol.for('strictLeft'),
  strictRight: Symbol.for('strictRight'),
  noExtendRight: Symbol.for('noExtendRight'),
  noExtendLeft: Symbol.for('noExtendLeft'),
  and: Symbol.for('and'),
  or: Symbol.for('or'),
  any: Symbol.for('any'),
  all: Symbol.for('all'),
  values: Symbol.for('values'),
  col: Symbol.for('col'),
  placeholder: Symbol.for('placeholder'),
  join: Symbol.for('join'),
  match: Symbol.for('match')
} as OpTypes;
