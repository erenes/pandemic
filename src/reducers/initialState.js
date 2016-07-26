export default {
  status: 'prepare',
  defeatMessage: null,
  difficulty: null,

  dealingCards: {},
  initialInfectedCity: null,

  playerCards: {
    deck: [
      { cardType: 'city', id: '30' },
      { cardType: 'city', id: '36' },
      { cardType: 'epidemic', id: 'epidemic' }
    ],
    discard: [
      { cardType: 'event', id: 'one_quiet_night' },
      { cardType: 'event', id: 'gov_grant' },
      { cardType: 'epidemic', id: 'epidemic' }
    ]
  },

  infectionCards: {
    deck: ['0', '7', '8', '5', '6', '1', '3'],
    discard: ['4', '2']
  },

  players: {
    /*0: {
      id: '0',
      name: 'Stephen',
      role: 'dispatcher',
      specialEvent: null,
      hand: [
        { cardType: 'event', id: 'forecast' },
        { cardType: 'city', id: '0' },
        { cardType: 'city', id: '3' },
        { cardType: 'city', id: '2' },
        { cardType: 'city', id: '5' },
        { cardType: 'city', id: '42' }
      ]
    },
    1: {
      id: '1',
      name: 'Rima',
      role: 'ops_expert',
      hand: [
        { cardType: 'event', id: 'res_pop' },
        { cardType: 'city', id: '4' },
        { cardType: 'city', id: '1' },
        { cardType: 'city', id: '6' },
        { cardType: 'city', id: '8' },
        { cardType: 'city', id: '7' }
      ]
    },
    2: {
      id: '2',
      name: 'Thomas',
      role: 'researcher',
      hand: [
        { cardType: 'city', id: '11' },
        { cardType: 'city', id: '10' },
        { cardType: 'city', id: '13' },
        { cardType: 'city', id: '12' },
        { cardType: 'city', id: '15' }
      ]
    },
    3: {
      id: '3',
      name: 'Paul',
      role: 'cont_planner',
      hand: [
        { cardType: 'city', id: '24' },
        { cardType: 'city', id: '20' },
        { cardType: 'city', id: '23' },
        { cardType: 'city', id: '22' },
        { cardType: 'city', id: '25' }
      ]
    }*/
  },

  diseases: {
    red: 'cured',
    blue: 'cured',
    yellow: 'cured',
    black: 'active'
  },

  currentMove: {
    player: '0',
    availableCities: {},
    shareCandidates: [],
    actionsLeft: 4,
    cardsDrawn: [],
    infectionCardDrawn: {},
    discardingCard: {},
    epidemicStep: null,
    epidemicInfectionCard: {},
    outbreak: {
      color: null,
      complete: [],
      pending: [],
      infectingCube: {}
    },
    playerToDiscard: null,
    playerToMove: null,
    curingDisease: {},
    skipInfectionsStep: false,
    govGrantCities: [],
    resPop: {},
    forecastCards: [],
    airlift: {},
    opsMoveAbility: {
      used: false,
      cards: []
    },
    contPlannerEvents: [],
    continueMessage: null
  },

  stationsLeft: 5,

  cubesLeft: {
    red: 24,
    blue: 24,
    yellow: 24,
    black: 24
  },

  infectionRate: {
    values: [2, 2, 2, 3, 3, 4, 4],
    index: 0
  },

  outbreaks: 0,

  map: {
    matrix: [
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
    ],

    playersLocations: {
      /*0: '2',
      1: '2',
      2: '2',
      3: '2'*/
    },

    locations: {
      0: {
        coords: [315, 145],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      1: {
        coords: [285, 225],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      2: {
        coords: [335, 250],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0,
        station: true
      },
      3: {
        coords: [280, 290],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      4: {
        coords: [325, 315],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      5: {
        coords: [295, 345],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      6: {
        coords: [315, 455],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      7: {
        coords: [260, 500],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      8: {
        coords: [295, 525],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      9: {
        coords: [235, 540],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      10: {
        coords: [280, 570],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      11: {
        coords: [230, 615],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      12: {
        coords: [370, 145],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      13: {
        coords: [405, 220],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      14: {
        coords: [495, 255],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      15: {
        coords: [555, 305],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      16: {
        coords: [445, 300],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      17: {
        coords: [375, 305],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      18: {
        coords: [575, 355],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      19: {
        coords: [535, 385],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      20: {
        coords: [440, 500],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      21: {
        coords: [485, 545],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      22: {
        coords: [555, 585],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      23: {
        coords: [435, 595],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      24: {
        coords: [345, 510],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      25: {
        coords: [370, 575],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      26: {
        coords: [320, 605],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      27: {
        coords: [345, 645],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      28: {
        coords: [405, 650],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      29: {
        coords: [275, 650],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      30: {
        coords: [315, 680],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      31: {
        coords: [375, 710],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      32: {
        coords: [420, 725],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      33: {
        coords: [350, 745],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      34: {
        coords: [450, 760],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      35: {
        coords: [375, 780],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      36: {
        coords: [495, 790],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      37: {
        coords: [425, 805],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      38: {
        coords: [305, 810],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      39: {
        coords: [355, 825],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      40: {
        coords: [400, 835],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      41: {
        coords: [465, 845],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      42: {
        coords: [295, 875],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      43: {
        coords: [385, 880],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      44: {
        coords: [455, 900],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      45: {
        coords: [315, 920],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      46: {
        coords: [355, 925],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      },
      47: {
        coords: [585, 940],
        yellow: 0,
        red: 0,
        black: 0,
        blue: 0
      }
    }
  }
};
