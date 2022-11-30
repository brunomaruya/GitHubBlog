import {
  HomeContainer,
  IssueContainer,
  IssuesContainer,
  IssuesWrapper,
  ProfileContainer,
} from './styles'
import api from '../../api/github'
import { useEffect, useState } from 'react'
import {
  AppWindow,
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [user, setUser] = useState({})
  const [issues, setIssues] = useState([])
  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const response = await api.get('/users/brunomaruya')
        setUser(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    const fetchGithubIssues = async () => {
      try {
        const response = await api.get(
          'search/issues?q=repo:brunomaruya/GitHubBlog',
        )
        setIssues(response.data.items)
        console.log(issues)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGithubIssues()
    fetchGithub()
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        {<img src={user.avatar_url} alt="" />}

        <div>
          <span>
            <h1>{user.name}</h1>
            <span>
              github <ArrowSquareOut color={'#3294f8'} />
            </span>
          </span>

          <p>{user.bio}</p>

          <ul>
            <li>
              <GithubLogo /> {user.login}
            </li>
            <li>
              <Buildings /> {user.company}
            </li>
            <li>
              <Users /> {user.followers} seguidores
            </li>
          </ul>
        </div>
      </ProfileContainer>

      <IssuesContainer>
        <div>
          <h1>Publicações</h1>
          <span>{user.public_repos} publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteudo" />

        <IssuesWrapper>
          {issues.map((issue) => {
            const date = new Date(issue.created_at)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            const hour = date.getHours()
            const min = date.getMinutes()
            const sec = date.getSeconds()
            console.log(date)
            console.log(day)
            // console.log('newdate' + new Date())
            // console.log('date' + new Date(year, month, day, hour, min, sec))
            return (
              <IssueContainer key={issue.id}>
                <div>
                  <h1>
                    <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
                  </h1>
                  <span>
                    {formatDistanceToNow(
                      new Date(year, month, day, hour, min, sec),
                    )}
                  </span>
                </div>

                <p>{issue.body ? issue.body : 'no description'}</p>
              </IssueContainer>
            )
          })}
        </IssuesWrapper>
      </IssuesContainer>
    </HomeContainer>
  )
}
