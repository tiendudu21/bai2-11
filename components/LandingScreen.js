import { Text, View, Image, Pressable } from 'react-native';

export default function Landingscreen({ navigation }) {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            flex: 1
        }}>
            <Image
                source={require('../assets/6.png')}
                style={{
                    width: 100,
                    height: 100,
                    marginBottom: 50
                }}
                resizeMode="contain"
            />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 30
            }}>
                Chao mung den voi cua hang rau xanh
            </Text>
            <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                fontSize: 16,
                marginBottom: 30
            }}>
                Dat do an chi voi 1 cu click
            </Text>
            <View style={{ width: '100%' }}>
                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        with: '100%',
                        height: 53,
                        borderRadius: 26.5,
                        backgroundColor: '#5EA33A',
                        textAlign: 'center',
                        marginBottom: 20,
                        color: '#fff'
                    }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 21,
                            fontWeight: 'bold',
                            letterSpacing: 0.25,
                            color: '#fff'
                        }}
                    >
                        Dang nhap
                    </Text>
                </Pressable>

                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        with: '100%',
                        height: 53,
                        borderRadius: 26.5,
                        textAlign: 'center',
                        marginBottom: 20,
                        borderWidth: 1,
                        borderColor: "#374b6d",
                    }}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{
                        fontSize: 16,
                        lineHeight: 21,
                        fontWeight: 'bold',
                        letterSpacing: 0.25,
                    }}
                    >
                        Dang ki
                    </Text>
                </Pressable>
            </View>
        </View >
    );
}