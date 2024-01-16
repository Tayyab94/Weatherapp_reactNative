import { useEffect, useState } from "react"
import { StyleSheet, View, Text, Dimensions, } from "react-native"
import Spinner from 'react-native-loading-spinner-overlay';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const API_KEY = "1e6db11e86fd080628cea5a0121e4814"


const Weather = (props) => {



    const [weatherData, setWeatherData] = useState(null);

    const [loading, setLoading] = useState(false);
    const [weatherIcon, setWeatherIcon] = useState('');

    const getWeatherData = async (cityName) => {

        setLoading(true);
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

        let res = await fetch(API);

        if (res.status === 200) {
            res = await res.json()
            setWeatherData(res);
        }
        else {
            setWeatherData(null)
        }
        setLoading(false);
    }

    useEffect(() => {
        try {
            getWeatherData(props.cityName)
            if (weatherData !== null) {
                const iconObj = {
                    snow: <FontAwesome name="snowflake-o" size={48} color="black" />,
                    rain: <FontAwesome5 name="cloud-rain" size={48} color="black" />,
                    sun: <Feather name="sun" size={48} color="black" />,
                    haza: <Fontisto name="day-haze" size={48} color="black" />,
                    smoke: <MaterialCommunityIcons name="smoke" size={48} color="black" />
                }

                switch (weatherData.weather[0].main) {
                    case 'Snow':
                        setWeatherIcon(iconObj.snow);
                        break;
                    case 'Clear':
                        setWeatherIcon(iconObj.sun);
                        break;
                    case 'Rain':
                        setWeatherData(iconObj.rain);
                        break;
                    case 'Haze':
                        setWeatherIcon(iconObj.haza);
                        break;
                    case 'Smoke':
                        setWeatherIcon(iconObj.smoke);
                        break;
                    default:
                        setWeatherIcon(iconObj.sun)
                }
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }

    }, [props.cityName])

    if (props.cityName === '') {
        <View>
            <Text style={styles.apiNotFound}>Find Weather of City</Text>
        </View>
    }
    else if (weatherData === null) {
        return <>
            <View>
                <Text style={styles.apiNotFound}>Data Not Found</Text>
            </View>
        </>
    }
    else {
        return (
            <>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={{ color: '#FFF' }}
                />
                <View>
                    <View style={styles.background}></View>
                    <Text style={styles.deg}>
                        {Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32)}°
                    </Text>
                    <Text style={styles.cityName}>{weatherData.name}</Text>
                    <View style={styles.icon}>
                        <View>
                            <Text>
                                Humidity: {weatherData.main.humidity}
                            </Text>
                            <Text>Temp: {(weatherData.main.temp - 273.15) * 9 / 5 + 32}</Text>
                            <Text>Temp: {weatherData.weather[0].main}</Text>
                        </View>
                        <View>
                            <Text>
                                {weatherIcon}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }


}

export default Weather


const styles = StyleSheet.create({
    deg: {
        fontSize: 80,
        textAlign: "center",
        marginTop: '50%',
        color: "black",
        color: '#0047AB'
    },
    cityName: {
        textAlign: 'center',
        fontSize: 20,
        color: '#088F8F'
    },
    icon: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width - 50,
        height: '50%',
        alignItems: 'center'
    },
    apiNotFound: {
        fontSize: 50,
        textAlign: "center",
        marginTop: '50%',
        color: "red",
    },
    // background: {
    //     width: '87%',
    //     height: 150,
    //     backgroundColor: 'black',
    //     color: 'white',
    //     position: 'absolute',
    //     top: '26%',
    //     opacity: .5
    // }
})
