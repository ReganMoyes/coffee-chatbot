/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

// FIRST LAYER OF CHATBOT WITH LEVELS

let rememberedName;
let level = 1;
let sleepDeprived = 1;
let popular = 1;
let misunderstood = 1;
let tinyButMighty = 1;
let bigKid = 1;
let dessert = 1;
let veteran = 1;
let keto = 1;
let under5ft = 1;
let partyAnimal = 1;
let isAffirmative;
let isNegative;
let isAffirmativeAnswer = ["yes", "yeah", "yep", "y", "ye", "yup"];
let isNegativeAnswer = ["no", "na", "nah", "n", "nup"];

const getBotReply = (msg) => {
  //below is og code
  if (rememberedName === undefined) {
    rememberedName = msg;
    return `Hey ${msg}! So you want to find your coffee match, eh. How about we start with this, do you like milk in your coffee?`;
  }
  let msgLowerCase = msg.toLowerCase();
  if (isAffirmativeAnswer.includes(msgLowerCase)) {
    isAffirmative = true;
  } else {
    isAffirmative = false;
  }
  if (isNegativeAnswer.includes(msgLowerCase)) {
    isNegative = true;
  } else {
    isNegative = false;
  }
  if (level === 1 && isAffirmative) {
    level = 2;
    return "Are you a sleep deprived parent?";
  }
  if (level === 2) {
    sleepDeprived = 1;
    if (isAffirmative) {
      return `Awww ${rememberedName}, you really do look it. And because of that, you're a Flat White. Did you know the Flat White originated in NZ? It'ss a fave amongst Kiwi parents to get them through those long days raising the next generation.`;
    }
    if (isNegative) {
      level = 3;
      return "Are you popular with a multi-layered personality and at times a little bit extra?";
    }
  }
  if (level === 3) {
    popular = 1;
    if (isAffirmative) {
      return `You're a Cappuccino. Much like yourself, ${rememberedName}, the Cappuccino is considered the most popular coffee. Did you know the Cappuccino is made up of three layers: the first being a shot of espresso, then a shot of steamed milk, and followed by a layer of foamy froth. If you're feeling extra, it can be topped with a sprinkle of chocolate powder or cinammon. Sweet!`;
    }
    if (isNegative) {
      level = 4;
      return "Are you incredibly good looking yet often misunderstood?";
    }
  }
  if (level === 4) {
    misunderstood = 1;
    if (isAffirmative) {
      return "You're a Latte. Life is hard for you and the Latte. Although you're both the hottest of the coffees and quite popular, you're often mistaken for the more popular Flat White. I've said it before and I'll say it again, life is tough when you're hot. It's something I personally deal with on a daily basis.";
    }
    if (isNegative) {
      level = 5;
      return "Have you been described as tiny but mighty?";
    }
  }
  if (level === 5) {
    tinyButMighty = 1;
    if (isAffirmative) {
      return "You're a Macchiato. You and the humble Macchiato have a lot in common. You're both very strong but packaged a bit smaller than most. But that's what makes you so cute! Wouldn't like to get on your bad side though. Although you're small, you can really pack a punch!";
    }
    if (isNegative) {
      level = 6;
      return "Are you just a big kid in an adult body who's not ready for real world responsibilities and consequences?";
    }
  }
  if (level === 6) {
    bigKid = 1;
    if (isAffirmative) {
      return "You're a Mochaccino. Both you and the mocha have a strong case of Peter Pan syndrome:you never want to grow up. Because the mocha is really just a hot chocolate disguised as a coffee. The chocolatey goodness goes down a treat but the buzz and caffeination from the coffee forces you to deal with the real world.";
    }
    if (isNegative) {
      level = 7;
      return "Do you prefer dessert over dinner?";
    }
  }
  if (level === 7) {
    dessert = 1;
    if (isAffirmative) {
      return "You're an Affogato. You're two are a match made in heaven! Because an Affogato isn't a coffee at all, really, as they’re a shot of espresso poured over ice cream. Any chance to satisfy your sweet tooth.";
    }
    if (isNegative) {
      level = 8;
      return `Really, ${rememberedName}? None of the above relates to you in the slightest. Damn, you're cool. So cool you're an Iced Coffee. Squirt on some whipped cream and throw a cherry on top and let's get to know each other a bit better, you tall drink of coffee!`;
    }
  }
  if (level === 1 && isNegative) {
    level = 9;
    return "Are you an American World War 2 veteran?";
  }
  if (level === 9) {
    veteran = 1;
    if (isAffirmative) {
      return "You're an Americano. It has been said that American soldiers during WWII made this type of coffee to make their beverages last longer. It was then (apparently) adopted by American baristas after the war. Thank you for your service and enjoy getting acquainted with a taste you may rather forget.";
    }
    if (isNegative) {
      level = 10;
      return "Are you on the Keto diet?";
    }
  }
  if (level === 10) {
    keto = 1;
    if (isAffirmative) {
      return `Good on you, ${rememberedName}! You're a Long Black. About the only coffee you're allowed on the keto diet. Enjoy with some extra water or some cream if you're feeling extra. But don't enjoy all the yummy sweets and treats you're missing out on while on a dumb diet. More treats for me!`;
    }
    if (isNegative) {
      level = 11;
      return "Are you under 5ft tall?";
    }
  }
  if (level === 11) {
    under5ft = 1;
    if (isAffirmative) {
      return `You're an Espresso. A lil person like you ${rememberedName} needs a lil coffee. But just because you're tiny doesnt mean you dont pack a punch. And that's what you and Espresso have in common. I'll leave you two to get better aquatinted.`;
    }
    if (isNegative) {
      level = 12;
      return "Are you a little party animal with a penchant for cocktails?";
    }
  }
  if (level === 12) {
    partyAnimal = 1;
    if (isAffirmative) {
      return "You're an Espresso Martini. What do you and Kate Moss have in common? You're both looking for a drink that'll wake you up then fuck you up! The Espresso Martini is the perfect cocktail to prep for a night on the town. It's a great blend of espresso, Kahlua, syrup and vodka and usually garnished with coffee beans. A perfect snap to chuck up on the 'gram.";
    }
    if (isNegative) {
      level = 13;
      return `None of the above related to you, ${rememberedName}? Really? You're not into the fancy things are you? You're Instant Coffee. A cup of instant in the brown glass mugs from the marae. Kia ora to you for keeping it real. Ka pai!`;
    }
  }
  if (msg === "can I have a free coffee?") {
    return `${rememberedName}! Where are your manners? At least say please!`;
  }
  if (msg === "please") {
    return "Wow! You really thought you could come here, get all up in my quiz, and expect a free coffee just because you asked for it? If anyone deserves a freebie around here it's me! Get outta here.";
  }
  if (msg === "what's your favourite coffee?") {
    return `Frankly ${rememberedName}, I'm more of a tea drinker myself. Oops, we're a bit off track. Refresh the page to start the quiz again.`;
  }
  return "Mate, you're not making sense. Had one too many Irish Coffees have we? Refresh the page and let's give this another go.";
};

export { getBotReply };
