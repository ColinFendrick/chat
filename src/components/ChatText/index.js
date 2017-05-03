import React from 'react'
import styles from './styles.scss'
import { observer } from 'mobx-react'
import store from '../../store'
import _ from 'lodash'

const ChatText = () => {
  const list = _.map(store.chat.items, ({ text, userColor, userChatColor }, key) => (
    <li key={key}>
      <p className={styles.userInfo}
        style={{color: `${userColor}`}}>
        {store.username}
        <img src={store.photo} />
      </p>
      <p style={{color: `${userChatColor}`}}>{text}</p>
    </li>
  ))

  return <ul className={styles.Chat}>
    {list}
  </ul>
}

export default observer(ChatText)
