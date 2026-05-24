export const getHomeNodes = async (req, res) => {
  res.json([
    {
      label: 'Projects',
      route: '/projects',
    },
    {
      label: 'Research',
      route: '/research',
    },
    {
      label: 'Academia',
      route: '/academia',
    },
    {
      label: 'Writings',
      route: '/writings',
    },
    {
      label: 'Socials',
      route: '/socials',
    },
  ])
}