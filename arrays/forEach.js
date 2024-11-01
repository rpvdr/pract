const MyWords = [
    {
      word: "hello",
      meaning: "used as a greeting or to begin a phone conversation.",
      status: "to learn",
    },
    {
      word: "ubiquitous",
      meaning: "present, appearing, or found everywhere.",
      status: "in process",
    },
    {
      word: "capricious",
      meaning: "given to sudden and unaccountable changes of mood or behavior.",
      status: "to learn",
    },
    {
      word: "serendipity",
      meaning:
        "the occurrence and development of events by chance in a happy or beneficial way.",
      status: "learned",
    },
    {
      word: "ephemeral",
      meaning: "lasting for a very short time.",
      status: "in process",
    },
  ];
  
  const statusToLearn = "to learn"; 
  const statusInProcess = "in process";
  const statusLearned = "learned";
  
  let numberToLearn = 0;
  let numberInProcess = 0;
  let numberLearned = 0;
  
  const comparison = (wordInfo) => {
    switch(wordInfo.status) {
      case "to learn":
        numberToLearn++;
        break;
      case "in process":
        numberInProcess++;
        break;
      case "learned":
        numberLearned++;
        break;
    }
  }

  MyWords.forEach(comparison);