#Themes da Home
title : string
subscribersAmount : int
thumbnail : string
imageHighlighted: boolean

npx sequelize-cli model:generate --name Theme --attributes title:string,subscribersAmount:integer,thumbnail:string,imageHighlighted:string,highlighted:boolean

