import {formatDistanceToNow} from 'date-fns'

import {
  LinkContainer,
  ThumnbNailImg,
  ListItem,
  VideDataContainer,
  ChannelLogo,
  DataContainer,
  NameOfChannel,
  TitleOfTheItem,
  NoOfViewsAndDuration,
  ViesAndDurationContainer,
  SpanEl,
  DataContainerSm,
} from './styledComponents'

const VideoItem = props => {
  const {videoData, isDark} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  const {name, profileImageUrl} = channel
  const getDistance = () => {
    const distance = formatDistanceToNow(new Date(publishedAt))
    const years = distance.split(' ')[1]
    return years
  }
  return (
    <LinkContainer to={`/videos/${id}`}>
      <ListItem>
        <ThumnbNailImg src={thumbnailUrl} alt="video thumbnail" />
        <VideDataContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <DataContainer>
            <TitleOfTheItem isDark={isDark}>{title}</TitleOfTheItem>
            <NameOfChannel isDark={isDark}>{name}</NameOfChannel>
            <ViesAndDurationContainer>
              <NoOfViewsAndDuration isDark={isDark}>
                {viewCount} views
              </NoOfViewsAndDuration>
              <SpanEl isDark={isDark}>.</SpanEl>
              <NoOfViewsAndDuration isDark={isDark}>
                {getDistance()} years ago
              </NoOfViewsAndDuration>
            </ViesAndDurationContainer>
          </DataContainer>
          <DataContainerSm>
            <TitleOfTheItem isDark={isDark}>{title}</TitleOfTheItem>
            <ViesAndDurationContainer>
              <NameOfChannel isDark={isDark}>{name}</NameOfChannel>
              <SpanEl isDark={isDark}>.</SpanEl>
              <NoOfViewsAndDuration isDark={isDark}>
                {viewCount} views
              </NoOfViewsAndDuration>
              <SpanEl isDark={isDark}>.</SpanEl>
              <NoOfViewsAndDuration isDark={isDark}>
                {getDistance()} years ago
              </NoOfViewsAndDuration>
            </ViesAndDurationContainer>
          </DataContainerSm>
        </VideDataContainer>
      </ListItem>
    </LinkContainer>
  )
}
export default VideoItem
