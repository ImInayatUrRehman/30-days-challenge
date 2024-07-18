// wrtie a script to print a pattern of stars using nested loop;

for(let i : number = 1 ; i<=5; i++){
  let pattern :string = ''
  for(let j : number = 1; j<=i ; j++){
    pattern += "*"
  }
  console.log(pattern)
}