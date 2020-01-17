window.props = {
  fr: {
    skills: [
      {
        name: "Mes drivers",
        topic: "Mes drivers",
        button1: "VISUALISEZ VOS RESULTATS",
        button2: "ACTUALISEZ VOS RESULTATS",
        result: { type: "histogram", legend: true, interpretation: "" },
        wording:
          "Lisez avec attention chacun des énoncés et indiquez à quelle fréquence cela vous correspond. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
        tests: [
          {
            name: "likert1-1",
            type: "likert",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: { type: "histogram", legend: true },
            drivers: {
              driver1: "Sois parfait",
              driver2: "Sois fort",
              driver3: "Dépêche toi",
              driver4: "Fais plaisir",
              driver5: "Fais des efforts"
            },
            requiredForms: [{ id: "form2", name: "Test" }],
            dataForms: [
              {
                id: "form1",
                name: "Auto-positionnement"
              },
              { id: "form2", name: "Test" },

              { id: "form3", name: "Evaluation par les pairs" }
            ],
            questions: [
              { subTopic: "Auto-positionnement", id: "form1" },
              {
                text:
                  "J’ai l’impression que mon comportement correspond au driver « sois parfait »",
                id: "question30",
                driver: "driver1",
                form: { id: "form1", coef: 6 }
              },
              {
                text:
                  "J’ai l’impression que mon comportement correspond au driver « sois fort »",
                id: "question31",
                driver: "driver2",
                form: { id: "form1", coef: 6 }
              },
              {
                text:
                  "J’ai l’impression que mon comportement correspond au driver « dépêche-toi »",
                id: "question32",
                driver: "driver3",
                form: { id: "form1", coef: 6 }
              },
              {
                text:
                  "J’ai l’impression que mon comportement correspond au driver « fais plaisir »",
                id: "question33",
                driver: "driver4",
                form: { id: "form1", coef: 6 }
              },
              {
                text:
                  "J’ai l’impression que mon comportement correspond au driver « fais des efforts »",
                id: "question34",
                driver: "driver5",
                form: { id: "form1", coef: 6 }
              },
              { subTopic: "Déterminer mes drivers", id: "form2" },
              {
                text:
                  "Pour prendre une décision, aimez-vous avoir beaucoup d’informations ?",
                id: "question0",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Vous reprochez-vous vos erreurs ?",
                id: "question1",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Vérifiez-vous plusieurs fois les paroles des autres de crainte d’une erreur de compréhension?",
                id: "question2",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Recherchez-vous la perfection ?",
                id: "question3",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Aimez-vous être particulièrement précis dans votre discours ?",
                id: "question4",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Avez-vous tendance à « pinailler » ?",
                id: "question5",
                driver: "driver1",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Il vaut mieux ne pas reconnaître ses faiblesses",
                id: "question6",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Vous savez vous dégager du jugement de l’autre",
                id: "question7",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Dites-vous aux autres : « il n’y a pas de quoi se lamenter dans votre situation » ?",
                id: "question8",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Vous avez repéré vos lacunes… elles ne vous gênent pas",
                id: "question9",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Maîtrisez-vous vos sentiments, vos émotions ?",
                id: "question10",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Pouvez-vous réagir face à un problème en disant : « pas de commentaires » ou encore « ça n’a pas d’importance », « je m’en fous » ?",
                id: "question11",
                driver: "driver2",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Ressentez-vous de l’irritation lorsque votre interlocuteur est lent ?",
                id: "question12",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Arrivez-vous en retard même quand vous vous arrangez pour arriver à temps ?",
                id: "question13",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Pensez-vous que vous devriez vous dépêcher ?",
                id: "question14",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Etes-vous impatient lorsque vous devez attendre ?",
                id: "question15",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Remettez-vous à plus tard pour ensuite vous précipiter à la dernière minute ?",
                id: "question16",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Le silence vous met-il mal à l’aise ?",
                id: "question17",
                driver: "driver3",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Vous sentez-vous tenu de rendre service ?",
                id: "question18",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Offrez-vous de rendre service même si on ne vous le demande pas ?",
                id: "question19",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Utilisez-vous des expressions comme « vous savez… » « pourriez-vous… » « pouvez-vous… » « voudriez vous » ?",
                id: "question20",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Eprouvez-vous le besoin de vérifier si les autres sont contents de vous et de vos actes ?",
                id: "question21",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Pensez-vous que vous devez faire plaisir aux autres ?",
                id: "question22",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Pensez-vous que ce que vous faites n’a de valeur que si quelqu’un l’approuve ?",
                id: "question23",
                driver: "driver4",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Faites-vous des efforts pour atteindre vos objectifs ?",
                id: "question24",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Le plus souvent, vous réussissez en luttant et en surmontant les difficultés",
                id: "question25",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                text: "Au travail, vous n’avez pas le temps de vous détendre",
                id: "question26",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Utilisez-vous des tournures comme « j’essaierai, je n’y arrive pas, c’est difficile » ?",
                id: "question27",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Vous dites-vous ou dites-vous aux autres : « au moins j’ai essayé » ou des phrases semblables ?",
                id: "question28",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                text:
                  "Etes-vous adepte de la maxime : « essayez, essayez, essayez encore, jusqu’à ce que vous réussissiez »",
                id: "question29",
                driver: "driver5",
                form: { id: "form2", coef: 1 }
              },
              {
                subTopic: "Evaluation par les pairs",
                additionalText:
                  "( L'évaluation par les pairs est à remplir lors d'une activité en présentiel. Ne remplissez pas ces champs si vous êtes à distance )",
                id: "form3"
              },
              {
                text:
                  "Mes camarades perçoivent mon comportement comme correspondant au driver « sois parfait »",
                id: "question35",
                driver: "driver1",
                form: { id: "form3", coef: 6 }
              },
              {
                text:
                  "Mes camarades perçoivent mon comportement comme correspondant au driver « sois fort »",
                id: "question36",
                driver: "driver2",
                form: { id: "form3", coef: 6 }
              },
              {
                text:
                  "Mes camarades perçoivent mon comportement comme correspondant au driver « dépêche-toi »",
                id: "question37",
                driver: "driver3",
                form: { id: "form3", coef: 6 }
              },
              {
                text:
                  "Mes camarades perçoivent mon comportement comme correspondant au driver « fais plaisir »",
                id: "question38",
                driver: "driver4",
                form: { id: "form3", coef: 6 }
              },
              {
                text:
                  "Mes camarades perçoivent mon comportement comme correspondant au driver « fais des efforts »",
                id: "question39",
                driver: "driver5",
                form: { id: "form3", coef: 6 }
              }
            ],
            answers: [
              { name: "Rarement", value: "1" },
              { name: "Parfois", value: "2" },
              { name: "D’ordinaire oui", value: "3" },
              { name: "Oui, souvent", value: "4" },
              { name: "Oui, presque toujours", value: "5" }
            ]
          }
        ]
      },
      {
        name: "Mes compétences de manager",
        topic: "Mes compétences de manager",
        wording: "Répondez librement aux questions suivantes :",
        tests: [
          {
            type: "free-field",
            name: "freeField2-1",
            button: "ENREGISTRER MA REPONSE",
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
        topic: "Mon cadre de référence",
        button1: "VISUALISEZ VOS RESULTATS",
        button2: "ACTUALISEZ VOS RESULTATS",
        result: { type: "histogram", legend: true },
        wording: "",
        tests: [
          {
            name: "likert3-1",
            type: "likert",
            topic: "Mes filtres de perception",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "histogram",
              legend: false,
              interpretation:
                "Ce test vous indique votre filtre de perception privilégié. Les filtres de perception sont des portes d'entrée de l'information, à travers lesquels nous interprétons nos perceptions. Ils sont au nombre de trois : Savoir, Faire et Être. Dans cet histogramme, votre filtre privilégié correspond à la barre la plus élevée. Plus cette barre est éloignée des autres, plus votre filtre est marqué."
            },
            wording: `Lisez avec attention chacun des énoncés et indiquez si vous êtes en accord ou en désaccord avec. Essayez de répondre le plus spontanément possible et évitez de trop répondre "ni en désaccord ni en accord". Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.`,
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
                text: "Je suis doué pour résoudre des problèmes.",
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
            topic: "Mes valeurs",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                html:
                  "Lisez attentivement cette liste de valeurs : <br><br>ÉGALITÉ (opportunités égales pour tous)<br>HARMONIE INTÉRIEURE (en paix avec soi-même)<br>POUVOIR SOCIAL (contrôle d'autrui, dominance)<br>PLAISIR (satisfaction des désirs)<br>LIBERTÉ (liberté de pensée et d'action)<br>UNE VIE SPIRITUELLE (accent mis sur les aspects spirituels et non matériels)<br>SENTIMENT DE NE PAS ÊTRE ISOLÉ (sentiment que les autres se soucient de moi)<br>ORDRE SOCIAL (stabilité de la société)<br>UNE VIE EXCITANTE (expériences stimulantes)<br>SENS DE LA VIE (un objectif dans la vie)<br>POLITESSE (courtoisie, bonnes manières)<br>RICHESSE (biens matériels, argent)<br>SÉCURITÉ NATIONALE (protection de mon pays contre ses ennemis)<br>RESPECT DE SOI (croyance en sa propre valeur)<br>RÉCIPROCITÉ DES FAVEURS (éviter d'être en dettes)<br>CRÉATIVITÉ (originalité, imagination)<br>UN MONDE EN PAIX (libéré des guerres et des conflits)<br>RESPECT DE LA TRADITION (préserver les coutumes consacrées par le temps)<br>AMOUR ADULTE (intimité profonde, émotionnelle et spirituelle)<br>AUTO DISCIPLINE (auto limitation, résistance aux tentations)<br>DROIT A UNE VIE PRIVÉE (non exposée aux regards indiscrets)<br>SÉCURITÉ FAMILIALE (sécurité pour ceux que l'on aime)<br>RECONNAISSANCE SOCIALE (respect, approbation émanant des autres)<br>UNITÉ AVEC LA NATURE (adéquation à la nature)<br>UNE VIE VARIÉE (remplie de défis, de nouveautés, de changements)<br>SAGESSE (compréhension adulte de la vie)<br>AUTORITÉ (le droit de diriger ou de commander)<br>AMITIÉ VRAIE (des amis proches et sur qui l'on peut compter)<br>UN MONDE DE BEAUTÉ (beauté de la nature et des arts)<br>JUSTICE SOCIALE (corriger les injustices, secourir les faibles)<br><br>Selon vous, parmi cette liste, quelle est la valeur la plus importante ? Donnez un exemple de situation personnelle où vous avez appliqué cette valeur."
              },
              {
                id: "field1",
                text:
                  "Selon vous, parmi cette liste, quelle est la valeur la moins importante ? Donnez un exemple de situation personnelle où vous n’avez pas appliqué cette valeur."
              },
              {
                id: "field2",
                html:
                  "Lisez attentivement cette seconde liste de valeur :<br><br>AUTONOME (ne compter que sur soi, auto suffisant)<br>MODÉRÉ (évitant les extrêmes dans les sentiments et les actions)<br>LOYAL (fidèle à ses amis, au groupe des proches)<br>AMBITIEUX (travaillant dur, volontaire)<br>LARGE D'ESPRIT (tolérant les croyances et idées différentes)<br>HUMBLE (modeste, effacé)<br>AUDACIEUX (cherchant l'aventure, le risque)<br>PROTÉGEANT L'ENVIRONNEMENT (préserver la nature)<br>INFLUANT (exercer un impact sur les gens et les événements)<br>HONORANT SES PARENTS ET LES ANCIENS (montrant du respect)<br>CHOISISSANT SES PROPRES BUTS (sélectionnant ses propres objectifs)<br>EN BONNE SANTÉ (ne pas être malade physiquement ou mentalement)<br>COMPÉTENT (capable, efficace)<br>ACCEPTANT MA PART DANS LA VIE (se soumettre aux circonstances de la vie)<br>HONNÊTE (authentique, sincère)<br>PRÉSERVANT MON IMAGE PUBLIQUE (soucieux de ne pas perdre la \"face\")<br>OBÉISSANT (remplissant ses obligations, ayant le sens du devoir)<br>INTELLIGENT (logique, réfléchi)<br>SECOURABLE (travaillant en vue du bien-être d'autrui)<br>SACHANT JOUIR DE LA VIE (aimant la nourriture, le sexe, les loisirs, etc...)<br>RELIGIEUX (attaché aux croyances et à la foi religieuse)<br>RESPONSABLE (sur qui l'on peut compter)<br>CURIEUX (intéressé en toutes choses, explorateur)<br>CLÉMENT (désireux de pardonner aux autres)<br>ORIENTÉ VERS LE SUCCÈS (objectif : réussir)<br>PROPRE (net, soigné)<br>ÊTRE BON AVEC SOI-MÊME (faire des choses agréables)<br><br>Selon vous, parmi cette seconde liste, quelle est la valeur la plus importante ? Donnez un exemple de situation personnelle où vous avez appliqué cette valeur."
              },
              {
                id: "field3",
                text:
                  "Selon vous, parmi cette seconde liste, quelle est la valeur la moins importante ? Donnez un exemple de situation personnelle où vous n’avez pas appliqué cette valeur."
              }
            ]
          },
          {
            name: "likert3-3",
            type: "likert",
            topic: "Mes besoins",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "histogram",
              legend: true,
              interpretation:
                "Ce test vous permet de voir comment vous hiérarchisez vos besoin. Même si tous ces besoins sont importants, chaque individu à des besoins qu'il considère comme plus importants que d'autres.",
              multiColor: false
            },
            wording:
              "Lisez avec attention chacun des énoncés et indiquez à quel ce besoin est important pour vous ou non. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
            drivers: {
              driver1: "Subsistance",
              driver2: "Protection",
              driver3: "Participation",
              driver4: "Oisiveté",
              driver5: "Affection",
              driver6: "Compréhension",
              driver7: "Créativité",
              driver8: "Identité",
              driver9: "Liberté"
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
                driver: "driver2"
              },
              {
                text:
                  "A quel point le besoin «Participation » est-t-il important pour vous ?",
                id: "question2",
                driver: "driver3"
              },
              {
                text:
                  "A quel point le besoin « Oisiveté» est-t-il important pour vous ?",
                id: "question3",
                driver: "driver4"
              },
              {
                text:
                  "A quel point le besoin « Affection » est-t-il important pour vous ?",
                id: "question4",
                driver: "driver5"
              },
              {
                text:
                  "A quel point le besoin « Compréhension » est-t-il important pour vous ?",
                id: "question5",
                driver: "driver6"
              },
              {
                text:
                  "A quel point le besoin « Créativité » est-t-il important pour vous ?",
                id: "question6",
                driver: "driver7"
              },
              {
                text:
                  "A quel point le besoin « Identité » est-t-il important pour vous ?",
                id: "question7",
                driver: "driver8"
              },
              {
                text:
                  "A quel point le besoin « Liberté » est-t-il important pour vous ?",
                id: "question8",
                driver: "driver9"
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
            button: "ENREGISTRER MA REPONSE",
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
            topic: "Mes croyances",
            additionalText:
              "( Le bloc 'Mes Croyances' est à remplir lors d'une activité en présentiel. Ne remplissez pas ces champs si vous êtes à distance )",
            button: "ENREGISTRER MA REPONSE",
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
            topic: "Mes émotions",
            button: "ENREGISTRER MA REPONSE",
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
            topic: "Synthèse",
            button: "ENREGISTRER MA REPONSE",
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
        topic: "Mon profil émotionnel",
        wording:
          "Lisez avec attention chacun des énoncés et indiquez à quelle fréquence cet énoncé est vrai pour vous. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
        tests: [
          {
            type: "true-or-false",
            topic: "Résilience",
            name: "trueorfalse4-1",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre résilience. Si vous avez un score en dessous de 30, vous êtes très résilient. En revanche si vous avez un score supérieur à 70, vous mettez du temps à récupérer."
            },
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
                  "Si j'essaye un nouveau restaurant où le repas est infect et le service détestable, cela gâche toute ma soirée.",
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
                  "Si je rencontre un homme/une femme formidable avec qui j'ai très envie de sortir, une réponse négative me met en général de mauvaise humeur pendant plusieurs heures, ou même plusieurs jours.",
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
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre perspective. Si vous avez un score supérieur à 70, vous êtes quelqu'un de très positif. En revanche si vous avez un score inférieur à 30, vous êtes quelqu'un de plutôt négatif."
            },
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
                  "Quand j'évalue un collègue, je me focalise sur les détails sur lesquels il doit s'améliorer, plutôt que sur sa performance globalement positive.",
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
                  "Quand je suis invité(e) à une fête et que je me sens bien au départ, ce sentiment positif a tendance à durer toute la soirée.",
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
                  "Quand je me réveille le matin, je pense à une activité agréable que j'ai prévue, et cela me met de bonne humeur pour toute la journée.",
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
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre intuition sociale. Si vous avez un score supérieur à 80, vous êtes socialement intuitif. En revanche si vous avez un score inférieur à 30, vous n'êtes pas très socialement intuitif."
            },
            wording: "",
            questions: [
              {
                id: "question0",
                text:
                  "Quand je parle à des gens, je remarque souvent de subtils indices sociaux concernant leurs émotions -la gêne ou la colère, par exemple- avant qu'ils ne prennent eux-mêmes.",
                true: 1,
                false: 0
              },
              {
                id: "question1",
                text:
                  "Je me surprends, souvent à noter les expressions faciales ct le langage du corps.",
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
                  "Je suis souvent surpris(e) quand mon interlocuteur est énervé ou contrarié par ce que j'ai dit, sans raison apparente.",
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
                  "Je suis mal à l'aise quand quelqu'un que je connais à peine me regarde droit dans les yeux pendant une conversation.",
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
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre conscience de soi. Si vous avez un score supérieur à 80, vous avez une bonne conscience de vous même. En revanche si vous avez un score inférieur à 30, vous êtes opaque à vous même."
            },
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
                  "En général, je sais de façon certaine ce que je ressens et je peux traduire mes émotions en mots.",
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
                  "Je crois que j'habite bien mon corps et je m'y sens chez moi, à l'aise.",
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
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre sensibilité au contexte. Si vous avez un score supérieur à 80, vous êtes très connectés à votre contexte. En revanche si vous avez un score inférieur à 30, vous êtes plutôt déconnecté."
            },
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
                  "Si je reste immobile ne serait-ce que quelques instants, un flux de pensées me vient à l'esprit et je me mets à suivre plusieurs fils, souvent sans savoir comment chacun a commencé.",
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
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre attention. Si vous avez un score supérieur à 80, vous avez une bonne capacité d'attention. En revanche si vous avez un score inférieur à 30, vous vous déconcentrez facilement."
            },
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
                  "Je me surprends souvent à me censurer parce que je sens que ce que j'allais dire aurait été malvenu étant donné la situation (par exemple, avant de répondre à la question: «Mon chéri, tu me trouves grosse dans ce pantalon ? »).",
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
                  "Mes proches me disent que je me conduis toujours très bien avec les inconnus et dans les situations peu familières.",
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
            name: "likert4-7",
            type: "likert",
            topic: "Testez votre intelligence émotionnelle",
            wording:
              "Lisez avec attention chacun des énoncés et indiquez à quelle fréquence cet énoncé est vrai pour vous. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            result: {
              type: "stackedBarChart",
              legend: true,
              interpretation:
                "Ce test mesure votre intelligence émotionnelle. L'intelligence émotionnelle est la capacité de reconnaître, comprendre et maîtriser vos propres émotions, et de composer avec celle des autres. Plus votre score est élevé (proche de 120), meilleures sont vos aptitudes à l'intelligence émotionnelle."
            },
            drivers: {
              driver1: "Score"
            },
            questions: [
              {
                text:
                  "Je sens que la colère monte rapidement lorsque l’on m’attaque verbalement.",
                id: "question0",
                driver: "driver1"
              },
              {
                text:
                  "J’ai beaucoup de difficulté à recevoir les critiques, même constructives, qui viennent des autres.",
                id: "question1",
                driver: "driver1"
              },
              {
                text:
                  "Je panique lorsque je dois faire face à un conflit interpersonnel.",
                id: "question2",
                driver: "driver1"
              },
              {
                text:
                  "Quand j’ai un problème professionnel ou personnel, je ne peux penser à rien d’autre.",
                id: "question3",
                driver: "driver1"
              },
              {
                text:
                  "J’ai tendance à ruminer les difficultés que j’ai vécues dans le passé.",
                id: "question4",
                driver: "driver1"
              },
              {
                text:
                  "Je ressens parfois de l’angoisse sans savoir véritablement pourquoi.",
                id: "question5",
                driver: "driver1"
              },
              {
                text:
                  "J’ai de la difficulté à nommer plusieurs émotions, surtout lorsque je les vis.",
                id: "question6",
                driver: "driver1"
              },
              {
                text:
                  "Je trouve difficile les occasions où je dois exprimer mes émotions (ex.: de l’affection).",
                id: "question7",
                driver: "driver1"
              },
              {
                text:
                  "Peu importe ce que j’accomplis, j’ai toujours l’impression que j’aurais pu faire plus.",
                id: "question8",
                driver: "driver1"
              },
              {
                text:
                  "Je fais de mon mieux surtout lorsqu’il y a quelqu’un pour voir les résultats.",
                id: "question9",
                driver: "driver1"
              },
              {
                text:
                  "Je fais habituellement tout ce que je peux pour me retenir de pleurer en public.",
                id: "question10",
                driver: "driver1"
              },
              {
                text:
                  "Lorsque les autres vivent des difficultés, je ne sais pas quoi leur dire.",
                id: "question11",
                driver: "driver1"
              },
              {
                text:
                  "Quand j’échoue quelque chose, je me tiens un discours intérieur autodénigrant (ex.: « Je ne réussirai jamais. »)",
                id: "question12",
                driver: "driver1"
              },
              {
                text:
                  "Je trouve qu’il y a plusieurs choses qui clochent en moi et j’ai peur du jugement des autres.",
                id: "question13",
                driver: "driver1"
              },
              {
                text:
                  "Selon moi, il est préférable de rester neutre et détaché envers les autres tant que je ne les connais pas suffisamment.",
                id: "question14",
                driver: "driver1"
              },
              {
                text:
                  "Lorsqu’une personne me partage ses difficultés, j’ai tendance à vouloir l’aider à régler ses problèmes plutôt que de seulement l’écouter.",
                id: "question15",
                driver: "driver1"
              },
              {
                text:
                  "J’ai souvent de la difficulté à comprendre le langage non verbal des autres.",
                id: "question16",
                driver: "driver1"
              },
              {
                text:
                  "J’ai besoin que les autres m’encouragent pour rester motivé(e).",
                id: "question17",
                driver: "driver1"
              },
              {
                text:
                  "Je réagis très fortement à la suite de problèmes mineurs.",
                id: "question18",
                driver: "driver1"
              },
              {
                text:
                  "Les obstacles qui se dressent sur ma route m’empêchent souvent de réaliser mes objectifs.",
                id: "question19",
                driver: "driver1"
              },
              {
                text:
                  "Je ne suis pas satisfait(e) de mon travail tant qu’une autre personne ne m’a pas félicité(e).",
                id: "question20",
                driver: "driver1"
              },
              {
                text:
                  "Je me sens coupable à propos des choses que je ne fais pas parfaitement même lorsque je fais de mon mieux.",
                id: "question21",
                driver: "driver1"
              },
              {
                text: "Je ressens souvent une bonne dose d’anxiété.",
                id: "question22",
                driver: "driver1"
              },
              {
                text:
                  "Lorsque j’ai un problème avec une personne, je vis longtemps de la rancune envers elle.",
                id: "question23",
                driver: "driver1"
              },
              {
                text:
                  "J’ai de la difficulté à accepter les choses que je ne peux pas changer.",
                id: "question24",
                driver: "driver1"
              },
              {
                text:
                  "Les personnes qui expriment ouvertement leurs émotions me font sentir mal à l’aise.",
                id: "question25",
                driver: "driver1"
              },
              {
                text: "J’ai me sens plus souvent déprimé(e) qu’heureux(se).",
                id: "question26",
                driver: "driver1"
              },
              {
                text:
                  "Lorsque j’ai un problème avec une personne, je vis longtemps de la rancune envers elle.",
                id: "question27",
                driver: "driver1"
              },
              {
                text:
                  "J’ai de la difficulté à accepter les choses que je ne peux pas changer.",
                id: "question28",
                driver: "driver1"
              },
              {
                text:
                  "J’ai l’impression que mes émotions négatives (tristesse, colère, etc.) sont impossibles à contrôler.",
                id: "question29",
                driver: "driver1"
              }
            ],
            answers: [
              { name: "Souvent", value: 1 },
              { name: "Parfois", value: 2 },
              { name: "De temps en temps", value: 3 },
              { name: "Rarement", value: 4 }
            ]
          }
        ]
      },
      {
        name: "Mon comportement",
        topic: "Mon comportement",
        tests: [
          {
            type: "free-field",
            name: "freeField5-1",
            topic: "Gestion des conflits",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text: "Etes-vous à l’aise avec les conflits ?"
              },
              {
                id: "field1",
                text:
                  "Selon vous quel est votre mode de gestion des conflits ? Donnez un exemple de situation où vous avez utilisé ce mode de gestion."
              },
              {
                id: "field2",
                text: "De quoi avez-vous peur dans les conflits ?"
              },
              {
                id: "field3",
                text: "Quelles sont vos ressources en cas de conflit ?"
              },
              {
                id: "field4",
                text:
                  "Quels sont vos mécanismes de défenses privilégiés ? Donner des exemples de situation où vous avez mis en œuvre ces mécanismes"
              }
            ]
          },
          {
            name: "likert5-2",
            type: "likert",
            result: {
              type: "histogram",
              legend: true,
              interpretation:
                "Ce test vous indique l'importance des différents modes de gestions de conflits dans votre comportement. Le mode ayant le plus grand score est votre mode de gestion privilégié. Il est possible que vous utilisiez plusieurs modes selon le contexte."
            },
            topic: "Mon mode de gestion des conflits",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            wording:
              "Réfléchissez à votre façon d'agir en situation de conflit, c'est à dire lorsqu'une ou plusieurs personnes vont à l'encontre de ce que vous désirez. Pour chacune des affirmations ci-dessous, inscrivez dans l'espace prévu à cette fin le chiffre qui correspond le mieux à la probabilité que vous adoptiez la réaction mentionnée, dans une situation de conflit.",
            drivers: {
              driver1: "Compromis",
              driver2: "Evitement",
              driver3: "Accommodation",
              driver4: "Affrontement",
              driver5: "Résolution de problème"
            },
            questions: [
              {
                text:
                  "Je me montre généralement ferme dans la poursuite de mes objectifs",
                id: "question0",
                driver: "driver4"
              },
              {
                text: "J'essaie d'imposer mon point de vue.",
                id: "question1",
                driver: "driver4"
              },
              {
                text: "Je suis prêt à faire des concessions.",
                id: "question2",
                driver: "driver1"
              },
              {
                text:
                  "J'estime qu'il ne vaut pas la peine de s'inquiéter des différences d'opinions.",
                id: "question3",
                driver: "driver2"
              },
              {
                text:
                  "J'essaie de parvenir à une position intermédiaire entre la mienne et celle de ma vis à vis.",
                id: "question4",
                driver: "driver1"
              },
              {
                text:
                  "Lorsque j'entame une négociation, j'essaie de tenir compte des désirs de l'autre partie.",
                id: "question5",
                driver: "driver3"
              },
              {
                text:
                  "J'essaie de démontrer la logique et les avantages de mes points de vue.",
                id: "question6",
                driver: "driver4"
              },
              {
                text:
                  "Je préfère toujours discuter franchement et ouvertement d'un problème.",
                id: "question7",
                driver: "driver5"
              },
              {
                text:
                  "J'essaie d'aboutir à une combinaison équitable de gains et de pertes pour les deux parties.",
                id: "question8",
                driver: "driver1"
              },
              {
                text:
                  "Je tente de résoudre immédiatement les divergences qui apparaissent.",
                id: "question9",
                driver: "driver5"
              },
              {
                text:
                  "J'essaie d'éviter de me retrouver dans une situation désagréable.",
                id: "question10",
                driver: "driver2"
              },
              {
                text:
                  "J'essaie d'apaiser les sentiments de mon interlocuteur pour préserver nos bonnes relations.",
                id: "question11",
                driver: "driver3"
              },
              {
                text:
                  "Je m'efforce de mettre rapidement en lumière toutes les préoccupations et inquiétudes.",
                id: "question12",
                driver: "driver5"
              },
              {
                text:
                  "J'évite parfois d'avancer des opinions susceptibles de créer des controverses.",
                id: "question13",
                driver: "driver2"
              },
              {
                text: "J'essaie de ne pas froisser autrui.",
                id: "question14",
                driver: "driver3"
              }
            ],
            answers: [
              { name: "Très peu probable", value: "1" },
              { name: "Peu probable", value: "2" },
              { name: "Probable", value: "3" },
              { name: "Très probable", value: "4" }
            ]
          },
          {
            type: "free-field",
            topic: "Gestion du stress",
            name: "freeField5-3",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text: "Lister mes sources de stress :"
              },
              {
                id: "field1",
                text:
                  "Lister mes types de réactions à chaque source de stress :"
              }
            ]
          }
        ]
      },
      {
        name: "Mon style de leadership",
        topic: "Mon style de leadership",
        tests: [
          {
            type: "free-field",
            name: "freeField6-1",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text: "Quelles sont vos attentes par rapport à la hiérarchie ?"
              },
              {
                id: "field1",
                text:
                  "Quel type de management vous attendez de la part d’un manager ?"
              },
              {
                id: "field2",
                text:
                  "Quel type de management vous mettriez en œuvre si vous étiez manager ?"
              }
            ]
          },
          {
            name: "likert6-2",
            type: "likert",
            result: {
              type: "xyChart",
              score: [
                { text: "Style 'intermédiaire'", maxX: 3, maxY: 3 },
                { text: "Style 'laisser faire'", maxX: 3, maxY: 3 },
                { text: "Style 'social'", maxX: 3, maxY: 6 },
                { text: "Style 'centré sur la tâche'", maxX: 6, maxY: 3 },
                { text: "Style intégrateur'", maxX: 6, maxY: 6 }
              ],
              interpretation:
                "Ce test vous permet de connaître votre style de leadership privilégié, c'est à dire votre manière naturelle d'aborder le management."
            },
            topic:
              "Déterminer mon style de leadership <-- Remarque dev. : 'le rendu sera intégré dans les prochains jours' -->",
            button1: "VISUALISEZ VOS RESULTATS",
            button2: "ACTUALISEZ VOS RESULTATS",
            wording:
              "Lisez avec attention chacun des énoncés et indiquez à quelle fréquence cet énoncé est vrai pour vous. Essayez de répondre le plus spontanément possible. Ne répondez pas ce que vous croyez devoir répondre pour avoir de bons résultats à ce test, il n’y a pas de bonnes ou de mauvaises réponses, ni de bons ou de mauvais résultats.",
            drivers: {
              driver1: "x",
              driver2: "y"
            },
            questions: [
              {
                text:
                  "J’encourage mon équipe à participer aux décisions et j’essaye de mettre en pratique leurs idées et suggestions.",
                id: "question0",
                driver: "driver2"
              },
              {
                text:
                  "Rien n’est plus important que d’accomplir une tâche ou d’atteindre un objectif.",
                id: "question1",
                driver: "driver1"
              },
              {
                text:
                  "Je surveille le planning pour assurer que la réalisation des projets se fait dans les limites du calendrier.",
                id: "question2",
                driver: "driver1"
              },
              {
                text:
                  "J’aime bien encadrer les gens et leur enseigner de nouvelles procédures et de nouvelles tâches.",
                id: "question3",
                driver: "driver2"
              },
              {
                text: "Plus la tâche est compliquée et plus elle me passionne.",
                id: "question4",
                driver: "driver1"
              },
              {
                text:
                  "J’encourage mes employés à être créatifs dans leur travail.",
                id: "question5",
                driver: "driver2"
              },
              {
                text:
                  "Lorsque je supervise l’accomplissement d’une tâche complexe, j’en vérifie chaque détail.",
                id: "question6",
                driver: "driver1"
              },
              {
                text:
                  "Il m’est aisé de mener de front plusieurs tâches complexes.",
                id: "question7",
                driver: "driver1"
              },
              {
                text:
                  "J’aime lire articles, livres et revues spécialisées sur la formation, le leadership et la psychologie, et ensuite appliquer mes connaissances nouvellement acquises",
                id: "question8",
                driver: "driver2"
              },
              {
                text:
                  "Lorsque je rectifie une erreur, je me soucie de l’avenir de mes relations avec mes collègues.",
                id: "question9",
                driver: "driver2"
              },
              {
                text: "Je sais gérer mon temps de manière très efficace.",
                id: "question10",
                driver: "driver1"
              },
              {
                text:
                  "Je prends plaisir à expliquer à mes employés une tâche ou un projet dans ses moindres détails.",
                id: "question11",
                driver: "driver2"
              },
              {
                text:
                  "Il m’est très facile de diviser un projet important en plusieurs tâches aisément gérables.",
                id: "question12",
                driver: "driver1"
              },
              {
                text:
                  "Rien n’est plus important que de s’entourer d’une bonne équipe.",
                id: "question13",
                driver: "driver1"
              },
              {
                text: "J’aime analyser les problèmes.",
                id: "question14",
                driver: "driver1"
              },
              {
                text:
                  "Je respecte l’expertise et la responsabilité des autres.",
                id: "question15",
                driver: "driver2"
              },
              {
                text:
                  "Conseiller mes employés sur la meilleure façon d’améliorer leur résultat et leur attitude n’a jamais été un problème pour moi.",
                id: "question16",
                driver: "driver2"
              },
              {
                text:
                  "J’aime lire des articles, des livres et des revues spécialisées qui me permettent d’apprendre de nouvelles procédures que je peux ensuite mettre en pratique.",
                id: "question17",
                driver: "driver1"
              }
            ],
            answers: [
              { name: "Jamais", value: "1" },
              { name: "Rarement", value: "2" },
              { name: "Parfois", value: "3" },
              { name: "Souvent", value: "4" },
              { name: "Tres souvent", value: "5" },
              { name: "Toujours", value: "6" }
            ]
          },
          {
            type: "free-field",
            name: "freeField6-3",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text: "Êtes-vous surpris par les résultats ?"
              },
              {
                id: "field1",
                text:
                  "Selon vous, quels sont les points forts de votre style de management ?"
              },
              {
                id: "field2",
                text:
                  "Selon vous, à quel type de situation votre style de management est-il adapté ?"
              },
              {
                id: "field3",
                text:
                  "Selon vous, à quel type de collaborateur votre style de management est-il adapté ?"
              }
            ]
          }
        ]
      },
      {
        name: "Mes atouts",
        topic: "Mes atouts",
        wording: "Répondez librement aux questions suivantes :",
        tests: [
          {
            type: "free-field",
            name: "freeField7-3",
            topic: "Mes atouts",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Quels sont les points de progrès que vous avez identifiés à mettre en œuvre dans votre communication managériale au quotidien ?"
              },
              {
                id: "field1",
                text:
                  "Quels sont les outils que vous avez retenus et que vous souhaiteriez mettre en œuvre?"
              },
              {
                id: "field2",
                text:
                  "Quelles compétences managériales souhaitez-vous acquérir ? "
              },

              {
                id: "field3",
                text:
                  "Quels sont les atouts dont vous avez pris conscience et sur lesquels vous pouvez vous appuyer ?"
              }
            ]
          },
          {
            type: "free-field",
            name: "freeField7-4",
            topic: "Mon plan d'action",
            button: "ENREGISTRER MA REPONSE",
            questions: [
              {
                id: "field0",
                text:
                  "Définissez un plan d’action à mettre en œuvre pour la suite en entreprise sur le modèle QQOQCCP (Qui ? Quoi ? Ou ? Quand ? Comment ? Combien ? Pourquoi ? )"
              }
            ]
          }
        ]
      },
      {
        name: "Mon Bloc-Notes",
        topic: "Mon Bloc-Notes",
        wording:
          "Cet espace vous est dédié, vous pouvez vous y exprimer librement.",
        tests: [
          {
            type: "free-field",
            name: "freeField8-1",
            button: "ENREGISTRER MA REPONSE",
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
