// Science Quiz Data Structure
// Questions organized by category and age group

const quizData = {
    space: {
        "5-7": [
            {
                question: "What color is Mars called?",
                options: ["The Red Planet", "The Blue Planet", "The Green Planet", "The Yellow Planet"],
                correct: 0,
                explanation: "Mars is called the Red Planet because its surface has reddish dust made of iron, like rust!",
                image: "mars_planet.jpg"
            },
            {
                question: "How many moons does Earth have?",
                options: ["One moon", "Two moons", "Three moons", "No moons"],
                correct: 0,
                explanation: "Earth has one moon that we can see shining in the night sky!",
                image: "earth_moon.jpg"
            },
            {
                question: "What do astronauts wear in space?",
                options: ["Regular clothes", "Space suits", "Swimming suits", "Pajamas"],
                correct: 1,
                explanation: "Astronauts wear special space suits to protect them and help them breathe in space!",
                image: "astronaut_suit.jpg"
            },
            {
                question: "Which planet is closest to the Sun?",
                options: ["Venus", "Mercury", "Mars", "Jupiter"],
                correct: 1,
                explanation: "Mercury is the closest planet to the Sun, which makes it very hot!",
                image: "solar_system.jpg"
            },
            {
                question: "What shape is the Moon?",
                options: ["A perfect circle", "An oval", "A crescent", "It changes shape"],
                correct: 3,
                explanation: "The Moon always stays round, but it looks different shapes because of shadows!",
                image: "moon_phases.jpg"
            }
        ],
        "8-11": [
            {
                question: "How long does it take Earth to orbit the Sun?",
                options: ["365 days", "30 days", "24 hours", "7 days"],
                correct: 0,
                explanation: "Earth takes exactly 365 days (one year) to travel all the way around the Sun!",
                image: "earth_orbit.jpg"
            },
            {
                question: "What are Saturn's rings made of?",
                options: ["Gas and dust", "Ice and rock", "Gold and silver", "Clouds"],
                correct: 1,
                explanation: "Saturn's rings are made of chunks of ice and rock that orbit around the planet!",
                image: "saturn_rings.jpg"
            },
            {
                question: "Why do we have day and night?",
                options: ["Earth moves around the Sun", "Earth spins on its axis", "The Moon blocks the Sun", "The Sun moves"],
                correct: 1,
                explanation: "Earth spins like a top, so different parts face the Sun (day) or away from it (night)!",
                image: "day_night_cycle.jpg"
            },
            {
                question: "What is the hottest planet in our solar system?",
                options: ["Mercury", "Venus", "Mars", "Jupiter"],
                correct: 1,
                explanation: "Venus is the hottest because its thick atmosphere traps heat like a greenhouse!",
                image: "venus_hot.jpg"
            },
            {
                question: "How many planets are in our solar system?",
                options: ["Seven planets", "Eight planets", "Nine planets", "Ten planets"],
                correct: 1,
                explanation: "There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune!",
                image: "solar_system_planets.jpg"
            }
        ],
        "12-15": [
            {
                question: "What causes the phases of the Moon?",
                options: ["Earth's shadow", "Moon's rotation", "Changing angles of sunlight", "Moon's orbit around Earth"],
                correct: 2,
                explanation: "Moon phases happen because we see different amounts of the Moon's sunlit side as it orbits Earth!",
                image: "moon_phases_detailed.jpg"
            },
            {
                question: "What is a light-year?",
                options: ["A year with light", "Distance light travels in a year", "Time to reach the Sun", "Brightness measurement"],
                correct: 1,
                explanation: "A light-year is the distance light travels in one year - about 6 trillion miles!",
                image: "light_year.jpg"
            },
            {
                question: "Why do stars twinkle?",
                options: ["They move", "Earth's atmosphere bends light", "They pulse energy", "They rotate quickly"],
                correct: 1,
                explanation: "Starlight twinkles because Earth's moving atmosphere bends the light before it reaches our eyes!",
                image: "twinkling_stars.jpg"
            },
            {
                question: "What is the Great Red Spot on Jupiter?",
                options: ["A volcano", "A giant storm", "A mountain", "A crater"],
                correct: 1,
                explanation: "The Great Red Spot is a huge storm that's been raging on Jupiter for hundreds of years!",
                image: "jupiter_red_spot.jpg"
            },
            {
                question: "How do black holes form?",
                options: ["From cold stars", "From exploding stars", "From collapsing massive stars", "From colliding planets"],
                correct: 2,
                explanation: "Black holes form when massive stars collapse under their own gravity at the end of their life!",
                image: "black_hole_formation.jpg"
            }
        ]
    },
    animals: {
        "5-7": [
            {
                question: "Which animal says 'meow'?",
                options: ["Dog", "Cat", "Cow", "Bird"],
                correct: 1,
                explanation: "Cats say 'meow' to communicate with people and other animals!",
                image: "cat_meowing.jpg"
            },
            {
                question: "What do bees make?",
                options: ["Honey", "Milk", "Eggs", "Bread"],
                correct: 0,
                explanation: "Bees collect nectar from flowers and turn it into sweet, delicious honey!",
                image: "bee_honey.jpg"
            },
            {
                question: "Which animal is the tallest?",
                options: ["Elephant", "Giraffe", "Horse", "Bear"],
                correct: 1,
                explanation: "Giraffes are the tallest animals on Earth - they can grow up to 18 feet tall!",
                image: "giraffe_tall.jpg"
            },
            {
                question: "What color are zebras?",
                options: ["Black and white", "Brown and white", "All black", "All white"],
                correct: 0,
                explanation: "Zebras have black and white stripes that help them hide from predators!",
                image: "zebra_stripes.jpg"
            },
            {
                question: "Which animal can fly?",
                options: ["Penguin", "Eagle", "Chicken", "Ostrich"],
                correct: 1,
                explanation: "Eagles are powerful birds that can fly high in the sky using their strong wings!",
                image: "eagle_flying.jpg"
            }
        ],
        "8-11": [
            {
                question: "Which mammal can truly fly?",
                options: ["Flying squirrel", "Bat", "Sugar glider", "Flying fish"],
                correct: 1,
                explanation: "Bats are the only mammals that can truly fly using their wing-like hands!",
                image: "bat_flying.jpg"
            },
            {
                question: "What do pandas eat?",
                options: ["Meat only", "Bamboo", "Fish", "Fruit and nuts"],
                correct: 1,
                explanation: "Giant pandas eat almost nothing but bamboo - they must eat 26-84 pounds every day!",
                image: "panda_bamboo.jpg"
            },
            {
                question: "How do fish breathe underwater?",
                options: ["Through their nose", "Through gills", "Through their skin", "They hold their breath"],
                correct: 1,
                explanation: "Fish use gills to filter oxygen from water, just like we use lungs to breathe air!",
                image: "fish_gills.jpg"
            },
            {
                question: "Why do chameleons change color?",
                options: ["For camouflage only", "To communicate emotions", "To regulate temperature", "All of these reasons"],
                correct: 3,
                explanation: "Chameleons change color for many reasons: to hide, show feelings, and control their body temperature!",
                image: "chameleon_colors.jpg"
            },
            {
                question: "Which animal has the longest lifespan?",
                options: ["Elephant", "Tortoise", "Blue whale", "Giant sequoia tree"],
                correct: 1,
                explanation: "Giant tortoises can live over 150 years, making them one of the longest-living animals!",
                image: "tortoise_old.jpg"
            }
        ],
        "12-15": [
            {
                question: "What is biomimicry?",
                options: ["Copying animal sounds", "Imitating nature in technology", "Studying animal behavior", "Protecting wildlife"],
                correct: 1,
                explanation: "Biomimicry is when scientists and engineers copy nature's designs to solve human problems!",
                image: "biomimicry_examples.jpg"
            },
            {
                question: "How do migratory animals navigate?",
                options: ["Stars only", "Magnetic fields", "Memory only", "Multiple methods combined"],
                correct: 3,
                explanation: "Migratory animals use magnetic fields, stars, landmarks, and even smell to navigate!",
                image: "animal_migration.jpg"
            },
            {
                question: "What is convergent evolution?",
                options: ["Animals becoming the same", "Unrelated species developing similar traits", "Animals evolving together", "Species staying unchanged"],
                correct: 1,
                explanation: "Convergent evolution is when different species develop similar features to adapt to similar environments!",
                image: "convergent_evolution.jpg"
            },
            {
                question: "How do coral reefs benefit marine ecosystems?",
                options: ["They provide shelter", "They protect coastlines", "They support biodiversity", "All of the above"],
                correct: 3,
                explanation: "Coral reefs provide homes for fish, protect shores from waves, and support incredible marine diversity!",
                image: "coral_reef_ecosystem.jpg"
            },
            {
                question: "What role do keystone species play?",
                options: ["They're the largest species", "They hold ecosystems together", "They're the most numerous", "They're always predators"],
                correct: 1,
                explanation: "Keystone species have a huge impact on their ecosystem - if removed, the whole system can collapse!",
                image: "keystone_species.jpg"
            }
        ]
    },
    "human-body": {
        "5-7": [
            {
                question: "How many eyes do people have?",
                options: ["One eye", "Two eyes", "Three eyes", "Four eyes"],
                correct: 1,
                explanation: "People have two eyes that help us see the world around us!",
                image: "human_eyes.jpg"
            },
            {
                question: "What do we use to smell things?",
                options: ["Our ears", "Our nose", "Our hands", "Our feet"],
                correct: 1,
                explanation: "We use our nose to smell flowers, food, and all the different scents around us!",
                image: "nose_smelling.jpg"
            },
            {
                question: "How many fingers do you have on one hand?",
                options: ["Three fingers", "Four fingers", "Five fingers", "Six fingers"],
                correct: 2,
                explanation: "Most people have five fingers on each hand - four fingers and one thumb!",
                image: "hand_fingers.jpg"
            },
            {
                question: "What helps us breathe?",
                options: ["Our heart", "Our lungs", "Our stomach", "Our brain"],
                correct: 1,
                explanation: "Our lungs help us breathe air in and out, like balloons in our chest!",
                image: "lungs_breathing.jpg"
            },
            {
                question: "What color is our blood?",
                options: ["Blue", "Green", "Red", "Yellow"],
                correct: 2,
                explanation: "Our blood is red because it carries oxygen to all parts of our body!",
                image: "red_blood.jpg"
            }
        ],
        "8-11": [
            {
                question: "How many bones are in the adult human body?",
                options: ["206 bones", "300 bones", "150 bones", "500 bones"],
                correct: 0,
                explanation: "Adults have 206 bones that make up our skeleton and support our body!",
                image: "human_skeleton.jpg"
            },
            {
                question: "What is the strongest muscle in the human body?",
                options: ["Arm muscle", "Heart", "Jaw muscle", "Leg muscle"],
                correct: 2,
                explanation: "The masseter (jaw muscle) is the strongest - it can create forces up to 200 pounds!",
                image: "jaw_muscle.jpg"
            },
            {
                question: "How fast does blood travel through your body?",
                options: ["1 mile per hour", "3 miles per hour", "10 miles per hour", "60 miles per hour"],
                correct: 1,
                explanation: "Blood travels about 3 mph, taking about 20 seconds to circulate through your whole body!",
                image: "blood_circulation.jpg"
            },
            {
                question: "What makes our heart beat?",
                options: ["Electrical signals", "Muscle contractions", "Blood pressure", "All of the above"],
                correct: 3,
                explanation: "Your heart beats because of special electrical signals that tell the muscle to contract and pump blood!",
                image: "heart_electrical.jpg"
            },
            {
                question: "How many taste buds do we have?",
                options: ["About 100", "About 1,000", "About 10,000", "About 100,000"],
                correct: 2,
                explanation: "We have about 10,000 taste buds that help us taste sweet, sour, salty, bitter, and umami flavors!",
                image: "taste_buds.jpg"
            }
        ],
        "12-15": [
            {
                question: "What is DNA?",
                options: ["A protein", "Genetic material", "A vitamin", "A cell part"],
                correct: 1,
                explanation: "DNA is the genetic material that contains instructions for building and maintaining our bodies!",
                image: "dna_structure.jpg"
            },
            {
                question: "How many neurons are in the human brain?",
                options: ["86 billion", "1 million", "1 billion", "100 billion"],
                correct: 0,
                explanation: "The human brain contains about 86 billion neurons that communicate through electrical signals!",
                image: "brain_neurons.jpg"
            },
            {
                question: "What is homeostasis?",
                options: ["Disease resistance", "Body temperature regulation", "Maintaining internal balance", "Growth process"],
                correct: 2,
                explanation: "Homeostasis is your body's ability to maintain stable internal conditions despite external changes!",
                image: "homeostasis_diagram.jpg"
            },
            {
                question: "How do vaccines work?",
                options: ["Kill all germs", "Boost the immune system", "Teach the immune system to recognize threats", "Replace white blood cells"],
                correct: 2,
                explanation: "Vaccines teach your immune system to recognize and fight specific diseases without making you sick!",
                image: "vaccine_mechanism.jpg"
            },
            {
                question: "What is the role of mitochondria?",
                options: ["Store genetic information", "Produce energy", "Process waste", "Control cell division"],
                correct: 1,
                explanation: "Mitochondria are the 'powerhouses' of cells, converting nutrients into usable energy (ATP)!",
                image: "mitochondria_function.jpg"
            }
        ]
    },
    "earth-science": {
        "5-7": [
            {
                question: "What do we breathe?",
                options: ["Water", "Air", "Dirt", "Fire"],
                correct: 1,
                explanation: "We breathe air, which is made of oxygen and other gases that surround Earth!",
                image: "earth_atmosphere.jpg"
            },
            {
                question: "What makes it rain?",
                options: ["Clouds get too heavy", "The Sun gets hot", "Wind blows hard", "Mountains get tall"],
                correct: 0,
                explanation: "Rain happens when clouds get full of water droplets that become too heavy and fall down!",
                image: "rain_clouds.jpg"
            },
            {
                question: "What is the biggest ocean?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correct: 2,
                explanation: "The Pacific Ocean is the biggest ocean on Earth - it's even larger than all the continents combined!",
                image: "pacific_ocean.jpg"
            },
            {
                question: "What makes a rainbow?",
                options: ["Magic", "Sun and rain together", "Wind and clouds", "Thunder and lightning"],
                correct: 1,
                explanation: "Rainbows happen when sunlight shines through raindrops and splits into different colors!",
                image: "rainbow_sky.jpg"
            },
            {
                question: "What do plants need to grow?",
                options: ["Only water", "Only sunlight", "Water, sunlight, and soil", "Just air"],
                correct: 2,
                explanation: "Plants need water, sunlight, and soil nutrients to grow big and strong!",
                image: "plant_growth.jpg"
            }
        ],
        "8-11": [
            {
                question: "What causes earthquakes?",
                options: ["Wind shaking the ground", "Tectonic plates moving", "Volcanoes erupting", "Ocean waves"],
                correct: 1,
                explanation: "Earthquakes happen when Earth's tectonic plates suddenly shift and release energy!",
                image: "earthquake_plates.jpg"
            },
            {
                question: "How old is Earth?",
                options: ["4.5 billion years", "1 million years", "10,000 years", "100 million years"],
                correct: 0,
                explanation: "Earth is about 4.5 billion years old - that's older than any living thing today!",
                image: "earth_age.jpg"
            },
            {
                question: "What is the water cycle?",
                options: ["Water moving in circles", "Water changing forms and moving around Earth", "Water in the ocean", "Water in clouds"],
                correct: 1,
                explanation: "The water cycle is how water moves between oceans, air, and land by evaporating, condensing, and precipitating!",
                image: "water_cycle.jpg"
            },
            {
                question: "What causes the seasons?",
                options: ["Earth's distance from Sun", "Earth's tilted axis", "Moon's gravity", "Sun's temperature"],
                correct: 1,
                explanation: "Seasons happen because Earth's axis is tilted, so different parts get more direct sunlight throughout the year!",
                image: "earth_seasons.jpg"
            },
            {
                question: "What are fossil fuels?",
                options: ["Dinosaur bones", "Ancient plant and animal remains", "Rocks that burn", "Liquid from volcanoes"],
                correct: 1,
                explanation: "Fossil fuels like coal, oil, and gas formed from ancient plants and animals buried for millions of years!",
                image: "fossil_fuels.jpg"
            }
        ],
        "12-15": [
            {
                question: "What is plate tectonics?",
                options: ["Earth's crust moving", "Volcanic activity", "Earthquake waves", "Mountain formation"],
                correct: 0,
                explanation: "Plate tectonics is the theory that Earth's crust is divided into moving plates that cause earthquakes, volcanoes, and mountain building!",
                image: "plate_tectonics.jpg"
            },
            {
                question: "How does ocean acidification occur?",
                options: ["Pollution", "CO2 dissolving in seawater", "Temperature increase", "Salinity changes"],
                correct: 1,
                explanation: "Ocean acidification happens when CO2 from the atmosphere dissolves in seawater, forming carbonic acid!",
                image: "ocean_acidification.jpg"
            },
            {
                question: "What is the greenhouse effect?",
                options: ["Plants growing in greenhouses", "Heat trapped by atmospheric gases", "Global warming only", "Solar energy collection"],
                correct: 1,
                explanation: "The greenhouse effect is when gases in Earth's atmosphere trap heat, keeping our planet warm enough for life!",
                image: "greenhouse_effect.jpg"
            },
            {
                question: "How do scientists date rocks and fossils?",
                options: ["Carbon dating", "Relative dating", "Radiometric dating", "All of these methods"],
                correct: 3,
                explanation: "Scientists use multiple dating methods including carbon dating, relative dating, and radiometric techniques!",
                image: "dating_methods.jpg"
            },
            {
                question: "What causes ocean currents?",
                options: ["Wind only", "Temperature differences", "Salinity differences", "Multiple factors combined"],
                correct: 3,
                explanation: "Ocean currents are driven by wind, temperature differences, salinity variations, and Earth's rotation!",
                image: "ocean_currents.jpg"
            }
        ]
    },
    "physics": {
        "5-7": [
            {
                question: "What happens when you drop something?",
                options: ["It floats up", "It falls down", "It stays in place", "It disappears"],
                correct: 1,
                explanation: "Things fall down because of gravity - a force that pulls everything toward Earth!",
                image: "gravity_drop.jpg"
            },
            {
                question: "What makes a ball bounce?",
                options: ["Magic", "Elasticity", "Air", "Color"],
                correct: 1,
                explanation: "Balls bounce because they're made of elastic materials that squish and spring back!",
                image: "bouncing_ball.jpg"
            },
            {
                question: "What do magnets do?",
                options: ["Make noise", "Attract some metals", "Create light", "Make things hot"],
                correct: 1,
                explanation: "Magnets can attract certain metals like iron and steel, but not all metals!",
                image: "magnet_attraction.jpg"
            },
            {
                question: "What makes things hot or cold?",
                options: ["Magic", "Temperature", "Color", "Size"],
                correct: 1,
                explanation: "Temperature tells us how hot or cold something is - hot things have more energy!",
                image: "hot_cold.jpg"
            },
            {
                question: "What happens when you push something?",
                options: ["It moves", "It disappears", "It gets bigger", "It changes color"],
                correct: 0,
                explanation: "When you push or pull something, you use force to make it move!",
                image: "push_pull_force.jpg"
            }
        ],
        "8-11": [
            {
                question: "What is energy?",
                options: ["Power", "Ability to do work", "Electricity only", "Heat only"],
                correct: 1,
                explanation: "Energy is the ability to do work or cause change - it comes in many forms like heat, light, and motion!",
                image: "energy_forms.jpg"
            },
            {
                question: "Why do ice cubes float in water?",
                options: ["They're cold", "Ice is less dense than water", "They're small", "Magic"],
                correct: 1,
                explanation: "Ice floats because water expands when it freezes, making ice less dense than liquid water!",
                image: "ice_floating.jpg"
            },
            {
                question: "What is friction?",
                options: ["A type of energy", "Force that opposes motion", "A kind of motion", "Heat transfer"],
                correct: 1,
                explanation: "Friction is a force that slows things down when they rub against each other!",
                image: "friction_example.jpg"
            },
            {
                question: "How does sound travel?",
                options: ["Through air", "Through water", "Through solids", "Through all of these"],
                correct: 3,
                explanation: "Sound travels through air, water, and solids as vibrations - it travels fastest through solids!",
                image: "sound_waves.jpg"
            },
            {
                question: "What makes a rainbow appear?",
                options: ["Sun and rain", "Reflection only", "Refraction only", "Magic"],
                correct: 0,
                explanation: "Rainbows form when sunlight is refracted (bent) and reflected by water droplets in the air!",
                image: "rainbow_physics.jpg"
            }
        ],
        "12-15": [
            {
                question: "What is Newton's first law of motion?",
                options: ["Force equals mass times acceleration", "Objects stay at rest unless acted upon", "For every action there's reaction", "Energy cannot be created or destroyed"],
                correct: 1,
                explanation: "Newton's first law states that objects remain at rest or in uniform motion unless acted upon by an external force!",
                image: "newtons_first_law.jpg"
            },
            {
                question: "What is the difference between speed and velocity?",
                options: ["They're the same", "Velocity includes direction", "Speed includes direction", "Velocity is faster"],
                correct: 1,
                explanation: "Velocity includes both speed and direction, while speed only tells how fast something moves!",
                image: "speed_velocity.jpg"
            },
            {
                question: "How does a lever work?",
                options: ["By magic", "By increasing force through mechanical advantage", "By decreasing work", "By eliminating friction"],
                correct: 1,
                explanation: "A lever works by providing mechanical advantage - it can multiply your input force to lift heavier objects!",
                image: "lever_mechanics.jpg"
            },
            {
                question: "What is the law of conservation of energy?",
                options: ["Energy can't be created", "Energy can't be destroyed", "Energy changes forms", "All of the above"],
                correct: 3,
                explanation: "Energy cannot be created or destroyed, only converted from one form to another - total energy remains constant!",
                image: "energy_conservation.jpg"
            },
            {
                question: "How do waves transfer energy?",
                options: ["By moving matter", "By moving energy through matter", "By creating matter", "By destroying energy"],
                correct: 1,
                explanation: "Waves transfer energy through matter without moving the matter itself - like ripples in water!",
                image: "wave_energy.jpg"
            }
        ]
    }
};

// Achievement badges system
const achievements = {
    "first-quiz": {
        name: "First Steps",
        description: "Complete your first quiz",
        icon: "🌟",
        unlocked: false
    },
    "perfect-score": {
        name: "Perfect Scientist",
        description: "Score 100% on any quiz",
        icon: "🏆",
        unlocked: false
    },
    "space-explorer": {
        name: "Space Explorer",
        description: "Complete all space quizzes",
        icon: "🚀",
        unlocked: false
    },
    "animal-expert": {
        name: "Animal Expert",
        description: "Complete all animal quizzes",
        icon: "🦁",
        unlocked: false
    },
    "body-brain": {
        name: "Body Brain",
        description: "Complete all human body quizzes",
        icon: "🧠",
        unlocked: false
    },
    "earth-guardian": {
        name: "Earth Guardian",
        description: "Complete all earth science quizzes",
        icon: "🌍",
        unlocked: false
    },
    "physics-wizard": {
        name: "Physics Wizard",
        description: "Complete all physics quizzes",
        icon: "⚡",
        unlocked: false
    },
    "quiz-master": {
        name: "Quiz Master",
        description: "Complete 10 quizzes",
        icon: "👑",
        unlocked: false
    }
};

// Export data for use in the quiz application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData, achievements };
}