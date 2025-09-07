import React from 'react'

const MovieCard = ({ image, release_date, language, genre, description, title }) => {
    return (
        <div>
            <div className="movieCard">

                <div className="twoSections">
                    <div className="top">
                        <img src={image} alt='' />
                    </div>
                    <div className="bottom">


                        <div className="relLang">
                            <strong>{title}</strong>
                            <strong>{release_date}</strong>
                            <strong>{genre}</strong>
                            <strong>{language}</strong>

                        </div>

                        <div className="description">
                            <p>{description}</p>
                        </div>

                        <button>Watch Trailer</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default MovieCard
