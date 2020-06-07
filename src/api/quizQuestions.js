const quizQuestions = [
  {
    question: 'Where was the first "sit-in" at a segregated lunch counter?',
    answers: [
      { content: "Greensboro, North Carolina", type: true },
      { content: "Jackson, Mississippi", type: false },
      { content: "Charleston, South Carolina", type: false },
      { content: "Atlanta, Georgia", type: false },
    ],
    postAnswer:
      "The Greensboro sit-ins were a series of nonviolent protests in February to July 1960, primarily in the Woolworth store, now the International Civil Rights Center and Museum, in Greensboro, North Carolina, which led to the F. W. Woolworth Company department store chain removing its policy of racial segregation in the Southern United States.",

    wikiLink: "https://en.wikipedia.org/wiki/Greensboro_sit-ins",
  },
  {
    question:
      "Which Supreme Court case ruled that the segregation of public schools was unconstitutional?",
    answers: [
      { content: "Plessy v. Ferguson", type: false },
      { content: "Brown v. Board of Education", type: true },
      { content: "Dred Scott v. Sandford", type: false },
      { content: "Shelley v. Kraemer", type: false },
    ],
    postAnswer:
      "Brown v. Board of Education of Topeka, 347 U.S. 483 (1954),[1] was a landmark decision of the U.S. Supreme Court in which the Court ruled that U.S. state laws establishing racial segregation in public schools are unconstitutional, even if the segregated schools are otherwise equal in quality. Handed down on May 17, 1954, the Court's unanimous (9â€“0) decision stated that \"separate educational facilities are inherently unequal,\" and therefore violate the Equal Protection Clause of the Fourteenth Amendment of the U.S. Constitution. However, the decision's 14 pages did not spell out any sort of method for ending racial segregation in schools, and the Court's second decision in Brown II (349 U.S. 294 (1955)) only ordered states to desegregate \"with all deliberate speed.",
    wikiLink: "https://en.wikipedia.org/wiki/Brown_v._Board_of_Education",
  },
  {
    question: "What was the outcome of the murder trial of Emmet Till?",
    answers: [
      { content: "The two defendents were given life in prison", type: false },
      {
        content: "The two defendents were given the death sentence",
        type: false,
      },
      {
        content: "The two defends were acquitted by an all white jury",
        type: true,
      },
      {
        content: "The two defendents were fled Mississippi before the trial",
        type: false,
      },
    ],
    postAnswer:
      "In September 1955, an all-white jury found Bryant and Milam not guilty of Till's kidnapping and murder. Protected against double jeopardy, the two men publicly admitted in a 1956 interview with Look magazine that they had killed Till. Till's murder was seen as a catalyst for the next phase of the civil rights movement.",
    wikiLink: "https://en.wikipedia.org/wiki/Emmett_Till",
  },
  {
    question: "What event was the catalyst for the Montgomery Bus Boycott?",
    answers: [
      {
        content:
          "A segregated bus system was established in Montgomery, Alabama",
        type: false,
      },

      {
        content:
          "Bus drivers in Montgomery refused to pick up Black passengers",
        type: false,
      },
      {
        content: "Bus fairs were raised only for Black passengers",
        type: false,
      },

      {
        content:
          "Claudette Colvin and Rosa Parks refused to give up their seats to a white person on a public bus",
        type: true,
      },
    ],
    postAnswer:
      'On December 1, 1955, nine months after a 15-year-old high school student, Claudette Colvin, refused to give up her seat to a white passenger on a public bus in Montgomery, Alabama, and was arrested, Rosa Parks did the same thing. Parks soon became the symbol of the resulting Montgomery Bus Boycott and received national publicity. She was later hailed as the "mother of the civil rights movement".',
    wikiLink: "https://en.wikipedia.org/wiki/Montgomery_Bus_Boycott",
  },
  {
    question:
      "How did Arkansas Governor Orval Faubus respond to the effort of the nine African Americans to attend Little Rock High School in 1957?",
    answers: [
      {
        content: "He urged the school to treat the students fairly",
        type: false,
      },
      {
        content:
          "He asked the president to intervene and block the schoolâ€™s integration",
        type: false,
      },
      {
        content: "He called out the National Guard to block their way",
        type: true,
      },
      {
        content:
          "He called out the National Guard to arrest white supremacists",
        type: false,
      },
    ],
    postAnswer:
      "A crisis erupted in Little Rock, Arkansas, when Governor of Arkansas Orval Faubus called out the National Guard on September 4 to prevent entry to the nine African-American students who had sued for the right to attend an integrated school, Little Rock Central High School.[60] Under the guidance of Daisy Bates, the nine students had been chosen to attend Central High because of their excellent grades.",
    wikiLink: "https://en.wikipedia.org/wiki/Little_Rock_Nine",
  },
];

export default quizQuestions;
