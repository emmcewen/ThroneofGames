// const { Game } = require ();

const gameseeds =
    [
        {
            title: "Minecraft Dungeons",
            price: 19.99,
            gameDescription: "Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe!",
        },

        {
            title: "Apex Legends",
            price: "Free",
            gameDescription: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.",
        },

        {
            title: "Lost Ark",
            price: "Free",
            gameDescription: "Embark on an odyssey for the Lost Ark in a vast, vibrant world: explore new lands, seek out lost treasures, and test yourself in thrilling action combat in this action-packed free-to-play RPG.",
        },

        {
            title: "Black Desert",
            price: 9.99,
            gameDescription: "Played by over 20 million Adventurers - Black Desert Online is an open-world, action MMORPG. Experience intense, action-packed combat, battle massive world bosses, fight alongside friends to siege and conquer castles, and train in professions such as fishing, trading, crafting, cooking, and more!",
        },

        {
            title: "Grand Theft Auto V",
            price: 14.99,
            gameDescription: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        },

        {
            title: "The Sims 4",
            price: 19.99,
            gameDescription: "Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes–and much more.",
        },

        {
            title: "Stardew Valley",
            price: 14.99,
            gameDescription: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
        },

        {
            title: "Assassin's Creed Odyssey",
            price: 11.99,
            gameDescription: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
        },

        {
            title: "Call of Duty: Modern Warfare II",
            price: 19.99,
            gameDescription: "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.",
        },

        {
            title: "Demon Slayer",
            price: 35.99,
            gameDescription: "Become the Blade that Destroys Demons!",
        },

        {
            title: "Fallout 3",
            price: 4.99,
            gameDescription: "Prepare for the Future™ With Fallout 3: Game of the Year Edition, experience the most acclaimed game of 2008 like never before. Create a character of your choosing and descend into an awe-inspiring, post-apocalyptic world where every minute is a fight for survival.",
        },

        {
            title: "Destiny 2",
            price: "Free",
            gameDescription: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.",
        },

        {
            title: "Tales of Arise",
            price: 23.99,
            gameDescription: "300 years of tyranny. A mysterious mask. Lost pain and memories. Wield the Blazing Sword and join a mysterious, untouchable girl to fight your oppressors. Experience a tale of liberation, featuring characters with next-gen graphical expressiveness!",
        },

        {
            title: "Beat Saber",
            price: 29.99,
            gameDescription: "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.",
            
        },

        {
            title: "EA Sports FIFA 23",
            price: 69.99,
            gameDescription: "FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, men’s and women’s FIFA World Cup™ coming during the season, women’s club teams, cross-play features*, and more.",
        },

        {
            title: "Madden NFL 23",
            price: 38.99,
            gameDescription: "Play your way into the history books. Control your impact with every decision in all-new ways. Call the shots in Franchise with free agency and trade logic updates, leave a legacy in Face of the Franchise: The League, and assemble the most powerful roster in all of Madden Ultimate Team™.",
        },

        {
            title: "Final Fantasy VII Remake Intergrade",
            price: 69.99,
            gameDescription: "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
        },

        {
            title: "Counter-Strike: Global Offensive",
            price: "Free",
            gameDescription: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).",
        },

        {
            title: "Dead by Daylight ",
            price: 19.99,
            gameDescription: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
        },

        {
            title: "Elden Ring",
            price: 59.99,
            gameDescription: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        },
    ]

    const seedGame = () => Game.bulkCreate(gameseeds, {
        individualHooks: true,
        returning: true,
    });

    module.exports = seedGame;