const state = () => ({
  isLoading: false,
  entries: [
    {
      id: '100',
      date: new Date().toDateString(),
      text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    },
    {
      id: '101',
      date: new Date().toDateString(),
      text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    },
    {
      id: '102',
      date: new Date().toDateString(),
      text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    }
  ]
})

export default state
