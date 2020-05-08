import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import axios from 'axios'
import {listMoviesThunk} from '../store/allMoviesReducer'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AllMovies extends React.Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const listOfAllMovies = this.props.movies
    console.log('!!!!!', listOfAllMovies)
    return (
      <div>
        <h1>Movies</h1>
        {listOfAllMovies
          ? listOfAllMovies.map(movies => {
              return (
                <div key={movies.id}>
                  <h2>{movies.name}</h2>
                  <h3>{movies.genre}</h3>
                  <img src={movies.imageUrl} />
                  <p>{movies.description}</p>
                  <p>{movies.rating}</p>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

const mapState = state => ({
  movies: state.movieList
})

const mapDispatch = dispatch => ({
  getMovies: () => dispatch(listMoviesThunk())
})

export default connect(mapState, mapDispatch)(AllMovies)
