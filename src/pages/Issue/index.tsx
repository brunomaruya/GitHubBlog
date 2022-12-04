import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import {
  ArrowUpRight,
  Calendar,
  CaretLeft,
  ChatDots,
  GithubLogo,
} from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import api from '../../api/github'
import {
  IssueBodyContainer,
  IssueHeaderContainer,
  IssuePageContainer,
} from './styles'

interface IIssue {
  title: string
  comments: string
  html_url: string
  body: string
}

interface IUser {
  login: string
}

export const Issue: React.FC = () => {
  const { issueNumber } = useParams()
  const [issue, setIssue] = useState<IIssue>(Object)
  const [user, setUser] = useState<IUser>(Object)

  const [day, setDay] = useState<number>()
  const [month, setmonth] = useState<number>(Number)
  const [year, setyear] = useState<number>(Number)
  const [hours, sethours] = useState<number>()
  const [min, setmin] = useState<number>()
  const [sec, setsec] = useState<number>()

  useEffect(() => {
    const fetchGitHubIssuePage = async () => {
      try {
        const response = await api.get(
          `/repos/brunomaruya/GitHubBlog/issues/${issueNumber}`,
        )
        setIssue(response.data)
        setUser(response.data.user)
        const date = new Date(response.data.created_at)

        setDay(date.getDate())
        setmonth(date.getMonth())
        setyear(date.getFullYear())
        sethours(date.getHours())
        setmin(date.getMinutes())
        setsec(date.getSeconds())
      } catch (error) {
        console.log(error)
      }
    }
    fetchGitHubIssuePage()
  }, [])

  return (
    <IssuePageContainer>
      <IssueHeaderContainer>
        <span>
          <span>
            <Link to="/">
              <CaretLeft />
              VOLTAR
            </Link>
          </span>
          <span>
            <a href={issue.html_url}>
              VER NO GITHUB <ArrowUpRight />
            </a>
          </span>
        </span>

        <h1>{issue.title}</h1>

        <ul>
          <li>
            <GithubLogo />
            {issue ? user.login : 'not loaded yet'}
          </li>

          <li>
            <Calendar />
            {year > 0
              ? formatDistanceToNow(new Date(year, month, day, hours, min, sec))
              : 'not loaded'}
          </li>

          <li>
            <ChatDots /> {issue.comments}
          </li>
        </ul>
      </IssueHeaderContainer>
      <IssueBodyContainer>{issue.body}</IssueBodyContainer>
    </IssuePageContainer>
  )
}
