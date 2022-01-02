import React from 'react'
import './Movie.scss'
import close from '../../assets/img/close.svg'
import gauge from '../../assets/img/gauge.svg'
import indicator from '../../assets/img/indicator.svg'
import thumbDown from '../../assets/img/thumbDown.svg'
import thumbUp from '../../assets/img/thumbUp.svg'
import PropTypes from 'prop-types'


const Movie = ({
    deleteMovie,
    setUserEvaluation,
    id,
    title,
    category,
    likes,
    dislikes,
    evaluation
}) => {
    
    let countLikes = evaluation === 'like' ? likes + 1 : likes
    let countDislikes = evaluation === 'dislike' ? dislikes + 1 : dislikes
    let evaluationRatio = 180 * (countLikes / (countLikes + countDislikes)) -90

    return (
        <div className='movie'>
            <h4>{category}</h4>
            <button className='delete' onClick={() => deleteMovie(id, category)} >
                <img src={close} className='close' alt='close'/>
            </button>
            <h3>{title}</h3>
            <div className='gauge-container'>
                <img src={indicator} className='indicator' alt='indicator'
                    style={{transform: 'translate(-50%, 43px) rotate(' + evaluationRatio + 'deg)'}}
                />
                <img src={gauge} className='gauge' alt='gauge'/>
            </div>
            <div className='evaluation-buttons'>
                <div onClick={() => setUserEvaluation(id, 'dislike')} className='dislike'>
                    <img src={thumbDown} className='thumb' alt='thumb down'/>
                </div>
                <div onClick={() => setUserEvaluation(id, 'like')} className='like'>
                    <img src={thumbUp} className='thumb' alt='thumb up'/>
                </div>
            </div>
            <div className='evaluation-count'>
                <p>{countDislikes} dislikes</p>
                <p>{countLikes} likes</p>
            </div>
            <div className='evaluation-user'>
                {evaluation === 'like' ?
                    <span className='evaluation-like'>Vous avez liké ce film</span> :
                    evaluation === 'dislike' ?
                        <span className='evaluation-dislike'>Vous avez disliké ce film</span> :
                        <span></span>
                }
            </div>
        </div>
    )
}

Movie.propTypes = {
    deleteMovie: PropTypes.func.isRequired,
    setUserEvaluation: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    evaluation: PropTypes.string
}

export default Movie