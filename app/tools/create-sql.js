var glob = require('glob');

glob('../public/logic-puzzle/*.json', function(err, files) {
  var data, values;

  var result = files.map(function(file) {
    data = require(file);
    values = ["[0,2,7,2,1,5,7,1,4,8]",
      encodeURI(data.steps_string),
      data.count,
      data.question,
      data.question_zh,
      data.steps_length,
      data.max_update_times,
      data.answer,
      JSON.stringify(data.desc),
      JSON.stringify(data.desc_zh),
      'logic-puzzle/' + /(\d+)\.json$/.exec(file)[1] + '.png'
    ].join('\', \'');
    return "INSERT INTO logicPuzzle VALUES(null, '"+values+"');";
  }).join('\n');

  console.log(result);
});

