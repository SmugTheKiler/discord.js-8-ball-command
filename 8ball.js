  let args = message.content.trim().split(/ +/g) // define args
 // adapt it to your command handler, or paste it something like this in your index.
 
 const prefix = '!'; // Enter your prefix
  if (args[0].toLowerCase() === prefix + "8ball") { // command triger
  
      if (!args[1]) return message.channel.send("Hey, **please ask something.** :x:") // check if the user putted any args after the message. If he didn't, it will reply with this
      
      // now make your answers
      let answers = [
      "Idk...",
      "Not sure.",
      "Obviusly!",
      "duh",
      "yep",
      "no.",
      "There are chances.." // and so go one with it if you want to.
      ]
      
      
      let question = args.slice(1).join(" ")  // tell the computer that the args that we checked for before is called "question"
      
      let embed = new Discord.MessageEmbed() // create a new Embed message
      //  ^^^^^ name your embed
      
          .setAuthor(message.author.tag, message.author.displayAvatarURL) // Display the authors avatar, and his or hers username.
          .setColor("RANDOM") // set the color
          .addField("Question:", question) // Tell the question again
          .addField("Response:", answers[Math.floor(Math.random() * answers.length)]) // Tell your random answer.
          
      message.channel.send(embed) // send the embed in the channel the command was ran in.
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // If you renmaed your embed, 
    // replace embed with its new name.
  }
