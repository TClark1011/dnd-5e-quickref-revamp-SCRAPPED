import type { RuleSection } from './types';

const data: RuleSection[] = [
	{
		title: 'reaction',
		extraText: 'max. 1/round',
		color: '#FE5D01',
		subSections: [
			{
				description:
					"A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's.",
				items: [
					{
						title: 'Opportunity attack',
						icon: 'crossed-swords',
						// icon: crossedSwordsIcon,
						subtitle: 'Enemy leaves your reach',
						description:
							'You can rarely move heedlessly past your foes without putting yourself in danger',
						reference: 'PHB, pg. 195.',
						bullets: [
							'Trigger: enemy creature you can see leaves your reach.',
							'Make one melee attack against the provoking creature.',
							"The attack interrupts the provoking creature's movement, occurring right before the creature leaves your reach.",
							"Creatures don't provoke an opportunity attack when they teleport or when someone or something moves them without using their movement, action, or reaction."
						]
					},
					{
						title: 'Readied action',
						icon: 'stopwatch',
						// icon: stopwatchIcon,
						subtitle: 'Part of your Ready action',
						description: 'Execute the reaction specified by your Ready action',
						reference: 'PHB, pg. 193.',
						bullets: ['Trigger: specified by your <i>Ready</i> action.']
					},
					{
						title: 'Cast a spell',
						icon: 'magic-swirl',
						// icon: magicSwirlIcon,
						subtitle: 'Cast time of 1 reaction',
						description: 'Cast a spell with a casting time of 1 reaction',
						reference: 'PHB, pg. 192.',
						bullets: [
							'Trigger: specified by the spell.',
							'For further details, see the <i>Cast a spell</i> action.'
						]
					}
				]
			}
		]
	},
	{
		title: 'movement',
		extraText: 'limited by movement speed',
		color: '#2995FF',
		subSections: [
			{
				description:
					'You can move at any time during your turn (before, after, or during actions).',
				items: [
					{
						title: 'Move',
						icon: 'run',
						subtitle: 'Cost: 5ft per 5ft',
						description: 'Movement cost: 5ft per 5ft moved',
						reference: 'PHB, pg. 190.',
						bullets: [
							"If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
							"You can move through a nonhostile creature's space.",
							"You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
							"Another creature's space is difficult terrain for you.",
							"Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
						]
					},
					{
						title: 'Climb',
						icon: 'climb',
						subtitle: 'Cost: 10ft per 5ft',
						description: 'Movement cost: 10ft per 5ft climbed',
						reference: 'PHB, pg. 182.',
						bullets: ['May involve a Strength (Athletics) check if the climb is difficult']
					},
					{
						title: 'Swim',
						icon: 'at-sea',
						subtitle: 'Cost: 10ft per 5ft',
						description: 'Movement cost: 10ft per 5ft swum',
						reference: 'PHB, pg. 182.',
						bullets: ['May involve a Strength (Athletics) check if the swim is difficult']
					},
					{
						title: 'Drop prone',
						icon: 'falling',
						subtitle: 'Cost: 0ft',
						description: 'Movement cost: 0ft (free)',
						reference: 'PHB, pgs. 190-191,292.',
						bullets: [
							'You can drop prone without using any of your speed',
							'To move while prone, you must crawl or use magic such as teleportation',
							'Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)'
						]
					},
					{
						title: 'Crawl',
						icon: 'crawl',
						subtitle: 'Cost: 10ft per 5ft',
						description: 'Movement cost: 10ft per 5ft crawled',
						reference: 'PHB, pg. 182.',
						bullets: []
					},
					{
						title: 'Stand up',
						icon: 'strong',
						subtitle: 'Cost: half movement speed',
						description: 'Movement cost: half of your speed',
						reference: 'PHB, pg. 190-191.',
						bullets: [
							"You can't stand up if you don't have enough movement left or if your speed is 0"
						]
					},
					{
						title: 'High jump',
						icon: 'wingfoot',
						subtitle: 'Cost: 5ft per 5ft',
						description: 'Movement cost: 5ft per 5ft jumped',

						reference: 'PHB, pg. 182.',
						bullets: [
							'You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.',
							'When you make a standing high jump, you can jump only half that distance.',
							'You can extend your arms half your height above yourself during the jump.',
							'In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can.'
						]
					},
					{
						title: 'Long jump',
						icon: 'jump-across',
						subtitle: 'Cost: 5ft per 5ft',
						description: 'Movement cost: 5ft per 5ft jumped',
						reference: 'PHB, pg. 182.',
						bullets: [
							'You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.',
							'When you make a standing long jump, you can leap only half that distance',
							"May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
							'May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check.'
						]
					},
					{
						title: 'Improvise',
						icon: 'juggler',
						subtitle: 'Any stunt not on this list',
						description: 'Perform any movement or stunt you can imagine',
						bullets: [
							'When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure.'
						]
					},
					{
						title: 'Difficult terrain',
						icon: 'stone-pile',
						subtitle: 'Cost modifier: +5ft per 5ft',
						reference: 'PHB, pg. 182.',
						description: 'Moving in difficult terrain costs an additional 5ft per 5ft of movement',
						bullets: []
					},
					{
						title: 'Grapple move',
						icon: 'grab',
						subtitle: 'Modifier: speed halved',
						description: 'Drag or carry the grappled creature with you',
						reference: 'PHB, pg. 195.',
						bullets: [
							'If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.',
							'See the attack action for how to grapple a creature.'
						]
					}
				]
			}
		]
	},
	{
		title: 'environmental effects',
		color: '#27A328',
		subSections: [
			{
				description:
					'Effects that obscure vision can prove a significant hindrance to most adventuring tasks.',
				items: [
					{
						title: 'Lightly obscured',
						icon: 'bleeding-eye',
						subtitle: 'Disadvantage on Perception',
						description: 'Dim light, patchy fog, moderate foliage',
						reference: 'PHB, pg. 183.',
						bullets: [
							'Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight.'
						]
					},
					{
						title: 'Heavily obscured',
						icon: 'fog',
						subtitle: 'Effectively blind',
						description: 'Darkness, opaque fog, dense foliage',
						reference: 'PHB, pg. 183.',
						bullets: [
							'A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>.'
						]
					}
				]
			},
			{
				description:
					'The presence or absence of light in an environment creates three categories of illumination.',
				items: [
					{
						title: 'Bright light',
						icon: 'star-pupil',
						subtitle: 'Normal vision',
						description: 'Bright light lets most creatures see normally',
						reference: 'PHB, pg. 183.',
						bullets: [
							'Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius.'
						]
					},
					{
						title: 'Dim light',
						icon: 'semi-closed-eye',
						subtitle: 'Lightly obscured',
						description: 'Dim light, also called shadows',
						reference: 'PHB, pg. 183.',
						bullets: [
							'Creates a <b>lightly obscured</b> area.',
							'An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.',
							'The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light.'
						]
					},
					{
						title: 'Darkness',
						icon: 'worried-eyes',
						subtitle: 'Heavily obscured',
						description: 'Darkness creates a heavily obscured area',
						reference: 'PHB, pg. 183.',
						bullets: [
							'Creates a <b>heavily obscured</b> area.',
							'Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness.'
						]
					}
				]
			},
			{
				description:
					'Some creatures have extraordinary senses that allow them to perceive their environment.',
				items: [
					{
						title: 'Blindsight',
						icon: 'one-eyed',
						subtitle: 'Perceive without sight',
						description:
							'Perceive your surroundings without relying on sight, within a certain radius',
						reference: 'PHB, pg. 183.',
						bullets: [
							'Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense.'
						]
					},
					{
						title: 'Darkvision',
						icon: 'semi-closed-eye',
						subtitle: 'Limited vision in darkness',
						description:
							'A creature with Darkvision can see better in the dark or low light conditions, within a certain radius',
						reference: 'PHB, pgs. 183-184.',
						bullets: [
							'Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.',
							'However, the creature can’t discern color in darkness, only shades of gray.',
							'Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision.'
						]
					},
					{
						title: 'Truesight',
						icon: 'eye-target',
						subtitle: 'See in darkness',
						description:
							'A creature with truesight can see everything in its true form, independent of the environment',
						reference: 'PHB, pg. 184.',
						bullets: [
							'A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.',
							'Furthermore, the creature can see into the Ethereal Plane.'
						]
					}
				]
			},
			{
				description:
					'Obstacles can provide cover during combat, making a target more difficult to harm.',
				items: [
					{
						title: 'Half cover',
						icon: 'wooden-fence',
						subtitle: 'Low wall, furniture, creatures',
						description: 'A target has half cover if an obstacle blocks at least half of its body',
						reference: 'PHB, pg. 196.',
						bullets: [
							'The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.',
							'A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.',
							' If a target is behind multiple sources of cover, only the most protective degree of cover applies'
						]
					},
					{
						title: 'Three-quarters cover',
						icon: 'stone-wall',
						subtitle: 'Portcullis, arrow slit',
						description:
							'A target has three-quarters cover if about three-quarters of it is covered by an obstacle',
						reference: 'PHB, pg. 196.',
						bullets: [
							'The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.',
							'A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.',
							' If a target is behind multiple sources of cover, only the most protective degree of cover applies'
						]
					},
					{
						title: 'Full cover',
						icon: 'defensive-wall',
						subtitle: 'Completely concealed',
						description: 'A target has total cover if it is completely concealed by an obstacle',
						reference: 'PHB, pg. 196.',
						bullets: [
							'A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.',
							'If a target is behind multiple sources of cover, only the most protective degree of cover applies'
						]
					}
				]
			}
		]
	},
	{
		title: 'condition',
		color: '#FEB420',
		subSections: [
			{
				description:
					"Conditions alter your capabilities in a variety of ways, and can arise as a result of a spell, a class feature, a monster's attack, or other effect.",
				items: [
					{
						title: 'Blinded',
						icon: 'one-eyed',
						subtitle: "You can't see",
						description: "You can't see",
						reference: 'PHB, pg. 290.',
						bullets: [
							'You automatically fail any ability check which requires sight.',
							'You have disadvantage on attack rolls.',
							'Attack rolls against you have advantage.'
						]
					},
					{
						title: 'Charmed',
						icon: 'smitten',
						subtitle: 'You are charmed',
						description: 'You are charmed by another creature',
						reference: 'PHB, pg. 290.',
						bullets: [
							"You can't attack your charmer or target them with harmful abilities or magical effects.",
							'Your charmer has advantage on ability checks to interact socially with you.'
						]
					},
					{
						title: 'Deafened',
						icon: 'hearing-disabled',
						subtitle: "You can't hear",
						description: "You can't hear",
						reference: 'PHB, pg. 290.',
						bullets: ['You automatically fail any ability check which requires hearing.']
					},
					{
						title: 'Exhaustion',
						icon: 'crawl',
						subtitle: 'You are exhausted',
						description: 'Exhaustion is measured in six levels',
						reference: 'PHB, pg. 291.',
						bullets: [
							"<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
							'You suffer the effect of your current level of exhaustion as well as all lower levels.',
							'Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink.',
							'Also, being raised from the dead reduces a creature’s exhaustion level by 1.'
						]
					},
					{
						title: 'Frightened',
						icon: 'sharp-smile',
						subtitle: 'You are frightened',
						description: 'You are frightened',
						reference: 'PHB, pg. 290.',
						bullets: [
							'You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.',
							"You can't willingly move closer to the source of your fear."
						]
					},
					{
						title: 'Grappled',
						icon: 'grab',
						subtitle: 'You are grappled',
						description: 'You are grappled',
						reference: 'PHB, pg. 290.',
						bullets: [
							"Your speed becomes 0, and you can't benefit from any bonus to your speed.",
							'The condition ends if your grappler is incapacitated.',
							'The condition also ends if you are removed from the reach of your grappler.'
						]
					},
					{
						title: 'Incapacitated',
						icon: 'internal-injury',
						subtitle: "You can't take actions or reactions",
						description: "You can't take actions or reactions",
						reference: 'PHB, pg. 290.',
						bullets: []
					},
					{
						title: 'Invisible',
						icon: 'invisible',
						subtitle: "You can't be seen",
						description: "You can't be seen without the aid of magic or a special sense",
						reference: 'PHB, pg. 291.',
						bullets: [
							'For the purpose of hiding, you are heavily obscured.',
							'You can still be detected by any noise you make or tracks you leave.',
							'You have advantage on attack rolls.',
							'Attack rolls against you have disadvantage.'
						]
					},
					{
						title: 'Paralyzed',
						icon: 'internal-injury',
						subtitle: 'You are paralyzed',
						description: "You can't do anything",
						bullets: [
							"You are incapacitated and can't move or speak.",
							'Attack rolls against you have advantage.',
							'Any attack that hits you is a critical hit if the attacker is within 5 feet of you.',
							'You automatically fail Strength and Dexterity saving throws.'
						]
					},
					{
						title: 'Petrified',
						icon: 'stone-pile',
						subtitle: 'You are transformed into stone',
						description:
							'You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)',
						reference: 'PHB, pg. 291.',
						bullets: [
							'Your weight increases by a factor of ten, and you cease aging.',
							"You are incapacitated, can't move or speak, and are unaware of your surroundings.",
							'Attack rolls against you have advantage.',
							'You automatically fail Strength and Dexterity saving throws.',
							'You have resistance to all damage.',
							'You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized.'
						]
					},
					{
						title: 'Poisoned',
						icon: 'poison-bottle',
						subtitle: 'You are poisoned',
						description: 'You are poisoned',
						reference: 'PHB, pg. 292.',
						bullets: ['You have disadvantage on attack rolls and ability checks.']
					},
					{
						title: 'Prone',
						icon: 'crawl',
						subtitle: 'You are prone',
						description: 'You are prone',
						reference: 'PHB, pg. 292.',
						bullets: [
							'Your only movement option is to crawl, unless you stand up.',
							'You have disadvantage on attack rolls.',
							'Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage.'
						]
					},
					{
						title: 'Restrained',
						icon: 'imprisoned',
						subtitle: 'You are restrained',
						description: 'You are restrained',
						reference: 'PHB, pg. 292.',
						bullets: [
							"Your speed becomes 0, and you can't benefit from any bonus to your speed.",
							'You have disadvantage on attack rolls.',
							'Attack rolls against you have advantage.',
							'You have disadvantage on Dexterity saving throws.'
						]
					},
					{
						title: 'Stunned',
						icon: 'internal-injury',
						subtitle: 'You are stunned',
						description: 'You are stunned',
						reference: 'PHB, pg. 292.',
						bullets: [
							"You are incapacitated, can't move, and can speak only falteringly.",
							'Attack rolls against you have advantage.',
							'You automatically fail Strength and Dexterity saving throws.'
						]
					},
					{
						title: 'Unconscious',
						icon: 'coma',
						subtitle: 'You are unconscious',
						description: 'You are unconscious',
						reference: 'PHB, pg. 292.',
						bullets: [
							"You are incapacitated, can't move or speak, and are unaware of your surroundings.",
							"You drop whatever you're holding and fall prone.",
							'Attack rolls against you have advantage.',
							'Any attack that hits you is a critical hit if the attacker is within 5 feet of you.',
							'You automatically fail Strength and Dexterity saving throws.'
						]
					},
					{
						title: 'Dying',
						icon: 'dead-head',
						subtitle: 'You are dying',
						description: 'You have been dropped to zero hit points and are dying',
						reference: 'PHB, pg. 197.',
						bullets: [
							'If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.',
							'If you receive any healing you immediately regain consciousness again and no longer dying.',
							'When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.',
							'A 10 or higher is a success, 9 or lower is a failure.',
							'On your third success, you become stable.',
							'On your third failure, you die.',
							'Rolling a 1 counts as two failures.',
							'Rolling a 20 immediately causes you to regain 1 hit point.',
							'You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.',
							'Once stable, you regain 1 hit point after 1d4 hours.'
						]
					}
				]
			}
		]
	},
	{
		title: 'bonus action',
		color: '#9C00FF',
		subSections: [
			{
				description:
					'You can take a bonus action only when a special ability, spell, or feature states that you can do something as a bonus action.',
				items: [
					{
						title: 'Offhand Attack',
						icon: 'crossed-swords',
						subtitle: 'Use with the Attack action',
						description: 'Attack with your off hand',
						reference: 'PHB, pgs. 192,194-195.',
						bullets: [
							"Only usable if you take the <i>Attack</i> action and attack with a light melee weapon that you're holding in one hand.",
							"Perform a single attack with a different light melee weapon that you're holding in the other hand.",
							"You don't add your ability modifier to the damage of the bonus attack, unless that modifier is negative.",
							'If either weapon has the thrown property, you can throw the weapon, instead of making a melee attack with it.'
						]
					},
					{
						title: 'Cast a spell',
						icon: 'magic-swirl',
						subtitle: 'Cast time of 1 bonus action',
						description: 'Cast a spell with a casting time of 1 bonus action',
						reference: 'PHB, pg. 192.',
						bullets: [
							"You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
							'For further details, see the <i>Cast a spell</i> action.'
						]
					},
					{
						title: 'Use class feature',
						icon: 'embrassed-energy',
						subtitle: 'Some features use bonus actions',
						description: 'Use a racial or class feature that uses a bonus action',
						reference: 'See class page for more information.',
						bullets: []
					}
				]
			}
		]
	},
	{
		title: 'action',
		color: '#F40104',
		extraText: '1/round',
		subSections: [
			{
				description:
					'You can move at any time during your turn (before, after, or during actions).',
				items: [
					{
						title: 'Attack',
						icon: 'crossed-swords',
						subtitle: 'Melee or ranged attack',
						description: 'Perform a melee or ranged attack with your weapon',
						reference: 'PHB, pgs. 192,194-195.',
						bullets: [
							'Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.',
							'When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).',
							'You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.',
							'Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.',
							'Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers.'
						]
					},
					{
						title: 'Grapple',
						icon: 'grab',
						subtitle: 'Special melee attack',
						description: 'Attempt to grab a creature or wrestle with it',
						reference: 'PHB, pg. 195.',
						bullets: [
							"You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
							'The target of your grapple must be no more than one size larger than you, and it must be within your reach.',
							"Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
							'If you succeed, you subject the target to the grappled condition (its speed is set to 0).'
						]
					},
					{
						title: 'Shove',
						icon: 'hand',
						subtitle: 'Special melee attack',
						description: 'Shove a creature, either to knock it prone or push it away from you',
						reference: 'PHB, pg. 195.',
						bullets: [
							"Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
							'The target of your shove must be no more than one size larger than you, and it must be within your reach.',
							"You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
							'If you win the contest, you either knock the target prone or push it 5 feet away from you.'
						]
					},
					{
						title: 'Cast a spell',
						icon: 'magic-swirl',
						subtitle: 'Cast time of 1 action',
						description: 'Cast a spell with a casting time of 1 action',
						reference: 'PHB, pg. 192.',
						bullets: [
							"You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
							"The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
							'Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.',
							'Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher.'
						]
					},
					{
						title: 'Dash',
						icon: 'sprint',
						subtitle: 'Double movement speed',
						description: 'Gain extra movement for the current turn',
						reference: 'PHB, pg. 192.',
						bullets: ['The increase equals your speed, after applying any modifiers.']
					},
					{
						title: 'Disengage',
						icon: 'journey',
						subtitle: 'Prevent opportunity attacks',
						description:
							"Your movement doesn't provoke opportunity attacks for the rest of the turn",
						reference: 'PHB, pg. 192.',
						bullets: []
					},
					{
						title: 'Dodge',
						icon: 'dodging',
						subtitle: 'Increase defenses',
						description: 'Focus entirely on avoiding attacks',
						reference: 'PHB, pg. 192.',
						bullets: [
							'Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.',
							'You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0.'
						]
					},
					{
						title: 'Escape',
						icon: 'manacles',
						subtitle: 'Escape a grapple',
						description: 'Escape a grapple',
						reference: 'PHB, pg. 195.',
						bullets: [
							"To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
							'Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition.'
						]
					},
					{
						title: 'Help',
						icon: 'shaking-hands',
						subtitle: 'Grant an ally advantage',
						description: 'Grant an ally advantage on an ability check or attack',
						reference: 'PHB, pg. 192.',
						bullets: [
							'The target gains advantage on the next ability check it makes to perform the task you are helping with.',
							'Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.',
							'The advantage lasts until the start of your next turn.'
						]
					},
					{
						title: 'Use Object',
						icon: 'card-play',
						subtitle: 'Interact, use special abilities',
						description: 'Interact with a second object or use special object abilities',
						reference: 'PHB, pg. 193.',
						bullets: [
							'You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.',
							'When an object requires your action for its use, you also take this action.'
						]
					},
					{
						title: 'Use shield',
						icon: 'round-shield',
						subtitle: 'Equip or unequip a shield',
						description: 'Equip or unequip a shield',
						reference: 'PHB, pgs. 144-146.',
						bullets: [
							'A shield always takes an action to equip or unequip.',
							'Armor takes several minutes to equip or unequip.'
						]
					},
					{
						title: 'Hide',
						icon: 'hood',
						subtitle: 'Hide yourself from view',
						description: 'Attempt to hide',
						reference: 'PHB, pg. 192.',
						bullets: [
							"You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
							'If you make noise (such as shouting a warning or knocking over a vase), you give away your position.',
							"When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
							"A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
							'Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard.'
						]
					},
					{
						title: 'Search',
						icon: 'magnifying-glass',
						subtitle: 'Search an area for an object or creature',
						description: 'Devote your attention to finding something',
						reference: 'PHB, pg. 193.',
						bullets: [
							'Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.'
						]
					},
					{
						title: 'Ready',
						icon: 'stopwatch',
						subtitle: 'Choose trigger and action',
						description: 'Choose a trigger and a response reaction',
						reference: 'PHB, pg. 193.',
						bullets: [
							'First, you decide what perceivable circumstance will trigger your reaction.',
							'Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.',
							'When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.',
							"When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
						]
					},
					{
						title: 'Use class feature',
						icon: 'embrassed-energy',
						subtitle: 'Some features use actions',
						description: 'Use a racial or class feature that uses an action',
						reference: 'See class page for more information.',
						bullets: []
					},
					{
						title: 'Stabilize a creature',
						icon: 'first-aid',
						subtitle: 'Administer first aid to a dying creature',
						description: 'Stop a dying creature from needing to make death saving throws',
						reference: 'PHB, pg. 197.',
						bullets: [
							'Make a Wisdom (Medicine) check with DC 10',
							'On a success, the creature is stable and no longer needs to make death saving throws',
							'A stable creature regains 1 hit point after 1d4 hours'
						]
					},
					{
						title: 'Improvise',
						icon: 'juggler',
						subtitle: 'Any action not on this list',
						description: 'Perform any action you can imagine',
						reference: 'PHB, pg. 193.',
						bullets: [
							'When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure.'
						]
					}
				]
			}
		]
	}
];

export default data;
