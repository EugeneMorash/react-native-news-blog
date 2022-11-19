import React from 'react'
import {Alert, FlatList, RefreshControl, TouchableOpacity, View} from 'react-native'
import {Post} from "../components/Post";
import axios from "axios";
import {Loading} from "../components/Loading";

export const HomeScreen = ({navigation}) => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [items, setItems] = React.useState();

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://api.spaceflightnewsapi.net/v3/articles')
            .then(({data}) => {
                setItems(data)
                console.log(data)
            }).catch((err) => {
            console.log(err);
            Alert.alert('Error', 'Server error')
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(fetchPosts, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id, title: item.title})}>
                        <Post
                            title={item.title}
                            imageUrl={item.imageUrl}
                            updatedAt={item.updatedAt}
                        />
                    </TouchableOpacity>
                )}/>
        </View>
    )
}