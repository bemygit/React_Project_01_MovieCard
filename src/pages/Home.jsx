import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {

  const movies = [{
    id: 1,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1349/1734509571349-v',
    title: "Bloody Daddy",
    release_date: "2023",
    languaage: "Hindi",
    genre: "Drama",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  },
  {
    id: 2,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6770/1726555196770-v',
    title: "Munjya",
    release_date: "2019",
    languaage: "English",
    genre: "Entertainment",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  },
  {
    id: 3,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8027/1734945468027-i',
    title: "Jumanji",
    release_date: "2027",
    languaage: "Hindi",
    genre: "Suspense",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  },
  {
    id: 4,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/442/1410442-i-d09eeb4d01e7',
    title: "Frozen-II",
    release_date: "2020",
    languaage: "Hindi",
    genre: "Drama",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corpogenr is, ratione totam nulla veritatis illum ut."
  },
  {
    id: 5,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/948/1740399750948-v',
    title: "Boss Baby",
    release_date: "2025",
    languaage: "Telugu",
    genre: "Action",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  },
  {
    id: 6,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/648/1734177270648-v',
    title: "Panda",
    release_date: "2021",
    languaage: "Marathi",
    genre: "Drama",

    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  },
  {
    id: 7,
    image: 'https://img.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5944/1615944-i-d9f07bfd2d40',
    title: "Liger",
    release_date: "2022",
    languaage: "Hindi",
    genre: "Thriller",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, earum error corporis minus animi sed consectetur culpa debitis non fuga nulla alias. Obcaecati corporis, ratione totam nulla veritatis illum ut."
  }

  ]

  const [state, setState] = useState("")



  return (
    <div className='search'>
      <form>
        <input
          value={state}
          onChange={e => setState(e.target.value)}

          type="text" placeholder='Search for Movies, Genre and More' />
      </form>

      <div className='wrapper'>

        {
          movies.map(movie => (

            (movie.title.toLowerCase().startsWith(state) || movie.genre.toLowerCase().startsWith(state)) && <MovieCard key={movie.id} image={movie.image} title={movie.title} release_date={movie.release_date} language={movie.languaage} genre={movie.genre} description={movie.description} />
          ))

        }
      </div>
    </div>
  )
}

export default Home
