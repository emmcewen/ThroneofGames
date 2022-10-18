// const { GameDescription } = require ();

const gameDescriptionSeeds =
    [
        {
            title: "Minecraft Dungeons",
            price: 19.99,
            about: "Fight your way through an exciting action-adventure game, inspired by classic dungeon crawlers and set in the Minecraft universe! Brave the dungeons alone, or team up with friends! Up to four players can battle together through action-packed, treasure-stuffed, wildly varied levels – all in an epic quest to save the villagers and take down the evil Arch-Illager!",
            genre: "Action, Adventure, RPG",
            ESRB: "Everyone 10+"
        }, 
        {
            title: "Apex Legends",
            price: "Free",
            about: "Conquer with character in Apex Legends, a free-to-play* Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier. Master an ever-growing roster of diverse Legends, deep-tactical squad play, and bold, new innovations that go beyond the Battle Royale experience — all within a rugged world where anything goes. Welcome to the next evolution of Hero Shooter.",
            genre: "Action, Adventure",
            ESRB: "T for Teen"
        },
        {
            title: "Lost Ark",
            price: "Free",
            about: "Embark on an odyssey for the Lost Ark in a vast, vibrant world: explore new lands, seek out lost treasures, and test yourself in thrilling action combat. Define your fighting style with your class and advanced class, and customize your skills, weapons, and gear to bring your might to bear as you fight against hordes of enemies, colossal bosses, and dark forces seeking the power of the Ark in this action-packed free-to-play RPG.",
            genre: "Action, Adventure, Free to Play, Massively Multiplayer, RPG",
            ESRB: "M for Mature 17+"
        },
        {
            title: "Black Desert",
            price: 9.99,
            about: "Black Desert is a game that tests the limitations of MMORPG by implementing remastered graphics and audio. Enjoy exciting combat and siege,exploration, trading, fishing, training, alchemy, cooking, gathering, hunting, and more in the vast open world. Black Desert - A true MMORPG.",
            genre: "Action, Adventure, Massively Multiplayer, RPG, Simulation, Strategy",
            ESRB: "T for Teen"
        },
        {
            title: "Grand Theft Auto V",
            price: 14.99,
            about: "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.The game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support and extensive customization for mouse and keyboard controls. Additional options include a population density slider to control car and pedestrian traffic, as well as dual and triple monitor support, 3D compatibility, and plug-and-play controller support.",
            genre: "Action, Adventure",
            ESRB: "M for Mature"
        },
        {
            title: "The Sims 4",
            price: 19.99,
            about: "Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes and much more. Choose how Sims look, act and dress. Determine how they’ll live out each day. Design and build incredible homes for every family, then decorate with your favorite furnishings and décor. Travel to different neighborhoods where you can meet other Sims and learn about their lives. Discover beautiful locations with distinctive environments, and go on spontaneous adventures. Manage the ups and downs of Sims’ everyday lives, and see what happens when you play out realistic or fantastical scenarios. Tell your stories your way while developing relationships, pursuing careers and life aspirations and immersing yourself in an extraordinary game where the possibilities are endless.",
            genre: "Casual, Simulation",
            ESRB: "T for Teen"
        },
        {
            title: "Stardew Valley",
            price: 14.99,
            about: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won't be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town's most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
            genre: "Indie, RPG, Simulation",
            ESRB: "Everyone 10+"
        },
        {
            title: "Assassin's Creed Odyssey",
            price: 11.99,
            about: "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece. TRAVEL TO ANCIENT GREECE From lush vibrant forests to volcanic islands and bustling cities, start a journey of exploration and encounters in a war torn world shaped by gods and men. FORGE YOUR LEGEND Your decisions will impact how your odyssey unfolds. Play through multiple endings thanks to the new dialogue system and the choices you make. Customize your gear, ship, and special abilities to become a legend.FIGHT ON A NEW SCALEDemonstrate your warrior's abilities in large scale epic battles between Athens and Sparta featuring hundreds of soldiers, or ram and cleave your way through entire fleets in naval battles across the Aegean Sea.GAZE IN WONDER Experience the action in a whole new light with Tobii Eye Tracking. The Extended View feature gives you a broader perspective of the environment, and the Dynamic Light and Sun Effects immerse you in the sandy dunes according to where you set your sights. Tagging, aiming and locking on your targets becomes a lot more natural when you can do it by looking at them. Let your vision lead the way and enhance your gameplay.",
            genre: "Action, Adventure, RPG",
            ESRB: "M for Mature"
        },
        {
            title: "Call of Duty: Modern Warfare II",
            price: 19.99,
            about: "Welcome to the new era of Call of Duty®.Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.Infinity Ward brings fans state-of-the-art gameplay, with all-new gun handling, advanced AI system, a new Gunsmith and a suite of other gameplay and graphical innovations that elevate the franchise to new heights.Modern Warfare® II will launch with a globe-trotting single-player campaign, immersive Multiplayer combat and a narrative-driven, co-op Special Ops experience.",
            genre: "Action",
            ESRB: "M for Mature"
        },
        {
            title: "Demon Slayer",
            price: 35.99,
            about: "In Adventure Mode, follow Tanjiro through the story from the Demon Slayer: Kimetsu no Yaiba anime as he faces demons in order to turn his sister Nezuko, who has become a demon, back into a human. In Versus Mode, characters from the anime, including Tanjiro and Nezuko, can be freely matched against each other in a 2 vs 2 setting with up to 2 players on or offline! Enjoy this simple but exhilarating battle system, and become the greatest demon slayer you can!",
            genre: "Action, Adventure",
            ESRB: "T for Teen"
        },
        {
            title: "Fallout 3",
            price: 4.99,
            about: "With Fallout 3: Game of the Year Edition, experience the most acclaimed game of 2008 like never before. Create a character of your choosing and descend into an awe-inspiring, post-apocalyptic world where every minute is a fight for survival. Fallout 3: Game of the Year Edition includes all five of the Fallout 3 Game Add-on Packs: Operation: Anchorage - Enter a military simulation and fight in the liberation of Anchorage, Alaska from its Chinese Communist invaders. The Pitt - Travel to the post-apocalyptic remains of Pittsburgh and become embroiled in a conflict between slaves and their Raider masters.Broken Steel - Increase your level cap to 30, and finish the fight against the Enclave remnants alongside Liberty Prime.Point Lookout - Embark on a mysterious and open-ended adventure in a huge, murky swampland along the coast of Maryland.Mothership Zeta - Defy hostile alien abductors and fight your way off of the alien mothership, orbiting miles above the Capital Wasteland.",
            genre: "RPG",
            ESRB: "M for Mature"
        },
        {
            title: "Destiny 2",
            price: "Free",
            about: "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
            genre: "Action, Adventure, Free to Play",
            ESRB: "T for Teen"
        },
        {
            title: "Tales of Arise",
            price: 23.99,
            about: "Explore the world of Dahna, where a mix of unique, natural environments change in appearance based on the time of day. Climb over the rocky terrain, swim in rivers, gather around the campfire, cook food, head to the next town, defeat the master of an alien planet, and liberate the people! The protagonists who will determine the fate of these two worlds are Alphen and Shionne. They will overcome hardships and grow together with their unique group of friends. Gorgeous animation by ufotable is inserted at key points in the story, adding more color to our protagonists’ journey.",
            genre: "Action, RPG",
            ESRB: "T for Teen"
        },
        {
            title: "Beat Saber",
            price: 29.99,
            about: "Beat Saber is an immersive rhythm experience you have never seen before! Enjoy tons of handcrafted levels and swing your way through the pulsing music beats, surrounded by a futuristic world. Use your sabers to slash the beats as they come flying at you – every beat indicates which saber you need to use and the direction you need to match. With Beat Saber you become a dancing superhero!",
            genre: "Indie",
            ESRB: "none listed"
        },
        {
            title: "EA Sports FIFA 23",
            price: 69.99,
            about: "EA SPORTS™ FIFA 23 brings The World’s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men’s and women’s FIFA World Cup™ coming to the game as post-launch updates, the addition of women’s club teams, cross-play features*, and more. Experience unrivaled authenticity with over 19,000 players, 700+ teams, 100 stadiums, and over 30 leagues in FIFA 23.",
            genre: "Simulation, Sports",
            ESRB: "E for Everyone"
        },
        {
            title: "Madden NFL 23",
            price: 38.99,
            about: "The League drops you into your fifth NFL season at a skill position of your choice (QB, WR, RB, CB, MLB), and you’re seeking a fresh start with a new team. Negotiate a 1-year “prove-it” contract with one of 32 NFL teams, and show out with great on-field performance to earn rewards and level up. The addition of New Drive Goals and Drive Summaries allows you to tweak your experience throughout a game and get feedback and rewards based on how well you play. Get performance boosts from weekly activities and training between games while Madden Ratings Adjustor Chad Johnson guides your career development by providing ratings updates as you strive for the highest level of prestige on your Road to 99. Will your NFL career rank among the all-time greats? It’s up to you.",
            genre: "Simulation, Sports",
            ESRB: "E for Everyone"
        },
        {
            title: "Final Fantasy VII Remake Intergrade",
            price: 69.99,
            about: "FINAL FANTASY VII REMAKE is a bold reimagining of the original FINAL FANTASY VII, originally released in 1997, developed under the guidance of the original key developers. This critically-acclaimed game, which mixes traditional command-based combat and real-time action, makes its Steam debut along with FF7R EPISODE INTERmission─a new story arc featuring Yuffie Kisaragi. By exploiting mako, the life-blood of the planet, through their mako reactors, the Shinra Electric Power Company has all but seized control of the entire world. A ragtag group of idealists, known as Avalanche, are one of the last bastions of resistance. Cloud, an elite SOLDIER operative-turned-mercenary takes part in an Avalanche operation to destroy Mako Reactor 1 in the city of Midgar.The bombing plunges the city into fiery chaos, and Cloud is tormented by visions of a bitter enemy long thought dead. Once more begins a story that will shape the destiny of an entire world.",
            genre: "RPG",
            ESRB: "T for Teen"
        },
        {
            title: "Counter-Strike: Global Offensive",
            price: "Free",
            about: "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.). Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999,' said Doug Lombardi at Valve. 'For the past 12 years, it has continued to be one of the most-played games in the world, headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS' award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.",
            genre: "Action, Free to Play",
            ESRB: "none listed"
        },
        {
            title: "Dead by Daylight ",
            price: 19.99,
            about: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.Survivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey.The Survivors' goal in each encounter is to escape the Killing Ground without getting caught by the Killer - something that sounds easier than it is, especially when the environment changes every time you play.",
            genre: "Action",
            ESRB: "M for Mature"
        },
        {
            title: "Elden Ring",
            price: 59.99,
            about: "A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.",
            genre: "Action, RPG",
            ESRB: "M for Mature"
        },
    ]

    const seedGameDescription = () => GameDescription.bulkCreate(gameDescriptionSeeds, {
        individualHooks: true,
        returning: true,
    });

    module.exports = seedGameDescription;
