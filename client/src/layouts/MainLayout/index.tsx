import React from 'react';
import cn from 'classnames';
import styles from './mainLayout.module.css';

import Sidebar from '../../common/components/Header/Header';

export default function MainLayout() {
  return (
    <div className={cn(styles.appContainer)}>
      <Sidebar />
      <main className={cn(styles.appContainerContent)}>
        <div className={cn(styles.chats)}>
          chats
        </div>
        <div className={cn(styles.chatInfo)}>
          chatInfo
        </div>
      </main>

    </div>
  )
}
