import { h } from 'preact'
import Artwork from '../artwork/Artwork'
import ShareButton from '../button/ShareButton'
import PlayButton from '../playbutton/PlayButton'
import BedtimeScrubber from '../scrubber/BedtimeScrubber'
import Titles from '../titles/Titles'
import Card from '../card/Card'

import styles from './TrackPlayerCard.module.css'

// TODO: move this important into a shared thingy
import cardStyles from '../collection/CollectionPlayerCard.module.css'
import { Flavor } from '../pausedpopover/PausePopover'

// TODO: props
// interface TrackPlayerCardProps {
//   title: string
//   mediaKey: number
//   artistName: string
//   handle: string
//   trackURL: string
//   playingState: PlayingState
//   albumArtURL: string
//   isVerified: boolean
//   position: number
//   duration: number
//   backgroundColor: string

//   seekTo: (location: number) => void
//   onTogglePlay: () => void
//   onShare: () => void
// }

const TrackPlayerCard = ({
  title,
  mediaKey,
  handle,
  artistName,
  trackURL,
  playingState,
  onTogglePlay,
  albumArtURL,
  isVerified,
  position,
  duration,
  seekTo,
  backgroundColor,
  isTwitter,
  onAfterPause
}) => {

  if (!backgroundColor) return null

  // TODO: Figure out what media key should be for the scrubber
  return (
    <Card
      isTwitter={isTwitter}
      backgroundColor={backgroundColor}
      twitterURL={trackURL}
    >
      <div className={styles.paddingContainer}>
        <div className={styles.artworkWrapper}>
          <Artwork
            onClickURL={trackURL}
            artworkURL={albumArtURL}
            className={styles.artworkStyle}
            displayHoverPlayButton={true}
            onAfterPause={onAfterPause}
            onTogglePlay={onTogglePlay}
            playingState={playingState}
            iconColor={backgroundColor}
          />
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.scrubber}>
            <BedtimeScrubber
              duration={duration}
              elapsedSeconds={position}
              mediaKey={`${mediaKey}`}
              playingState={playingState}
              seekTo={seekTo}
            />
          </div>
          <div className={styles.bottomSection}>
            <PlayButton
              onTogglePlay={onTogglePlay}
              playingState={playingState}
              iconColor={backgroundColor}
              className={styles.playButton}
              onAfterPause={onAfterPause}
            />
            <Titles
              artistName={artistName}
              handle={handle}
              isVerified={isVerified}
              title={title}
              titleUrl={trackURL}
            />
            <div className={styles.shareWrapper}>
              <ShareButton
                url={trackURL}
                creator={artistName}
                title={title}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TrackPlayerCard