window.props = {
  fr: {
    skills: [
      {
        name: "Mes drivers",
        topic: "LES 5 DRIVERS :",
        button: "VISUALISEZ VOS RESULTATS",
        result: "histogram",
        wording:
          "Lisez avec attention chacun des énoncés et indiquez à quelle fréquence cela vous correspond. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
        tests: [
          {
            name: "likert1-1",
            type: "likert",
            topic: "",
            button: "VISUALISEZ VOS RESULTATS",
            wording: "",
            drivers: {
              driver1: "Sois parfait",
              driver2: "Sois fort",
              driver3: "Dépêche toi",
              driver4: "Fais plaisir",
              driver5: "Fais des efforts"
            },
            questions: [
              {
                text:
                  "Pour prendre une décision, aimez-vous avoir beaucoup d’informations ?",
                id: "question0",
                driver: "driver1"
              },
              {
                text: "Vous reprochez-vous vos erreurs ?",
                id: "question1",
                driver: "driver1"
              },
              {
                text:
                  "Vérifiez-vous plusieurs fois les paroles des autres de crainte d’une erreur de compréhension?",
                id: "question2",
                driver: "driver1"
              },
              {
                text: "Recherchez-vous la perfection ?",
                id: "question3",
                driver: "driver1"
              },
              {
                text:
                  "Aimez-vous être particulièrement précis dans votre discours ?",
                id: "question4",
                driver: "driver1"
              },
              {
                text: "Avez-vous tendance à « pinailler » ?",
                id: "question5",
                driver: "driver1"
              },
              {
                text: "Il vaut mieux ne pas reconnaître ses faiblesses.",
                id: "question6",
                driver: "driver2"
              },
              {
                text: "Vous savez vous dégager du jugement de l’autre",
                id: "question7",
                driver: "driver2"
              },
              {
                text:
                  "Dites-vous aux autres : « il n’y a pas de quoi se lamenter dans votre situation » ?",
                id: "question8",
                driver: "driver2"
              },
              {
                text: "Vous avez repéré vos lacunes… elles ne vous gênent pas",
                id: "question9",
                driver: "driver2"
              },
              {
                text: "Maîtrisez-vous vos sentiments, vos émotions ?",
                id: "question10",
                driver: "driver2"
              },
              {
                text:
                  "Pouvez-vous réagir face à un problème en disant : « pas de commentaires » ou encore « ça n’a pas d’importance », « je m’en fous » ?",
                id: "question11",
                driver: "driver2"
              },
              {
                text:
                  "Ressentez-vous de l’irritation lorsque votre interlocuteur est lent ?",
                id: "question12",
                driver: "driver3"
              },
              {
                text:
                  "Arrivez-vous en retard même quand vous vous arrangez pour arriver à temps ?",
                id: "question13",
                driver: "driver3"
              },
              {
                text: "Pensez-vous que vous devriez vous dépêcher ?",
                id: "question14",
                driver: "driver3"
              },
              {
                text: "Etes-vous impatient lorsque vous devez attendre ?",
                id: "question15",
                driver: "driver3"
              },
              {
                text:
                  "Remettez-vous à plus tard pour ensuite vous précipiter à la dernière minute ?",
                id: "question16",
                driver: "driver3"
              },
              {
                text: "Le silence vous met-il mal à l’aise ?",
                id: "question17",
                driver: "driver3"
              },
              {
                text: "Vous sentez-vous tenu de rendre service ?",
                id: "question18",
                driver: "driver4"
              },
              {
                text:
                  "Offrez-vous de rendre service même si on ne vous le demande pas ?",
                id: "question19",
                driver: "driver4"
              },
              {
                text:
                  "Utilisez-vous des expressions comme « vous savez… » « pourriez-vous… » « pouvez-vous… » « voudriez vous » ?",
                id: "question20",
                driver: "driver4"
              },
              {
                text:
                  "Eprouvez-vous le besoin de vérifier si les autres sont contents de vous et de vos actes ?",
                id: "question21",
                driver: "driver4"
              },
              {
                text: "Pensez-vous que vous devez faire plaisir aux autres ?",
                id: "question22",
                driver: "driver4"
              },
              {
                text:
                  "Pensez-vous que ce que vous faites n’a de valeur que si quelqu’un l’approuve ?",
                id: "question23",
                driver: "driver4"
              },
              {
                text: "Faites-vous des efforts pour atteindre vos objectifs ?",
                id: "question24",
                driver: "driver5"
              },
              {
                text:
                  "Le plus souvent, vous réussissez en luttant et en surmontant les difficultés",
                id: "question25",
                driver: "driver5"
              },
              {
                text: "Au travail, vous n’avez pas le temps de vous détendre",
                id: "question26",
                driver: "driver5"
              },
              {
                text:
                  "Utilisez-vous des tournures comme « j’essaierai, je n’y arrive pas, c’est difficile » ?",
                id: "question27",
                driver: "driver5"
              },
              {
                text:
                  "Vous dites-vous ou dites-vous aux autres : « au moins j’ai essayé » ou des phrases semblables ?",
                id: "question28",
                driver: "driver5"
              },
              {
                text:
                  "Etes-vous adepte de la maxime : « essayez, essayez, essayez encore, jusqu’à ce que vous réussissiez »",
                id: "question29",
                driver: "driver5"
              }
            ],
            answers: [
              { name: "Rarement", value: "1" },
              { name: "Parfois", value: "2" },
              { name: "D’ordinaire oui", value: "3" },
              { name: "Oui, souvent", value: "4" },
              { name: "Oui, presque toujours", value: "5" }
            ]
          },
          {
            name: "likert1-2",
            type: "likert",
            topic: "",
            button: "",
            wording: "",
            drivers: {
              driver1: "Sois parfait",
              driver2: "Sois fort",
              driver3: "Dépêche toi",
              driver4: "Fais plaisir",
              driver5: "Fais des efforts"
            },
            questions: [
              {
                text: "Sois parfait",
                id: "question0",
                driver: "driver1"
              },
              {
                text: "Sois fort",
                id: "question1",
                driver: "driver2"
              },
              {
                text: "Dépêche toi",
                id: "question2",
                driver: "driver3"
              },
              {
                text: "Fais plaisir",
                id: "question3",
                driver: "driver4"
              },
              {
                text: "Fais des efforts",
                id: "question4",
                driver: "driver5"
              }
            ],
            answers: [
              { name: "Rarement", value: "6" },
              { name: "Parfois", value: "12" },
              { name: "D’ordinaire oui", value: "18" },
              { name: "Oui, souvent", value: "24" },
              { name: "Oui, presque toujours", value: "30" }
            ]
          },
          {
            name: "multi1",
            type: "multiple-source-result",
            topic: "",
            button: "VISUALISEZ VOS RESULTATS",
            sources: [
              { id: "likert1-1", name: "Test driver" },
              { id: "likert1-2", name: "Autopositionnement" }
            ]
          }
        ]
      },
      {
        name: "Mes compétences de manager",
        wording:
          "Dans ce bloc, les apprenants doivent répondre en saisie libre aux questions suivantes :",
        tests: [
          {
            type: "free-field",
            name: "freeField2-1",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Quelles sont les compétences essentielles du manager selon vous ?"
              },
              {
                id: "field1",
                text:
                  "Quelles sont les compétences essentielles du manager en communication interpersonnelle selon vous ?"
              },
              {
                id: "field2",
                text: "Quelles sont les compétences que vous pensez posséder ?"
              },
              {
                id: "field3",
                text:
                  "Quelles sont les compétences que vous pensez devoir acquérir ?"
              },
              {
                id: "field4",
                text:
                  "Quelles sont les types de situation professionnelle qui vous posent problème ?"
              },
              {
                id: "field5",
                text:
                  "De quoi avez-vous besoin pour vous sentir bien en situation de communication managériale ?"
              }
            ]
          }
        ]
      },
      {
        name: "Mon cadre de référence",
        topic: "",
        button: "VISUALISEZ VOS RESULTATS",
        result: "histogram",
        wording: "",
        tests: [
          {
            name: "likert3-1",
            type: "likert",
            topic: "",
            button: "VISUALISEZ VOS RESULTATS",
            result: "histogram",
            wording: "",
            drivers: {
              driver1: "Savoir",
              driver2: "Faire",
              driver3: "Être"
            },
            questions: [
              {
                text: "J’ai un bon sens de la logique.",
                id: "question0",
                driver: "driver1"
              },
              {
                text: "Je suis quelqu’un de rationnel.",
                id: "question1",
                driver: "driver1"
              },
              {
                text: "J’ai un esprit analytique.",
                id: "question2",
                driver: "driver1"
              },
              {
                text: "Je suis doué pour résoudre des problème.",
                id: "question3",
                driver: "driver1"
              },
              {
                text: "J’apprécie les aspects théoriques.",
                id: "question4",
                driver: "driver1"
              },
              {
                text: "Je suis orienté performance.",
                id: "question5",
                driver: "driver1"
              },
              {
                text: "J’aime respecter les règles et les procédures.",
                id: "question6",
                driver: "driver1"
              },
              {
                text: "Je suis en contrôle de moi même.",
                id: "question7",
                driver: "driver1"
              },
              {
                text: "Je suis capable de m’auto-discipliner.",
                id: "question8",
                driver: "driver1"
              },
              {
                text: "J’agis avec méthode.",
                id: "question9",
                driver: "driver1"
              },
              {
                text: "Je suis quelqu’un de créatif.",
                id: "question10",
                driver: "driver2"
              },
              {
                text: "J’ai une vision à long terme.",
                id: "question11",
                driver: "driver2"
              },
              {
                text: "J’ai un esprit de synthèse.",
                id: "question12",
                driver: "driver2"
              },
              {
                text: "Je suis quelqu’un de spontané.",
                id: "question13",
                driver: "driver2"
              },
              {
                text: "J’aime expérimenter.",
                id: "question14",
                driver: "driver2"
              },
              {
                text: "J’ai le sens de l’esthétique.",
                id: "question15",
                driver: "driver2"
              },
              {
                text: "J’aime prendre des risques.",
                id: "question16",
                driver: "driver2"
              },
              {
                text: "Je suis aventureux.",
                id: "question17",
                driver: "driver2"
              },
              {
                text: "J’aime la nouveauté.",
                id: "question18",
                driver: "driver2"
              },
              {
                text: "J’agis avec intuition.",
                id: "question19",
                driver: "driver2"
              },
              {
                text: "Je suis quelqu’un d’assez émotionnel.",
                id: "question20",
                driver: "driver3"
              },
              {
                text: "J’apprécie les relations humaines.",
                id: "question21",
                driver: "driver3"
              },
              {
                text: "J’ai besoin de contact avec les autres.",
                id: "question22",
                driver: "driver3"
              },
              {
                text: "Je suis altruiste.",
                id: "question23",
                driver: "driver3"
              },
              {
                text: "J’aime enseigner ce que je connais.",
                id: "question24",
                driver: "driver3"
              },
              {
                text: "J’agis avec feeling.",
                id: "question25",
                driver: "driver3"
              },
              {
                text: "J’aime contribuer à une cause.",
                id: "question26",
                driver: "driver3"
              },
              {
                text: "Je suis à l’écoute des autres.",
                id: "question27",
                driver: "driver3"
              },
              {
                text: "Je recherche la satisfaction personnelle.",
                id: "question28",
                driver: "driver3"
              },
              {
                text: "J’ai une très bonne qualité relationnelle.",
                id: "question29",
                driver: "driver3"
              }
            ],
            answers: [
              { name: "Pas du tout d’accord", value: 1 },
              { name: "Plutôt en désaccord", value: 2 },
              { name: "Ni en accord ni en désaccord", value: 3 },
              { name: "Plutôt en accord", value: 4 },
              { name: "Totalement d’accord", value: 5 }
            ]
          },
          {
            type: "free-field",
            name: "freeField3-2",
            topic: "Valeurs",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Lisez attentivement cette liste de valeur \n\nÉGALITÉ (opportunités égales pour tous)\nHARMONIE INTÉRIEURE (en paix avec soi-même)\nPOUVOIR SOCIAL (contrôle d'autrui, dominance)\nPLAISIR (satisfaction des désirs)\nLIBERTÉ (liberté de pensée et d'action)\nUNE VIE SPIRITUELLE (accent mis sur les aspects spirituels et non matériels)\nSENTIMENT DE NE PAS ÊTRE ISOLÉ (sentiment que les autres se soucient de moi)\nORDRE SOCIAL (stabilité de la société)\nUNE VIE EXCITANTE (expériences stimulantes)\nSENS DE LA VIE (un objectif dans la vie)\nPOLITESSE (courtoisie, bonnes manières)\nRICHESSE (biens matériels, argent)\nSÉCURITÉ NATIONALE (protection de mon pays contre ses ennemis)\nRESPECT DE SOI (croyance en sa propre valeur)\nRÉCIPROCITÉ DES FAVEURS (éviter d'être en dettes)\nCRÉATIVITÉ (originalité, imagination)\nUN MONDE EN PAIX (libéré des guerres et des conflits)\nRESPECT DE LA TRADITION (préserver les coutumes consacrées par le temps)\nAMOUR ADULTE (intimité profonde, émotionnelle et spirituelle)\nAUTO DISCIPLINE (auto limitation, résistance aux tentations)\nDROIT A UNE VIE PRIVÉE (non exposée aux regards indiscrets)\nSÉCURITÉ FAMILIALE (sécurité pour ceux que l'on aime)\nRECONNAISSANCE SOCIALE (respect, approbation émanant des autres)\nUNITÉ AVEC LA NATURE (adéquation à la nature)\nUNE VIE VARIÉE (remplie de défis, de nouveautés, de changements)\nSAGESSE (compréhension adulte de la vie)\nAUTORITÉ (le droit de diriger ou de commander)\nAMITIÉ VRAIE (des amis proches et sur qui l'on peut compter)\nUN MONDE DE BEAUTÉ (beauté de la nature et des arts)\nJUSTICE SOCIALE (corriger les injustices, secourir les faibles)\n\nSelon vous, parmi cette liste, quelle est la valeur la plus importante ? Donnez un exemple de situation personnelle ou vous avez appliqué cette valeur."
              },
              {
                id: "field1",
                text:
                  "Selon vous, parmi cette liste, quelle est la valeur la moins importante ? Donnez un exemple de situation personnelle ou vous n’avez pas appliqué cette valeur."
              },
              {
                id: "field2",
                text: "Quelles sont les compétences que vous pensez posséder ?"
              },
              {
                id: "field3",
                text:
                  "Selon vous, parmi cette seconde liste, quelle est la valeur la moins importante ? Donnez un exemple de situation personnelle ou vous n’avez pas appliqué cette valeur."
              }
            ]
          },
          {
            name: "likert3-3",
            type: "likert",
            topic: "Besoin",
            button: "VISUALISEZ VOS RESULTATS",
            result: "histogram",
            wording: "",
            drivers: {
              driver1: "dvf"
            },
            questions: [
              {
                text:
                  "A quel point le besoin « Subsistance » est-t-il important pour vous ?",
                id: "question0",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Protection » est-t-il important pour vous ?",
                id: "question1",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin «Participation » est-t-il important pour vous ?",
                id: "question2",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Oisiveté» est-t-il important pour vous ?",
                id: "question3",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Affection » est-t-il important pour vous ?",
                id: "question4",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Compréhension » est-t-il important pour vous ?",
                id: "question5",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Créativité » est-t-il important pour vous ?",
                id: "question6",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Identité » est-t-il important pour vous ?",
                id: "question7",
                driver: "driver1"
              },
              {
                text:
                  "A quel point le besoin « Liberté » est-t-il important pour vous ?",
                id: "question8",
                driver: "driver1"
              }
            ],
            answers: [
              { name: "Pas du tout important", value: 1 },
              { name: "Peu important", value: 2 },
              { name: "Assez important", value: 3 },
              { name: "Très important", value: 4 },
              { name: "Fondamental", value: 5 }
            ]
          },
          {
            type: "free-field",
            name: "freeField3-4",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Citez vos peurs les plus importantes et les situations dans lesquelles elles se manifestent le plus :"
              }
            ]
          },
          {
            type: "free-field",
            name: "freeField3-5",
            topic: "Croyances",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Listez trois croyances personnelles que vous considérez comme aidantes :"
              },
              {
                id: "field1",
                text:
                  "Donnez des exemples de situation ou ces croyances vous ont aidés :"
              },
              {
                id: "field2",
                text:
                  "Listez trois croyances personnelles que vous considérez comme limitantes :"
              },
              {
                id: "field3",
                text:
                  "Donnez des exemples de situation ou ces croyances vous ont limité :"
              }
            ]
          },
          {
            type: "free-field",
            name: "freeField3-6",
            topic: "Emotions",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Vous considérez vous comme quelqu’un qui exprime beaucoup ses émotions ? Donnez un exemple :"
              },
              {
                id: "field1",
                text:
                  "Listez les 3 émotions les plus fréquemment ressenties en vous basant sur la roue des émotions. Donnez des exemples de situation pour chaque émotion :"
              }
            ]
          },
          {
            type: "free-field",
            name: "freeField3-7",
            topic: "Synthèse cadre de référence",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Est-ce que vous avez étés surpris par certains résultats ?"
              },
              {
                id: "field1",
                text: "Etiez-vous conscient de vos modes de fonctionnement ?"
              },
              {
                id: "field2",
                text:
                  "Y’a-t-il des choses auxquelles vous ne vous attendiez pas dont vous avez pris conscience ?"
              }
            ]
          }
        ]
      },
      {
        name: "Mon profil émotionnel",
        topic: "VRAI OU FAUX",
        wording:
          "Lisez avec attention chacun des énoncés et indiquez si cet énoncé est vrai ou faux pour vous. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
        tests: [
          {
            type: "true-or-false",
            topic: "Résilience",
            name: "trueorfalse4-1",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Si j'ai un petit désaccord avec un ami ou avec mon conjoint, je reste en général sur les nerfs pendant des heures, voire davantage.",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "Si un automobiliste roule sur le talus pour doubler tous les autres dans une file d'attente, je hausse les épaules au lieu de m'énerver durablement.",
                true: 0,
                false: 1
              },
              {
                id: "question2",
                text:
                  "Quand je ressens un profond chagrin, comme lors de la mort d'un proche, cela perturbe mon fonctionnement pendant plusieurs mois.",
                true: 1,
                false: 0
              },
              {
                id: "question3",
                text:
                  "Si je commets une erreur au travail et qu'on m'en fait reproche, je suis capable de passer outre et d'y voir une occasion de progresser.",
                true: 0,
                false: 1
              },
              {
                id: "question4",
                text:
                  "Si j'essaye un nouveau restaurant où le repas est infect ct le service détestable, cela gâche toute ma soirée.",
                true: 1,
                false: 0
              },
              {
                id: "question5",
                text:
                  "Après avoir été coincé(e) dans un embouteillage causé par un accident, j'accélère pour évacuer mon agacement dès que je peux enfin m'échapper, mais je continue à bouillonner intérieurement.",
                true: 1,
                false: 0
              },
              {
                id: "question6",
                text:
                  "Si mon chauffe-eau tombe en panne, cela n'a pas grand effet sur mon humeur, car je sais qu'il suffit d'appeler un plombier pour le faire réparer.",
                true: 0,
                false: 1
              },
              {
                id: "question7",
                text:
                  "Si je rencontre un homme/une femme formidable avec lui j'ai très envie de sortir, une réponse négative me met en général de mauvaise humeur pendant plusieurs heures, ou même plusieurs jours.",
                true: 1,
                false: 0
              },
              {
                id: "question8",
                text:
                  "Si l'on pense à moi pour une promotion ou une importante récompense professionnelle, finalement accordée à quelqu'un qui me semble moins qualifié, je rebondis en général assez vite.",
                true: 0,
                false: 1
              },
              {
                id: "question9",
                text:
                  "Lors d'une soirée, au cours d'une conversation avec un(e) passionnant(e) inconnu(e), si je garde le silence lorsqu'il/elle m'interroge à mon sujet, j'ai tendance à me rejouer mentalement tout l'entretien - en imaginant cette fois ce que j'aurais dû dire- pendant des heures ct des heures, et même des jours entiers.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          },
          {
            type: "true-or-false",
            topic: "Perspective",
            name: "trueorfalse4-2",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Quand je suis invité(e) à rencontrer des gens que je ne connais pas, je suis enthousiaste car j'imagine qu'ils pourraient devenir des amis, plutôt que d'y voir une corvée à l'idée que ces gens ne m'intéresseront pas.",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "Quand j'évalue un collègue, je mc focalise sur les détails sur lesquels il doit s'améliorer, plutôt que sur sa performance globalement positive.",
                true: 0,
                false: 1
              },
              {
                id: "question2",
                text:
                  "Je pense que les dix années à venir seront meilleures pour moi que les dix années écoulées.",
                true: 1,
                false: 0
              },
              {
                id: "question3",
                text:
                  "Confronté(e) à la possibilité de déménager, j'y vois un effrayant saut dans l'inconnu.",
                true: 0,
                false: 1
              },
              {
                id: "question4",
                text:
                  "Quand il m'arrive le matin un petit événement inattendu mais positif- par exemple, si j'ai un conversation formidable avec un inconnu-, cette humeur positive se dissipe en quelques minutes.",
                true: 0,
                false: 1
              },
              {
                id: "question5",
                text:
                  "Quand je suis invité(e) à une fête ct que je me sens bien au départ, ce sentiment positif a tendance à durer toute la soirée.",
                true: 1,
                false: 0
              },
              {
                id: "question6",
                text:
                  "L'impression suscitée par un beau paysage, par un superbe coucher de soleil, se dissipe vite et je m'ennuie facilement.",
                true: 0,
                false: 1
              },
              {
                id: "question7",
                text:
                  "Quand je me réveille le matin, je pense à une activité agréable que j'ai prévue, et cela mc met de bonne humeur pour toute la journée.",
                true: 1,
                false: 0
              },
              {
                id: "question8",
                text:
                  "Quand je vais au musée ou au concert, les premières minutes sont vraiment agréables, mais cela ne dure pas.",
                true: 0,
                false: 1
              },
              {
                id: "question9",
                text:
                  "Les jours où je suis très occupé(e), j'ai souvent le sentiment que je peux enchaîner les activités sans me fatiguer.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          },
          {
            type: "true-or-false",
            topic: "Intuition sociale",
            name: "trueorfalse4-3",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Quand je parle à des gens, je remarque souvent de subtils indices sociaux concernant leurs émotions la gêne ou la colère, par exemple- avant qu'ils ne prennent eux-mêmes.",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "Je me surprends, ou vent à noter les expressions faciales ct le langage du corps.",
                true: 1,
                false: 0
              },
              {
                id: "question2",
                text:
                  "Peu m'importe que je parle aux gens au téléphone ou en face à face, puisque voir la personne à qui je parle m'apporte rarement des informations supplémentaires.",
                true: 0,
                false: 1
              },
              {
                id: "question3",
                text:
                  "J'ai souvent l'impression d'en savoir plus que les gens sur leurs véritables sentiments.",
                true: 1,
                false: 0
              },
              {
                id: "question4",
                text:
                  "Je suis souvent surpris(e) quanti mon interlocuteur est énervé ou contrarié par cc que j'ai dit, sans raison apparente.",
                true: 0,
                false: 1
              },
              {
                id: "question5",
                text:
                  "Au restaurant, je préfère m'asseoir à côté de la personne avec qui je parle, afin de ne pas voir son visage de face.",
                true: 0,
                false: 1
              },
              {
                id: "question6",
                text:
                  "Je réagis souvent à l'inconfort ou au désarroi d'autrui sur la base d'une intuition plutôt que d'une discussion explicite.",
                true: 1,
                false: 0
              },
              {
                id: "question7",
                text:
                  "Quand je suis dans un lieu public et que j'ai du temps à perdre, j'aime observer les gens qui m'entourent.",
                true: 1,
                false: 0
              },
              {
                id: "question8",
                text:
                  "Je suis mal à l'aise quand quelqu'un que je connais à peine mc regarde droit dans les yeux pendant une conversation.",
                true: 0,
                false: 1
              },
              {
                id: "question9",
                text:
                  "Je peux souvent déterminer si une personne est gênée par quelque chose rien qu'en la regardant.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          },
          {
            type: "true-or-false",
            topic: "Conscience de soi",
            name: "trueorfalse4-4",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Souvent, quand on me demande pourquoi je suis triste ou en colère, je réponds (ou je pense): « Mais pas du tout!»",
                true: 0,
                false: 1
              },
              {
                id: "question1",
                text:
                  "Quand mes proches me demandent pourquoi j'ai traité quelqu'un de façon brusque ou méchante, je nie souvent m'être conduit ainsi.",
                true: 0,
                false: 1
              },
              {
                id: "question2",
                text:
                  "Souvent - plusieurs fois par mois -, je m'aperçois que mon cœur bat très vite ou très fort, et je ne sais absolument pas pourquoi.",
                true: 0,
                false: 1
              },
              {
                id: "question3",
                text:
                  "Quand j'observe quelqu'un qui souffre, je ressens sa douleur en moi, sur le plan physique et émotionnel.",
                true: 1,
                false: 0
              },
              {
                id: "question4",
                text:
                  "En général, je sais de façon certaine cc que je ressens et je peux traduire mes émotions en mots.",
                true: 1,
                false: 0
              },
              {
                id: "question5",
                text:
                  "Parfois, je remarque en moi des douleurs sans savoir d'où elles viennent.",
                true: 0,
                false: 1
              },
              {
                id: "question6",
                text:
                  "J'aime passer du temps à ne rien faire, détendu(e), simplement pour ressentir ce qui se passe en moi.",
                true: 1,
                false: 0
              },
              {
                id: "question7",
                text:
                  "Je crois que j'habite bien mon corps ct je m'y sens chez moi, à l'aise.",
                true: 1,
                false: 0
              },
              {
                id: "question8",
                text:
                  "Je suis fortement orienté(e) vers le monde extérieur et je remarque rarement ce qui se passe dans mon corps.",
                true: 0,
                false: 1
              },
              {
                id: "question9",
                text:
                  "Quand je fais de l'exercice, je suis très sensible aux changements que cela produit dans mon corps.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          },
          {
            type: "true-or-false",
            topic: "Sensibilité au contexte",
            name: "trueorfalse4-5",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Je suis capable de me concentrer dans un environnement bruyant. ",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "Quand je suis dans une situation où il se passe beaucoup de choses et où les stimulations sensorielles sont nombreuses, comme lors d'une fête ou dans la foule d'un aéroport, j'arrive à ne pas me laisser entraîner par mes pensées vers quelque chose qui se passe devant moi.",
                true: 0,
                false: 1
              },
              {
                id: "question2",
                text:
                  "Si je décide de concentrer mon attention sur une tâche particulière, je suis en général capable de l'y maintenir.",
                true: 0,
                false: 1
              },
              {
                id: "question3",
                text:
                  "Si je suis chez moi et que je tente de travailler, le bruit de la télévision ou des gens qui parlent me perturbe énormément.",
                true: 0,
                false: 1
              },
              {
                id: "question4",
                text:
                  "Si je reste immobile ne serait-ce que quelques instants, un flux de pensées mc vient à l'esprit ct je me mets à suivre plusieurs fils, souvent sans savoir comment chacun a commencé.",
                true: 1,
                false: 0
              },
              {
                id: "question5",
                text:
                  "Si je suis perturbé(c) par un événement imprévu, je suis capable de reconcentrer mon attention sur ce que je faisais avant d'être interrompu(e).",
                true: 1,
                false: 0
              },
              {
                id: "question6",
                text:
                  "À des moments de calme relatif, quand je suis assis(e) dans un train, dans un autobus, ou quand je fais la queue dans un magasin, je remarque beaucoup de choses autour de moi.",
                true: 0,
                false: 1
              },
              {
                id: "question7",
                text:
                  "Quand un projet important exige toute mon attention, j’essaye de m'installer dans un endroit le plus tranquille possible.",
                true: 1,
                false: 0
              },
              {
                id: "question8",
                text:
                  "Mon attention a tendance à se laisser capter par les stimuli et événements de mon environnement, et j'ai du mal à me reconcentrer quand cela se produit.",
                true: 1,
                false: 0
              },
              {
                id: "question9",
                text:
                  "Je n'ai aucun mal à mener une discussion personnelle au milieu d'une foule, lors d'un cocktail ou dans une grande pièce; dans un tel environnement, je peux faire abstraction de tous les autres, même si, en me concentrant, j'arrive à distinguer ce qu'ils disent.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          },
          {
            type: "true-or-false",
            topic: "Attention",
            name: "trueorfalse4-6",
            button: "VISUALISEZ VOS RESULTATS",
            result: "stackedBarChart",
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Un proche m'a dit que je suis en général insensible aux sentiments d'autrui.",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "On m'a parfois dit que je m'étais conduit(e) de manière , socialement inadaptée, ce qui m'a surpris(e).",
                true: 1,
                false: 0
              },
              {
                id: "question2",
                text:
                  "Il m'est arrivé de connaître un échec professionnel ou de me disputer avec un ami parce que je me montrais trop cordial(e) avec un supérieur ou trop jovial(e) avec un ami en détresse.",
                true: 1,
                false: 0
              },
              {
                id: "question3",
                text:
                  "Quand je parle aux gens, ils reculent parfois pour accroître la distance entre nous.",
                true: 0,
                false: 1
              },
              {
                id: "question4",
                text:
                  "Je me surprends souvent à me censurer parce que je sens que ce que j'allais dire aurait été malvenu étant donné la situation (par exemple, avant de répondre à la question: «Mon chéri, tu me trouves grosse dans cc pantalon ? »).",
                true: 0,
                false: 1
              },
              {
                id: "question5",
                text:
                  "Quand je suis dans un lieu public comme un restaurant, je prends bien soin de parler moins fort.",
                true: 1,
                false: 0
              },
              {
                id: "question6",
                text:
                  "En public, on me rappelle souvent de ne pas mentionner le nom de gens qui pourraient être présents.",
                true: 1,
                false: 0
              },
              {
                id: "question7",
                text:
                  "Quand je suis déjà venu(e) dans un endroit donné, je m'en souviens presque toujours, même si c'est une autoroute par laquelle je suis passé(e) bien des années auparavant.",
                true: 0,
                false: 1
              },
              {
                id: "question8",
                text:
                  "Quand quelqu'un a un comportement déplacé (trop désinvolte au travail, par exemple), je le remarque toujours.",
                true: 0,
                false: 1
              },
              {
                id: "question9",
                text:
                  "Mes proches me disent que je me conduis toujours très bien avec les inconnus ct dans les situations peu familières.",
                true: 1,
                false: 0
              }
            ],
            answers: [
              { value: true, name: "Vrai" },
              { value: false, name: "Faux" }
            ]
          }
        ]
      },
      {
        name: "Mon comportement",
        tests: []
      },
      {
        name: "Mon style de leadership",
        tests: []
      },
      {
        name: "Mes atouts",
        tests: []
      },
      {
        name: "Mon Bloc-Notes",
        wording:
          "Dans ce bloc, il n’y a qu’un espace de saisie libre sans consigne particulière :",
        tests: [
          {
            type: "free-field",
            name: "freeField8-1",
            button: "ENREGISTREZ VOTRE REPONSE",
            questions: [
              {
                id: "field0",
                text: "Exprimez-vous !"
              }
            ]
          }
        ]
      }
    ]
  }
};
