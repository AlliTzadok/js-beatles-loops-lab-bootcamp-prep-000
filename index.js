function theBeatlesPlay(musicians, instruments){
  var array = [];{
  for (var i = 0; i < 5; i++)
   array = array.push(`${musicians[i]} plays ${instruments[i]}`)}
  return array;
}