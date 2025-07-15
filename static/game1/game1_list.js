const wordList = [
    {
        word: "investment",
        hint: "Putting money into something for profit."
    },
    {
        word: "dilemma",
        hint: " A difficult choice between undesirable options."
    },
    {
        word: "crime",
        hint: "An illegal act or offense that is punishable by law."
    },
    {
        word: "electronic",
        hint: "Relating to devices or activities that involve the use of computers or new technologies."
    },
    {
        word: "offence",
        hint: "Another term for a crime or illegal action."
    },
    {
        word: "spelling",
        hint: "The process of forming words with the correct arrangement of letters."
    },
    {
        word: "criminal",
        hint: "A person who commits a crime."
    },
    {
        word: "deficiency",
        hint: "A lack or shortage of something necessary, especially in the body."
    },
    {
        word: "estimate",
        hint: "To make an approximate judgment or calculation about a value, number, or extent."
    },
    {
        word: "estimate",
        hint: "To make an approximate judgment or calculation about a value, number, or extent."
    },
    {
        word: "significant",
        hint: "Important or noteworthy; having meaning or influence."
    },
    {
        word: "exposure",
        hint: "The state of being in contact with something, such as sunlight, which can have an effect on you."
    },
    {
        word: "tremendous",
        hint: "Very great in amount, scale, or intensity; extremely good or impressive."
    },
    {
        word: "momentum",
        hint: "The driving force gained by a moving object, or sustained progress in a particular activity or business."
    },
    {
        word: "consistent",
        hint: "Steady, regular, and reliable without any major changes."
    },
    {
        word: "data",
        hint: " Facts or figures collected for analysis or reference."
    },
    {
        word: "prediction",
        hint: "A statement about what will happen in the future, often based on evidence or reasoning."
    },
    {
        word: "investment",
        hint: "The action or process of putting money into something to earn a profit."
    },
    {
        word: "interest",
        hint: "The cost of borrowing money, often expressed as a percentage."
    },
    {
        word: "economy",
        hint: "The system of production, distribution, and consumption of goods and services in a particular area."
    },
    {
        word: "atmosphere",
        hint: "The layer of gases surrounding the Earth, which traps heat and affects weather patterns."
    },
    {
        word: "pollution",
        hint: "The introduction of harmful substances into the environment, often as a result of human activities."
    },
    {
        word: "nature",
        hint: "The physical world, including plants, animals, and landscapes, often affected by environmental changes."
    },
    {
        word: "pattern",
        hint: " A repeated or consistent way in which something happens."
    },
    {
        word: "gas",
        hint: " A substance in the air, like oxygen or carbon dioxide."
    },
    {
        word: "greenhouse",
        hint: "A structure made of glass for growing plants, also refers to gases that trap heat."
    },
    {
        word: "carbon",
        hint: "A chemical element with the symbol C, found in coal and diamonds."
    },
    {
        word: "balance",
        hint: "A state where different elements are in the correct proportions."
    },
    {
        word: "fossil",
        hint: "Remains of ancient organisms, also relates to fuels like coal and oil."
    },
    {
        word: "measure",
        hint: "To determine the size, amount, or degree of something."
    },
    {
        word: "variation",
        hint: "A change or difference in condition or amount."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "periodic",
        hint: "Relating to a repeated cycle, also relates to a table of elements."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];