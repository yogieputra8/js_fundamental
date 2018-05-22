const moviesData = [
  {
    title: "Shrek 4",
    duration: "1h 30m",
    category: "Animation, Comedy",
    rating: 4
  },
  {
    title: "Black panther",
    duration: "45m",
    category: "Superhero",
    rating: 5
  },
  {
    title: "Bourne Ultimatum",
    duration: "1h 10m",
    category: "Action",
    rating: 3
  },
  {
    title: "Avengers - Infinity Wars II",
    duration: "2h 30m",
    category: "Superhero",
    rating: 4
  },
  {
    title: "Fast and Furious 5",
    duration: "1h 35m",
    category: "Action",
    rating: 2
  }
];

// title  * * *
//  Bourne Ultimatum  * * *
moviesData.map((data, idx) => {
  const title_movies = data.title;
  const rating_movies = data.rating;

  let stars = "";
  for (let y = 0; y < rating_movies; y++) {
      stars += ' * '
  }
  
  console.log(`${title_movies}  ${stars}`)
});
