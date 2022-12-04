import {
  HomeContainer,
  IssueContainer,
  IssuesContainer,
  IssuesWrapper,
  ProfileContainer,
} from './styles'
import api from '../../api/github'
import React, { useEffect, useState } from 'react'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

import { formatDistanceToNow } from 'date-fns'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../../hook/useLocalStorage'

interface IUser {
  avatar_url: string
  name: string
  login: string
  company: string
  followers: number
  bio: string
  public_repos: number
  html_url: string
}

interface IIssue {
  id: number
  created_at: string
  number: number
  title: string
  body: string
}

export const Home = () => {
  const [user, setUser] = useState<IUser>(Object)
  const [issues, setIssues] = useState<IIssue[]>([])
  const [inputValue, setInputValue] = useLocalStorage('InputValue', '')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

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
        const apiTest = `search/issues?q=repo:brunomaruya/GitHubBlog`
        const response = await api.get(apiTest)
        console.log(apiTest)
        setIssues(response.data.items)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGithubIssues()
    fetchGithub()
  }, [inputValue])

  return (
    <HomeContainer>
      <ProfileContainer>
        {<img src={user.avatar_url} alt="" />}

        <div>
          <span>
            <h1>{user.name}</h1>
            <span>
              <a href={user.html_url}>
                github <ArrowSquareOut color={'#3294f8'} />
              </a>
            </span>
          </span>

          <p>{user.bio}</p>

          <ul>
            <li>
              <GithubLogo /> {user.login}
            </li>
            <li>
              <Buildings /> {user.company ? user.company : 'none'}
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

        <input
          type="text"
          placeholder="Buscar conteudo"
          onChange={handleChange}
          value={inputValue}
        />

        <IssuesWrapper>
          {issues
            .filter((issue) => inputValue == issue.title)
            .map((issue) => {
              const date = new Date(issue.created_at)
              const day = date.getDate()
              const month = date.getMonth()
              const year = date.getFullYear()
              const hour = date.getHours()
              const min = date.getMinutes()
              const sec = date.getSeconds()

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
