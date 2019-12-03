import Axios from 'axios'
import { takeEvery, put, all } from 'redux-saga/effects'
import { FAVORITE_TEAMS, TEAMS, PLAYERS } from '../actions/types'

import { showAddFavoriteTeamNotification } from '../actions/favorite-teams-actions'
import { persistTeams } from '../actions/teams-actions'
import { persistPlayers } from '../actions/players-actions'

function* watchAddFavoriteTeam({ payload }) {
  yield put(showAddFavoriteTeamNotification(payload.name))
}

function* fetchTeams() {
  const config = {
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': 'd615ac8969mshcd7a7ed8dc7aa97p18c015jsn02ad9bd18e50',
    },
  }

  const response = yield Axios.get('https://free-nba.p.rapidapi.com/teams', config)
    .then(({ data: { data } }) => data)

  yield put(persistTeams(response))
}

function* fetchPlayers() {
  const responses = []
  let page = 1

  const config = {
    headers: {
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      'X-RapidAPI-Key': 'd615ac8969mshcd7a7ed8dc7aa97p18c015jsn02ad9bd18e50',
    },
  }

  let response = yield Axios.get(`https://free-nba.p.rapidapi.com/players/?page=${page}&per_page=100`, config)
    .then(({ data }) => data)

  response.data.map((p) => responses.push(p))
  const totalPages = response.meta.total_pages

  for (let i = 2; i <= totalPages; i += 1) {
    page = i
    response = yield Axios.get(`https://free-nba.p.rapidapi.com/players/?page=${page}&per_page=100`, config)
      .then(({ data }) => data)

    response.data.map((p) => responses.push(p))
  }

  yield put(persistPlayers(responses))
}

export default function* root() {
  yield all([
    takeEvery(FAVORITE_TEAMS.ADD, watchAddFavoriteTeam),
    takeEvery(TEAMS.FETCH, fetchTeams),
    takeEvery(PLAYERS.FETCH, fetchPlayers),
  ])
}
