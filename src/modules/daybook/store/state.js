const state = () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1,
      date: new Date().toDateString(),
      text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2,
      date: new Date().toDateString(),
      text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia eveniet animi repellat eaque? Rerum eligendi illo totam quam laudantium fugit optio voluptas molestias, maiores voluptatum ipsum pariatur doloribus? Architecto.',
      picture: null,
    }
  ]
})

export default state
