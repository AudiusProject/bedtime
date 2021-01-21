import { h } from 'preact'
import cn from 'classnames'

import PlayButton, { PlayingState } from '../playbutton/PlayButton'
import styles from './DeletedContentTiny.module.css'
import AudiusLogoGlyph from '../../assets/img/audiusLogoGlyph.svg'
import { getCopyableLink } from '../../util/shareUtil'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

const messages = {
  deleted: 'Track Deleted By Artist'
}

const DeletedContentTiny = ({
  onClick
}) => {
  return (
    <div
      className={styles.container}
      onClick={onClick}
    >
      <PlayButton
        playingState={PlayingState.Stopped}
        className={styles.playButton}
      />
      <div className={styles.info}>
        {messages.deleted}
      </div>
      <AudiusLogoGlyph
        className={styles.logo}
      />
    </div>
  )
}

export default DeletedContentTiny