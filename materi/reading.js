const READING_LEVELS = [
  {
    code: "A1",
    label: "A1 · Beginner",
    wordArrange: [
      "I like cats.",
      "She is happy.",
      "We go to school.",
      "This is my dog.",
      "He has a red car.",
      "They are my friends.",
      "The sun is hot.",
      "I can swim.",
      "My mother cooks dinner.",
      "The book is on the table."
    ],
    passage: {
      title: "My Day",
      text: "I wake up at seven. I eat breakfast with my family. Then I go to school by bus. I do not walk to school.",
      questions: [
        {
          q: "How does the writer go to school?",
          options: ["By walking", "By bus", "By bike", "By car"],
          correct: 1
        },
        {
          q: "What does the writer do first in the morning?",
          options: ["Eat breakfast", "Go to school", "Wake up", "Take the bus"],
          correct: 2
        },
        {
          q: "Does the writer walk to school?",
          options: ["Yes, every day", "No, never", "Yes, sometimes", "The text does not say"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "A2",
    label: "A2 · Elementary",
    wordArrange: [
      "Yesterday I visited my grandmother.",
      "He was not at home last night.",
      "We are going to the market tomorrow.",
      "My sister can swim very well.",
      "They usually eat lunch at noon.",
      "I have never been to Japan.",
      "She always arrives early for class.",
      "Can you help me with my homework?",
      "The children were playing in the park.",
      "We need to buy some milk and eggs."
    ],
    passage: {
      title: "A Trip to the Market",
      text: "Last Saturday, Rina went to the market with her mother. They bought vegetables, but they did not buy any fruit because it was too expensive. Rina wanted to buy mangoes, but her mother said no.",
      questions: [
        {
          q: "What did Rina and her mother buy?",
          options: ["Fruit only", "Vegetables only", "Both vegetables and fruit", "Nothing"],
          correct: 1
        },
        {
          q: "Why didn't they buy fruit?",
          options: ["They did not like fruit", "The fruit was too expensive", "The market had no fruit", "Rina did not want fruit"],
          correct: 1
        },
        {
          q: "Who wanted to buy mangoes?",
          options: ["Rina's mother", "Rina", "Both of them", "Neither of them"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "B1",
    label: "B1 · Intermediate",
    wordArrange: [
      "Although it was raining, we decided to go outside.",
      "She has been studying English for three years.",
      "The movie that we watched last night was boring.",
      "If I have time tomorrow, I will call you.",
      "He asked me where I had been all day.",
      "By the time we arrived, the show had already started.",
      "I would rather stay home than go to the party.",
      "She is used to working late every weekend.",
      "The more I practice, the better I become.",
      "We were told to wait outside until further notice."
    ],
    passage: {
      title: "The New Café",
      text: "A new café opened near my house last month. Many people say the coffee is excellent, but I think it is only average. However, I keep going back because the staff are friendly and the place is quiet enough to study in.",
      questions: [
        {
          q: "What does the writer think about the coffee?",
          options: ["It is excellent", "It is average", "It is terrible", "The writer did not try it"],
          correct: 1
        },
        {
          q: "Why does the writer keep going back to the café?",
          options: ["Because the coffee is excellent", "Because of the friendly staff and quiet atmosphere", "Because it is the only café nearby", "Because it is cheap"],
          correct: 1
        },
        {
          q: "What do “many people” think about the coffee?",
          options: ["They think it's average", "They think it's excellent", "They never mention the coffee", "They think it's terrible"],
          correct: 1
        }
      ]
    }
  },
  {
    code: "B2",
    label: "B2 · Upper Intermediate",
    wordArrange: [
      "Despite having little experience, she was offered the job.",
      "The report should have been finished by now.",
      "Not only did he apologize, but he also fixed the mistake.",
      "Had I known about the traffic, I would have left earlier.",
      "The proposal, which was rejected twice before, was finally approved.",
      "Whatever you decide, make sure you inform the team first.",
      "It is essential that every employee attend the meeting.",
      "No sooner had she sat down than the phone rang.",
      "The higher the risk, the greater the potential reward.",
      "Were the budget approved, construction would begin immediately."
    ],
    passages: [
      {
        title: "The Lakes That Tin Left Behind",
        text: [
          "Fly over Bangka Island and you will notice something unusual: hundreds of small lakes scattered across the land, some a bright turquoise, others a muddy brown. Visitors sometimes assume they are natural. In fact, most of them are kolong — pits left behind by tin mining, which has shaped the island's economy and landscape for nearly three hundred years.",
          "Tin brought jobs and money to Bangka, and for many families it still does. However, mining has also come at a cost. When the topsoil is stripped away to reach the tin-bearing sand underneath, the fertile layer that supports plants is lost. Once a pit is abandoned, rainwater fills it, and the water is often too acidic for fish or crops. Without careful management, the land around it can remain bare for decades.",
          "Not all kolong are the same, though, and this is where the story becomes more hopeful. Older pits, some of which were abandoned generations ago, have slowly recovered as the water became less acidic and vegetation returned. Local communities have turned a number of them into fish ponds, sources of water during the dry season, or even small tourist attractions with walkways and cafés. Researchers have also experimented with planting fast-growing trees and adding organic matter to speed up the recovery of the surrounding soil.",
          "Critics point out that these success stories remain the exception rather than the rule. Rehabilitation is slow and expensive, and it is far easier to dig a new pit than to restore an old one. Furthermore, unlicensed small-scale mining makes the problem harder to control, since no one is held responsible for the land once the tin has been taken. Some kolong have also become dangerous: there are regular reports of children drowning in deep pits with steep, unstable edges.",
          "What, then, should be done? Most experts agree that there is no single solution. Stricter enforcement can reduce illegal mining, but it may also take away the income of families who have few other options. Rehabilitation programmes need long-term funding, not just a ceremony and a few seedlings. Perhaps most importantly, local people need to be involved in deciding what each kolong will become, because they are the ones who will live beside it long after the miners have gone.",
          "The lakes of Bangka are, in a sense, a mirror of the island's history. They show what has been taken from the land — and, in the best cases, what can be given back."
        ],
        questions: [
          {
            q: "What is the passage mainly about?",
            options: ["The history of tin prices on the world market", "The problems caused by kolong and the possibilities for their recovery", "How to start a fish farm in an old mining pit", "Why tourists prefer Bangka to other islands"],
            correct: 1,
            explain: "Every paragraph discusses kolong: where they come from (1), the damage (2), recovery (3), difficulties (4) and solutions (5)."
          },
          {
            q: "According to paragraph 2, why is the water in many abandoned pits a problem?",
            options: ["It is too deep for swimming", "It is often too acidic for fish or crops", "It disappears during the dry season", "It contains too much tin"],
            correct: 1,
            explain: "Paragraph 2: “the water is often too acidic for fish or crops.”"
          },
          {
            q: "In paragraph 4, “the exception rather than the rule” means that successful kolong are…",
            options: ["illegal", "uncommon, not typical", "becoming more common every year", "protected by law"],
            correct: 1,
            explain: "An exception is something unusual; the rule is what normally happens. Most kolong have not recovered."
          },
          {
            q: "Why does unlicensed mining make the problem harder to control?",
            options: ["Because it produces more tin", "Because nobody is responsible for restoring the land afterwards", "Because it only happens at night", "Because it uses more modern machines"],
            correct: 1,
            explain: "Paragraph 4: “no one is held responsible for the land once the tin has been taken.”"
          },
          {
            q: "In paragraph 5, the word “it” in “it may also take away the income” refers to…",
            options: ["illegal mining", "stricter enforcement", "a single solution", "the island"],
            correct: 1,
            explain: "Stricter enforcement reduces illegal mining, but it (enforcement) may also take away families' income."
          },
          {
            q: "Which statement best describes the writer's attitude?",
            options: ["Completely pessimistic — the land can never recover", "Cautiously hopeful, while aware of real difficulties", "Strongly in favour of stopping all mining immediately", "Uninterested in the effect on local people"],
            correct: 1,
            explain: "The writer calls part of the story “more hopeful” but also lists serious problems and says there is “no single solution”."
          },
          {
            q: "What is the purpose of the final paragraph?",
            options: ["To introduce a new problem", "To sum up the passage with an image (a mirror)", "To give statistics about tin mining", "To criticise the researchers"],
            correct: 1,
            explain: "The writer uses the metaphor of a mirror to summarise both the damage and the recovery."
          }
        ]
      },
      {
        title: "Why We Put Things Off",
        text: [
          "It is ten o'clock at night, your essay is due tomorrow morning, and you have just spent forty minutes watching videos of people organising their kitchens. You are not alone. Surveys regularly find that a large majority of students describe themselves as procrastinators, and many say it harms their grades, their sleep and their peace of mind. The usual advice is to make a timetable and stick to it. Yet if procrastination were simply a problem of poor planning, a good timetable would solve it — and for most people, it does not.",
          "Psychologists have increasingly come to see procrastination not as a time-management problem but as an emotion-management problem. According to this view, we delay a task because it makes us feel something unpleasant: boredom, confusion, anxiety about failing, or even resentment at being told what to do. Turning to something more enjoyable gives us immediate relief. The trouble is that the relief is temporary, while the task — and the bad feeling attached to it — is still waiting for us, usually larger than before.",
          "This explains why procrastinators are often harsh critics of themselves. After a wasted evening, many people feel guilty and ashamed, and those feelings make the task even more unpleasant to return to. The result can be a cycle: avoidance leads to guilt, and guilt leads to more avoidance. Interestingly, some studies suggest that students who forgive themselves for procrastinating before one exam tend to procrastinate less before the next one. Being kind to yourself, it seems, is not the same as being lazy.",
          "If procrastination is about feelings, then the most effective strategies are those that make starting feel less threatening. One popular technique is to commit to working for only five or ten minutes. The goal is not to finish, but simply to begin, because beginning is usually the hardest part; once we are engaged, the task often turns out to be less unpleasant than we imagined. Another strategy is to break a vague task, such as “write essay”, into concrete steps, such as “find three sources” or “write the first paragraph badly”. Vague tasks create confusion, and confusion is one of the feelings we most like to escape.",
          "None of this means that timetables are useless. They work best, however, when they are combined with an honest understanding of why we avoid certain tasks in the first place. The next time you find yourself reorganising your desk instead of revising, it may be worth asking a simple question: what am I trying not to feel?"
        ],
        questions: [
          {
            q: "What is the main argument of the passage?",
            options: ["Students today are lazier than in the past", "Procrastination is mainly about avoiding unpleasant feelings, not poor planning", "Timetables are the best cure for procrastination", "Watching videos is harmful to students"],
            correct: 1,
            explain: "Paragraph 2 states the central idea: procrastination is “an emotion-management problem”."
          },
          {
            q: "Why does the writer begin with the example of watching kitchen videos?",
            options: ["To recommend a hobby", "To give a familiar, realistic example of avoiding a task", "To prove that videos are educational", "To show that the writer dislikes cooking"],
            correct: 1,
            explain: "The opening scene is something many readers recognise, which draws them into the topic."
          },
          {
            q: "According to paragraph 2, what happens after we avoid a task?",
            options: ["The bad feeling disappears forever", "We feel better briefly, but the task and the bad feeling remain", "We usually finish the task faster", "We stop feeling bored"],
            correct: 1,
            explain: "“The relief is temporary, while the task — and the bad feeling attached to it — is still waiting for us.”"
          },
          {
            q: "Which sequence describes the “cycle” in paragraph 3?",
            options: ["Planning → working → relaxing", "Avoidance → guilt → more avoidance", "Guilt → forgiveness → laziness", "Anxiety → success → confidence"],
            correct: 1,
            explain: "Paragraph 3: “avoidance leads to guilt, and guilt leads to more avoidance.”"
          },
          {
            q: "What do the studies about self-forgiveness suggest?",
            options: ["Forgiving yourself makes you lazier", "Forgiving yourself may reduce procrastination next time", "Only lazy students forgive themselves", "Self-forgiveness has no effect"],
            correct: 1,
            explain: "Students who forgave themselves “tend to procrastinate less before the next one”."
          },
          {
            q: "Why does the writer recommend breaking a task into concrete steps?",
            options: ["Because teachers require it", "Because vague tasks cause confusion, a feeling people try to escape", "Because small tasks are more fun", "Because it makes essays longer"],
            correct: 1,
            explain: "Paragraph 4: “Vague tasks create confusion, and confusion is one of the feelings we most like to escape.”"
          },
          {
            q: "What is the writer's view of timetables?",
            options: ["They are completely useless", "They are useful, but work best with an understanding of our feelings", "They are the only thing students need", "They make procrastination worse"],
            correct: 1,
            explain: "Paragraph 5: “None of this means that timetables are useless. They work best, however, when…”"
          }
        ]
      }
    ]
  },
  {
    code: "C1",
    label: "C1 · Advanced",
    wordArrange: [
      "Rarely have I encountered an argument so thoroughly unconvincing.",
      "The committee's decision, controversial as it was, went unchallenged.",
      "Not until the results were published did anyone question the method.",
      "It was precisely her reluctance that made the offer so appealing.",
      "Seldom does one witness such a remarkable convergence of talent and timing.",
      "So convoluted was the explanation that even the experts remained baffled.",
      "Only by examining the underlying assumptions can we appreciate the flaw in the reasoning.",
      "What ultimately undermined the negotiations was not mistrust but sheer miscommunication.",
      "Nowhere in the report is the discrepancy adequately addressed, let alone resolved.",
      "Such was the magnitude of the error that the entire model had to be recalibrated.",
      "Had the warning been heeded sooner, the crisis might well have been averted.",
      "Underlying every one of her objections was a deep-seated skepticism toward authority."
    ],
    passages: [
      {
        title: "The Quiet Disappearance",
        text: [
          "Indonesia is home to more than seven hundred languages, making it one of the most linguistically diverse countries on Earth. Yet this extraordinary richness is fragile. Linguists estimate that a significant proportion of these languages are endangered, and some are now spoken only by a handful of elderly people. Unlike a burning forest or a polluted river, a dying language makes no headlines; it simply falls silent, one conversation at a time.",
          "The causes are rarely dramatic. No law forbids parents from speaking their regional language to their children, and few would describe the process as forced. Rather, the shift happens through countless small, rational decisions. Parents who want their children to succeed at school and in the job market reason that fluency in Indonesian — and increasingly in English — matters more than fluency in the language of their grandparents. Television, social media and migration to cities reinforce the same message. Within two or three generations, a language that was once used for everything from bargaining in the market to singing lullabies may be reduced to a few ceremonial phrases.",
          "It might be tempting to dismiss this as the inevitable price of progress. After all, a shared national language has been crucial in uniting an archipelago of thousands of islands, and the ability to communicate across ethnic boundaries is no small achievement. But such an argument rests on a false choice. Research on bilingual children consistently suggests that learning a regional language alongside a national one does not hold them back; if anything, it tends to strengthen certain mental skills, such as the ability to switch attention between tasks. The real question, then, is not whether children should learn Indonesian, but whether they must lose something else in the process.",
          "What is lost when a language disappears is more than a set of words. Each language encodes a particular way of seeing the world: specialised vocabulary for local plants and fishing techniques, oral histories, songs, jokes and forms of politeness that do not translate neatly. When the last fluent speakers pass away, much of this knowledge vanishes with them, often before anyone has thought to record it.",
          "Encouragingly, revitalisation efforts are gaining ground. Some regional governments have introduced local-language lessons into the school curriculum, and young content creators have begun producing videos, music and even comics in their ancestral languages, demonstrating that these languages can feel modern rather than old-fashioned. Such initiatives are no guarantee of survival, however. A language lives not in textbooks or online archives but in daily use — at the dinner table, in the playground, in the market. Unless families themselves regard it as worth passing on, no amount of official support will be sufficient.",
          "Ultimately, the fate of Indonesia's languages will be decided less in government offices than in ordinary homes. That is precisely what makes the issue both so difficult and so hopeful: the power to reverse the decline lies with the very people whose choices have, until now, been causing it."
        ],
        questions: [
          {
            q: "What is the writer's main purpose?",
            options: ["To argue that Indonesian should replace regional languages", "To explain why regional languages are declining and argue they can be kept alongside Indonesian", "To describe the grammar of several regional languages", "To criticise parents who speak Indonesian at home"],
            correct: 1,
            explain: "The text explains the causes (paragraph 2), rejects the “false choice” (3), explains what is lost (4) and discusses revival (5–6)."
          },
          {
            q: "The phrase “makes no headlines” (paragraph 1) suggests that language loss…",
            options: ["is reported every day in the news", "receives little public attention", "is illegal in Indonesia", "happens very suddenly"],
            correct: 1,
            explain: "Unlike forest fires, which are reported in the news, language loss happens quietly and unnoticed."
          },
          {
            q: "According to paragraph 2, the main reason for language shift is that…",
            options: ["the government bans regional languages", "parents make practical decisions about their children's future", "young people find regional languages too difficult", "regional languages have no written form"],
            correct: 1,
            explain: "“The shift happens through countless small, rational decisions” by parents who want their children to succeed."
          },
          {
            q: "Why does the writer say the “inevitable price of progress” argument “rests on a false choice”?",
            options: ["Because Indonesian is not really useful", "Because it wrongly assumes children must choose between Indonesian and a regional language", "Because progress is not important", "Because regional languages are more useful than Indonesian"],
            correct: 1,
            explain: "The writer argues children can learn both; research on bilingual children shows it “does not hold them back”."
          },
          {
            q: "What kind of evidence does the writer use in paragraph 3?",
            options: ["Personal stories from elderly speakers", "Research on bilingual children", "Government statistics on school results", "Opinions of famous writers"],
            correct: 1,
            explain: "“Research on bilingual children consistently suggests…”"
          },
          {
            q: "What is the writer's view of revitalisation programmes (paragraph 5)?",
            options: ["They have already solved the problem", "They are helpful but not enough unless families use the language daily", "They are a waste of money", "They should be run only by the government"],
            correct: 1,
            explain: "They are “encouraging”, but “no guarantee of survival” — the language must be used at home."
          },
          {
            q: "What paradox does the final paragraph describe?",
            options: ["Government offices are both helpful and harmful", "The people whose choices caused the decline are also the ones who can reverse it", "Languages are both old and modern", "Children learn faster than adults"],
            correct: 1,
            explain: "“The power to reverse the decline lies with the very people whose choices have… been causing it.”"
          }
        ]
      },
      {
        title: "Trapped in the Bubble?",
        text: [
          "Few ideas about the internet have proved as popular as the “echo chamber”. The argument runs roughly as follows: social media platforms, eager to keep us scrolling, use algorithms that show us content we already agree with. Over time, we are exposed only to views that reinforce our own, while opposing perspectives are filtered out. The result, it is claimed, is a society split into isolated bubbles, each convinced of its own righteousness and increasingly unable to understand the others.",
          "It is an intuitively appealing story, and it is not without foundation. Algorithms do prioritise content that generates engagement, and outrage is a particularly effective way of generating it. Yet when researchers have set out to measure the phenomenon, the picture that emerges is considerably more complicated. A number of large studies have found that most social media users encounter a wider range of political opinions online than they do in their offline lives, where friends, neighbours and colleagues often share similar backgrounds. Genuinely sealed-off echo chambers appear to exist, but they tend to involve a relatively small, highly committed minority rather than the population at large.",
          "If that is the case, why does the echo-chamber metaphor remain so persuasive? One explanation is that it offers a comfortingly simple villain. Blaming an algorithm absolves us of responsibility for our own habits of attention; it is easier to believe that we have been trapped than to admit that we may have chosen the walls ourselves. Another is that exposure to opposing views does not necessarily lead to greater understanding. Some experiments suggest that encountering the other side's arguments — particularly in their most hostile or mocking forms — can actually harden people's existing beliefs rather than soften them.",
          "This last point is crucial, because it shifts the problem from what we see to how we see it. The danger may lie not so much in isolation as in a particular kind of contact: one in which the opposing side is encountered chiefly through its most extreme representatives, quoted out of context and surrounded by mocking comments. In such an environment, we are not ignorant of what the other side thinks; we simply hold a distorted and unflattering version of it.",
          "None of this lets technology companies off the hook. Design choices that reward provocation over nuance have real consequences, and the platforms that profit from them bear some responsibility for the tone of public debate. But a solution that focuses exclusively on algorithms risks overlooking the human side of the equation. Breaking out of a bubble that may not exist will do little good if we continue to approach those who disagree with us in bad faith.",
          "Perhaps, then, the more useful question is not “Am I hearing the other side?” but “Am I hearing the other side at its best?” Answering it honestly requires a degree of intellectual humility that no algorithm can supply on our behalf."
        ],
        questions: [
          {
            q: "Which statement best summarises the writer's argument?",
            options: ["Echo chambers are the main cause of division in society", "The echo-chamber idea is oversimplified; how we meet opposing views matters more than whether we meet them", "Social media companies are not responsible for anything", "People should stop using social media"],
            correct: 1,
            explain: "Paragraphs 2–4 show the idea is “more complicated”, and paragraph 4 shifts the problem “from what we see to how we see it”."
          },
          {
            q: "According to paragraph 2, compared with their offline lives, many social media users…",
            options: ["see fewer political opinions", "see a wider range of political opinions", "never see political content", "only talk to people who agree with them"],
            correct: 1,
            explain: "Studies found users “encounter a wider range of political opinions online than they do in their offline lives”."
          },
          {
            q: "In paragraph 3, “absolves us of responsibility” is closest in meaning to…",
            options: ["makes us more responsible", "frees us from blame", "gives us more control", "reminds us of our duty"],
            correct: 1,
            explain: "To absolve someone is to declare them free from guilt or blame."
          },
          {
            q: "What does the writer imply with the phrase “we may have chosen the walls ourselves”?",
            options: ["People build real walls around their houses", "Our own habits, not only algorithms, may limit what we see", "Algorithms let users design their own apps", "Users cannot control what they see"],
            correct: 1,
            explain: "The “walls” of the bubble may come from our own choices about what to follow and read."
          },
          {
            q: "What do the experiments mentioned in paragraph 3 suggest?",
            options: ["Seeing opposing views always makes people more open-minded", "Seeing hostile versions of opposing arguments can strengthen existing beliefs", "People never change their beliefs", "Mocking comments make people laugh and relax"],
            correct: 1,
            explain: "Opposing arguments “in their most hostile or mocking forms — can actually harden people's existing beliefs”."
          },
          {
            q: "What is the writer's position on technology companies?",
            options: ["They are entirely to blame", "They share some responsibility, but focusing only on them ignores the human side", "They have no influence on public debate", "They should be shut down"],
            correct: 1,
            explain: "“None of this lets technology companies off the hook… But a solution that focuses exclusively on algorithms risks overlooking the human side.”"
          },
          {
            q: "In the final paragraph, hearing the other side “at its best” means hearing it…",
            options: ["from its most famous members", "in its strongest and most fairly presented form", "only when it agrees with us", "on the most popular platform"],
            correct: 1,
            explain: "The contrast is with paragraph 4, where opponents are seen through “extreme representatives, quoted out of context”."
          }
        ]
      }
    ]
  },
  {
    code: "C2",
    label: "C2 · Proficiency",
    wordArrange: [
      "Little did the board anticipate the backlash their decision would provoke.",
      "So subtle was the shift in tone that few listeners noticed it at all.",
      "Were it not for her intervention, the negotiations would have collapsed.",
      "What the critics dismissed as naïve later proved remarkably prescient.",
      "Never before had the institution faced a scandal of such magnitude.",
      "Not since the last recession has consumer confidence fallen so precipitously.",
      "Herein lies the paradox that has eluded economists for decades.",
      "So entrenched had the practice become that few dared question its legitimacy.",
      "Only in hindsight did the true cost of that compromise become apparent.",
      "Such was her command of the subject that even seasoned critics fell silent.",
      "Not for a moment did he consider abandoning the project, however dire the odds.",
      "Far from resolving the dispute, the ruling merely postponed the inevitable reckoning."
    ],
    passages: [
      {
        title: "When a Measure Becomes a Target",
        text: [
          "Every school, it seems, now runs on numbers. Average exam scores, graduation rates, the percentage of students admitted to prestigious universities: these figures are displayed on banners at the school gate, compared in league tables and cited by officials as proof that standards are rising or falling. On the face of it, there is little to object to. Numbers are transparent where impressions are vague; they allow parents to compare schools and governments to identify those in need of support. Who could reasonably argue against measuring what matters?",
          "The difficulty, as the anthropologist Marilyn Strathern famously summarised an observation by the economist Charles Goodhart, is that “when a measure becomes a target, it ceases to be a good measure.” A number is useful precisely because it serves as a proxy — an imperfect but convenient signal of something more complex that we cannot observe directly. Exam results are meant to indicate learning; they are not learning itself. Once people are rewarded or punished according to the indicator rather than the underlying reality, they acquire a powerful incentive to improve the former without necessarily improving the latter.",
          "The forms this takes are rarely as crude as outright cheating, although that is not unknown. Far more common are subtle distortions that are individually defensible and collectively corrosive. Lessons narrow to the content most likely to appear on the exam; subjects that are not assessed quietly lose time and status; students are drilled in the techniques of answering particular question types rather than in the reasoning those questions were designed to detect. Each teacher who makes such adjustments is acting rationally, often under considerable pressure. The cumulative effect, however, is an education system that becomes ever more skilled at producing the appearance of achievement.",
          "Defenders of measurement are right to point out that the alternative is not some golden age of pure, unquantified learning. Before standardised assessment, judgements about schools and students were frequently shaped by reputation, prejudice and personal connections — mechanisms that tended to favour the already privileged. To abandon measurement altogether would be to throw away a genuine, if imperfect, tool for holding institutions accountable. The question is not whether to measure, but how to do so without allowing the measurement to consume the very thing it was intended to protect.",
          "Several principles suggest themselves. Indicators are less likely to be distorted when there are many of them rather than one, when they are used to diagnose problems rather than to distribute punishments, and when those being measured have a hand in deciding what counts. Above all, numbers should remain in conversation with judgement: a sudden rise in scores should prompt curiosity rather than unqualified celebration. None of these safeguards is foolproof, and each carries costs of its own. But they share a common premise — that a figure can inform a decision without being permitted to make it.",
          "There is a broader lesson here, one that extends well beyond classrooms. Hospitals, police forces, universities and corporations have all discovered, often painfully, that what is easily counted is not always what counts. The temptation to manage by numbers is understandable in a complex world, since numbers promise clarity where reality offers only ambiguity. Resisting that temptation does not mean rejecting evidence; it means remembering, with some humility, what the evidence was for."
        ],
        questions: [
          {
            q: "Which statement best expresses the central argument?",
            options: ["Schools should stop using exams altogether", "Measurement is valuable, but becomes harmful when indicators are treated as goals in themselves", "Teachers who prepare students for exams are dishonest", "Numbers are always more reliable than human judgement"],
            correct: 1,
            explain: "The writer defends measurement (paragraph 4) but warns about turning measures into targets (paragraphs 2–3)."
          },
          {
            q: "In paragraph 2, the word “proxy” refers to…",
            options: ["the final goal of education", "an indirect signal that stands in for something harder to observe", "a type of cheating", "a government official"],
            correct: 1,
            explain: "The writer defines it immediately: “an imperfect but convenient signal of something more complex that we cannot observe directly”."
          },
          {
            q: "What does “individually defensible and collectively corrosive” (paragraph 3) mean?",
            options: ["Each action is illegal, but the overall system is fair", "Each action is reasonable on its own, but together they cause serious damage", "Individuals are harmed, but the group benefits", "Every teacher is corrupt"],
            correct: 1,
            explain: "Each teacher acts “rationally”, but the “cumulative effect” is a system that produces only “the appearance of achievement”."
          },
          {
            q: "Why does the writer include paragraph 4?",
            options: ["To change the topic to the history of schools", "To acknowledge a counter-argument and show that abandoning measurement is not the answer", "To prove that standardised tests are perfect", "To criticise privileged students"],
            correct: 1,
            explain: "The writer concedes that “defenders of measurement are right” before refining the question: not whether to measure, but how."
          },
          {
            q: "Which of the following is NOT one of the safeguards suggested in paragraph 5?",
            options: ["Using many indicators rather than one", "Using indicators to diagnose problems rather than to punish", "Involving the people being measured in deciding what counts", "Publishing a single national ranking more frequently"],
            correct: 3,
            explain: "Paragraph 5 recommends many indicators, diagnosis, and participation — a single, more frequent ranking would increase the pressure the writer warns about."
          },
          {
            q: "“A figure can inform a decision without being permitted to make it” means that numbers should…",
            options: ["be ignored when making decisions", "support human judgement rather than replace it", "be calculated by computers", "be kept secret from the public"],
            correct: 1,
            explain: "Numbers should “remain in conversation with judgement” — they inform, but people decide."
          },
          {
            q: "What is the function of the final paragraph?",
            options: ["To introduce a completely unrelated topic", "To extend the argument beyond schools to other institutions", "To withdraw the writer's earlier argument", "To give detailed statistics from hospitals"],
            correct: 1,
            explain: "“There is a broader lesson here, one that extends well beyond classrooms” — hospitals, police and companies face the same problem."
          }
        ]
      },
      {
        title: "The Right to Be Forgotten",
        text: [
          "For most of human history, forgetting was the default and remembering required effort. Records had to be written by hand, stored in fragile archives and physically retrieved; gossip faded, newspapers yellowed, and the embarrassing episodes of youth were gradually blurred by time and distance. The digital age has inverted this relationship. Storage is now so cheap and search so effortless that remembering has become the default, and it is forgetting that demands deliberate action.",
          "The consequences are not merely abstract. A careless comment posted at fifteen, a photograph from a party, a newspaper report of a minor offence long since punished — any of these may now resurface, years later, at the top of a search for one's name, presented without context to a prospective employer, landlord or partner. The individual may have changed beyond recognition; the record has not. In this sense, the permanence of digital memory imposes a kind of sentence with no fixed term.",
          "It was partly in response to such concerns that the Court of Justice of the European Union, in a landmark 2014 ruling, recognised what has come to be known as the “right to be forgotten”. Under certain conditions, individuals may ask search engines to remove links to information about them that is “inadequate, irrelevant or no longer relevant”. The information itself is not deleted; it simply becomes harder to find. Supporters hailed the decision as a long-overdue recognition that human dignity includes the possibility of moving on.",
          "Its critics, however, were equally vehement, and their objections deserve to be taken seriously. To restrict access to truthful, lawfully published information is, they argue, a form of censorship, however benevolently intended. Who is to decide what is “no longer relevant”? A politician's youthful business dealings, a doctor's past malpractice, a public figure's discarded opinions — all of these might be deemed irrelevant by their subjects and highly relevant by the public. Entrusting such judgements to private companies, which have every incentive to approve removal requests rather than risk legal challenges, hardly inspires confidence.",
          "What makes the debate so intractable is that both sides are defending something genuinely valuable. Freedom of information underpins accountability; without it, the powerful could quietly rewrite their own histories. Yet a society that never allows anyone to escape their past is one that has, in effect, abandoned the idea of redemption — the belief that people can learn, change and deserve to be judged by who they are rather than who they once were. Neither principle can be maximised without diminishing the other.",
          "Perhaps the most honest conclusion is that the problem admits of no permanent solution, only a continuing negotiation. The distinction between public figures and private individuals, the seriousness of the original information, and the time that has elapsed will all weigh differently in different cases. What the digital age demands, then, is not a single rule but a cultivated capacity for judgement — and, perhaps, a renewed willingness on the part of all of us to extend to others the forgetfulness we would hope to receive ourselves."
        ],
        questions: [
          {
            q: "According to paragraph 1, how has the digital age “inverted” the relationship between remembering and forgetting?",
            options: ["People now remember less than before", "Remembering is now automatic, while forgetting requires effort", "Archives have become more fragile", "Newspapers are no longer published"],
            correct: 1,
            explain: "“Remembering has become the default, and it is forgetting that demands deliberate action.”"
          },
          {
            q: "What does the writer mean by “a kind of sentence with no fixed term” (paragraph 2)?",
            options: ["A grammatical sentence that never ends", "Past mistakes can keep punishing a person indefinitely", "A prison sentence for posting comments online", "A law that has no clear wording"],
            correct: 1,
            explain: "A prison sentence normally has an end date; old online records can keep harming someone with no end."
          },
          {
            q: "Under the 2014 ruling, what happens when a removal request is accepted?",
            options: ["The information is permanently deleted from the internet", "Links in search results are removed, but the information itself still exists", "The newspaper must apologise", "The person receives financial compensation"],
            correct: 1,
            explain: "“The information itself is not deleted; it simply becomes harder to find.”"
          },
          {
            q: "Why are critics concerned about private companies handling removal requests?",
            options: ["Companies charge too much money", "Companies may approve requests too readily to avoid legal risk", "Companies always refuse requests", "Companies do not have enough employees"],
            correct: 1,
            explain: "Companies “have every incentive to approve removal requests rather than risk legal challenges”."
          },
          {
            q: "In paragraph 5, “intractable” is closest in meaning to…",
            options: ["easily solved", "very difficult to resolve", "unimportant", "recently discovered"],
            correct: 1,
            explain: "The debate is hard to resolve because “both sides are defending something genuinely valuable”."
          },
          {
            q: "What is the writer's overall position?",
            options: ["The right to be forgotten should be abolished", "Freedom of information should always win", "There is no single rule; each case requires balancing both values", "All old information should be deleted automatically"],
            correct: 2,
            explain: "“The problem admits of no permanent solution… not a single rule but a cultivated capacity for judgement.”"
          },
          {
            q: "What does the final sentence suggest ordinary people should do?",
            options: ["Delete all their social media accounts", "Be willing to forgive and overlook others' pasts, as they would want for themselves", "Search for information about their neighbours", "Ask the courts for more rulings"],
            correct: 1,
            explain: "“Extend to others the forgetfulness we would hope to receive ourselves.”"
          }
        ]
      }
    ]
  }
];

let currentLevelIndex = 0;
let currentPassageIndex = 0;
let currentSentenceIndex = 0;
let bankTokens = [];
let answerTokens = [];

function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

function getPassages(level) {
  return level.passages || [level.passage];
}

function renderLevelTabs() {
  const container = document.getElementById("level-tabs");
  if (!container) return;
  container.innerHTML = "";
  READING_LEVELS.forEach(function (level, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = level.code;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentLevelIndex));
    btn.addEventListener("click", function () {
      currentLevelIndex = index;
      currentPassageIndex = 0;
      currentSentenceIndex = 0;
      renderLevelTabs();
      renderWordArrange();
      renderPassageTabs();
      renderPassage();
    });
    container.appendChild(btn);
  });

  const heading = document.getElementById("level-heading");
  if (heading) heading.textContent = READING_LEVELS[currentLevelIndex].label;
}

function renderWordArrange() {
  const level = READING_LEVELS[currentLevelIndex];
  const sentence = level.wordArrange[currentSentenceIndex];
  bankTokens = shuffle(sentence.split(" ")).map(function (word, i) {
    return { word: word, id: level.code + "-" + currentSentenceIndex + "-" + i + "-" + word };
  });
  answerTokens = [];
  renderWordTiles();
  setFeedback("word-feedback", "", "");

  const progressEl = document.getElementById("word-progress");
  if (progressEl) {
    progressEl.textContent = "Sentence " + (currentSentenceIndex + 1) + " of " + level.wordArrange.length;
  }
}

function renderWordTiles() {
  const bankEl = document.getElementById("word-bank");
  const answerEl = document.getElementById("word-answer");
  if (!bankEl || !answerEl) return;

  bankEl.innerHTML = "";
  bankTokens.forEach(function (token) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word-tile";
    btn.textContent = token.word;
    btn.addEventListener("click", function () {
      bankTokens = bankTokens.filter(function (t) { return t.id !== token.id; });
      answerTokens.push(token);
      renderWordTiles();
    });
    bankEl.appendChild(btn);
  });

  answerEl.innerHTML = "";
  if (answerTokens.length === 0) {
    const hint = document.createElement("span");
    hint.className = "word-answer-hint";
    hint.textContent = "Click words below to build your sentence here.";
    answerEl.appendChild(hint);
  }
  answerTokens.forEach(function (token) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word-tile word-tile-placed";
    btn.textContent = token.word;
    btn.addEventListener("click", function () {
      answerTokens = answerTokens.filter(function (t) { return t.id !== token.id; });
      bankTokens.push(token);
      renderWordTiles();
    });
    answerEl.appendChild(btn);
  });
}

function setFeedback(elementId, message, type) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.className = "feedback" + (type ? " " + type : "");
}

function checkWordArrange() {
  const level = READING_LEVELS[currentLevelIndex];
  const target = level.wordArrange[currentSentenceIndex];
  const built = answerTokens.map(function (t) { return t.word; }).join(" ");
  if (built === target) {
    setFeedback("word-feedback", "Correct! Well done.", "correct");
  } else {
    setFeedback("word-feedback", "Not quite right. Try again.", "incorrect");
  }
}

function nextSentence() {
  const level = READING_LEVELS[currentLevelIndex];
  currentSentenceIndex = (currentSentenceIndex + 1) % level.wordArrange.length;
  renderWordArrange();
}

function renderPassageTabs() {
  const container = document.getElementById("passage-tabs");
  if (!container) return;
  const passages = getPassages(READING_LEVELS[currentLevelIndex]);
  container.innerHTML = "";
  container.hidden = passages.length < 2;

  passages.forEach(function (passage, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-tab";
    btn.textContent = "Text " + (index + 1);
    btn.title = passage.title;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(index === currentPassageIndex));
    btn.addEventListener("click", function () {
      currentPassageIndex = index;
      renderPassageTabs();
      renderPassage();
    });
    container.appendChild(btn);
  });
}

function renderPassage() {
  const passage = getPassages(READING_LEVELS[currentLevelIndex])[currentPassageIndex];
  const titleEl = document.getElementById("passage-title");
  const metaEl = document.getElementById("passage-meta");
  const textEl = document.getElementById("passage-text");
  const scoreEl = document.getElementById("passage-score");
  const questionsEl = document.getElementById("questions-container");
  if (!titleEl || !textEl || !questionsEl) return;

  const paragraphs = Array.isArray(passage.text) ? passage.text : [passage.text];
  const numbered = paragraphs.length > 1;

  titleEl.textContent = passage.title;
  textEl.innerHTML = "";
  paragraphs.forEach(function (paragraph, pIndex) {
    const p = document.createElement("p");
    if (numbered) {
      const num = document.createElement("span");
      num.className = "para-num";
      num.textContent = pIndex + 1;
      num.setAttribute("aria-label", "Paragraph " + (pIndex + 1));
      p.appendChild(num);
    }
    p.appendChild(document.createTextNode(paragraph));
    textEl.appendChild(p);
  });

  if (metaEl) {
    const wordCount = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(wordCount / 150));
    metaEl.textContent = wordCount + " words · about " + minutes + " min read";
  }

  const answered = {};
  let correctCount = 0;
  function updateScore() {
    if (!scoreEl) return;
    const answeredCount = Object.keys(answered).length;
    scoreEl.textContent = answeredCount === 0
      ? ""
      : "Score: " + correctCount + " / " + passage.questions.length + " (first attempts)";
  }
  updateScore();

  questionsEl.innerHTML = "";
  passage.questions.forEach(function (question, qIndex) {
    const card = document.createElement("div");
    card.className = "question-card";

    const qText = document.createElement("p");
    qText.className = "question-text";
    qText.textContent = (qIndex + 1) + ". " + question.q;
    card.appendChild(qText);

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "question-options";

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.id = "question-feedback-" + qIndex;

    // Shuffle option order so the answer position can't be guessed.
    const order = shuffle(question.options.map(function (_, i) { return i; }));
    const correctPosition = order.indexOf(question.correct);

    order.forEach(function (optionIndex, position) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.textContent = question.options[optionIndex];
      btn.addEventListener("click", function () {
        const isCorrect = position === correctPosition;
        if (!(qIndex in answered)) {
          answered[qIndex] = isCorrect;
          if (isCorrect) correctCount += 1;
          updateScore();
        }

        const buttons = optionsWrap.querySelectorAll(".option-btn");
        buttons.forEach(function (b) { b.classList.remove("correct", "incorrect"); });
        const explanation = question.explain ? " " + question.explain : "";
        if (isCorrect) {
          btn.classList.add("correct");
          setFeedback(feedback.id, "Correct!" + explanation, "correct");
        } else {
          btn.classList.add("incorrect");
          buttons[correctPosition].classList.add("correct");
          setFeedback(feedback.id, question.explain ? "Not quite." + explanation : "Not quite — look at the highlighted answer.", "incorrect");
        }
      });
      optionsWrap.appendChild(btn);
    });

    card.appendChild(optionsWrap);
    card.appendChild(feedback);
    questionsEl.appendChild(card);
  });
}

function initReadingPage() {
  if (!document.getElementById("level-tabs")) return;

  renderLevelTabs();
  renderWordArrange();
  renderPassageTabs();
  renderPassage();

  const checkBtn = document.getElementById("word-check");
  const resetBtn = document.getElementById("word-reset");
  const nextBtn = document.getElementById("word-next");
  if (checkBtn) checkBtn.addEventListener("click", checkWordArrange);
  if (resetBtn) resetBtn.addEventListener("click", renderWordArrange);
  if (nextBtn) nextBtn.addEventListener("click", nextSentence);
}

window.addEventListener("load", initReadingPage);
