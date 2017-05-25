var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
var count = 1
	console.log("Students")
for(i in users.Students){
	console.log(count + "-" + users.Students[i].first_name + " " + users.Students[i].last_name + " - " + (users.Students[i].first_name.length + users.Students[i].last_name.length ))
	count++
}
console.log("Instructors")
var count = 1
for(i in users.Instructors){
	console.log(count + "-" + users.Instructors[i].first_name + " " + users.Instructors[i].last_name + " - " + (users.Instructors[i].first_name.length + users.Instructors[i].last_name.length ))
	count++
}



