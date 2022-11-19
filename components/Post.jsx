import styled from 'styled-components/native'
import {StatusBar, View} from "react-native";


const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
const PostImage = styled.Image`
  width: 68px;
  height: 50px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
    if (str.length >= 50) {
        return str.substring(0, 50) + '...';
    }
    return str;
}

export const Post = ({title, imageUrl, createdAt}) => {
    return (
        <View>
            <PostView>
                <PostImage source={{uri: imageUrl}}/>
                <PostDetails>
                    <PostTitle>{truncateTitle(title)}</PostTitle>
                    <PostDate>{new Date(createdAt).toLocaleString()}</PostDate>
                    {/*date-fns => format*/}
                </PostDetails>
            </PostView>
            <StatusBar theme='auto'/>
        </View>
    )
}