import {View,Text,StyleSheet,Modal,Button,TextInput, Pressable,Animated} from "react-native"
import * as React from "react";
import { SimpleInput } from "./SimpleInput";
import { Palette } from "../../style/palette";
import { AparatIcon, ArrowIcon } from "../Svgs";



interface AddCardModalProps {
    text: string;
    buttonText:string;
    onClose: () => void;
    visible:boolean;
    shopData:string;
}

const AddCardModal = (props:AddCardModalProps) => {

    const {text, buttonText, onClose,visible,shopData} = props;
    const [shopName, setShopName] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [shopURL, setShopURL] = React.useState('');
    const [isValidShopName, setIsValidShopName] = React.useState(false);
    const [isValidCardNumber, setIsValidCardNumber] = React.useState(false);
    const [isValidShopURL, setIsValidShopURL] = React.useState(false);


    const shopNameChange = (val:string)=>{ 
        if(val.trim().length >= 4){
            setShopName(val);
            setIsValidShopName(true);
        }else{
            setShopName(val);
            setIsValidShopName(false);
        }
    }

    const cardNumberChange = (val:string)=>{ 
        if(val.trim().length >= 4){
            setCardNumber(val);
            setIsValidCardNumber(true);
        }else{
            setCardNumber(val);
            setIsValidCardNumber(false);
        }
    }
    const shopURLChange = (val:string)=>{ 
        if(val.trim().length >= 4){
            setShopURL(val);
            setIsValidShopURL(true);
        }else{
            setShopURL(val);
            setIsValidShopURL(false);
        }
    }

    const clearData = () => {
        setShopName('');
        setCardNumber('');
        setShopURL('');
        setIsValidCardNumber(false);
        setIsValidShopName(false);
        setIsValidShopURL(false);
        onClose();
    }

    const handleForm = () =>{
        if(isValidShopName && isValidCardNumber && isValidShopURL === true){
            console.log(shopData,shopName,cardNumber,shopURL);

        }else {
            console.log(isValidShopName);
            console.log(isValidCardNumber);
            console.log(isValidShopURL)
            console.log("Bad data")
        }
    }
return(

    <Modal visible={visible} transparent={true} >
        <View style={styles.modal}>
            <View style={styles.modalContentWrapper}>
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                    <View style={styles.arrowIcon}>
                        <Pressable onPress={()=>{clearData()}}>
                             <ArrowIcon/>
                             </Pressable>
                   
                    </View>
                   
                    <Text style={styles.headerText}>
                        {text}
                    </Text>
                    </View>
                    
                    
                    <View style={styles.inputs}>
                    <SimpleInput onChangeText={(val) => {shopNameChange(val)}} placeholder={"Shop name"} value={shopName} style={styles.input} inputTitle={"Shop name"}/>
                    {isValidShopName? null : <Animated.View>
                        <Text style={styles.errorText}>Shop name needs to be at least 4 characters long</Text>
                    </Animated.View>}
                    <View style={styles.middleInput}>
                    <SimpleInput onChangeText={(val) => {cardNumberChange(val)}} placeholder={"156829..."} value={cardNumber} style={styles.input} inputTitle={"Card number"} keyboardType={"numeric"}/>
                    <View style={styles.aparatCircle}>
                    <Pressable style={styles.aparatIcon} onPress={() => {console.log("icon click")}}>
                        <AparatIcon />
                    </Pressable>
                    </View>
                    
                    </View>
                    {isValidCardNumber? null : <Animated.View>
                        <Text style={styles.errorText}>Card number must consist of up to 9 numebers</Text>
                    </Animated.View>}
                    <SimpleInput onChangeText={(val) =>{shopURLChange(val)}} placeholder={"https://"} value={shopURL} style={styles.input} inputTitle={"Shop URL"} keyboardType={"url"}/>
                    {isValidShopURL? null : <Animated.View>
                        <Text style={styles.errorText}>Shop URL must be a URL</Text>
                    </Animated.View>}
                    </View>
                    <Pressable onPress={() => {handleForm()}} style={styles.button}>
                        <Text style={styles.buttonText}>
                            {buttonText}
                        </Text>
                    </Pressable>
             
                   
                    
                </View>
            </View>
        </View>
    </Modal>

);

};

const styles = StyleSheet.create({
    modal:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    modalContentWrapper:{

       height:500,
       marginVertical:"30%"
    },
    modalContent:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        borderRadius: 30,
        backgroundColor:"white",
        marginHorizontal:16,
        padding:16,

    },
    header:{
        width:"100%",
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:50,

    },
    headerText:{
       
        textAlign:"center",
        fontSize:22,
        fontWeight:"600",
    },
    inputs:{
        height:330,
        width:"95%",
    },
    input:{
        borderRadius:40,
        marginTop:15,
        height:70,
        backgroundColor:"rgba(43,69,112,0.85)",
        color:Palette.LightBlue,
        fontSize:15,
        paddingLeft:15,
    },
    middleInput:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    aparatCircle:{
        position:"absolute",
        top:25,
        right:15,
        backgroundColor:Palette.Fuchsia,
        borderRadius:25,
        height:50,
        width:50,

    },
    aparatIcon:{
        flex:1,
       alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
    },
    button:{

        alignItems: 'center',
        justifyContent: 'center',
        
        paddingHorizontal: 32,
        borderRadius: 25,
        backgroundColor:Palette.Fuchsia,
        width:"85%",
        height:50
    },
    buttonText:{

        color:Palette.LightBlue,
        fontSize:20,
        fontWeight:"500",
        paddingHorizontal:10
    },
    arrowIcon:{
        position:"absolute",
        left:10,
        top:10
    },
    errorText:{
        color:"red",
        fontSize:11,
    },
})

export default AddCardModal;