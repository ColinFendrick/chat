import React from 'react'
import styles from './styles.scss'
import { observer } from 'mobx-react'
import store from '../../store'
import _ from 'lodash'

const ChatText = () => {
  const list = _.map(store.chat.items, ({ text }, key) => (
    <li key={key}>
      {text}
    </li>
  ))

  return <ul className={styles.ChatText}>
    {list}
  </ul>
}

export default observer(ChatText)
