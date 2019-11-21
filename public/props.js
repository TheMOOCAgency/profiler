window.props = {
  skills: [
    {
      name: "Les drivers",
      tests: [
        {
          type: "likert",
          topic: "LES 5 NIVEAUX DE PERSONNALITE :",
          drivers: {
            driver1: "Sois parfait",
            driver2: "Sois fort",
            driver3: "Dépêche toi",
            driver4: "Fais plaisir",
            driver5: "Fais des efforts"
          },
          questions: {
            driver1: [
              {
                text:
                  "Pour prendre une décision, aimez-vous avoir beaucoup d’informations ?",
                id: "0"
              },
              { text: "Vous reprochez-vous vos erreurs ?", id: "1" },
              {
                text:
                  "Vérifiez-vous plusieurs fois les paroles des autres de crainte d’une erreur de compréhension?",
                id: "2"
              },
              { text: "Recherchez-vous la perfection ?", id: "3" },
              {
                text:
                  "Aimez-vous être particulièrement précis dans votre discours ?",
                id: "4"
              },
              { text: "Avez-vous tendance à « pinailler » ?", id: "5" }
            ],
            driver2: [
              {
                text: "Il vaut mieux ne pas reconnaître ses faiblesses.",
                id: "6"
              },
              {
                text: "Vous savez vous dégager du jugement de l’autre",
                id: "7"
              },
              {
                text:
                  "Dites-vous aux autres : « il n’y a pas de quoi se lamenter dans votre situation » ?",
                id: "8"
              },
              {
                text: "Vous avez repéré vos lacunes… elles ne vous gênent pas",
                id: "9"
              },
              {
                text: "Maîtrisez-vous vos sentiments, vos émotions ?",
                id: "10"
              },
              {
                text:
                  "Pouvez-vous réagir face à un problème en disant : « pas de commentaires » ou encore « ça n’a pas d’importance », « je m’en fous » ?",
                id: "11"
              }
            ],
            driver3: [
              {
                text:
                  "Ressentez-vous de l’irritation lorsque votre interlocuteur est lent ?",
                id: "12"
              },
              {
                text:
                  "Arrivez-vous en retard même quand vous vous arrangez pour arriver à temps ?",
                id: "13"
              },
              {
                text: "Pensez-vous que vous devriez vous dépêcher ?",
                id: "14"
              },
              {
                text: "Etes-vous impatient lorsque vous devez attendre ?",
                id: "15"
              },
              {
                text:
                  "Remettez-vous à plus tard pour ensuite vous précipiter à la dernière minute ?",
                id: "16"
              },
              { text: "Le silence vous met-il mal à l’aise ?", id: "17" }
            ],
            driver4: [
              { text: "Vous sentez-vous tenu de rendre service ?", id: "18" },
              {
                text:
                  "Offrez-vous de rendre service même si on ne vous le demande pas ?",
                id: "19"
              },
              {
                text:
                  "Utilisez-vous des expressions comme « vous savez… » « pourriez-vous… » « pouvez-vous… » « voudriez vous » ?",
                id: "20"
              },
              {
                text:
                  "Eprouvez-vous le besoin de vérifier si les autres sont contents de vous et de vos actes ?",
                id: "21"
              },
              {
                text: "Pensez-vous que vous devez faire plaisir aux autres ?",
                id: "22"
              },
              {
                text:
                  "Pensez-vous que ce que vous faites n’a de valeur que si quelqu’un l’approuve ?",
                id: "23"
              }
            ],
            driver5: [
              {
                text: "Faites-vous des efforts pour atteindre vos objectifs ?",
                id: "24"
              },
              {
                text:
                  "Le plus souvent, vous réussissez en luttant et en surmontant les difficultés",
                id: "25"
              },
              {
                text: "Au travail, vous n’avez pas le temps de vous détendre",
                id: "26"
              },
              {
                text:
                  "Utilisez-vous des tournures comme « j’essaierai, je n’y arrive pas, c’est difficile » ?",
                id: "27"
              },
              {
                text:
                  "Vous dites-vous ou dites-vous aux autres : « au moins j’ai essayé » ou des phrases semblables ?",
                id: "28"
              },
              {
                text:
                  "Etes-vous adepte de la maxime : « essayez, essayez, essayez encore, jusqu’à ce que vous réussissiez »",
                id: "29"
              }
            ]
          },
          answers: [
            { name: "Rarement", value: 1 },
            { name: "Parfois", value: 2 },
            { name: "D’ordinaire oui", value: 3 },
            { name: "Oui, souvent", value: 4 },
            { name: "Oui, presque toujours", value: 5 }
          ]
        }
        // {
        //   type: "true-or-false",
        //   question: "Ce type de composant est fonctionnel ?",
        //   answers: [true, false]
        // },
        // {
        //   type: "true-or-false",
        //   question: "Etes-vous sur ?",
        //   answers: [true, false]
        // },
        // { type: "free-field" }
      ]
    },
    {
      name: "Compétences du manager",
      tests: [
        {
          type: "free-field",
          question: {
            id: 0,
            text:
              "Quelles sont les compétences essentielles du manager selon vous ?"
          }
        },
        {
          type: "free-field",
          question: {
            id: 1,
            text:
              "Quelles sont les compétences essentielles du manager en communication interpersonnelle selon vous ?"
          }
        },
        {
          type: "free-field",
          question: {
            id: 2,
            text: "Quelles sont les compétences que vous pensez posséder ?"
          }
        },
        {
          type: "free-field",
          question: {
            id: 3,
            text:
              "Quelles sont les compétences que vous pensez devoir acquérir ?"
          }
        },
        {
          type: "free-field",
          question: {
            id: 4,
            text:
              "Quelles sont les types de situation professionnelle qui vous posent problème ?"
          }
        },
        {
          type: "free-field",
          question: {
            id: 5,
            text:
              "De quoi avez-vous besoin pour vous sentir bien en situation de communication managériale ?"
          }
        }
      ]
    },
    {
      name: "Cadre de référence",
      tests: []
    },
    {
      name: "Intelligence émotionnelle",
      tests: [
        {
          type: "true-or-false",
          questions: [
            {
              id: 1,
              text:
                "Si j'ai un petit désaccord avec un ami ou avec mon conjoint, je reste en général sur les nerfs pendant des heures, voire davantage.",
              true: 1,
              false: 0
            },
            {
              id: 2,
              text:
                "Si un automobiliste roule sur le talus pour doubler tous les autres dans une file d'attente, je hausse les épaules au lieu de m'énerver durablement.",
              true: 0,
              false: 1
            },
            {
              id: 3,
              text:
                "Quand je ressens un profond chagrin, comme lors de la mort d'un proche, cela perturbe mon fonctionnement pendant plusieurs mois.",
              true: 1,
              false: 0
            },
            {
              id: 4,
              text:
                "Si je commets une erreur au travail et qu'on m'en fait reproche, je suis capable de passer outre et d'y voir une occasion de progresser.",
              true: 0,
              false: 1
            },
            {
              id: 5,
              text:
                "Si j'essaye un nouveau restaurant où le repas est infect ct le service détestable, cela gâche toute ma soirée.",
              true: 1,
              false: 0
            },
            {
              id: 6,
              text:
                "Après avoir été coincé(e) dans un embouteillage causé par un accident, j'accélère pour évacuer mon agacement dès que je peux enfin m'échapper, mais je continue à bouillonner intérieurement.",
              true: 1,
              false: 0
            },
            {
              id: 7,
              text:
                "Si mon chauffe-eau tombe en panne, cela n'a pas grand effet sur mon humeur, car je sais qu'il suffit d'appeler un plombier pour le faire réparer.",
              true: 0,
              false: 1
            },
            {
              id: 8,
              text:
                "Si je rencontre un homme/une femme formidable avec lui j'ai très envie de sortir, une réponse négative me met en général de mauvaise humeur pendant plusieurs heures, ou même plusieurs jours.",
              true: 1,
              false: 0
            },
            {
              id: 9,
              text:
                "Si l'on pense à moi pour une promotion ou une importante récompense professionnelle, finalement accordée à quelqu'un qui me semble moins qualifié, je rebondis en général assez vite.",
              true: 0,
              false: 1
            },
            {
              id: 10,
              text:
                "Lors d'une soirée, au cours d'une conversation avec un(e) passionnant(e) inconnu(e), si je garde le silence lorsqu'il/elle m'interroge à mon sujet, j'ai tendance à me rejouer mentalement tout l'entretien - en imaginant cette fois ce que j'aurais dû dire- pendant des heures ct des heures, et même des jours entiers.",
              true: 1,
              false: 0
            }
          ],
          answers: [
            { value: true, text: "Vrai" },
            { value: false, text: "Faux" }
          ]
        }
      ]
    },
    {
      name: "Comportement",
      tests: [
        { type: "likert", topic: "", questions: [], answers: [] },
        { type: "true-or-false", question: "", answers: [true, false] },
        { type: "free-field" }
      ]
    },
    {
      name: "Style de leadership",
      tests: [
        { type: "likert", topic: "", questions: [], answers: [] },
        { type: "true-or-false", question: "", answers: [true, false] },
        { type: "free-field" }
      ]
    },
    {
      name: "Compétences",
      tests: [
        { type: "likert", topic: "", questions: [], answers: [] },
        { type: "true-or-false", question: "", answers: [true, false] },
        { type: "free-field" }
      ]
    },
    {
      name: "Bloc personnel",
      tests: [
        { type: "likert", topic: "", questions: [], answers: [] },
        { type: "true-or-false", question: "", answers: [true, false] },
        { type: "free-field" }
      ]
    }
  ],
  0: {}
};
