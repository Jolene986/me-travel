import destination1 from './images/details-1.jpg';
import destination2 from './images/details-2.jpg';
import destination3 from './images/details-3.jpg';
import destination4 from './images/details-4.jpg';
import img1 from './images/destination-1.jpg';
import img2 from './images/destination-2.jpg';
import img3 from './images/destination-3.jpg';
import img4 from './images/destination-4.jpg';
import img5 from './images/destination-5.jpg';
import img6 from './images/destination-6.jpg';
import img7 from './images/destination-7.jpg';
import img8 from './images/destination-8.jpg';
import img9 from './images/destination-9.jpg';
import img10 from './images/destination-10.jpg';
import img11 from './images/destination-11.jpg';
import img12 from './images/destination-12.jpg';
import img13 from './images/destination-13.jpg';

export default [
  {
    sys: {
      id: '1'
    },
    fields: {
      name: 'Citadel',
      slug: 'citadel',
      region: 'Outer Council Space',
      price: 1000,
      radius: 44.7,
      party: 2,
      pets: true,
      food: false,
      featured: true,
      description:
        " Strategically located at the junction of a number of mass relays leading to various parts of the galaxy, the Citadel quickly became a hub of activity. The station was chosen to house the Citadel Council, thereby cementing its importance in the galactic community. It is accepted to be the political and cultural heart of Citadel space, the unofficial name given to all systems that fall under the Citadel species' control. Gravity is simulated through rotation, and is a comfortable 1.02 standard G's on the Wards and a light 0.3 standard G's on the Presidium Ring.",
      advice:
        'DO NOT DISTURB THE KEEPERS! The keepers are a mysterious, bio-engineered insectoid race that are native only to the Citadel. They are found throughout the Citadel in random locations, and are harmless. They are believed to be created by the Protheans as the caretakers of the Citadel.',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '2'
    },
    fields: {
      name: 'Omega',
      slug: 'omega',
      region: 'Terminus Systems',
      price: 1500,
      radius: 44.7,
      party: 1,
      pets: false,
      food: false,
      featured: false,
      description:
        "Built in the mined-out husk of a metallic asteroid, Omega has been a haven for criminals, terrorists, and malcontents for thousands of years. At times, the station has lain idle and abandoned for centuries, only to be reactivated by a new group of outlaws seeking a fresh start. The space station's original elegant design has given way to haphazard expansion by scrabbling factions of every species. There is no central government or unifying authority on Omega, and nobody can recall a time there ever was one.",
      advice:
        "If by any chanse you meet Aria T'Loak, remember this: She is Omega.Everyone needs more something and they all come to her.She is the boss, CEO, queen if you’re feeling dramatic. It doesn’t matter. Omega has no titled ruler and only one rule. Don’t mess with Aria.",
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Get a secret namedrop passphrase for entering Afterlifes VIP section',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination1
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '3'
    },
    fields: {
      name: 'Virmire',
      slug: 'virmire',
      region: 'Attican Traverse',
      price: 2500,
      radius: 6440,
      party: 1,
      pets: false,
      food: false,
      featured: false,
      description:
        'Virmire is a lush frontier world, ideal for colonization by carbon-based species. Its vast seas and orbital position on the inner life zone have created a wide equatorial band of humid, tropical terrain. Unfortunately, the political instability of the nearby Terminus Systems has impeded colonization efforts - the high risk of raids by pirates and slavers makes it an unappealing homestead.',
      advice:
        'Virmire is an island paradise and galactic vacation spot, so DO NOT KILL the Pod Crabs!',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination1
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '4'
    },
    fields: {
      name: 'Eden Prime',
      slug: 'eden-prime',
      region: 'Earth Systems Alliance Space',
      price: 3000,
      radius: 7026,
      party: 1,
      pets: true,
      food: true,
      featured: false,
      description:
        "Eden Prime is a human colony founded close to the Inner Council Space borders . Known for its pristine, Earth-like greenery and suitability for sustaining life, it has become a kind of symbol for humanity's ability to create functioning colonies in an interstellar community. Eden Prime is known for being a beautiful paradise for all species. Most long time colonists are in the agriculture business.",
      advice:
        'Known flora native to Eden Prime include lace-in-lilac. Seeds from this plant have been transported 2.5 million lightyears away by Milky Way colonists to the Andromeda galaxy in the hope of starting a garden there someday. DO NOT PLUCK IT!',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '5'
    },
    fields: {
      name: 'Thessia',
      slug: 'thessia',
      region: 'Outer Council Space',
      price: 2000,
      radius: 5940,
      party: 2,
      pets: false,
      food: true,
      featured: true,
      description:
        "The asari homeworld has been called the crown jewel of the galaxy, the apex of democracy, and the beating heart of galactic love. Its republics have a remarkably low incidence of war, disease, violent crime or famine, riding a stable economy backed by wealthy colonies and Thessia's vast element zero reserves. Traces of eezo in the water and soil are so common that most life on Thessia has adapted to its presence.",
      advice:
        'Food and drink on Thessia is served with small amounts of element zero which has no known benefits for non-biotic individuals. As such, visitors are recommended to stick to the visitors menu. One drink than can be ingested by asari and non-asari alike is called elasa.',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '6'
    },
    fields: {
      name: 'Irune',
      slug: 'irune',
      region: 'Inner Council Space',
      price: 2500,
      radius: 11525,
      party: 2,
      pets: false,
      food: false,
      featured: false,
      description:
        'The volus homeworld is a high-pressure, high-gravity planet that supports an ammonia-based ecology. This rare environment means that the volus have been slow to colonize, as there are few planets that meet their habitation requirements. Most prefer to stay on Irune, working remotely via the extranet.',
      advice:
        "Irune's ammonia-based atmosphere is toxic to non-volus life-forms. Visitors to Irune must wear pressure suits at all times when traveling outside of environmentally controlled areas.",
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '7'
    },
    fields: {
      name: 'Palaven',
      slug: 'palaven',
      region: 'Inner Council Space',
      price: 3000,
      radius: 8990,
      party: 2,
      pets: true,
      food: true,
      featured: false,
      description:
        "The only thing on this planet that isn't silver are the turians. It's all too clear they're made of steel.These were Alliance hero Jon Grissom's impressions of the turian homeworld Palaven, seen by humans for the first time following the First Contact War. The turians' martial attitude permeates every aspect of Palaven society, from architecture to art to politics. It's no surprise that their homeworld was never occupied by an invading force until now.",
      advice:
        "Palaven's weak magnetic field means solar radiation levels are greater than those found on other habitable worlds. Human visitors are advised to wear enviro-suits or other radiation protection when visiting Palaven.",
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '8'
    },
    fields: {
      name: "Sur'Kesh",
      slug: 'surkesh',
      region: 'Inner Council Space',
      price: 4000,
      radius: 6709,
      party: 2,
      pets: false,
      food: true,
      featured: false,
      description:
        "Alternating between large oceans and landmasses covered in flora, the salarian homeworld, Sur'Kesh, is known for its humid climate and lush vegetation. As with the rainforests that once covered Earth, the planet's many forests enjoy a rich biodiversity. The salarian desire for intellectual stimulation drove them long ago to explore every aspect of their environment, developing ways to thrive without consequences detrimental to their habitat.",
      advice:
        'The areas near major cities and industrial centers are meticulously maintained, with an eye towards ensuring that sunlight penetrates to the ground level and that established paths through the jungle are kept clear for travel. STAY ON THE ROAD!',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: destination1
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '9'
    },
    fields: {
      name: 'Tuchanka',
      slug: 'tuchanka',
      region: 'Inner Council Space',
      price: 3000,
      radius: 8293,
      party: 3,
      pets: true,
      food: false,
      featured: false,
      description:
        "Scarred by bombardment craters, radioactive rubble, choking ash, salt flats, and alkaline seas, Tuchanka can barely support life. Tree-analogues grew in thick jungles, their roots growing out of shallow, silty seas. Life fed upon life in an evolutionary crucible. This world died in nuclear firestorms after the krogan split the atom. A 'little ice age' of nuclear winter killed off much of the remaining plant life.",
      advice:
        'Visitors to Tuchanka land at their own risk. The CDEM will not attempt to extract citizens threatened by clan warfare.The ecology of Tuchanka is deadly. Nearly every native species engages in some predatory behavior; even the remaining vegetation is carnivorous. Travel beyond guarded areas is strongly discouraged.',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '10'
    },
    fields: {
      name: 'Noveria',
      slug: 'noveria',
      region: 'Attican Traverse',
      price: 3500,
      radius: 5656,
      party: 4,
      pets: false,
      food: false,
      featured: false,
      description:
        'Noveria is a cool, rocky world, with most of its hydrosphere locked up in massive glaciers. A privately-chartered colony world, the planet is owned by the Noveria Development Corporation holding company. The NDC is funded by investment capital from two dozen high technology development firms, and administrated by an Executive Board representing their interests.',
      advice:
        'Noveria features the Skadi Mountains, where the isolated lab Peak 15 is situated in, and the Aleutsk Valley, a pass between Port Hanshan and Peak 15. Locales known to Noverian denizens include a resort at the equator that provides amenities like accredited asajura fields and caters to other leisure activities like bouncebacking and diving',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '11'
    },
    fields: {
      name: 'Ilium',
      slug: 'ilium',
      region: 'Terminus Systems',
      price: 4000,
      radius: 7431,
      party: 5,
      pets: true,
      food: false,
      featured: false,
      description:
        'Illium is a classic garden world, an entrepot between the Terminus Systems and the Asari Republics. To abet this trade, the normally stringent customs laws of Council space on product safety, proscribed materials, and sapient trafficking are relaxed. The world is hot and massive; ground settlement is only possible at the higher polar latitudes. In more equatorial locations, the population is housed in arcology skyscrapers to escape the heat of the surface.',
      advice:
        "New visitors are advised to avoid signing anything due to the world's lax legal regulations, necessary in order to stay competitive with the Terminus Systems. As such, drugs are legal as long as they are labeled properly, and one can buy any kind of weapon, technology, or even indentured servants.",
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination1
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '12'
    },
    fields: {
      name: 'Ilos',
      slug: 'ilos',
      region: 'Terminus Systems',
      price: 5000,
      radius: 8607,
      party: 6,
      pets: false,
      food: true,
      featured: false,
      description:
        'In the golden age of the Protheans, Ilos was a verdant world, dotted with the spires and arches of magnificent cities. Even casual observation shows this is no longer the case. Ilos has been devastated by means unknown, its entire surface changed to the color of rust. The atmosphere shows heightened levels of oxygen. Wildfires, presumably ignited by lightning strikes, can be seen burning on the dark side.',
      advice:
        'Ilos lies in a remote area of the Terminus Systems only accessible by the legendary Mu Relay. Four thousand years ago, the Mu Relay was knocked out of position by a supernova and lost. Since then, Ilos and its cluster have been inaccessible',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'Watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: '13'
    },
    fields: {
      name: 'Rannoch',
      slug: 'rannoch',
      region: 'Terminus Systems',
      price: 6000,
      radius: 6021,
      party: 10,
      pets: true,
      food: true,
      featured: true,
      description:
        "Although its orange sun is only about 90% the mass of Sol and half as luminous, Rannoch is arid by Earth standards because it formed closer to its star and has slightly less ocean coverage. Photosynthetic life is concentrated around rivers and oceans, with large expanses of desert in between. The importance of plant life and shade in ancient quarian culture is evident in the translation of Rannoch's name: Walled garden.",
      advice: 'The Geth ARE FRENDLY! Do Not Open Fire!',
      extras: [
        'Visit the Normandy Crash Site',
        'Deep dive with Leviathan',
        'watch Shepherds head cam footage of the suicide mission in HD',
        'Get an email from Shadow broker',
        'Adequate safety/security',
        'Ethernet',
        'Comfortable beds'
      ],
      images: [
        {
          fields: {
            file: {
              url: img13
            }
          }
        },
        {
          fields: {
            file: {
              url: destination2
            }
          }
        },
        {
          fields: {
            file: {
              url: destination3
            }
          }
        },
        {
          fields: {
            file: {
              url: destination4
            }
          }
        }
      ]
    }
  }
];
