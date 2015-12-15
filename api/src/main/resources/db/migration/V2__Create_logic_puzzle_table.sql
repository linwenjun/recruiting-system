CREATE TABLE logicPuzzle (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  initializedBox VARCHAR(128) NOT NULL ,
  stepsString VARCHAR(2048) NOT NULL ,
  count INT NOT NULL ,
  question VARCHAR(128) NOT NULL ,
  questionZh VARCHAR(128) NOT NULL ,
  stepsLength INT NOT NULL ,
  maxUpdateTimes INT NOT NULL ,
  answer INT NOT NULL ,
  description VARCHAR(2048) NOT NULL ,
  descriptionZh VARCHAR(2048) NOT NULL ,
  chartPath VARCHAR(128) NOT NULL
);