interface onboardingBlock {
  id: number
  header: string
  text?: string
}

export interface videoBlock {
  description: string
  link: string
}

export const onboardingTexts: Array<Array<onboardingBlock>> = [
  [
    {
      id: 0,
      header: 'Stage 1, Header 1',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Montes interdum nibh dolor magna augue fames congue ridiculus. Sed euismod dapibus consectetur ipsum luctus. Arcu posuere penatibus malesuada, ad dictumst vitae. Et euismod netus lobortis ex consectetur ridiculus enim molestie. Ullamcorper integer ad luctus a ornare porttitor. Odio mollis at scelerisque pharetra feugiat justo iaculis mollis. Pellentesque hendrerit turpis inceptos phasellus libero.',
    },
    {
      id: 1,
      header: 'Stage 1, Header 2',
      text: 'Nec fringilla dui ultricies penatibus augue orci odio. At cursus suscipit senectus venenatis velit aliquet. Aliquet dictumst pulvinar cras finibus magnis velit. Cubilia primis habitant parturient dictum porta condimentum sociosqu. Morbi congue fames tempor molestie laoreet magna curae. Nunc nam sodales nulla morbi bibendum eget ac in. Sociosqu varius semper accumsan ridiculus dictumst egestas?',
    },
    {
      id: 2,
      header: 'Stage 1, Header 3',
      text: 'Eget tortor eros leo ante augue nostra tristique. Sapien commodo ultrices lacinia condimentum non cubilia dapibus. Sapien tempus mauris sodales condimentum molestie; enim ligula. Suscipit dis sapien sodales eleifend feugiat fusce convallis fames. Rutrum elementum congue penatibus torquent odio. Adipiscing torquent odio accumsan fringilla magnis. Rutrum pretium placerat viverra dis eros. Volutpat eget fusce; mattis vulputate arcu nullam convallis.',
    },
    {
      id: 3,
      header: 'Stage 1, Header 4',
      text: 'Quis phasellus potenti mauris malesuada duis sem nulla. Posuere quis molestie accumsan ultricies nec venenatis. Nisl purus dictumst placerat iaculis gravida nibh cursus. Sollicitudin diam semper iaculis gravida efficitur luctus. Magnis ornare lorem mollis non semper mollis! Habitasse nam faucibus porta tempor vulputate mus. Morbi ipsum hac vel maximus consectetur. Sodales pellentesque luctus nascetur mattis tincidunt magna. Habitasse varius netus posuere, venenatis fames dis.',
    },
    {
      id: 4,
      header: 'Stage 1, Header 5',
      text: 'Hendrerit primis viverra elementum donec viverra lobortis. Natoque urna vestibulum nisi odio torquent semper? Suspendisse scelerisque malesuada curabitur; faucibus nisl habitant justo vivamus senectus. Senectus ullamcorper ligula natoque facilisi tempus ipsum. Porttitor nisl ad ultrices dignissim mattis aliquet. Gravida finibus proin libero ipsum placerat laoreet. Himenaeos taciti dis tempor litora litora cras pellentesque sed.',
    },
  ],
  [
    {
      id: 0,
      header: 'Stage 2, Header 1',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus cursus odio rutrum curae mi taciti tempus pulvinar? Integer porttitor mus rhoncus litora parturient aliquam placerat. Posuere posuere egestas sapien habitant ac nostra hac. Pulvinar vestibulum blandit quam donec lacinia. Ante accumsan sollicitudin ut blandit felis, aliquet ipsum rhoncus. Duis eros netus netus ut ut quam. Integer luctus metus montes iaculis cubilia dolor.',
    },
    {
      id: 1,
      header: 'Stage 2, Header 2',
      text: 'Elit libero orci; quisque porta scelerisque sollicitudin. Velit mus est nisi nunc etiam tempus. Diam erat tortor ac tortor lobortis vivamus ridiculus vehicula. Eu ultrices penatibus cras mus torquent maecenas semper fringilla. Curabitur at velit metus habitant luctus aliquam venenatis. Facilisis pharetra dignissim facilisis scelerisque bibendum fermentum mi.',
    },
    {
      id: 2,
      header: 'Stage 2, Header 3',
      text: 'Arcu potenti eros sit quisque natoque ex facilisis mollis. Tortor senectus quis efficitur; vel eros dis. Imperdiet tincidunt lacus nostra curabitur pellentesque, natoque est! Tincidunt aliquet fames blandit conubia sociosqu feugiat rhoncus himenaeos. Parturient maximus consectetur ad adipiscing himenaeos nisi rutrum leo. Pulvinar leo per quam imperdiet dictumst a nec maximus. Eget nullam etiam lobortis aptent orci taciti vehicula a. Vulputate fusce curabitur aliquet aliquet duis.',
    },
    {
      id: 3,
      header: 'Stage 2, Header 4',
      text: 'Vulputate eu massa in nisl consectetur euismod dolor. Nec ultricies ligula; lectus eros faucibus consectetur ad convallis. Porttitor pulvinar cras morbi nec orci mi maecenas duis? Nam dolor mollis maecenas massa purus orci natoque ac. Ornare curae feugiat orci vel duis. Enim imperdiet habitasse eleifend posuere quis mattis diam per.',
    },
  ],
  [
    {
      id: 0,
      header: 'Stage 3, Header 1',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ased nec pulvinar pellentesque iaculis tempor. Primis sodales ultrices diam per aliquam; erat donec quisque. Facilisi ipsum lectus, bibendum fusce conubia non. Ex purus semper vehicula consequat, ornare purus. Tempus nascetur lacus primis mattis libero commodo adipiscing. Ornare etiam cras ut; ipsum justo orci. Commodo curabitur scelerisque nec fames nunc quis. Sociosqu posuere luctus mus vivamus adipiscing fermentum.',
    },
    {
      id: 1,
      header: 'Stage 3, Header 2',
      text: 'Laoreet nisi nostra cras accumsan, phasellus rutrum ex sem. Neque facilisis torquent sollicitudin ac pulvinar interdum eros. Vestibulum enim nisl euismod; nisi nisl aptent. Semper penatibus magna aenean; orci faucibus torquent. Nullam quam ante cubilia risus pellentesque velit dignissim. Fusce efficitur vehicula urna gravida sem magnis penatibus. Potenti fusce sit gravida potenti ipsum consectetur.',
    },
    {
      id: 2,
      header: 'Stage 3, Header 3',
      text: 'Facilisi placerat lacus a bibendum vehicula dictumst erat aenean erat. Elementum et elit sociosqu auctor habitasse urna posuere maximus. Dictumst convallis venenatis curae diam mauris amet ipsum, libero sem. Nisl eget hac ligula vehicula leo platea sagittis dignissim arcu. Feugiat nisi sem imperdiet torquent varius magna. Ut sem hendrerit ipsum urna mollis volutpat aliquet. Ex netus risus dignissim felis lobortis turpis vitae placerat.',
    },
  ],
]

export const headers: Array<onboardingBlock> = [
  {
    id: 0,
    header: 'Wellcome to onboarding!',
  },
  {
    id: 1,
    header: 'Stage',
  },
  {
    id: 2,
    header: 'Well done!',
  },
]

export const buttons: Array<onboardingBlock> = [
  {
    id: 0,
    header: 'Get Started',
  },
  {
    id: 1,
    header: 'Next',
  },
  {
    id: 2,
    header: 'Finish onboarding',
  },
]

export const videos: Array<videoBlock> = [
  {
    description: 'Welcome to Glam!',
    link: 'https://cdn.getglam.app/content/paywalls/240515_web2web_video1_v04.mp4',
  },
  {
    description: 'Match your Aesthetic',
    link: 'https://cdn.getglam.app/content/paywalls/240515_web2web_video2_v01.mp4',
  },
  {
    description: 'Explore 100+ Styles',
    link: 'https://cdn.getglam.app/content/paywalls/240515_web2web_video3_v01.mp4',
  },
]
