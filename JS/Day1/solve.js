let a = ["abc","vijay","anand","ajdsn"]

a.sort(function(a,b){
  return a.localeCompare(b)
})

console.log(a)