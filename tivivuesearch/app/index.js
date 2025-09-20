import { Text, ActivityIndicator, View, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image, TVFocusGuideView, TouchableHighlight  } from "react-native";
import React, { useState, useEffect, useRef} from 'react';
import SearchBar from '../components/SearchBar';
import Keyboard from "../components/Keyboard";
import { getAllLiveStreams, getAllSeries, getAllMovies } from "../api/api";
import debounce from 'lodash.debounce';


export default function SearchPage() {
  
  const tvSearch = useRef();
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);
  const [movies, setMovies] = useState([]);
  const [liveStreams, setLiveStreams] = useState([]);
  const [showTvMovies, setShowTvMovies] = useState(true);
  const [showLiveChannels, setShowLiveChannels] = useState(false);

    function toggleTvSeriesButton() {
      setShowLiveChannels(false);
      setShowTvMovies(true);
    }
    function toggleLiveChannelsButton() {
      setShowLiveChannels(true);
      setShowTvMovies(false);
    }
    const updateSearchbarDeb = debounce((keyPressed) => {
      if(keyPressed === 'CLEAR'){
            setQuery('');
        } 
        else if(keyPressed === 'SPACE'){
            setQuery(query + ' ');
        }else if(keyPressed === 'DELETE'){
          setQuery(query.substring(0, (query.length - 1)));
        }else{
            setQuery(query + keyPressed);
        }


    }, 1000);


    useEffect(() => {
      const fetchSeries = async () => {

        const result = await getAllSeries();
        setSeries(result);
        setLoading(false);

      };

    fetchSeries();
    }, []);

    useEffect(() => {
      const fetchMovies = async () => {

        const result = await getAllMovies();
        setMovies(result);
        setLoading(false);

      };

    fetchMovies();
    }, []);
    
    useEffect(() => {
      const fetchLiveStreams = async () => {

        const result = await getAllLiveStreams();
        setLiveStreams(result);
        setLoading(false);

      };

    fetchLiveStreams();
    }, []);

    const [query, setQuery] = useState('');
   
    const renderSeriesItem = React.useCallback(({ item }) => (
      <View style={styles.card}>
         { <Image 
          style={styles.TvMovieListStyle}
          source={ item.cover ? {uri: item.cover} : require('../assets/images/icon.png') }
          onError={(e) => console.log('series Image failed to load:', item.cover, e.nativeEvent)}
          />
         }
         <TouchableOpacity>
          <Text style={styles.itemTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    ), []);

    const renderMovieItem = React.useCallback(({ item }) => (
      <View style={styles.card}>
         { <Image 
          style={styles.TvMovieListStyle}
          source={ item.stream_icon ? {uri: item.stream_icon} : require('../assets/images/icon.png') }
          onError={(e) => console.log('live Image failed to load:', item.stream_icon, e.nativeEvent)}
          />
         }
         <TouchableOpacity>
          <Text style={styles.itemTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    ), []);

    const renderLiveItem = React.useCallback(({ item }) => (
      <View style={styles.card}>
         { <Image 
          style={styles.liveItemStyle}
          source={ item.stream_icon ? {uri: item.stream_icon} : require('../assets/images/icon.png') }
          onError={(e) => console.log('live Image failed to load:', item.stream_icon, e.nativeEvent)}
          />
         }
         <TouchableOpacity>
          <Text style={styles.itemTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    ), []);
    
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View  style={styles.SearchBarContainer}>
                    <View style ={styles.KeyBoardStyle}>
                        <Keyboard KeyFunction={updateSearchbarDeb} />
                    </View>
                    <View style ={styles.GenreStyle}></View>
                </View>

                <View style={styles.resultContainer}>
                    <View autoFocus style ={styles.SearchbarStyle}>
                        <SearchBar
                            value={query}
                            onChangeText={setQuery}
                        />
                    </View>
                    <TVFocusGuideView autoFocus>
                      <View style={styles.ChannelStyle}>
                        <TouchableHighlight activeOpacity={0.4} onPress={toggleTvSeriesButton} ref={tvSearch}>
                          <Text style={[styles.TextStyle, showTvMovies ? styles.buttonPressed : styles.TextStyle, {fontSize: 50}]}>TV Series & Movies</Text>
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.4} onPress={toggleLiveChannelsButton}>
                          < Text style={[styles.TextStyle, showLiveChannels ? styles.buttonPressed : styles.TextStyle, {fontSize: 50}]}>Live Channels</Text> 
                        </TouchableHighlight>
                      </View>
                    </TVFocusGuideView>
                    <TVFocusGuideView autoFocus style ={styles.MovieResultStyle}>
                      { showTvMovies && <ScrollView>
                      <Text style={styles.TextStyle}>TV Shows</Text> 
                      {loading ? (
                        <ActivityIndicator/>
                      ) : (
                      <FlatList
                        style={{height: 500}}
                        horizontal
                        initialNumToRender={7}
                        ListEmptyComponent={() => <Text style={styles.TextStyle}>No Results Found</Text>}
                        data={series.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))}
                        keyExtractor={(item) => item.series_id}
                        renderItem= {renderSeriesItem}
                        />
                      ) }
                      <Text style={styles.TextStyle}>Movies</Text> 
                      {loading ? (
                        <ActivityIndicator/>
                      ) : (
                      <FlatList
                        style={{height: 500}}
                        horizontal
                        ListEmptyComponent={() => <Text style={styles.TextStyle}>No Results Found</Text>}
                        data={movies.filter(item => typeof item.title === 'string' && item.title.toLowerCase().includes(query.toLowerCase()))}
                        keyExtractor={(item) => item.stream_id}
                        renderItem= {renderMovieItem}
                        />
                      ) }
                      </ScrollView> }
                      {loading ? (
                        <ActivityIndicator/>
                      ) : (
                       showLiveChannels && <FlatList
                        numColumns={4}
                        key={Math.random().toString()}
                        ListEmptyComponent={() => <Text style={styles.TextStyle}>No Results Found</Text>}
                        data={liveStreams.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))}
                        keyExtractor={(item) => item.stream_id.toString()}
                        renderItem= {renderLiveItem}
                        />
                      )}
                    </TVFocusGuideView>
                    
                </View>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  main: {
    flex: 1, 
    backgroundColor: 'black'
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 2,
    
  },
  SearchBarContainer: {
    display: 'flex',
    flex:1,
    borderWidth: 1,
   

  },
  resultContainer: {
    flex: 2,
    borderWidth: 1,
    
  },
  MovieResultStyle: {
    flex: 4,
    borderWidth: 1,
    
  },

  SearchbarStyle: {
    flex: 0.5,
    justifyContent: 'center',
    borderWidth: 1,
    
  },
  KeyBoardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:2,
    paddingTop: 15
  },
  GenreStyle: {
    paddingTop:100,
    paddingLeft: 50,
    flex:2,
  },
  TextStyle: {
    padding: 20,
    paddingLeft: 25,
    color: 'white',
    fontSize: 45,

  },
  card: {
    
    height: 350,
    width: 270,
    margin: 20,
    borderWidth: 1,
  },

  ChannelStyle: {
    display: 'flex',
    flexDirection: 'row',
  },

  buttonPressed: {
    textDecorationLine: 'underline'
  },
  TvMovieListStyle :{
    width: 270, 
    height:400, 
    resizeMode: 'cover'
  },
  liveItemStyle :{
    width: 270, 
    height: 300, 
    resizeMode:'contain' 
  },
  itemTextStyle : {
    fontSize: 30, 
    color: 'white'
  }


})