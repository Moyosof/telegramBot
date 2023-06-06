// const TelegramBot = require('node-telegram-bot-api');

// // Create a new TelegramBot instance with your Telegram Bot token
// const bot = new TelegramBot('6251278976:AAGqdN0zGKGltIO_W6jDYno6xaAXZ9oJKaU', { polling: true });

// // Store user states
// const userStates = new Map();

// // Welcome message with image and YouTube link button
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   const userId = msg.from.id;

//   // Store user state with initial step
//   userStates.set(userId, { step: 0 });

//   // Send a welcome message with an image and YouTube link button
//   bot.sendPhoto(chatId, 'welcome.jpg', {
//     caption: 'Welcome to the bot!\nPlease click the button below to subscribe to our YouTube channel.',
//     reply_markup: {
//       inline_keyboard: [
//         [
//           {
//             text: 'Subscribe to YouTube',
//             url: 'https://www.youtube.com/@CodeVilleOfficialchannel1.0'
//           }
//         ]
//       ]
//     }
//   });
// });

// // Handle incoming messages
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const userId = msg.from.id;
//   const userState = userStates.get(userId);

//   if (userState && userState.step === 0) {
//     // Step 1: Ask user to enter their YouTube username
//     bot.sendMessage(chatId, 'Please enter your YouTube username:');
//     userState.step = 1;
//   } else if (userState && userState.step === 1) {
//     // Step 2: Handle YouTube username input
//     const youtubeUsername = msg.text;

//     // Validate YouTube username
//     if (youtubeUsername) {
//       // Store YouTube username in user state
//       userState.youtubeUsername = youtubeUsername;
//       userState.step = 2;

//       // Step 3: Send a message with the Telegram group link
//       bot.sendMessage(chatId, 'Thank you for providing your YouTube username!\n\nYou can now join our Telegram group: https://t.me/+ZRnyPQ92JyMzNTVk');
//     } else {
//       // Invalid input, ask again
//       bot.sendMessage(chatId, 'Invalid YouTube username. Please enter a valid username:');
//     }
//   } else {
//     // Invalid command or step
//     bot.sendMessage(chatId, 'Invalid command or step. Please follow the instructions.');
//   }
// });

const TelegramBot = require('node-telegram-bot-api');

// Create a new TeleBot instance with your Telegram Bot token
const bot = new TelegramBot('6251278976:AAGqdN0zGKGltIO_W6jDYno6xaAXZ9oJKaU', { polling: true });

// Store user states
const userStates = new Map();

// Welcome message with image and YouTube link button
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;

  // Store user state with initial step
  userStates.set(userId, { step: 0 });

  // Send a welcome message with an image and YouTube link button
  bot.sendPhoto(chatId, 'welcome.jpg', {
    caption: 'Welcome to the Code Ville Academy!\nPlease click the button below to subscribe to our YouTube channel. Please make sure to click /codevile_group after you are done with the first step',
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Subscribe to YouTube',
            url: 'https://www.youtube.com/@CodeVilleOfficialchannel1.0'
          }
        ],
      ]
    }
  });
});



// Handle incoming messages
bot.onText(/\/codevile_group/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const userState = userStates.get(userId);

  if (userState && userState.step === 0) {
    // Step 1: Ask user to enter their YouTube username
    bot.sendMessage(chatId, 'CodeVille is the best Place for you to be. You have taken the fist step of your tech journey');
    //bot.sendMessage(chatId, 'Please enter your Telegram username:');
    userState.step = 1;
  } else if (userState && userState.step === 1) {
    // Step 2: Handle YouTube username input
    const youtubeUsername = msg.text;

    // Validate YouTube username
    if (youtubeUsername) {
      // Store YouTube username in user state
      userState.youtubeUsername = youtubeUsername;
      userState.step = 2;

      // Step 3: Send a message with the Telegram group link
      bot.sendMessage(chatId, 'CodeVille is the best Place for you to be. You have taken the fist step of your tech journey\n \nYou can now join our Telegram group: https://t.me/+ZRnyPQ92JyMzNTVk' );
    } else {
      // Invalid input, ask again
      bot.sendMessage(chatId, 'Invalid YouTube username. Please enter a valid username:');
    }
  } else {
    // Invalid command or step
    bot.sendMessage(chatId, 'Invalid command or step. Please follow the instructions.');
  }
  
});

// YouTube subscription command
bot.onText(/\/subscribe/, (msg) => {
  const userId = msg.from.id;
  const state = userStates.get(userId);

  if (state.step === 0) {
    bot.sendMessage(userId, 'Please subscribe to our YouTube channel.');
  } else if (state.step === 1) {
    bot.sendMessage(userId, 'You have already subscribed to our YouTube channel.');
  } else if (state.step === 2) {
    bot.sendMessage(userId, 'You have already entered your YouTube username. Use /join_group to join the Telegram group.');
  } else {
    bot.sendMessage(userId, 'You have successfully completed all the steps!');
    state.step = 1;
    bot.sendMessage(userId, 'Please enter your YouTube username to confirm:');
  }
});

// Join group command
bot.onText(/\/join_group/, (msg) => {
  const userId = msg.from.id;
  const state = userStates.get(userId);

  if (state.step === 0) {
    bot.sendMessage(userId, 'You need to subscribe to our YouTube channel first. Use /subscribe.');
  } else if (state.step === 1) {
    bot.sendMessage(userId, 'You have already entered your YouTube username. Use /subscribe to confirm again.');
  } else if (state.step === 2) {
    bot.sendMessage(userId, 'You have already joined the Telegram group.');
  } else {
    bot.sendMessage(userId, 'You have successfully completed all the steps!');
    state.step = 2;
    bot.sendMessage(userId, 'You can now join our Telegram group: https://t.me/+ZRnyPQ92JyMzNTVk');
  }
});

// Start the bot

bot.onText(/\/codevile_group/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const userState = userStates.get(userId);
  
    if (userState && userState.step === 0) {
      // Step 1: Ask user to enter their YouTube username
      bot.sendMessage(chatId, 'Please enter your YouTube username:');
      //bot.sendMessage(chatId, 'Please enter your Telegram username:');
      userState.step = 1;
    } else if (userState && userState.step === 1) {
      // Step 2: Handle YouTube username input
      const youtubeUsername = msg.text;
  
      // Validate YouTube username
      if (youtubeUsername) {
        // Store YouTube username in user state
        userState.youtubeUsername = youtubeUsername;
        userState.step = 2;
  
        // Step 3: Send a message with the Telegram group link
        bot.sendMessage(chatId, 'Thank you for subscribing to our YouTube channel!\n\nYou can now join our Telegram group: https://t.me/+ZRnyPQ92JyMzNTVk');
        userState.step = 3; // Advance to the next step
      } else {
        // Invalid input, ask again
        bot.sendMessage(chatId, 'Invalid YouTube username. Please enter a valid username:');
      }
    } else if (userState && userState.step === 3) {
      // Step 4: Handle joining the Telegram group
      bot.sendMessage(chatId, 'You have already completed all the steps. You can now join our Telegram group: https://t.me/+ZRnyPQ92JyMzNTVk');
    } else if (userState && userState.step === 4) {
      // Step 5: Handle referral link command
    const referralLink = 'https://telegram.me/${Gent007_bot}?start=${userId}';
    bot.sendMessage(chatId, `Here is your referral link: ${referralLink}`);
  } else {
    // Invalid command or step
    bot.sendMessage(chatId, 'Invalid command or step. Please follow the instructions.');
  }
});

// Referral link command
bot.onText(/\/referralLink/, (msg) => {
  const userId = msg.from.id;
  const state = userStates.get(userId);

  if (state.step === 0) {
    bot.sendMessage(userId, 'You need to complete the initial steps first.');
  } else if (state.step === 1 || state.step === 2) {
    bot.sendMessage(userId, 'Please complete all the previous steps before generating the referral link.');
  } else if (state.step === 3) {
    bot.sendMessage(userId, 'You can now generate your referral link with the /referral command.');
    state.step = 4; // Advance to the next step
  } else if (state.step === 4) {
    bot.sendMessage(userId, 'You have already generated your referral link. Use /referral again to get the link.');
  } else {
    bot.sendMessage(userId, 'You have already completed all the steps.');
  }
});
